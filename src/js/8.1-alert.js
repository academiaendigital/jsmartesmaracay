
var nombre = prompt("Introduce tu nombre");
var edad = parseInt(prompt("Introduce tu edad", 0));
console.log(`tu nombre es ${nombre} y tienes ${edad}`);

//let result=`tu nombre es ${nombre} y tienes ${edad}`;
//document.getElementById("text").innerHTML=result; 

function porPantalla(nombre, edad){
nombre +=`tu nombre es ${nombre} y tienes ${edad}`;
document.getElementById("text").innerHTML=nombre; 

};
porPantalla(nombre, edad);