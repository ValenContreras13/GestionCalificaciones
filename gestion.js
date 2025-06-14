'use strict';

let estudiantes = [{
    nombre:"Sofia",calificaciones:[90,87,65,43]
},{
    nombre:"Juan",calificaciones:[67,98,46,88]
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
agregarCalificacion("Pepito",34);

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


 function obtenerMejorCalificacion(){
    let numeros,max;
    let estudi;
    for(let i=0;i<estudiantes.length;i++){
        numeros=estudiantes[i].calificaciones;
        // console.log(numeros);
        // ... Elemento individuales de un array
        max = Math.max(...numeros);
        estudi=estudiantes[i].nombre;
     console.log("Estudiante: " + estudi + " su mejor calificacion es " + max)
     }  
 }

 function obtenerPeorCalificacion(){
    let numeros,max;
    let estudi;
    for(let i=0;i<estudiantes.length;i++){
        numeros=estudiantes[i].calificaciones;
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


