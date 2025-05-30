<?php
session_start();

if (isset($_SESSION['name']) && isset($_SESSION['email'])) {
    header('Location: profile.php');
    exit;
} else {
    header('Location: register.php');
    exit;
}
?>
