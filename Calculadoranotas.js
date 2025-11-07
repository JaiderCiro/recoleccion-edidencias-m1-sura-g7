let notaProyectos = null;
let notaParcial = null;
let notaFinal = null;
let opcion;


do {
  opcion = prompt("Bienvenid@ a la calculadora de notas full stack\n\n Menu principal\n Ingresa una opcion: \n1 - Ingrese nota del proyecto \n2 - Ingresa nota del examen parcial\n3 - Ingresa nota del examen final \n4 - Calcular nota definitiva \n5 - Salir");

  switch (opcion) {
    case "1":
      notaProyectos = prompt("Ingrese la nota de Proyectos (0 a 5):");
      if (notaProyectos >= 0 && notaProyectos <= 5) {
        console.log("Nota guardada correctamente: " + notaProyectos);
      } else {
        console.log("Nota no valida, debe ser entre 0 y 5.");
        notaProyectos = null;
      }
      break;

    case "2":
      notaParcial = prompt("Ingrese la nota del Examen Parcial (0 a 5):");
      if (notaParcial >= 0 && notaParcial <= 5) {
        console.log("Nota guardada correctamente: " + notaParcial);
      } else {
        console.log("Nota no valida, debe ser entre 0 y 5.");
        notaParcial = null;
      }
      break;

    case "3":
      notaFinal = prompt("Ingrese la nota del Examen Final (0 a 5):");
      if (notaFinal >= 0 && notaFinal <= 5) {
        console.log("Nota guardada correctamente: " + notaFinal);
      } else {
        console.log("Nota no valida, debe ser entre 0 y 5.");
        notaFinal = null;
      }
      break;

    case "4":
      if (notaProyectos === null) {
        console.log("Aún no ha ingresado la nota de Proyectos.");
      } else if (notaParcial === null) {
        console.log("Aún no ha ingresado la nota de Examen Parcial.");
      } else if (notaFinal === null) {
        console.log("Aún no ha ingresado la nota de Examen Final.");
      } else {
        let definitiva = (notaProyectos * 0.4) + (notaParcial * 0.3) + (notaFinal * 0.3);
        console.log("Definitiva: " + definitiva);

        if (definitiva >= 4.6) {
          console.log("Estado: Excelente");
        } else if (definitiva >= 3.0 && definitiva <= 4.5) {
          console.log("Estado: Aprueba");
        } else if (definitiva >= 2.0 && definitiva <= 2.9) {
          console.log("Estado: Recupera");
        } else {
          console.log("Estado: Reprueba");
        }
      }
      break;

    case "5":
      console.log("Saliendo...");
      break;

    default:
      console.log("Opción no valida. Intente nuevamente.");
  }

} while (opcion !== "5");
