Array.prototype.flat()
// El método Array.prototype.flat() permite combinar varios arreglos en un solo arreglo plano (sin niveles adicionales de anidamiento). 
// Este método es útil cuando se trabaja con arreglos multidimensionales y se desea obtener una sola secuencia de elementos en un solo arreglo.

const multiDimensionalArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flatArray = multiDimensionalArray.flat();
console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

const multiDimensionalArray1 = [[1, 2, 3], [4, [5, 6]], [7, 8, 9]];
const flatArray1 = multiDimensionalArray1.flat(1);
console.log(flatArray1); // [1, 2, 3, 4, [5, 6], 7, 8, 9]


Array.prototype.flatMap()
//  combina las funcionalidades de los métodos Array.prototype.map() y Array.prototype.flat() en uno solo.
//  Para transformar cada elemento del arreglo, luego aplana el resultado hasta obtener un único arreglo con los elementos resultantes.

const numbers = [1, 2, 3, 4];

const result11 = numbers.flatMap(x => [x, x * 2]);

console.log(result11);
// Output: [1, 2, 2, 4, 3, 6, 4, 8]

const values = [1, 2, 3, null, 4, undefined, 5];

const result1 = values.flatMap(x => x === null ? [] : x === undefined ? [] : x);

console.log(result1);
// Output: [1, 2, 3, 4, 5]

const bidimensionalArray = [[1, 2, 3], [4, 5, 6]];
const result = bidimensionalArray.flatMap(x => x);
console.log(result);
// Output: [1, 2, 3, 4, 5, 6]