var compras = prompt("Deseas comprar", "si");


//Un array de objetos en JavaScript es una estructura de datos ordenada que almacena múltiples objetos dentro de una sola variable, definida usando corchetes []. Es ideal para gestionar conjuntos de datos complejos, como listas de usuarios, productos o mensajes, permitiendo acceder a cada objeto mediante su índice (empezando en 0) y manipularlos con métodos como push(), map(), o filter(

const catalogo = [
  //array de objetos
  { id: 1, nombre: "Pera", valor: 150 },
  { id: 2, nombre: "Mango", valor: 250 },
  { id: 3, nombre: "Lechoza", valor: 350 },
];
//const {id, producto, valor}= catalogo;
console.log(catalogo[1].valor);
console.log(catalogo[0].producto);

let text = "";

catalogo.forEach((producto) => { // <-- Añadida llave de apertura
    console.log(`Articulo: ${producto.nombre} Precio: ${producto.valor}`);
    
    // 2. Vamos sumando (concatenando) cada producto al string existente
    text += `Articulo: ${producto.nombre} - Precio: ${producto.valor} <br/>`;
});
document.getElementById("producto").innerHTML = text;

if (compras == "si") {
  mostrarCatalogo(catalogo);
} else {
  console.log("NO QUIERO COMPRAR");
}
//let text="";
function mostrarCatalogo(catalogo) {
  //console.log(catalogo);
  for (let i = 0; i < catalogo.length; i++) {
    console.log(catalogo[i]);
    let text="";
    text += catalogo[i] + "</br>";
    document.getElementById("producto").innerHTML = text;
  }

  var compras2 = parseInt(prompt(
    "Ingrese un id del producto a comprar entre: 1,2 y 3",
    1,
  ));
  switch(true){
    case compras2===1:
      console.log(`Haz agregado al carrito el producto ${catalogo[0].nombre} ${catalogo[0].valor} `);

      break;
    case compras2===2:
      console.log(`Haz agregado al carrito el producto ${catalogo[1].nombre} ${catalogo[1].valor}  `);  
      break;
    case compras2===3:
      console.log(`Haz agregado al carrito el producto ${catalogo[2].nombre} ${catalogo[2].valor}  `);  
      break;
    default:
      console.log(`no tengo nada en el carrito o no hay existencia`);
      break;
  }
  //console.log(`haz agregado al carrito el producto con el id ${compras2}`);
}
