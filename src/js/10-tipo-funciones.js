"use strict";
/* FUNCIONES DE DECLARACION */

function suma(a, b) {
  console.log(`La suma de ${a}+ ${b} es igual a= ${a + b}`);
}
suma(25, 36);

/* FUNCIONES DE EXPRESION */

const suma2 = function (c, d) { 
    console.log(`La suma de ${c}+ ${d} es igual a= ${c + d}`);
};

suma2(44, 36);





//diferencia entre un metodo - funcion 
let n1 = 15;
let n2 = 20;
let n3 = "55";

console.log(parseInt(n1)); // esto es una funcion porque coloco el nombre de la funcion
//  acompañada de ()= nombreFunction() antes de la variable;
console.log(n1.toString()); // esto es un método va despues de una variable -- convierte un numero a string
console.log(parseInt(n3)); // esto metodo me convierte en numeros un string



//INCREMENTADORES EN JAVA SCRIPT
var b = 15;
var c = "15";
console.log(`Incrementa en 1 ${b++}`);
console.log(`Incrementa en 1 ${b++}`);
console.log(`Incrementa en 1 ${b++}`);
//console.log(b++);
console.log(++b);/* incrementa de 2 en 2 */
console.log(`Decrementa en 1 ${--b}`); /*decrementar */
/* operadores estrictos de comparacion */
var compruebo = b !== c; //valido que sean distingo tanto en varlor
//  como en tipo de datos
var compruebo2 = b === c; //comprobar que dos variables tengan
//  tanto el mismo valor como que sean del mismo tipo de datos
console.log(compruebo); /*true*/
console.log(compruebo2);  /*false*/
