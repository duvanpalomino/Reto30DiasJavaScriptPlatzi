// Los sets en JavaScript son objetos similares a los arrays que permiten almacenar valores únicos. 
// Estos valores pueden ser cualquier tipo de datos, incluyendo números, cadenas, objetos o incluso otros sets. 
// Una de las principales diferencias entre los sets y los arrays es que los sets no permiten duplicados, mientras que los arrays sí.

// Crear un Set no es nada complejo, con la siguiente linea puedes crear uno:

let set  = new Set();

// También es posible crear un set a partir de un arrays existente:

let array = [1, 2, 3, 4, 5];
let set_1 = new Set(array);

console.log(set_1);

// Los métodos más utilizados de los sets son los siguientes:

// add(value): este método agrega un valor único al set. Si intentamos agregar un valor que ya existe en el set, no ocurrirá nada.
// delete(value): este método elimina un valor específico del set.
// has(value): este método verifica si un valor determinado existe en el set. Devuelve true si existe y false en caso contrario.
// clear(): este método vacía completamente el set.
// size: este atributo devuelve la cantidad de elementos que existen en el set.

// Ejemplos de uso de set 👇:


let set_2 = new Set();

// Agregar elementos al set
set_2.add(1);
set_2.add(2);
set_2.add(3);

// Si llamamos a nuestro set directamente, este nos devolerá todo su contenido
console.log(set_2) // Output [1,2,3]

// Verificar si un elemento existe en el set
console.log(set_2.has(2)); // Output: true

// Eliminar un elemento del set
set_2.delete(2);

// Verificar si un elemento existe en el set después de ser eliminado
console.log(set_2.has(2)); // Output: false

// Vaciar el set
set_2.clear();

// Verificar el tamaño del set después de ser vaciado
console.log(set_2.size); // Output: 0

// Es importante destacar que los sets son una estructura de datos útil para almacenar valores únicos y para realizar operaciones simples de agregar, 
// eliminar y verificar si existe un valor determinado. Sin embargo, si se necesita iterar sobre los elementos de un set, es necesario convertirlo previamente a un arreglo o usar un bucle.