<?php
// завдання 1
$banana = 15;
$apple = 500;
$minon = 52;
$totalcost = $banana + $apple + $minon;

echo "ціна всіх товарів ";
echo $totalcost;


// завдання 2
$films = array("the boys", "breaking bad", "dexter", "fight club", "pono snegra");

foreach ($films as $value) {
    echo "<br> $value";
};


// завдання 3
$user = array("login"=>"kokichambos", "password"=>"griztKakashki52", "email"=>"KakashkiMenivKarmashki@gmail.com",);
echo "<br>";
echo $user["login"];
echo "<br>";
echo $user["password"];
echo "<br>";
echo $user["email"];
echo "<br>";

print_r($user);


// завдання 4
if ($totalcost > 500) {
    echo "<br> вам надається знижка " , $totalcost * 0.1  , " грн ";
    echo "<br> загальна сума складає " , $totalcost - ($totalcost * 0.1) , " грн";
}


// завдання 5
$rLogin = "kakichambos";
$rPassword = "griztKakashki52";
if ($user["login"] == $rLogin) {
    echo "<br> логін правильниq";
} else {
    echo "<br> логін НЕ правильний";
}

if ($user["password"] == $rPassword) {
    echo "<br> пароль правильний";
} else {
    echo "<br> пароль НЕ правильний";
}












?>

