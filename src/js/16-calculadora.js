
const calculadora = {
    sumar: function(n1, n2){
        console.log(`La suma de a: ${n1} mas b: ${n2}=`, n1 + n2);
        sumar+= `La suma de a: ${n1} mas ${n2}  es igual a  ${n1 +n2} `;
        document.getElementById("sumar").innerHTML = sumar;
    },
    multiplicar: function(n1, n2){
        console.log(`La multiplicacion de a: ${n1} por  b:${n2}`, n1*n2);
    },
    resta: function(n1, n2){
        console.log(`La resta de a: ${n1} menos  b:${n2}`, n1-n2);
    },
    division: function(n1, n2){
        console.log(`La division de a: ${n1} entre  b:${n2}`, n1/n2);
    }

}
calculadora.sumar(15,20);
//calculadora.multiplicar(55,50);
//calculadora.division(100,2);
//calculadora.resta(15,5);

