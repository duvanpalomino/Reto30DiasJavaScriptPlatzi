import { User } from "./user";

export class Chat {
  // Tu código aquí 👈
  users = [];
  constructor() {
    if (!Chat.instance) {
      // this.users = [];
      Chat.instance = Object.freeze(this);
    }
    return Chat.instance;
  }
  

  sendMessage(message) {
    this.users.forEach((x) => x.receiveMessage(message));
    return true;
  }

  addUser(user) {
    if (user instanceof User) {
      this.users.push(user);
      return true;
    };
  };

  removeUser(name) {
    const deleted = this.users.findIndex((x) => x.name === name);
    this.users.splice(deleted, 1);
    return true;
  }
  
}