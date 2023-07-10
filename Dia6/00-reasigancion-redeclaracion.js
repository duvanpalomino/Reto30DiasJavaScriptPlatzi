// Reasignación: se refiere al proceso de darle un nuevo valor a una variable existente. Por ejemplo:
let numero = 5;
numero = 10;
const numero1 = 5;
numero1 = 10; // Uncaught TypeError: invalid assignment to const

// Redeclaración se refiere al proceso de crear una nueva variable con el mismo nombre de una variable existente. Por ejemplo:
let numero2 = 5;
let numero2 = 10;

// Uncaught SyntaxError: redeclaration of let numero

var numero3 = 5;
var numero3 = 10;

// Esto funciona sin problema ✅