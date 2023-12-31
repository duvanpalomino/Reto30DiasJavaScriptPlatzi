export class Car {
  constructor(brand, model, year, mileage, state) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.state = state;
  };
  turnOn() {
    this.state = true;
  };
  turnOff() {
    this.state = false;
  };
  drive(kilometers) {
    if (this.state) {
      this.mileage += kilometers
    } else {
      throw new Error('El auto está apagado');
    }
  }
}