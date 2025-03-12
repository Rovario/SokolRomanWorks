//... варіант 2


let calculationHistory = [];


function initCalculator() {

const savedHistory = localStorage.getItem('calculationHistory');

if (savedHistory) {
    try {
        calculationHistory = JSON.parse(savedHistory);
        console.log("Loaded history:", calculationHistory);
    } catch (e) {
        console.error("Error parsing history:", e);
        calculationHistory = [];
    }
}


displayHistory();
}

function calculate(operation) {
const num1Input = document.getElementById('num1').value;
const num2Input = document.getElementById('num2').value;
const resultElement = document.getElementById('result');


if (!validateInput(num1Input) || !validateInput(num2Input)) {
    resultElement.innerHTML = '<span class="error">Помилка: Введіть коректні числа</span>';
    return;
}

const num1 = parseFloat(num1Input);
const num2 = parseFloat(num2Input);
let result;
let error = false;
let operationText = '';

// Виконання відповідної операції
switch(operation) {
    case '+':
        result = num1 + num2;
        operationText = `${num1} + ${num2}`;
        break;
    case '-':
        result = num1 - num2;
        operationText = `${num1} - ${num2}`;
        break;
    case '*':
        result = num1 * num2;
        operationText = `${num1} × ${num2}`;
        break;
    case '/':
        if (num2 === 0) {
            resultElement.innerHTML = '<span class="error">Помилка: Ділення на нуль неможливе</span>';
            error = true;
        } else {
            result = num1 / num2;
            operationText = `${num1} ÷ ${num2}`;
        }
        break;
    case '%':
        result = num1 % num2;
        operationText = `${num1} % ${num2}`;
        break;
    case '^':
        result = Math.pow(num1, num2);
        operationText = `${num1} ^ ${num2}`;
        break;
}

if (!error) {
    const formattedResult = Number.isInteger(result) ? result : parseFloat(result.toFixed(4));
    
    resultElement.textContent = `${operationText} = ${formattedResult}`;
    
    addToHistory(`${operationText} = ${formattedResult}`);
}
}

function calculateRoot() {
const num1Input = document.getElementById('num1').value;
const resultElement = document.getElementById('result');


if (!validateInput(num1Input)) {
    resultElement.innerHTML = '<span class="error">Помилка: Введіть коректне число</span>';
    return;
}

const num1 = parseFloat(num1Input);

if (num1 < 0) {
    resultElement.innerHTML = '<span class="error">Помилка: Не можна обчислити корінь з від\'ємного числа</span>';
    return;
}

const result = Math.sqrt(num1);
const formattedResult = Number.isInteger(result) ? result : parseFloat(result.toFixed(4));
const operationText = `√${num1}`;

resultElement.textContent = `${operationText} = ${formattedResult}`;

addToHistory(`${operationText} = ${formattedResult}`);
}

function validateInput(input) {
return input !== "" && !isNaN(parseFloat(input)) && isFinite(input);
}

function clearInputs() {
document.getElementById('num1').value = '';
document.getElementById('num2').value = '';
document.getElementById('result').textContent = 'Результат буде відображено тут';
}

function addToHistory(calculation) {
console.log("Adding to history:", calculation);

calculationHistory.unshift(calculation);

if (calculationHistory.length > 20) {
    calculationHistory.pop();
}
try {
    localStorage.setItem('calculationHistory', JSON.stringify(calculationHistory));
    console.log("Saved history:", calculationHistory);
} catch (e) {
    console.error("Error saving history:", e);
}

displayHistory();
}

function displayHistory() {
const historyElement = document.getElementById('history');

historyElement.innerHTML = '';

console.log("Displaying history:", calculationHistory);

if (!calculationHistory || calculationHistory.length === 0) {
    historyElement.innerHTML = '<div class="history-item">Історія порожня</div>';
    return;
}

calculationHistory.forEach(item => {
    const historyItem = document.createElement('div');
    historyItem.className = 'history-item';
    historyItem.textContent = item;
    historyElement.appendChild(historyItem);
});
}

function clearHistory() {
calculationHistory = [];

localStorage.removeItem('calculationHistory');

displayHistory();

console.log("History cleared");
}

window.onload = initCalculator;

