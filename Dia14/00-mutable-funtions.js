// Las funciones mutables en JavaScript son aquellas que pueden modificar el estado de los objetos. 
// En oposición a las funciones inmutables, que no pueden modificar el estado de los objetos y devuelven un nuevo objeto con los cambios

const numbers11 = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers11);
// Output: [1, 2, 3, 4, 5]

const numbers1 = [1, 2, 3, 4];
const newNumbers = numbers1.concat([5]);
console.log(numbers1);
// Output: [1, 2, 3, 4]
console.log(newNumbers);
// Output: [1, 2, 3, 4, 5]

const person = {
	name: 'John Doe',
	age: 30
};

function addProperty(object, key, value) {
	object[key] = value;
}

addProperty(person, 'address', '123 Main St');

console.log(person);

// Output: { name: 'John Doe', age: 30, address: '123 Main St' }

const numbers = [1, 2, 3, 4];

const people = [
	{ name: 'John Doe', age: 30 },
	{ name: 'Jane Doe', age: 25 },
	{ name: 'Jim Doe', age: 35 }
];

function addFive(array) {
	for (let i = 0; i < array.length; i++) {
		array[i] += 5;
	}
}

function addYear(array) {
	for (let i = 0; i < array.length; i++) {
		array[i].age++;
	}
}

addFive(numbers);
addYear(people);
console.log(numbers);
// Output: [6, 7, 8, 9]
console.log(people);
// Output: [{ name: 'John Doe', age: 31 }, { name: 'Jane Doe', age: 26 }, { name: 'Jim Doe', age: 36 }]

