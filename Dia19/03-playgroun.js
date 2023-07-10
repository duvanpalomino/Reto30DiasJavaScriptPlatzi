import { Pay } from "./Pay.class.js";

export class Card extends Pay {
  // Tu código aquí 👈
  constructor(number) {
    super()
    this.number = number;
  }
  
  makePay(quantity) {
    try {
      if (this.number.length !== 16) {
        throw new Error('El numero de la tarjeta no es correcto');
      }

      return {
        ...super.makePay(quantity),
        lastCardNumber: this.number.slice(-4)
      }
    } catch (e) {
      throw new Error(e);
    }
  }
}

import { Pay } from "./Pay.class.js";

export class Cash extends Pay {
  // Tu código aquí 👈
  makePay(quantity) {
    return {
      ...super.makePay(quantity)
    }
  }
}

export class Pay {
  // Tu código aquí 👈
  makePay(quantity) {
    let amountToPay;
    return {
      realized: true,
      quantity: quantity
    }
  }
}

import { Pay } from "./Pay.class.js";

export class PayPal extends Pay {
  // Tu código aquí 👈
  constructor(email) {
    super()
    this.email = email;
  };

  makePay(quantity) {
    return {
      ...super.makePay(quantity),
      platform: 'PayPal',
      email: this.email
    }
  }
}

export function processPay(method, quantity) {
  // Tu código aquí 👈
  return method.makePay(quantity);
}
