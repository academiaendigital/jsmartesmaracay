function listadoFrutas(fruta1, fruta2, ...todasfrutas) {
  console.log("La fruta 1 es", fruta1);
  console.log("La fruta 2 es", fruta2);
  console.log(todasfrutas);
}

//PARAMETROS REST
listadoFrutas("fresa", "cambur", "patilla", "durazno", "melon", "guayaba");


var frutas2 = ["mango", "uvas", "kiwi"]; //array
///parametros SPREAD //convierto un arreglo en un parametro
listadoFrutas(...frutas2, "fresa", "cambur", "patilla");

function marcaMovil(marca1, marca2,...todas){
  console.log(marca1);
  console.log(marca2);
  console.log(todas);
}
marcaMovil("ford", "toyota", "fiat", "audi", "mercedes benz");

let marcasVenezolanas=["LA Reina", "La 4x4", "La toyobobo"];
marcaMovil(...marcasVenezolanas, "toyota", "fiat", "audi", "mercedes benz" );