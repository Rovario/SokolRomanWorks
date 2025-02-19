//... Завдання 1 ...

var name = "Roma"
let age = 17
const text = "Краще пукнуть і прашло, ніж пукнуть і пашло"
console.log(name)
console.log(age)
console.log(text)

console.log("-----------------------------------------------------------")





//... Завдання 2 ...

let number = Number()
let string = String()
let boolean = Boolean()
let fundefined 
let fnull = null
let symbol = Symbol("symbol")
let bigint = BigInt(675894304857594328457403247598324739404)

console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);
console.log(typeof fundefined);
console.log(typeof fnull);
console.log(typeof symbol);
console.log(typeof bigint);

console.log("-----------------------------------------------------------")





//... Завдання 3 ...

let number1 = 5;
let number2 = 2;

console.log(number1 + number2)
console.log(number1 - number2)
console.log(number1 * number2)
console.log(number1 % number2)
console.log(number1 ** number2)

console.log("-----------------------------------------------------------")





//... Завдання 4 ...

let a = 10;
a += 5;
a *= 2;
let b = a > 25;
console.log(a);
console.log(b);

console.log("-----------------------------------------------------------")






//... Завдання 5 ...

let isAdult = false;
let hasPermission = true;
let accessMessage

if (isAdult || hasPermission) {
    accessMessage = "Доступ доволено!"
} else {
    accessMessage = "Доступ заборонено!"
}
console.log(accessMessage)

console.log("-----------------------------------------------------------")






//... Завдання 6 ...

let number3 = 10;
let string3 = "20"
console.log(number3 + string3)

let isEqualDouble = (number3 == string3); //... виконує приведення типів перед порівнянням
let isEqualTriple = (number3 === string3); //... порівнює значення без приведення типів

console.log(isEqualDouble);
console.log(isEqualTriple);

console.log("-----------------------------------------------------------")





//... Завдання 7 ...

function calculator(c, d, operation) {
    switch(operation) {
        case "+":
            console.log(c + " + " + d + " = " + (c + d));
            break;
        case "-":
            console.log(c + " - " + d + " = " + (c - d));
            break;
        case "*":
            console.log(c + " * " + d + " = " + (c * d));
            break;
        case "/":
            console.log(c + " / " + d + " = " + (c / d));
            break;
        default:
            console.log("Ви ввели не математичну операцію!");
            break;
    }
}

let c = 52
let d = 42
let operation = "*"
console.log(calculator(c, d, operation));









