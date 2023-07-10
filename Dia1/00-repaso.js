const edad = 30;
const pi = 3.14;
const salario = 1500.50;

const numeroGrande = 1e6; 
console.log(numeroGrande);
const numeroPequeño = 1e-6;
console.log(numeroPequeño);

//const nombre = "Platzi";

const nombre = "Platzi";
const apellido = 'Academy';

console.log("Hola, " + nombre + " " + apellido + "!"); // "Hola, Platzi Academy!"

console.log(`Hola, ${nombre} ${apellido}!`); // "Hola, Platzi Academy!"

// length: Devuelve la longitud de un string.
// toUpperCase(): Devuelve el string en mayúsculas.
// toLowerCase(): Devuelve el string en minúsculas.
// substring(): Devuelve una parte del string.
console.log(nombre.length) // 6
console.log(nombre.toUpperCase()) // PLATZI
console.log(nombre.toLowerCase()) // platzi
console.log(nombre.substring(0, 5)) // Platz