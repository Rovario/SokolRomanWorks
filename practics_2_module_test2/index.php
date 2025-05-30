<?php
$file = 'guestbook.txt';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name'] ?? '');
    $message = trim($_POST['message'] ?? '');

    if (!empty($message)) {
        $name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
        $message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

        $datetime = date('Y-m-d H:i:s');

        $entry = "$datetime | $name | $message\n";

        file_put_contents($file, $entry, FILE_APPEND);
    }
}

$entries = [];
if (file_exists($file)) {
    $lines = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    $entries = array_slice(array_reverse($lines), 0, 5);
}
?>

<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Гостьова книга</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        form { margin-bottom: 20px; }
        input, textarea { width: 100%; padding: 8px; margin-top: 5px; }
        .entry { border-bottom: 1px solid #ccc; padding: 10px 0; }
    </style>
</head>
<body>

<h2>Гостьова книга</h2>

<form method="post" action="">
    <label>Ім’я:
        <input type="text" name="name">
    </label><br><br>
    <label>Повідомлення:
        <textarea name="message" rows="4" required></textarea>
    </label><br><br>
    <button type="submit">Надіслати</button>
</form>

<h3>Останні повідомлення:</h3>

<?php if (empty($entries)): ?>
    <p>Немає повідомлень.</p>
<?php else: ?>
    <?php foreach ($entries as $entry): ?>
        <div class="entry"><?= nl2br($entry) ?></div>
    <?php endforeach; ?>
<?php endif; ?>

</body>
</html>
