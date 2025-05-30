<?php
session_start();

if (!isset($_SESSION['name']) || !isset($_SESSION['email'])) {
    header('Location: register.php');
    exit;
}

$name = $_SESSION['name'];
$email = $_SESSION['email'];
$cookie_email = $_COOKIE['remembered_email'] ?? 'немає';
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Профіль</title>
</head>
<body>
<h1>Ласкаво просимо, <?= htmlspecialchars($name) ?>!</h1>
<p>Ваш email: <?= htmlspecialchars($email) ?></p>
<p>Ваш email запам'ятали: <?= htmlspecialchars($cookie_email) ?></p>

<form method="post" action="logout.php">
    <button type="submit">Вийти</button>
</form>
</body>
</html>
