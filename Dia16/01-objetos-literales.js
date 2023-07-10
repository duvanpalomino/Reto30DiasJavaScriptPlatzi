const objeto1 = {a: 1, b: 2};
const objeto2 = {c: 3, d: 4};
// Object.assing necesita de entrada un target al cual asignarle los valores
// En este ejemplo el target será un nuevo objeto vacío
// Y los siguientes elementos serán las fuentes (que pueden ser varios objetos)
const nuevoObjeto = Object.assign({}, objeto1, objeto2);
console.log(nuevoObjeto); // Output: {a: 1, b: 2, c: 3, d: 4}

const objeto = {a: 1, b: 2};
Object.freeze(objeto);
objeto.a = 3;
console.log(objeto.a); // Output: 1

const objeto10 = {a: 1, b: 2};
const objeto20 = Object.create(objeto10);
objeto20.c = 3;
console.log(Object.getOwnPropertyNames(objeto20)); // Output: ["c"]


const objeto = {a: 1, b: 2, c: 3};
for (let propiedad in objeto) {
  console.log(propiedad); // Output: "a", "b", "c"
}

const objeto = {a: 1, b: 2, c: 3};
const propiedades = Object.keys(objeto);
console.log(propiedades);
// Object.keys nos da un array con las keys del objeto
for (let propiedad of propiedades) {
  console.log(propiedad); // Output: "a", "b", "c"
}


const objeto11 = {a: 1, b: 2};
console.log(Object.values(objeto11));
const objeto22 = Object.create(objeto11);
objeto22.c = 3;
console.log(Object.values(objeto22)); // Output: [3, 1, 2]


const objeto_1 = {a: 1, b: 2};
// console.log(Object.entries(objeto_1));
const objeto_2 = Object.assign(objeto_1);
console.log(objeto_2);
objeto_2.c = 3;
console.log(objeto_2);
console.log(Object.entries(objeto_2)); // Output: [["c", 3], ["a", 1], ["b", 2]]


const objeto01 = {a: 1, b: 2};
const objeto02 = Object.create(objeto01);
console.log(objeto02);
objeto02.c = 3;
console.log(objeto02.hasOwnProperty("c")); // Output: true
console.log(objeto02.hasOwnProperty("a")); // Output: false