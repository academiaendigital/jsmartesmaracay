const curso = {
  nombre: "programacion", //llave o propieda a la cual se le asigna un valor
  duracion: "40 horas", //cada llave de ir separada por coma y el valor
  //  asignado con dos puntos
  disponible: true,
  informacion: {
    modulos: 15,
    modalidad: {
      presencial: true,
      online: true,
    },
  },
};
console.log(curso);
console.log(curso.duracion);
console.log(curso.informacion.modalidad.presencial);
// desestructuracion de objetos - descomposicion de objetos 
const {duracion, disponible, informacion, informacion:{modulos, modalidad, modalidad:{presencial, online}}}= curso;
console.log(disponible);
console.log(`La modalidad es presencial ${presencial}`);






const Peliculas = {
    titulo: "Jurassic Park",
    duracion: "3 horas",
    genero: "Ciencia ficción",
    disponible: true,
    informacion: {
        director: "Steven Spielberg",
        año: 1993,
        idiomas:{
            español: true,
            inglés: true,
        }
    },
};
console.log(Peliculas);
console.log(Peliculas.duracion);
 const {titulo, genero, duracion, disponible,informacion, informacion: {director, idiomas, idiomas: {inglés}}} = Peliculas;
console.log(genero);
console.log(Peliculas.informacion.idiomas.español);

console.log(`la película es dirigida por: ${director}`);
console.log(`la película tiene audio en inglés: ${inglés}`);