let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const  evenNumbers = function (number) {
     return number % 2 === 0;
   }
   // filtering arrays to only contain certain values
let filtered = numbers.filter(evenNumbers)

console.log(filtered)
