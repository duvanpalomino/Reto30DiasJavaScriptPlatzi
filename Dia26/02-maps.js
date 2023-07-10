// Los Maps (no confundir con el método map de los arrays) en JavaScript son estructuras de datos 
// que permiten almacenar pares clave-valor y acceder a ellos de manera eficiente. 
// A diferencia de los objetos regulares, las claves en un Map pueden ser de cualquier tipo de dato, 
// incluyendo objetos, funciones y valores primitivos. Los Maps son especialmente útiles cuando se necesitan realizar búsquedas rápidas de valores asociados a una clave determinada.

// Para crear un Map, se puede utilizar la siguiente sintaxis:

let map_2 = new Map();

// También es posible crear un Map a partir de un arreglo de pares clave-valor:

let array = [["key1", "value1"], ["key2", "value2"]];
let map_1 = new Map(array);
console.log(map_1);

// Los métodos más utilizados de los Maps son los siguientes:

// set(key, value): este método agrega un par clave-valor al Map.
// get(key): este método devuelve el valor asociado a una clave determinada. Si la clave no existe, devuelve undefined.
// has(key): este método verifica si una clave determinada existe en el Map. Devuelve true si la clave existe y false en caso contrario.
// delete(key): este método elimina una clave y su valor asociado del Map.
// clear(): este método vacía completamente el Map.
// size: este atributo devuelve la cantidad de pares clave-valor que existen en el Map.

// Ejemplos de uso de Map 👇:

let map = new Map();

// Agregar pares clave-valor al Map
map.set("key1", "value1");
map.set("key2", "value2");
map.set(3, "value3");
console.log(map);

// Obtener el valor asociado a una clave
console.log(map.get("key1")); // Output: "value1"

// Verificar si una clave existe en el Map
console.log(map.has("key2")); // Output: true

// Eliminar una clave del Map
map.delete("key2");
console.log(map);

// Verificar si una clave existe en el Map después de ser eliminada
console.log(map.has("key2")); // Output: false

// Vaciar el Map
map.clear();
console.log(map);

// Verificar el tamaño del Map después de ser vaciado
console.log(map.size); // Output: 0


// En resumen, los Maps en JavaScript son estructuras de datos útiles para almacenar pares clave-valor
//  y para realizar operaciones eficientes de búsqueda, adición y eliminación de valores asociados a una clave determinada.