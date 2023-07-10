// La programación funcional es un enfoque de programación 
// que se centra en el uso de funciones y evita el uso de estado 
// y efectos secundarios.
function add(a, b) {
  return a + b;
};
const operation = add;

function makeOperation(operation, num1, num2) {
  return operation(num1, num2);
}

console.log(makeOperation(operation, 2, 3)); // Output: 5

// funcion pura

const numbers = [1, 2, 3, 4, 5];
const doubles = numbers.map(function(number) {
  return numero * 2;
});
console.log(doubles); // [2, 4, 6, 8, 10]

// En resumen, la programación funcional es un enfoque de programación 
// que se centra en el uso de funciones y evita el uso de estado y efectos 
// secundarios. En javascript, se puede utilizar programación funcional mediante 
// el uso de funciones como map, reduce, filter, arrow functions y librerías de 
// programación funcional pura, lo cual permite crear código más fácil de probar y depurar.


const arr = [1, 2, 3, 4, 5]; 

const result = arr.map(num => num * 2).filter(num => num > 5); 

console.log(result);

function add(a, b) {
 return a + b;
} 