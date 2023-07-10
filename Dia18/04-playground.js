export class User {
  // Tu código aquí 👈
  constructor(name, age) {
    this._name = name;
    this._age = age;
    this._friends = [];
    this._messages = [];
  }

  addFriend(friend) {
    this._friends.push(friend);
    // console.log(friend)
  }

  sendMessage(message, friend) {
    this._messages.push(message);
    friend._messages.push(message);
  }

  showMessages() {
    return this._messages;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName === '') {
      return 'El nombre no puede estar vacio';
    } else {
      this._name = newName;
    }
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    if (newAge === null) {
      return 'La Edda no puede estar vacia';
    } else {
      this._age  = newAge;
    }
  }
}