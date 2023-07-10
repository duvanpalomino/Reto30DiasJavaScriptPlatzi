export function removeDuplicates(values) {
  // Tu código aquí 👈
  let set = new Set(values);
  let setArray = Array.from(set);
  console.log(setArray);
  return setArray;

}