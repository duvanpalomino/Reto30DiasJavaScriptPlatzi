// ¿Qué es una singly linked list?

// Una Singly Linked List es una estructura de datos lineal en la que cada elemento (nodo) contiene un valor y un puntero al siguiente nodo en la lista.
// La lista enlazada comienza con un nodo llamado cabeza (head) que apunta al primer elemento de la lista, y termina con un nodo llamado cola (tail) que apunta a null.

// Una Singly Linked List puede ser utilizada para almacenar y organizar datos de manera eficiente, ya que se puede agregar y eliminar elementos de la lista sin tener que mover elementos adicionales.

// Oportunidades donde puedes usar una singly linked list

// Cuando se requiere una inserción o eliminación rápida de elementos al inicio de la lista, ya que esto solo requiere actualizar el puntero de la cabeza de la lista, lo que se realiza en tiempo constante O(1) como lo vimos en la tabla anterior.
// Cuando el tamaño de la lista es variable y desconocido en tiempo de compilación, ya que las singly linked lists permiten agregar y eliminar elementos de manera dinámica sin tener que reasignar memoria para una estructura de datos con un tamaño fijo.
// Cuando el espacio en memoria es un factor importante, ya que las singly linked lists solo requieren el espacio necesario para almacenar el valor de cada nodo y un puntero al siguiente nodo, lo que las hace más eficientes en términos de uso de memoria que otras estructuras de datos como los arrays.

// Situaciones en las que NO es muy conveniente usarlas

// Cuando se requiere acceder a un elemento en una posición específica de la lista, ya que esto implica recorrer la lista desde la cabeza hasta la posición deseada, lo que toma tiempo lineal O(n) en el peor de los casos.
// Cuando se requiere recorrer la lista hacia atrás, ya que las singly linked lists solo tienen un enlace que apunta al siguiente nodo y no al nodo anterior.
// Cuando se realizan operaciones de búsqueda frecuentes, ya que en el peor de los casos la búsqueda requiere recorrer toda la lista y tomaría tiempo lineal O(n). En estos casos, sería más eficiente utilizar otras estructuras de datos como los árboles binarios de búsqueda o las tablas hash.

// Construyamos una singly linked list

// En JavaScript, una single linked list se puede implementar usando clases. Cada nodo de la lista es un objeto que tiene dos propiedades: value, que almacena el valor del nodo, y next, que apunta al siguiente nodo en la lista.

// Veamos un ejemplo de cómo se puede construir una single linked list en JavaScript.

class Node {
  // Esta clase Node representa un nodo en la lista
  constructor(value) {
	  // tiene un valor y un enlace al siguiente nodo. 
    this.value = value;
    this.next = null;
  }
}

// La clase LinkedList es la lista en sí misma
class LinkedList {
  constructor() {
		// Tiene una referencia al primer nodo (head) 
    this.head = null;
	  // también tiene una referencia al último nodo (tail)
    this.tail = null;
		// y un contador de longitud (length).
    this.length = 0;
  }

  // El método append agrega un nuevo nodo al final de la lista
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
			// Si la lista está vacía, head y tail apuntan al nuevo nodo
      this.head = newNode;
      this.tail = newNode;
			// Si la lista no está vacía,
    } else {
			// El enlace next del último nodo en la lista apunta al nuevo nodo
      this.tail.next = newNode;
			// y tail se actualiza para que apunte al nuevo nodo
      this.tail = newNode;
    }
    this.length++;
  }

  // El método prepend agrega un nuevo nodo al inicio de la lista
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
			// Si la lista está vacía, head y tail apuntan al nuevo nodo
      this.head = newNode;
      this.tail = newNode;
    } else {
			// Si la lista no está vacía, 
			// el enlace next del nuevo nodo apunta al primer nodo en la lista 
      newNode.next = this.head;
			// y head se actualiza para que apunte al nuevo nodo.
      this.head = newNode;
    }
    this.length++;
  }

  // Elimina un nodo por su valor
  delete(value) {
		// Si la lista está vacía, no se hace nada
    if (!this.head) {
      return null;
    }
		// Si el nodo a eliminar es el primer nodo en la lista
    if (this.head.value === value) {
			// El puntero head se actualiza para apuntar al siguiente nodo
      this.head = this.head.next;
      this.length--;
      return;
    }
	  // En caso contrario
		// se recorre la lista buscando el nodo anterior al que se quiere eliminar
    let currentNode = this.head;
    while (currentNode.next) {
			// Una vez encontrado, se actualiza el puntero next del nodo anterior
		  // para que apunte al siguiente nodo después del que se quiere eliminar.
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        this.length--;
        return;
      }
      currentNode = currentNode.next;
    }
  }
}