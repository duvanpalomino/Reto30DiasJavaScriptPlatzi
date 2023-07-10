export function protectDog(dog) {
  const copyObject = Object.assign({}, dog);
  Object.freeze(copyObject);
  for (let key in copyObject){
    if (typeof copyObject[key] === 'object') {
      Object.freeze(copyObject[key]);
    }
  }
  return copyObject
}
