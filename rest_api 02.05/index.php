<?php
header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];
$request = trim($_SERVER['REQUEST_URI'], '/');
$segments = explode('/', $request);


if ($segments[0] !== 'users') {
    http_response_code(404);
    echo json_encode(['error' => 'Not Found']);
    exit;
}

$id = $segments[1] ?? null;

$dataFile = __DIR__ . '/users.json';

function loadUsers($file) {
    if (!file_exists($file)) return [];
    $json = file_get_contents($file);
    return json_decode($json, true) ?: [];
}

function saveUsers($file, $users) {
    file_put_contents($file, json_encode($users, JSON_PRETTY_PRINT));
}

$users = loadUsers($dataFile);

switch ($method) {
    case 'GET':
        if ($id === null) {
            echo json_encode($users);
        } else {
            foreach ($users as $user) {
                if ($user['id'] == $id) {
                    echo json_encode($user);
                    exit;
                }
            }
            http_response_code(404);
            echo json_encode(['error' => 'User not found']);
        }
        break;

    case 'POST':
        $input = json_decode(file_get_contents('php://input'), true);
        if (!isset($input['name']) || !isset($input['email'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Name and email required']);
            exit;
        }
        $newId = count($users) > 0 ? max(array_column($users, 'id')) + 1 : 1;
        $newUser = [
            'id' => $newId,
            'name' => $input['name'],
            'email' => $input['email']
        ];
        $users[] = $newUser;
        saveUsers($dataFile, $users);
        http_response_code(201);
        echo json_encode($newUser);
        break;

    case 'PUT':
        if ($id === null) {
            http_response_code(400);
            echo json_encode(['error' => 'User ID required']);
            exit;
        }
        $input = json_decode(file_get_contents('php://input'), true);
        $found = false;
        foreach ($users as &$user) {
            if ($user['id'] == $id) {
                if (isset($input['name'])) $user['name'] = $input['name'];
                if (isset($input['email'])) $user['email'] = $input['email'];
                $found = true;
                break;
            }
        }
        if (!$found) {
            http_response_code(404);
            echo json_encode(['error' => 'User not found']);
            exit;
        }
        saveUsers($dataFile, $users);
        echo json_encode($user);
        break;

    case 'DELETE':
        if ($id === null) {
            http_response_code(400);
            echo json_encode(['error' => 'User ID required']);
            exit;
        }
        $found = false;
        foreach ($users as $key => $user) {
            if ($user['id'] == $id) {
                unset($users[$key]);
                $found = true;
                break;
            }
        }
        if (!$found) {
            http_response_code(404);
            echo json_encode(['error' => 'User not found']);
            exit;
        }
        $users = array_values($users);
        saveUsers($dataFile, $users);
        echo json_encode(['message' => 'User deleted']);
        break;

    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
        break;
}
