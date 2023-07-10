// Creación de Arrays utilizando la Clase Constructora Array
let myArray = new Array();
let myArray1 = new Array(1, 2, 3, 4);
console.log(myArray);
// console.log(myArray1);
myArray1= new Array(6, 7, 8);
console.log(myArray1);

// Array.from()
// La función Array.from() permite crear un nuevo array a partir de un objeto similar a un array o iterable. La sintaxis para utilizar Array.from() es la siguiente:
let myArray2 = Array.from('hello');
console.log(myArray2); // ["h", "e", "l", "l", "o"]

// Array(n).fill()
// La función fill() permite llenar un array con un valor específico. La sintaxis para utilizar fill() es la siguiente:
let myArray3 = new Array(5).fill(0);
console.log(myArray3); // [0, 0, 0, 0, 0]

// Array.isArray()
// La función Array.isArray() permite determinar si un objeto es un array o no. La sintaxis para utilizar Array.isArray() es la siguiente:
let myArray4 = [1, 2, 3, 4];
console.log(Array.isArray(myArray4)); // true

// Copiando Arrays

// Crear una nueva instancia del array:
// Una forma de hacer una copia de un array es crear una nueva instancia del mismo array. Esto se logra usando el constructor Array:
const originalArray = [1, 2, 3, 4];
const copiedArray = new Array(...originalArray);
console.log(originalArray);
console.log(copiedArray);
console.log(originalArray === copiedArray); // Output: false

// Uso de métodos incorporados:
// Otro enfoque para hacer una copia de un array es utilizar los métodos incorporados de JavaScript. Por ejemplo, puedes utilizar el método slice para hacer una copia de un array:
const originalArray1 = [1, 2, 3, 4];
const copiedArray1 = originalArray1.slice();
console.log(originalArray1);
console.log(copiedArray1);
console.log(originalArray1 === copiedArray1); // Output: false

// Otro método incorporado es el método concat:
const originalArray2 = [1, 2, 3, 4];
const copiedArray2 = originalArray2.concat();
console.log(originalArray2);
console.log(copiedArray2);
console.log(originalArray2 === copiedArray2); // Output: false

// spread operator:
// El spread operator es una forma conveniente de hacer una copia de un array. El spread operator se utiliza para expandir los elementos de un array en una lista:
const originalArray3 = [1, 2, 3, 4];
const copiedArray3 = [...originalArray3];
console.log(originalArray3);
console.log(copiedArray3);
console.log(originalArray3 === copiedArray3); // Output: false


// Arrays Bidimensionales
const matrix = [];
matrix[0] = [1, 2, 3];
matrix[1] = [4, 5, 6];
matrix[2] = [7, 8, 9];

console.log(matrix);
// Output: [
//   [1, 2, 3], 
//   [4, 5, 6], 
//   [7, 8, 9]
// ]

// También puedes crear un array bidimensional utilizando la clase constructora Array:
const matrix = new Array(3);
for (let i = 0; i < matrix.length; i++) {
  matrix[i] = new Array(3);
  console.log(matrix);
}
console.log(matrix);
matrix[0][0] = 1;
matrix[0][1] = 2;
matrix[0][2] = 3;
matrix[1][0] = 4;
matrix[1][1] = 5;
matrix[1][2] = 6;
matrix[2][0] = 7;
matrix[2][1] = 8;
matrix[2][2] = 9;

console.log(matrix);
// Output: [
//   [1, 2, 3], 
//   [4, 5, 6], 
//   [7, 8, 9]
// ]
console.log(matrix[1][1]);

// Además de crear y acceder a los elementos de un array bidimensional, también puedes copiar un array bidimensional utilizando el spread operator:
const originalMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const copiedMatrix = [...originalMatrix];

console.log(originalMatrix === copiedMatrix);
// Output: false


// Además de los arrays bidimensionales, también puedes crear arrays de más dimensiones. Por ejemplo, puedes crear un array tridimensional:
const cube = [];
for (let i = 0; i < 3; i++) {
  cube[i] = [];
	for (let j = 0; j < 3; j++) {
		cube[i][j] = [];
		for (let k = 0; k < 3; k++) {
			cube[i][j][k] = i + j + k;
		}
	}
}
console.log(cube);
// Output: 
//[
//  [[0, 1, 2], [1, 2, 3], [2, 3, 4]], 
//  [[1, 2, 3], [2, 3, 4], [3, 4, 5]], 
//  [[2, 3, 4], [3, 4, 5], [4, 5, 6]]
//]