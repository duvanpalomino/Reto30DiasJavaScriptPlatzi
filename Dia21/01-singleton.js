const Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object({name: 'Singleton'});
    return object;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // True


//

// class Singleton {
//   constructor() {
//     if (!Singleton.instance) {
//       this.name = 'Singleton';
//       Singleton.instance = Object.freeze(this);
//     }
//     return Singleton.instance;
//   }
// }

// const instance1 = new Singleton();
// const instance2 = new Singleton();
// console.log(instance1 === instance2); // True