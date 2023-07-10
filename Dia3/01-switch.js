// switch (variable) {
// 	case valor1:
// 	  // código a ejecutar si variable es igual a valor1
// 	  break;
// 	case valor2:
// 	  // código a ejecutar si variable es igual a valor2
// 	  break;
// 	default:
// 	  // código a ejecutar si variable no es igual a ninguno de los valores anteriores
// }

const dia = "lunes";
switch (dia) {
  case "lunes":
    console.log("Hoy es lunes");
    break;
  case "martes":
    console.log("Hoy es martes");
    break;
  case "miercoles":
    console.log("Hoy es miércoles");
    break;
  default:
    console.log("Hoy no es lunes, martes o miércoles");
};

let numero = "12";
switch (true) {
  case numero > 100:
    console.log("El valor es mayor a 100");
    break;
  case numero % 2 === 0:
    console.log("El valor es multiplo de 2");
    break;
  default:
    console.log("El valor no cumple con ninguna de las características");
};

export function getPetExerciseInfo(type, age) {
  // Tu Código aquí 👈
  switch (type) {
    case 'perro':
      if (age < 1) {
        return 'Los cachorros necesitan pequeñas y frecuentes sesiones de juego';
      }
      else if (age > 1 && age < 7) {
        return 'Los perros a esta edad necesitan caminatas diarias y sesiones de juego'
      }
      else {
        return 'Los perros viejos necesitan caminatas más cortas';
      }
      break;
    case 'gato':
      if (age < 1) {
        return 'Los gatitos necesitan frecuentes sesiones de juego';
      }
      else if (age > 1 && age < 7) {
        return 'Los gatos a esta edad necesitan jugar diariamente'
      }
      else {
        return 'Los gatos viejos necesitan sesiones de juego más cortas';
      }
      break;
    case 'ave':
      if (age < 1) {
        return 'Las aves jóvenes necesitan mucho espacio para volar';
      }
      else if (age > 1 && age < 7) {
        return 'Las aves necesitan jugar diariamente y un lugar para volar'
      }
      else {
        return 'Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar';
      }
      break;
    
    default:
      return 'Tipo de mascota inválida';
  }
}

