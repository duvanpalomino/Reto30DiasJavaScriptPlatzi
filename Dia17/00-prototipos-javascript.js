function Animal() {}
// Es importante que las clases empiecen con máyusculas 
Animal.prototype.esVivo = true;
// Y a su prototype le agregamos la propiedad de "esVivo"
// console.log(Animal);

function Perro() {}
// Esta es la manera de hacer que un objeto "Herede" de otro
Perro.prototype = Object.create(Animal.prototype);

const perro = new Perro();
// console.log(perro);
console.log(perro.esVivo); // Output: true

Perro.prototype.ladrar = function() { console.log("Guau!"); }
const perro1 = new Perro();
perro1.ladrar(); // Output: "Guau!"
// console.log(perro1);

Array.prototype.suma = function() { return this.reduce((a, b) => a + b); }
const numeros = [1, 2, 3, 4, 5];
console.log(numeros.suma()); // Output: 15

String.prototype.mayusculas = function() { return this.toUpperCase(); }
const nombre = "Juan";
console.log(nombre.mayusculas()); // Output: "JUAN"