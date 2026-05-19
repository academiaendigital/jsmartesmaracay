"use strict";

var n1 = parseInt(prompt("Introduce un numero 1", 0));
var n2 = parseInt(prompt("Introduce un numero 2", 0));
//parseInt convierte en un entero lo que estoy recibiendo en el promt
console.log(n1, n2);
console.log(`La suma es ${n1 + n2}`);
console.log(`La multiplicacion de ${n1}  por ${n2} es ${n1 * n2}`);
console.log(`La division de ${n1}  entre ${n2} es ${n1 / n2}`);
console.log(`La resta de ${n1}  entre ${n2} es ${n1 - n2}`);

//programa debe solicitar al usuario dos numeros,
//  que me indique cual de los numeros introducidos es mayor que el otro
//si los dos numeros son iguales

// que imprima ambos numeros
//if else if  else
if (n1 > n2) {
  //n1 > n2
  console.log("El numero " + n1 + "es MAYOR QUE " + n2);
  //console.log("El numero " + n2 + "es MENOR QUE " + n1);
} else if (n1 === n2) {
  console.log("Los numeros son iguales");
} else {
  console.log("El numero " + n2 + "es mayor  QUE " + n1);
}
