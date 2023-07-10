const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
console.log(numbers) // Output: [1, 2, 3, 4, 5] 
// El array original sigue intacto 

const numbers1 = [1, 2, 3, 4, 5];
const evenNumbers = numbers1.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers); // Output: [2,4]