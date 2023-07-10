for (inicialización; condición; actualización) {
  // código a ejecutar
}
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
1
2
3
4
5
6
7
8
9
10
const user = {
	name: "Pepito",
  age: 20,
  role: "JavaScript developer"
}

for (const prop in user) {
	console.log(user[prop])
}

// "Pepito"
// 20
// "JavaScript developer"

const technologies = ["js", "html", "node", "php"]

for (const element of technologies) {
  console.log(element)
}

// "js"
// "html"
// "node"
// "php"
while (condición) {
  // código a ejecutar
}
let i = 1;
while (i <= 10){
  console.log(i);
  i++;
}
let io = 1;
do {
	console.log(io);
	i++;
	} while (i <= 10);

// Rteo ciclos

export function printTriangle(size, character) {
  // Inicializa mi array de elementos
  const triangle = [];
  // Empieza a iterar desde 1 hasta que el iterador sea igual a size
  for (let i = 1; i <= size; i++) {
    // inicializa una variable llamada "characters" que contendrá una cadena de caracteres repetidos. 
    // La cantidad de caracteres repetidos dependerá del valor de "i".
    let spaces = " ".repeat(size - i);
    // Después repetimos el carácter a pintar la cantidad de veces del iterador
    let characters = character.repeat(i);
    // Para después juntar el número de espacios y caracteres en un solo string
    let figure = `${spaces}${characters}`;
    // Y al final mandar esto al array inicial
    triangle.push(figure);
  }

  // La prueba nos pide un string, por lo que usaremos join() para convertir
  // El array en un string donde las comas sean reemplazadas por el salto de linea
  return triangle.join("\n");
};

// Es importante mencionar que el método .join() propio de los arrays reemplaza las comas por el carácter dado

const names = ["Nico", "Juan", "Oscar"]
console.log(names.join(" Hola "))
"Nico Hola Juan Hola Oscar"