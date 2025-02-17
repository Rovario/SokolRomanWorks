//... Завдання 1 ...

let intNumber = 42;
let floatNumber = 14.88;
let strText = "killme";
let booleanValue = true;

intNumber = 52;
floatNumber = 7.22;
strText = "nuda";
booleanValue = false;

console.log("integerNumber:", intNumber, "Тип:", typeof intNumber); 
console.log("floatNumber:", floatNumber, "Тип:", typeof floatNumber); 
console.log("stringText:", strText, "Тип:", typeof strText); 
console.log("booleanValue:", booleanValue, "Тип:", typeof booleanValue); 

let numAsStr = String(intNumber);
let strAsNum = Number(strText); 
let booleanAsNum = Number(booleanValue);

console.log("numberAsString:", numAsStr, "Тип:", typeof numAsStr); 
console.log("stringAsNumber:", strAsNum, "Тип:", typeof strAsNum);
console.log("booleanAsNumber:", booleanAsNum, "Тип:", typeof booleanAsNum); 

let concatenatedValue = intNumber + strText;
console.log("concatenatedValue:", concatenatedValue, "Тип:", typeof concatenatedValue); 


let trueAsNum = Number(true); 
let falseAsNum = Number(false); 

console.log("trueAsNumber:", trueAsNum, "Тип:", typeof trueAsNum);
console.log("falseAsNumber:", falseAsNum, "Тип:", typeof falseAsNum); 

let mixedObject = {
  integer: intNumber,
  float: floatNumber,
  string: strText,
  boolean: booleanValue
};

console.log("Об’єкт у вигляді JSON:", JSON.stringify(mixedObject));

console.log("-----------------------------------------------------------")




//... Завдання 2 ...

let num1 = Number(prompt("Enter the number 1:"));
let num2 = Number(prompt("Enter the number 2:"));
let num3 = Number(prompt("Enter the number 3:"));

let average = (num1 + num2 + num3) / 3;
console.log("average number: ", average)


let module1 = Math.abs(num1);
let module2 = Math.abs(num2);
let module3 = Math.abs(num3);
console.log("module1: ", module1)
console.log("module2: ", module2)
console.log("module3: ", module3)

let ceil1 = (Math.ceil(num1))
let ceil2 = (Math.ceil(num2))
let ceil3 = (Math.ceil(num3))
console.log("ceil1: ", ceil1)
console.log("ceil2: ", ceil2)
console.log("ceil3: ", ceil3)

let floor1 = (Math.floor(num1))
let floor2 = (Math.floor(num2))
let floor3 = (Math.floor(num3))
console.log("floor1: ", floor1)
console.log("floor2: ", floor2)
console.log("floor3: ", floor3)

let pow1 = (Math.pow(num1, 2))
let pow2 = (Math.pow(num2, 2))
let pow3 = (Math.pow(num3, 2))
console.log("pow1: ", pow1)
console.log("pow2: ", pow2)
console.log("pow3: ", pow3)


if (num1 % 5 === 0) {
	console.log("num1 is divided without remainder by 5")
} else {
	console.log("num1 is not divided without remainder by 5")
}

if (num2 % 5 === 0) {
	console.log("num2 is divided without remainder by 5")
} else {
	console.log("num2 is not divided without remainder by 5")
}

if (num3 % 5 === 0) {
	console.log("num3 is divided without remainder by 5")
} else {
	console.log("num3 is not divided without remainder by 5")
}


let istriangle1 = false
let istriangle2 = false
let istriangle3 = false

if ((num1 + num2) > num3) {
	istriangle1 = true
}
if ((num1 + num3) > num2) {
	istriangle2 = true
}
if ((num2 + num3) > num1) {
	istriangle3 = true
}

if (istriangle1 === true && istriangle2 === true && istriangle3 === true) {
	console.log("a triangle CAN exist with given lengths of sides")
} else {
	console.log("a triangle CAN'T exist with given lengths of sides")
}

console.log("-----------------------------------------------------------")




//... Завдання 3 ...

let num4 = Number(prompt("Enter the number 1:"));
let num5 = Number(prompt("Enter the number 2:"));
let num6 = Number(prompt("Enter the number 3:"));

if (num4 > num5 && num4 > num6) {
	console.log("Biggest number 1: ", num4)
}
if (num5 > num4 && num5 > num6) {
	console.log("Biggest number 2: ", num5)
}
if (num6 > num5 && num6 > num4) {
	console.log("Biggest number 3: ", num6)
}

if (num4 < num5 && num4 < num6) {
	console.log("Lowest number 1: ", num4)
}
if (num5 < num4 && num5 < num6) {
	console.log("Lowest number 2: ", num5)
}
if (num6 < num5 && num6 < num4) {
	console.log("Lowest number 3: ", num6)
}


if (num4 % 2 === 0 || num5 % 2 === 0 || num6 % 2 === 0) {
	console.log("one of the numbers is EVEN");
} else {
	console.log("there is no EVEN numbers");
}

if (num4 > num5 && num5 < num6) {
	console.log(true);
} else {
	console.log(false)
}


if (num4 <= 1){
    console.log("number 1 is NOT S1MPLE");
  }
  for (let i = 2; i <= Math.sqrt(num4); i++) {
    if (num4 % i === 0) {
      console.log("number 1 is NOT S1MPLE");
    }
  }
  console.log("number 1 is S1MPLE");

if (num5 <= 1){
    console.log("number 2 is NOT S1MPLE");
  }
  for (let i = 2; i <= Math.sqrt(num5); i++) {
    if (num5 % i === 0) {
      console.log("number 2 is NOT S1MPLE");
    }
  }
  console.log("number 2 is S1MPLE");

if (num6 <= 1){
    console.log("number 3 is NOT S1MPLE");
  }
  for (let i = 2; i <= Math.sqrt(num6); i++) {
    if (num6 % i === 0) {
      console.log("number 3 is NOT S1MPLE");
    }
  }
  console.log("number 3 is S1MPLE");

console.log("-----------------------------------------------------------")


//... Завдання 4 ...

let name = (prompt("Enter your name:"));
let year = Number(prompt("Enter your year of birth:"));
let city = (prompt("Enter your city of residence:"));

let todaysYear = 2025;
let age = (todaysYear - year)
console.log("Your age is: ", age);

if (age <= 9) {
	console.log("You is a child");
} else if (age >= 10 && age <= 19) { 
	console.log("You is a teenager");
} else if (age >= 20 && age <= 60) {
	console.log("You is adult");
} else if (age >= 61) {
	console.log("You is old");
}

let capital = "Kyiv"
if (city === capital) {
	console.log("Your city is the capital of Ukraine")
} else {
	console.log("Your city is NOT the capital of Ukraine")
}













