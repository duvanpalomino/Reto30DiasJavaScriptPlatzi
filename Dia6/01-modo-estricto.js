"use strict";
let numero = 5;
let numero = 10; 
// ❌ Generará un error en modo estricto, ya que no se puede redeclarar 
// una variable con el mismo nombre en el mismo ámbito

function miFuncion() {
  "use strict";
  let numero = 5;
  numero = "10"; // Generará un error en modo estricto, ya que no se puede cambiar el tipo de dato de una variable
}