export class Node {
  constructor(name, age, bedNumber) {
    // Tu código aquí 👈🏻
    this.name = name;
    this.age = age;
    this.bedNumber = bedNumber;
    this.next = null;
  }
}


// 

import { Node } from "./Node";

export class PatientList {
  constructor(beds) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.beds = this.arrayFrom(beds);
  }

  arrayFrom(tamanio) {
    let array = [];
    for (let x = 1; x <= tamanio; x++) {
      array.push({ bed: x, available: true });
    }
    return array;
  }

  addPatient(name, age) {
    let bedAvailable = this.beds.findIndex(bed => bed.available === true);
    console.log('Cama asignada numero: ' + this.beds[bedAvailable].bed);
    if (bedAvailable >= 0) {
      let newNode = new Node(name, age, this.beds[bedAvailable].bed);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
      }
      this.beds[bedAvailable].available = false;
      return;
    }
    throw Error("No hay camas disponibles");
  }

  removePatient(name) {
    if (!this.head) {
      return null;
    }
    if (this.head.name === name) {
      let bedAvailable = this.beds.findIndex(bed => bed.bed === this.head.bedNumber);
      this.beds[bedAvailable].available = true;
      this.head = this.head.next;
      this.length--;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.name === name) {
        let bedAvailable = this.beds.findIndex(bed => bed.bed === currentNode.next.bedNumber);
        this.beds[bedAvailable].available = true;
        currentNode.next = currentNode.next.next;
        this.length--;
        return;
      }
      currentNode = currentNode.next;
    }
    throw Error("Paciente no encontrado");
  }

  getPatient(name) {
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.name === name) {
        return { name: currentNode.name, age: currentNode.age, bedNumber: currentNode.bedNumber };
      }
      throw Error("Paciente no encontrado");
    }
  }

  getPatientList() {
    let currentNode = this.head;
    let patients = [];
    while (currentNode) {
      patients.push({ name: currentNode.name, age: currentNode.age, bedNumber: currentNode.bedNumber });
      currentNode = currentNode.next;
    }
    return patients;
  }

  getAvailableBeds() {
    let counter = 0;
    this.beds.map(bed => {
      if (bed.available === true) {
        counter++;
      }
    });
    return counter;
  }
}
