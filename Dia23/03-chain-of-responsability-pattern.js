// El patrón Chain of Responsibility en JavaScript es un patrón de diseño que permite la distribución de responsabilidades entre múltiples objetos. 
// Este patrón permite que varios objetos puedan manejar una solicitud sin tener que conocer a quién se está enviando la solicitud ni cuál es el objeto que la manejará finalmente.

// Clase base para las solicitudes
class Solicitud {
	constructor(tipo, cantidad) {
		this.tipo = tipo;
		this.cantidad = cantidad;
		this.siguiente = null;
	}
}

// Clase manejadora de solicitudes de descuentos
class DescuentoHandler {
	constructor() {
		this.siguiente = null;
	}

	solicitar(solicitud) {
		if (solicitud.tipo === "descuento") {
			console.log(`Se aplicó un descuento del 10% por un total de ${solicitud.cantidad * 0.1}`);
		} else if (this.siguiente !== null) {
			this.siguiente.solicitar(solicitud);
		}
	}
}

// Clase manejadora de solicitudes de envío gratis
class EnvioGratisHandler {
	constructor() {
		this.siguiente = null;
	}

	solicitar(solicitud) {
		if (solicitud.cantidad >= 500) {
			console.log("Se aplicó envío gratis");
		} else if (this.siguiente !== null) {
			this.siguiente.solicitar(solicitud);
		}
	}
}

// Uso
const descuentoHandler = new DescuentoHandler();
const envioGratisHandler = new EnvioGratisHandler();
descuentoHandler.siguiente = envioGratisHandler;

const solicitud = new Solicitud("descuento", 100);
descuentoHandler.solicitar(solicitud); 
// Se aplicó un descuento del 10% por un total de 10

const solicitud2 = new Solicitud("compra normal", 700);
descuentoHandler.solicitar(solicitud2); 
// Se aplicó envío gratis