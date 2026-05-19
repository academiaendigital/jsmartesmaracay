//function suma(n1,n2=3){
    //conjunto de instrucciones que ejecuta la funcion
  //console.log(`La suma de ${n1} mas ${n2} es igual a ${n1+n2}`);
 
//}
//suma(15,25);//invoca una funcion 



function porConsola(n1, n2) {
  /*parametros*/
  console.log(`La suma es  ${n1 + n2}`);
  console.log(`La resta  es   ${n1 - n2}`);
  console.log(`a multiplicacion es "${n1 * n2}`);
  console.log(`La division es   ${n1 / n2}`);
  console.log(`*****************`);
}
//porConsola(15,35);

let suma ="";
let multi="";
let resta="";
let divi= "";


function porPantalla(n1, n2) {
  suma += `la suma de dos números es:  ${n1 + n2}`;
  document.getElementById("suma").innerHTML = suma;

  multi += `la multiplicación de dos números es: ${n1 * n2}`;
  document.getElementById("multi").innerHTML = multi;

  divi += `la división de dos números es: ${n1 / n2}`;
  document.getElementById("divi").innerHTML = divi;

  resta += `la resta de dos números es: ${n1 - n2}`;
  document.getElementById("resta").innerHTML = resta;
}
//porPantalla(84,65);

function calculadora(n1, n2, mostrar = false) {
  //conjunto de instrucciones que va ejecutar esa funcion

  if (mostrar == false) {
    porConsola(n1, n2);
  } else {
    porPantalla(n1, n2);
  }
  return true;
}
calculadora(5, 10, true);