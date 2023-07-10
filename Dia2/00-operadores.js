// operadores aritmeticos
// Suma
console.log(1 + 2); // 3
// Resta
console.log(5 - 2); // 3
// Multiplicación
console.log(3 * 4); // 12
// División
console.log(10 / 2); // 5
// Módulo (devuelve el resto de una división)
console.log(10 % 3); // 1

//operadores de asignacion
let x = 10;
x += 5; // x = x + 5
console.log(x); // 15
x -= 3; // x = x - 3
console.log(x); // 12
x *= 2; // x = x * 2
console.log(x); // 24
x /= 4; // x = x / 4
console.log(x); // 6

// operadores de comparacion
console.log(1 < 2); // true
console.log(2 > 1); // true
console.log(1 <= 2); // true
console.log(2 >= 1); // true
console.log(1 !== 2); // true
console.log(1 == "1") // true
console.log(1 === "1") // false

//Entre estos existen 2 operadores de igualdad los cuales son == y ===. 
//El primero realiza una comparación de valor.
//El segundo, además de comparar el valor, también verifica el tipo de dato. 
//Es recomendable utilizar siempre === ya que, en un lenguaje como JavaScript, 
//que es debilmente tipado, comparar solo el valor puede llevar a resultados inesperados


// operadores logicos
//AND (&&): 
let edad = 25;
let mayorDeEdad = edad >= 18;

if (edad >= 18 && mayorDeEdad) {
  console.log("Eres mayor de edad");
} else {
  console.log("Aún eres menor de edad");
};

// OR (||):
let edad1 = 25;
let tieneIdentificacion = true;

if (edad1 >= 18 || tieneIdentificacion) {
  console.log("Puedes entrar al bar");
} else {
  console.log("No tienes la edad o la identificación suficiente para entrar al bar");
};

// NOT (!):
let esFinDeSemana = true;

if (!esFinDeSemana) {
  console.log("A trabajar");
} else {
  console.log("A disfrutar del fin de semana");
};