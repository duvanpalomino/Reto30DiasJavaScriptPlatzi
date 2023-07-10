Array.includes();
// El método Array.prototype.includes es una función para determinar
// si un elemento determinado existe en un array.

const numbers = [1, 2, 3, 4, 5];

const result1 = numbers.includes(3);

console.log(result); // true



Array.join();
// se utiliza para convertir todos los elementos de un array en un solo string. 
// Este método recibe como argumento un separador, que es una cadena de texto 
// que se utilizará para separar los elementos del arreglo en el string resultante.

const fruits = ["apple", "banana", "cherry"];
const fruitsString = fruits.join(", ");
console.log(fruitsString); // "apple, banana, cherry"
const fruits1 = ["apple", "banana", "cherry"];
const fruitsString1 = fruits1.join();
console.log(fruitsString1);


Array.concat()
// se utiliza para combinar dos o más arrays en uno solo. 
// Este método no modifica los arrays originales, sino que devuelve un nuevo array con los elementos de los arrays originales concatenados.

// array1.concat(array2, array3, ..., arrayX)
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const string = "hello";
const number = 123;

const result = array1.concat(array2, string, number);

console.log(result); // [1, 2, 3, 4, 5, 6, "hello", 123]