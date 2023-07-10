export function findLargestPalindrome(words) {
  // Primero definimos que la palabra más larga es null
  // Debido a que no se tiene un valor 
  let largest = null;
  // Después iteramos por cada una de las palabras
  for (const word of words) {
    // con split("") creamos un array donde cada elemento es una letra
    // Ejemplo "hola" => ["h","o","l","a"]
    // con reverse() "volteamos" el array
    // Ejemplo ["h","o","l","a"] => ["a"","l","o","h"]
    // y con .join("") volvemos a convertirlo en un string
    // Ejemplo  ["a"","l","o","h"] => "aloh"
    const reversedWord = word.split("").reverse().join("");
    // La primer validación que hacemos es para ver si efectivamente es un array
    if (reversedWord === word) {
      // Si si lo es, primero verificamos que se reemplace la variable largest
      // por el primer palindromo si es que no existe uno aún
      if (largest == null || word.length > largest.length) {
         // En caso de existir, se compara su longitud con el palindromo existente
        largest = word;
      }
    }
  }

  // Al final siempre retornamos la variable largest
  // Ya que si no existe ni uno solo en el array, su valor se mantiene como null
  return largest;
}