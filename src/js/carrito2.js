var compras = prompt("desea comprar algo?");
if (compras === "si") {
    console.log("BIENVENIDO A NUESTRA TIENDA");
}else {
    console.log("NO QUIERO COMPRAR");
}
const catalogo = [
    { id: 1, nombre: "camisa", precio: 100 },
    { id: 2, nombre: "pantalon", precio: 200 },
    { id: 3, nombre: "zapatos", precio: 300 }
];
const { id, nombre, precio } = catalogo[0];
console.log(catalogo[0].valor);
console.log(catalogo[1].nombre);

if (compras === "si") {
    mostrarCatalogo(catalogo);
} else {
    console.log("producto no valido");
}
let text = "";
for (let i = 0; i < catalogo.length; i++) {
    text += `ID: ${catalogo[i].id}, Nombre: ${catalogo[i].nombre}, Precio: ${catalogo[i].precio}\n`;
}
function mostrarCatalogo(catalogo) {
    console.log("Catalogo de productos:");
    catalogo.forEach(producto => {
        console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: ${producto.precio}`);
    });
}
var compras2 = prompt("ingresa el id del producto que deseas comprar entre el 0, 1 y 2");
switch (compras2) {
    case "0":
        console.log(`Has seleccionado el producto ${catalogo[0].nombre} con un precio de ${catalogo[0].precio}`);
        break;
    case "1":
        console.log(`Has seleccionado el producto ${catalogo[1].nombre} con un precio de ${catalogo[1].precio}`);
        break;
    case "2":
        console.log(`Has seleccionado el producto ${catalogo[2].nombre} con un precio de ${catalogo[2].precio}`);
        break;
    default:
        console.log("Producto inexistente");

        function porPantalla(catalogo) {
            console.log(`${catalogo.nombre[0]} - Precio: ${catalogo.precio[0]}`);
            console.log(`${catalogo.nombre[1]} - Precio: ${catalogo.precio[1]}`);
            console.log(`${catalogo.nombre[2]} - Precio: ${catalogo.precio[2]}`);
        } 
        porPantalla(catalogo);
}
const nombresCatalogo = ["Camisa", "Pantalon", "Zapatos"];

const titulosHTML = document.querySelectorAll(".producto h2");

titulosHTML.forEach((h2, index) => {
    if (nombresCatalogo[index]) {
        h2.innerText = nombresCatalogo[index];
    }
});