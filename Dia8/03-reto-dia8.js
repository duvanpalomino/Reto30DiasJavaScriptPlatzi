export function myMap(array, func) {
  // Tu código aquí 👈
  let rta = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    rta.push(func(element));
  }
  return rta;
}