'use strict';

let estudiantes = [{
    nombre:"Sofia",calificaciones:[90,87,65,43]
},{
    nombre:"Juan",calificaciones:[89,76,56,87]
},{
    nombre:"Sebastian",calificaciones:[76,89,75,68]
},{
    nombre:"Luisa",calificaciones:[98,76,56,83]
},{
    nombre:"Diana",calificaciones:[76,62,87,57]
},];

mostrarEstudiantes();
console.log("***********************************");
calcularPromedio(estudiantes);
console.log("***********************************");
obtenerMejorCalificacion(estudiantes);
console.log("***********************************");
obtenerPeorCalificacion(estudiantes);
console.log("***********************************");
agregarCalificacion("Sofia",34);
console.log("***********************************");
eliminarUltimaCalificacion("Pepito");
console.log("***********************************");
 filtrarEstudiantesAprobados(72);
 console.log("***********************************");
 ordenarEstudiantesPorNombre();
 console.log("***********************************");
 generarReporteIndividual("Sofia");

 function mostrarEstudiantes(){
    estudiantes.forEach(function(x){
    console.log("Estudiante: " + x.nombre + " sus calificaciones son " + x.calificaciones);
    });
}



 function calcularPromedio(calificaciones){
    let suma;
    let sumatoria;
    let promedio;
    let calif;
    let estud;
    for(let i=0;i<estudiantes.length;i++){
    suma = estudiantes[i].calificaciones.reduce(function(acumulador, puntuacionActual) {
    sumatoria = acumulador+puntuacionActual;
    // console.log(`Sumando: ${acumulador} + ${puntuacionActual}`+ "=" + sumatoria);
    return acumulador + puntuacionActual;
  },0);
    //   console.log("suma total: "+  sumatoria)
    estud=estudiantes[i].nombre;
    //   console.log(estud);
    calif=estudiantes[i].calificaciones.length;
    //   console.log(calif);
    promedio= parseInt(sumatoria) / parseInt(calif);
    //   console.log(promedio);
    console.log("Estudiante: " + estud + " su promedio de notas es " +Number(promedio.toFixed(2))
)};
}


 function obtenerMejorCalificacion(cali){
    let numeros,max;
    let estudi;
    for(let i=0;i<estudiantes.length;i++){
        numeros=cali[i].calificaciones;
        // console.log(numeros);
        // ... Elemento individuales de un array
        max = Math.max(...numeros);
        estudi=estudiantes[i].nombre;
     console.log("Estudiante: " + estudi + " su mejor calificacion es " + max)
     }  
 }

 function obtenerPeorCalificacion(cali){
    let numeros,max;
    let estudi;
    for(let i=0;i<estudiantes.length;i++){
        numeros=cali[i].calificaciones;
        // console.log(numeros);
        // ... Elemento individuales de un array
        max = Math.min(...numeros);
        estudi=estudiantes[i].nombre;
     console.log("Estudiante: " + estudi + " su peor calificacion es " + max)
     }  
 }

function agregarCalificacion(nombreEstudiante,nuevaCalificacion){
    let indiceNombre = estudiantes.findIndex(function(est){
    return est.nombre === nombreEstudiante;
  });

  let indice=parseInt(indiceNombre);
//   console.log(indice);
  let agreCalificacion;

//   console.log(estudiantes[indice].calificaciones);
    if(indice != -1){
        agreCalificacion= estudiantes[indice].calificaciones.push(nuevaCalificacion);
        console.log(`Se agregó la calificación ${nuevaCalificacion} al estudiante ${nombreEstudiante}`);
    }else {
        console.log("El estudiante no existe");
        }
}


function eliminarUltimaCalificacion(nombreEstudiante) {
  let indice = estudiantes.findIndex(function(est) {
    return est.nombre === nombreEstudiante;
  });

  if (indice !== -1) {
    let calificaciones = estudiantes[indice].calificaciones;

    //Validar que la variable que se recibe es un array, ademas se valida que el array sea mayor de 0 (Para validar que si tenga notas
    if (Array.isArray(calificaciones) && calificaciones.length > 0) {
      let eliCalificacion = calificaciones.pop();
      console.log(`Se eliminó la última calificación (${eliCalificacion}) del estudiante ${nombreEstudiante}.`);
    } else {
      console.log(`El estudiante ${nombreEstudiante} no tiene calificaciones.`);
    }

  } else {
    console.log(`El estudiante ${nombreEstudiante} no existe.`);
  }
}

function calcularPromedioIndividual(calificaciones) {
  if (!Array.isArray(calificaciones) || calificaciones.length === 0) {
    return 0;
  }

  const suma = calificaciones.reduce((a, b) => a + b, 0);
  return suma / calificaciones.length;
}


function filtrarEstudiantesAprobados(promedioMinimo) {
  const aprobados = estudiantes.filter(function(est) {
    const promedio = calcularPromedioIndividual(est.calificaciones);
    return promedio >= promedioMinimo;
  });

  aprobados.forEach(est => {
    const promedio = calcularPromedioIndividual(est.calificaciones);
    console.log("El estudiante: " + est.nombre + " cumple con el promedio mínimo " + promedioMinimo + " de: " + promedio);
  });

  return aprobados;
}


function ordenarEstudiantesPorNombre(){
for(let i=0;i<estudiantes.length;i++){
   let orden= estudiantes.sort((a,b)=> a.nombre.localeCompare(b.nombre));
  console.log("nombre: " + estudiantes[i].nombre + " , calificaciones " + estudiantes[i].calificaciones);
}
}

function calcularPromedioIndividual(calificaciones) {
  if (!Array.isArray(calificaciones) || calificaciones.length === 0) {
    console.error("Las calificaciones deben ser un arreglo no vacío.");
    return null;
  }

  const suma = calificaciones.reduce((acum, nota) => acum + nota, 0);
  return suma / calificaciones.length;
}



function obtenerMejorCalificacionIndividual(calificaciones) {
  if (!Array.isArray(calificaciones)) {
    console.error("Las calificaciones deben ser un arreglo.");
    return null;
  }
  return Math.max(...calificaciones);
}

function obtenerPeorCalificacionIndividual(calificaciones) {
  if (!Array.isArray(calificaciones)) {
    console.error("Las calificaciones deben ser un arreglo.");
    return null;
  }
  return Math.min(...calificaciones);
}

function generarReporteIndividual(nombreEstudiante){
  let indice = estudiantes.findIndex(function(est) {
    return est.nombre === nombreEstudiante;
  });
   window.nombreEstudiante = nombreEstudiante; 
   if (indice !== -1) {
     let calificaciones = estudiantes[indice].calificaciones;
      console.log("Nombre del estudiante: " + estudiantes[indice].nombre);
       if (Array.isArray(calificaciones) && calificaciones.length > 0) {
          console.log("Todas sus calificaciones: " + estudiantes[indice].calificaciones );
          console.log("Promedio de Calificaciones: " + calcularPromedioIndividual(estudiantes[indice].calificaciones));
          console.log("La Calificación más alta es: " + obtenerMejorCalificacionIndividual(estudiantes[indice].calificaciones));
      console.log("La Calificación más baja es: " + obtenerPeorCalificacionIndividual(estudiantes[indice].calificaciones));
       }else{
        console.log("El estudiante" + estudiantes[indice].nombre + "No tiene Notas")
       }
      }
    
}