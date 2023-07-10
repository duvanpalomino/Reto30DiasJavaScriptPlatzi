// function createPerson(name, age) {
//   return {
//     name: name,
//     age: age,
//     sayHello: function() {
//       console.log(`Hello, my name is ${this.name}`);
//     }
//   };
// }

// const person1 = createPerson('John', 30);
// const person2 = createPerson('Jane', 25);

// console.log(person1.name); // 'John'
// console.log(person2.age); // 25
// person1.sayHello(); // 'Hello, my name is John'

//

class PersonFactory {
  createPerson(name, age) {
    return {
      name: name,
      age: age,
      sayHello: function() {
        console.log(`Hello, my name is ${this.name}`);
      }
    };
  }
}

const factory = new PersonFactory();
const person1 = factory.createPerson('John', 30);
const person2 = factory.createPerson('Jane', 25);

console.log(person1.name); // 'John'
console.log(person2.age); // 25
person1.sayHello(); // 'Hello, my name is John'