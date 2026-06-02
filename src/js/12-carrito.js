// Supongamos que creamos un carrito de compras desde la consola,

const carrito = [];

// Añadir un elemento al carrito...
const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 500,
};

const producto2 = {
  nombre: "Celular",
  precio: 500,
};
const producto5 = {
  nombre: "Iphone",
  precio: 600,
};
carrito.push(producto); //añadimos llaves a un objeto
carrito.push(producto2);
carrito.push(producto5);
console.log(carrito);


const producto3 = {
  nombre: "Teclado",
  precio: 50,
};
carrito.unshift(producto3);//agrega de primerito

console.log(carrito);
