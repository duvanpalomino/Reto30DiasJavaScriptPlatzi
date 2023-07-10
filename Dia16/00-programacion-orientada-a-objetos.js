// class Animal {
//     constructor(especie) {
//         this.especie = especie;
//     }
//     respirar() {
//         console.log("Respirando...");
//     }
// }

// class Perro extends Animal {
//     ladrar() {
//         console.log("Guau!");
//     }
// }

// const perro1 = new Perro("Canino");
// console.log(perro1.especie); // Output: "Canino"
// perro.respirar(); // Output: "Respirando..."
// perro.ladrar(); // Output: "Guau!"


// function Animal(especie) {
//   // Función constructora
//   this.especie = especie;
// }

// Animal.prototype.respirar = function() {
//   // En este scope no existe "especie"
// 	// Pero con "this" estamos accediendo directamente a "Animal"
// 	// Por lo que esto vendría siendo "Animal.especie"
//   console.log(`La especie ${this.especie} está respirando...`);
// }

// const perro = new Animal("Canino");
// perro.respirar(); // Output: "La especie Canino está respirando..."

const animal = {
  respirar: function() {
    console.log("Respirando...");
  }
};

const perro = Object.create(animal);

perro.ladrar = function() {
  console.log("Guau!");
}

perro.respirar(); // Output: "Respirando..."
perro.ladrar(); // Output: "Guau!"