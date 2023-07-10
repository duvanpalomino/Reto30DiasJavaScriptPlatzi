Array.prototype.every()
const numbers = [1, 2, 3, 4, 5];
const allPositive = numbers.every(function(element) {
	return element > 0;
});

console.log(allPositive);

const numbers2 = [1, 2, 3, 4, 5];
const allPositive2 = numbers2.every(element => element > 0);
console.log(allPositive2);
// Output: true

const objects = [{name: 'John'}, {name: 'Jane'}, {name: 'Jim'}];
const allHaveName = objects.every(function(element) {
  return element.hasOwnProperty('name');
});

console.log(allHaveName);
// Output: true


//
Array.prototype.Find();
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = numbers1.find(number => number > 5);

console.log(result);

const people = [
  { name: 'John', age: 32 },
  { name: 'Jane', age: 28 },
  { name: 'Jim', age: 40 }
];
const result1 = people.find(person => person.age === 29);

console.log(result1);
// Output: { name: 'John', age: 32 }


//
Array.prototype.findIndex()
const numbers3= [1, 2, 3, 4, 5, 6, 7, 8, 9];
const index = numbers3.findIndex(num => num > 5);
console.log(index); // Output: 5

const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const index1 = numbers4.findIndex(num => num > 100);
console.log(index1); // Output: -1