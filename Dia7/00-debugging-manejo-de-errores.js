// Debigging

// Una de las herramientas más comunes para manejar errores en JavaScript
//  es el bloque try-catch. Este bloque permite ejecutar código que podría 
// generar un error, y capturar ese error en caso de que ocurra. Por ejemplo:
try {
  //Código que podría generar un error
} catch (error) {
  //Código que se ejecuta si ocurre un error
  throw new Error('mensaje personalizado'); // sentencia mas comun para el manejo de errores
  console.log(error);
}
try {
  const num = 100;
  if (num > 50) {
    throw new Error("El número es mayor a 50");
  }
} catch (error) {
  console.error(error.message);
}

// debuger

let numero = 5;
debugger;
let resultado = numero / 2;