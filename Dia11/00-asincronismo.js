// Promesas
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(42);
  }, 2000);
});

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ number: 42, text: "hello" });
  }, 2000);
});

promise1
  .then((result) => {
    const doubledNumber = result.number * 2;
    return doubledNumber.toString();
  })
  .then((result) => {
    console.log(`The result is ${result}`);
  })
  .catch((error) => {
    console.error(error);
  });


// Temporizadores
setTimeout(() => {
  console.log('Han pasado 5 segundos');
}, 5000);

let id = setTimeout(() => {
  console.log('Han pasado 5 segundos');
}, 5000);

// Cancelar el temporizador
clearTimeout(id);

setInterval(() => {
  console.log('Han pasado 2 segundos');
}, 2000);

function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
			const seconds = ms / 1000
      resolve(seconds);
    }, ms);
  });
}

// ejemplo de uso
wait(2000).then((seconds) => {
  console.log(`Han pasado ${seconds} segundos`);
});

function wait(ms) {
  return new Promise((resolve, reject) => {
    if (ms < 0) {
      reject(new Error("El número de milisegundos no puede ser negativo"));
    } else {
      setTimeout(() => {
				const seconds = ms / 1000
        resolve(seconds);
      }, ms);
    }
  });
}

// ejemplo de uso
wait(-2000)
  .then((seconds) => {
    console.log(`Han pasado ${seconds} segundos`);
  })
  .catch((error) => {
    console.error(error.message);
		// El número de milisegundos no puede ser negativo
  });