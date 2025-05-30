<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $password = htmlspecialchars(trim($_POST['password']));
    if ($name && $email && $password) {
        $_SESSION['name'] = $name;
        $_SESSION['email'] = $email;

        setcookie('remembered_email', $email, time() + (7 * 24 * 60 * 60));

        header('Location: profile.php');
        exit;
    } else {
        $error = "Усі поля обов'язкові!";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Реєстрація</title>
</head>
<body>
<h1>Реєстрація</h1>
<?php if (!empty($error)) echo "<p style='color:red;'>$error</p>"; ?>
<form method="post">
    Ім'я: <input type="text" name="name" required><br><br>
    Email: <input type="email" name="email" required><br><br>
    Пароль: <input type="password" name="password" required><br><br>
    <button type="submit">Зареєструватися</button>
</form>
</body>
</html>
