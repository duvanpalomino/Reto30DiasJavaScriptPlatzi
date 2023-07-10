// Objeto original
const objetoReal = {
	nombre: 'Objeto Real',
	descripcion: 'Este es el objeto real'
};

// Función proxy
const proxy = new Proxy(objetoReal, {

	get(target, prop) {
		console.log(`Accediendo a la propiedad "${prop}"`);
		return target[prop];
	},

	set(target, prop, value) {
		console.log(`Estableciendo valor ${value}" en la propiedad "${prop}"`);
		target[prop] = value;
		return true;
	}
});
// Uso

console.log(proxy.nombre); 
// Accediendo a la propiedad "nombre" / "Objeto Real"

proxy.descripcion = 'Nueva descripción'; 
// Estableciendo valor "Nueva descripción" en la propiedad "descripcion"

console.log(proxy.descripcion); 
// Accediendo a la propiedad "descripcion" / "Nueva descripción"

//

class Product {
  constructor(name, price, available) {
    this.name = name;
    this.price = price;
    this.available = available;
  }
}

class ProductProxy {
  constructor(product, user) {
    this.product = product;
    this.user = user;
  }

  getName() {
    return this.product.name;
  }

  getPrice() {
    return this.product.price;
  }

  isAvailable() {
    return this.product.available;
  }

  buy() {
    if (this.user.isRegistered) {
      this.product.buy();
    } else {
      console.log("Error: el usuario no está registrado");
    }
  }
}


//


const complexObject = {
  prop1: "value1",
  prop2: "value2",
  prop3: {
    nestedProp1: "nestedValue1",
    nestedProp2: "nestedValue2",
		nestedProp3: {
			deeplyNestedProp1: "deeplyNestedValue1",
			deeplyNestedProp2: "deeplyNestedValue2"
		}
	},
	prop4: "value4",
	prop5: "value5"
};

const simpleObjectProxy = new Proxy(complexObject, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    }
    return null;
  }
});

console.log(simpleObjectProxy.prop1); 
// "value1"
console.log(simpleObjectProxy.prop3.nestedProp3.deeplyNestedProp1); 
// "deeplyNestedValue1"
// De esa manera nos saltamos el acceder a prop3