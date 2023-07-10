// El patrón Observer en JavaScript es un patrón de diseño que permite que un objeto mantenga una lista de sus dependientes y notifique a ellos automáticamente cualquier cambio.
// Este patrón es útil cuando necesitamos que varios objetos reciban notificaciones de cambios en un objeto determinado.

// Clase Observador
class Observador {
	constructor(nombre) {
		this.nombre = nombre;
	}
	notificar(cambio) {
		console.log(`${this.nombre} ha sido notificado del cambio: ${cambio}`);
	}
}

// Clase Observable
class Observable {
	constructor() {
		this.observadores = [];
	}

	registrarObservador(observador) {
		this.observadores.push(observador);
	}
	notificarCambio(cambio) {
		this.observadores.forEach(observador => {
			observador.notificar(cambio);
		});
	}
}
// Uso
const observable = new Observable();
const observador1 = new Observador("Observador 1");
const observador2 = new Observador("Observador 2");

observable.registrarObservador(observador1);
observable.registrarObservador(observador2);

observable.notificarCambio("Cambio en el objeto principal");
// Observador 1 ha sido notificado del cambio: Cambio en el objeto principal
// Observador 2 ha sido notificado del cambio: Cambio en el objeto principal