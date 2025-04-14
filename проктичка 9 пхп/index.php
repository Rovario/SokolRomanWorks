
<form method='POST'> 
<p>Write the product</p>
<input type='input' name='action'><br>
<button name='button' type='submit'>bittonio</button>
</form> 



<?php

$technique = ['laptop', 'PC', 'phone', 'headphones'];
$products = ['banana', 'apple', 'nutella', 'beef'];
$furniture = ['chair', 'sofa', 'toilet', 'table'];
$categoryTree = [$technique, $products, $furniture];



function findCategory($tree, $name) {
  for ($x = 0; $x < count($tree); $x++) {
    for ($y = 0; $y < count($tree[$x]); $y++) {
      if ($name == $tree[$x][$y]) {
        if($x == 0) {$resultOk = 'TECHNIQUE';}
        if($x == 1) {$resultOk = 'PRODUCTS';}
        if($x == 2) {$resultOk = 'FURNITURE';}
        echo '<h4>Your product is in a category:</h4>';
        echo "<strong> $resultOk </strong> <br>";
        echo 'Also in this category are the following products:'. '<br>';
        print_r ($tree[$x]);
      }
    }
  }
  if (!$resultOk){
    echo 'Your product is not available on our market(';
  }
}



if (isset($_POST['button'])) {
    findCategory($categoryTree, $_POST['action']);
}



?>