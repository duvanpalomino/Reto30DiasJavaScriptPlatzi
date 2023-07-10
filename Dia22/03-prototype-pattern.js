function Animal(name, species) {
	this.name = name;
	this.species = species;
}

Animal.prototype.makeSound = function () {
	console.log('El animal hace un sonido');
};

const dog = new Animal('Fido', 'Perro');
console.log(dog.name); // Fido
console.log(dog.species); // Perro
dog.makeSound(); // El animal hace un sonido

//

function Persona(nombre, edad, ocupacion) {
	this.nombre = nombre;
	this.edad = edad;
	this.ocupacion = ocupacion;
}

const plantillaPersona = new Persona('', 0, '');

const persona1 = Object.create(plantillaPersona);
persona1.nombre = 'Juan';
persona1.edad = 30;
persona1.ocupacion = 'Desarrollador';

const persona2 = Object.create(plantillaPersona);
persona2.nombre = 'María';
persona2.edad = 25;
persona2.ocupacion = 'Doctora';

console.log(persona1.nombre); // Juan
console.log(persona2.nombre); // María