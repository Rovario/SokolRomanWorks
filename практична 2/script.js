//...завдання 1 .....

function userage(){
    let age = Number(prompt("Введіть скільки вам років: "));
    if (age < 18) {
        alert("Вам заборонено вхід.")
    } else if (age >= 18 && age <= 65) {
        alert("Ласкаво просимо!")
    } else if (age > 65) {
        alert("Будь ласка, будьте обережні!")
    }
}

userage()
console.log("------------------------------------------------");






//...завдання 2 .....

function evenNumbers(n) {
    if (n > 1){
        for(let i = 2; i <= n; i += 2){
            console.log(i);
        }
    }
}

console.log(evenNumbers(Number(prompt("введіть будь яке число"))))
console.log("------------------------------------------------");





//...завдання 3 .....

function factorial(n){
  if (n === 0) {
    return 1;
  }
  let result = n;
  for (let i = n-1; i > 1; i--) {
    result *= i;
  }
  return result;
}

console.log(factorial(Number(prompt("введіть будь яке число для факторіалу"))));
console.log("------------------------------------------------");





//...завдання 4 .....

function calculator(a, b) {
    let operation = prompt("Введіть операцію для підрахунку: +, -, *, /")
    switch(operation) {
        case "+":
            alert(a + " + " + b + " = " + (a + b));
            break;
        case "-":
            alert(a + " - " + b + " = " + (a - b));
            break;
        case "*":
            alert(a + " * " + b + " = " + (a * b));
            break;
        case "/":
            alert(a + " / " + b + " = " + (a / b));
            break;
        default:
            alert("Ви ввели не математичну операцію!");
            break;
    }
}

let a = Number(prompt("Введіть перше число для підрахунку"));
let b = Number(prompt("Введіть друге число для підрахунку"));
console.log(calculator(a, b));
console.log("------------------------------------------------");






//...завдання 5 .....

function randNumber() {

    let n = (Math.floor(Math.random() * 100) + 1)
    let numGuessed = false;
    do {
        let a = Number(prompt("Вгадайте число між 0 і 100"));
        if (a === n) {
            alert("Вітаємо, ви вгадали число!");
            numGuessed = true;
        } else if (a < n) {
            alert("Загадане число більше");
        } else if (a > n) {
            alert("Загадане число менше")
        }
    } while (!numGuessed) {}
}

randNumber()









