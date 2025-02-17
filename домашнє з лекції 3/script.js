
//... завдання 1 ...

 for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

console.log("--------------------------");





//... завдання 2 ...

function isPrime(n){
  if (n <= 1){
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

console.log(isPrime(5));

console.log("--------------------------");






//... Завдання 3 ...

let f = 52;
for (let i = 1; i <= 10; i++){
  console.log(f + "*" + i + "=" + (f * i))
}

console.log("--------------------------");





//... Завдання 4 ...

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

console.log(factorial(5));

console.log("--------------------------");





//... Завдання 5 ...

function maxmin() {
  let nums = [1, 0, 53, 52, 6, 21, -24, 9];
  let max = nums[0];
  let min = nums[0];
  for (let i = nums.length - 1; i > 0; i--) {
    if (max < nums[i]) {
      max = nums[i]
    }
  }
  
  for (let i = nums.length - 1; i > 0; i--) {
    if (min > nums[i]) {
      min = nums[i]
    }
  }
  console.log("Максимальне значення: ", max)
  console.log("Мінімальне значення: ", min)
}
console.log(maxmin())








