export class Subscriber {
  // Tu código aquí 👈
  constructor(email) {
    this.email = email;
  };

  receive(article) {
    console.log(`El usuario con correo ${this.email} ha recibido el articulo ${article.title}`);
  }
}

//

export class Newsletter {
  // Tu código aquí 👈
  constructor() {
    this.subscribers = [];
  };
  
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  };

  unsubscribe(email) {
    let indexToRemove = this.subscribers.findIndex((subscribe) => subscribe.email === email);
    console.log(indexToRemove);
    return this.subscribers.splice(indexToRemove, 1);
  }

  post(article) {
    this.subscribers.forEach(subscriber => subscriber.receive(article));
  }
}
