let evenOnly = function(n){
  return n % 2 === 0
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(numbers.filter(evenOnly))
