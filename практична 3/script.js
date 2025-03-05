//... variant 1


let numbers = [9, 2, 7, 4, 5]
let average = 0;
for(let i = 0; i < numbers.length; i++){
    average =  average + numbers[i];
}
average = average / numbers.length;
console.log(numbers)
console.log("average: ", average)




function maxmin() {
    let max = numbers[0];
    let min = numbers[0];
    for (let i = numbers.length - 1; i > 0; i--) {
      if (max < numbers[i]) {
        max = numbers[i]
      }
    }
    
    for (let i = numbers.length - 1; i > 0; i--) {
      if (min > numbers[i]) {
        min = numbers[i]
      }
    }
    console.log("max: ", max)
    console.log("min: ", min)
  }
  console.log(maxmin())
  
console.log(numbers)
numbers.sort(function(a, b) {
    return a - b;
  });;

console.log(numbers)













