// METODOS EN OBJETOS
//UN METODO ES UNA FUNCION DENTRO DE UNA PROPIEDAD DE UN OBJETO
let  reproducir="";
let mostrar="";
let pausar ="";
let borrar ="";
let crearPlay = "";
let reproducirPlay= "";
const reproductor = {
  reproducir: function(id) {
    console.log(`Reproduciendo canción id ${id}`);
    reproducir+="Reproduciendo canción id" + id;
    document.getElementById("reproducir").innerHTML =reproducir;
  },
  mostrar: function (nombreCancion) {
    console.log(`La cancion ${nombreCancion}fue agregada a la Playlist `);
     mostrar+="Reproduciendo canción id" + nombreCancion;
    document.getElementById("mostrar").innerHTML =mostrar;
  },
  pausar: function (id) {
    console.log(`pausando...la cancion con el id ${id}`);
    pausar+="Reproduciendo canción id" + id;
    document.getElementById("pausar").innerHTML =pausar;
  },
  borrar: function (id) {
    console.log(`Borrando canción con id: ${id}`);
    borrar+="Reproduciendo canción id" + id;
    document.getElementById("borrar").innerHTML =borrar;
  },
  crearPlaylist: function (nombre) {
    console.log(`Creando la Playlist ${nombre}`);
    crearPlay+="Reproduciendo canción id" + nombre;
    document.getElementById("crearPlay").innerHTML =crearPlay;
  },
  reproducirPlaylist: function (nombre) {
    console.log(`Reproduciendo la Playlist ${nombre}`);
    reproducirPlay+="Reproduciendo canción " + nombre;
    document.getElementById("reproducirPlay").innerHTML =reproducirPlay;
  },
};

reproductor.crearPlaylist("Rock and Roll");
reproductor.reproducirPlaylist("Rock and Roll");
reproductor.mostrar("Mistery Train");
reproductor.borrar(15);


