class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }

  show() {
    console.log(`Nombre: ${this.name}`);
    console.log(`Precio: ${this.price}`);
    console.log(`Descripción: ${this.description}`);
  }
}

// Libro hereda las propiedades y métodos de la clase Producto
class Book extends Product {
  constructor(name, price, description, author, editorial) {
    // Recuerda que con Super le pasamos los atributos a la clase
    // de la cual se hereda
    super(name, price, description);
    // define nuevas propiedades como autor y editorial 
    this.author = author;
    this.editorial = editorial;
  }

  show() {
    super.show();
    // redefine el método mostrar() para mostrar esta información adicional.
    console.log(`Autor: ${this.author}`);
    console.log(`Editorial: ${this.editorial}`);
  }
}