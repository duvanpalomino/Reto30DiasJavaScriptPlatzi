export class Node {
  // Este código no debe ser modificado ❌
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//

import { Node } from "./Node";

// Este código no debe ser modificado ❌
export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        this.length--;
        return;
      }
      currentNode = currentNode.next;
    }
  }
}

//

import { LinkedList } from "./SinglyLinkedList";
import { Node } from "./Node";

export class LinkedListRecharged extends LinkedList {
  get(index){
    if (index < 0 || index >= this.length) {  // index fuera de rango
      return null;
    }
    let nodeCurrent = this.head;
    let i = 0;
    while (i!=index) {
      nodeCurrent = nodeCurrent.next;
      i++;
    }
    return nodeCurrent.value;
  }

  insertAt(index, value){
    if (index < 0 || index > this.length-1) {
      return null;
    }
    if (index == 0) {  //si el indice es 0 se inserta al principio
      this.prepend(value);
      return this;
    }
    if (index == this.length) {  //si el indice es igual a length, se inserta al final
      this.append(value);
      return this;
    }
    if (index > 0 && index < this.length - 1) {  //si el indice está en el medio
      const newNode = new Node(value);
      const nodoPrev = this.nodeSearch(index - 1) //buscamos al nodo previo

      newNode.next = nodoPrev.next //newNodo apunta al Nodo Posterior
      nodoPrev.next = newNode;     //nodo previo apunta al nuevo nodo
      this.length++;
      return this;
    }
  }

  toArray(){
    let values = [];
    let pointer = this.head;
    for (let i = 0; i < this.length; i++) {
      values.push(pointer.value);
      pointer = pointer.next;
    }
    return values;
  }

  removeAt(index){
    if (index < 0 || index > this.length-1) {
      return null;
    }
    if (index == 0) {  //se elimina el primer nodo
      this.head = this.head.next;
      this.length--;
      return this;
    }
    if (index == this.length - 1) {  //se elimina el último nodo
      const nodoPrev = this.nodeSearch(index - 1);
      this.tail = nodoPrev;
      nodoPrev.next = null;
      this.length--;
      return this;
    }
    if (index > 0 && index < this.length - 1) {  //si el indice está al medio
      const nodoPrev = this.nodeSearch(index - 1) //buscamos al nodo previo
      const nodoPost = this.nodeSearch(index + 1) //buscamos al nodo posterior
      nodoPrev.next = nodoPost; //el nodo previo ahora apunta al nodo posterior
      this.length--;
      return this;
    }
  }

  nodeSearch(index) {
    let pointerSearch = this.head;
    let i = 0;
    if (index < 0 || index >= this.length) {
      throw new Error("El índice esta fuera de rango");
    }
    while (i != index && pointerSearch.next != null) {
      pointerSearch = pointerSearch.next;
      i++;
    }
    return pointerSearch;
  }
}