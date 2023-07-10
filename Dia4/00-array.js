// La sintaxis para crear un array en JavaScript 
// es la siguiente: let miArray = [valor1, valor2, valor3];
let colores = ["rojo", "azul", "verde"];
console.log(colores[0]);

// Este método permite agregar un nuevo elemento al final del array. 
//Por ejemplo:
colores.push("amarillo");
console.log(colores);

// Otro método popular es “pop()”, 
// que permite eliminar el último elemento del array. 
// Por ejemplo:
colores.pop();
console.log(colores); // ["rojo", "azul", "verde"]

// El método “map()” 
// permite aplicar una función a cada elemento del array
//  y devolver un nuevo array con los valores modificados. 
// Por ejemplo:
const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(function(numero) {
  return numero * numero;
});
console.log(cuadrados);

// El método “reduce()” 
// permite combinar todos los elementos del array en un solo valor. 
// Por ejemplo:
const numeroS = [1, 2, 3, 4, 5];
const suma = numeroS.reduce(function(acumulador, numeros) {
  return acumulador + numeros;
}, 0);
console.log(suma);


// reto

function findFamousCats(cats) {
  // Creamos un objeto en el cual guardaremos los nombres
  // de los gatitos y el número máximo de seguidores
  let famousStats = {
    // El array de nombres empieza vacío
    catNames: [],
    // Y el número máximo de seguidores en 0
    maxNumOfFollowers: 0,
  };

  for (let i = 0; i < cats.length; i++) {
    // Iteramos por cada gatito recibido en el array
    const cat = cats[i];
    // Obtenemos la suma total de seguidores con reduce
    const totalFollowers = cat.followers.reduce(
      (acum, currentVal) => acum + currentVal,
      0
    );
 
    // comparamos si el total de followers del actual gatito es IGUAL
    // al del objeto que declaramos al inicio
    if (totalFollowers === famousStats.maxNumOfFollowers) {
      // De ser así, solo agregamos el nombre del gatito
      famousStats.catNames.push(cat.name);
    }

    // Por otro lado, si es MAYOR
    if (totalFollowers > famousStats.maxNumOfFollowers) {
       // Reiniciamos el array de nombres
      famousStats.catNames = [];
       // Agregamos a nuestro gatito influencer
      famousStats.catNames.push(cat.name);
       // Para al final asignar el número máximo de seguidores
       // a la debida propiedad del objeto
      famousStats.maxNumOfFollowers = totalFollowers;
    }
  }

  // Al final solo retornamos LOS NOMBRES
  return famousStats.catNames;
}

let nums = [1.45, 2.654, 3.2, 4];
let prom = ((nums.reduce((a, b) => a + b, 0)) / nums.length);
console.log(prom);
prom.toFixed(1);
let result = parseInt(prom).toFixed(2);
