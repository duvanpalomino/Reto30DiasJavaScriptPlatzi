export class User {
  constructor(name) {
    // Tu código aquí 👈
    this.name = name;
    this.isLogged = false;
  }

  login() {
    // Tu código aquí 👈
    this.isLogged = true;
  }

  logout() {
    // Tu código aquí 👈
    this.isLogged = false;
  }

  isLoggedIn() {
    // Tu código aquí 👈
    return this.isLogged;
  }
}

export class MessagesProxy {
  constructor(messages, user) {
    this.messages = messages;
    this.user = user;
  }

  sendMessage(text) {
    if (this.user.isLoggedIn()) {
      this.messages.sendMessage(text);
    } else {
      throw new Error('Usuario no registrado');
    }
  }

  getHistory() {
    if (this.user.isLoggedIn()) {
      return this.messages.getHistory();
    } else {
      throw new Error('Usuario no registrado');
    }
  }
}

export class Messages {
  // No debes editar este código ❌
  constructor() {
    this.history = [];
  }

  sendMessage(text) {
    this.history.push(text);
  }

  getHistory() {
    return this.history;
  }
}