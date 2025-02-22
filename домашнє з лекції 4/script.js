//... завдання 1 ...

function greet(n){
    console.log("Привіт, " + n)
}
greet("Vladik batkovich")
console.log("--------------------------");






//... завдання 2 ...

function sum (a, b){
    console.log(a + " + " + b + " = ", (a + b))
}
sum(5, 7);
console.log("--------------------------");





//... завдання 3 ...

function squareArray(n){
    for(let i = n.length - n.length; i < n.length ; i++){
        a = n[i] ** 2
        console.log(a)
    }
}
squareArray([1, 2, 3, 4, 5]);
console.log("--------------------------");






//... завдання 4 ...

function calculate(a, b, c) {
    if (b == 0 && c == "/") {
        console.log("Ділення на нуль неможливе")
    } else{
        switch(c) {
            case "+":
                console.log(a + " + " + b + " = " + (a + b));
                break;
            case "-":
                console.log(a + " - " + b + " = " + (a - b));
                break;
            case "*":
                console.log(a + " * " + b + " = " + (a * b));
                break;
            case "/":
                console.log(a + " / " + b + " = " + (a / b));
                break;
            default:
                console.log("Ви ввели не математичну операцію!");
                break;
        }}
}
calculate(10, 5, "+");
calculate(10, 0, "/");
console.log("------------------------------------------------");






//... завдання 5 ...

function filterLongWords(array, n){
    let longWords = []
    for (let i = (array.length - array.length); i < array.length; i++) {
        let a = array[i]
        if (a.length > n){
            longWords.push(a);
        }
    }
    console.log(longWords);
}
filterLongWords(["яблуко", "банан", "ананас", "кіт", "сонце"], 5);











