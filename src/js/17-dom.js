const boton = document.getElementById("calcular");
const resultado = document.getElementById("resultadoCal");

boton.addEventListener("click", function(){
    let num1 =  parseInt(document.getElementById("num1").value);
    let num2 =  parseInt(document.getElementById("num2").value);
    //console.log(num1);
    let  suma = `El resultado de  sumar ${num1}  mas ${num2} es igual  a ${num1 + num2}`;
   document.getElementById("resultadoCal").innerHTML = suma;
});

const num1 = 15;
const num2 = 30;
let suma = `El resultado de  sumar ${num1}  mas ${num2} es igual  a ${num1 + num2}`;
document.getElementById("resultadosuma").innerHTML=suma;
