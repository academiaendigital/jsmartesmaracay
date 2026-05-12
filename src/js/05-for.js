const ciudad = ["Maracay", "Caracas", "La Guaira", "San Juan", "Valencia"];//arrays
//ARRAYS -estructura de datos tipo lista, ordenada y 
// de alto nivel, utilizada para almacenar
//  múltiples valores bajo un solo nombre de variable. 
// Son objetos especiales indexados numéricamente (empezando en 0),
//  lo que permite organizar, gestionar y acceder a colecciones de datos, 
// como números o cadenas, de manera eficiente
//console.log(ciudad[0]);
//console.log(ciudad[2]);
//console.log(ciudad);

// para (declaro o inicializo la variable; condicion ; i++ incrementar de 1 en 1)

// es una estructura de control que repite un 
// bloque de código un número determinado de veces, 
// ideal para iterar sobre arrays o secuencias numéricas
/// EJEMPLO  1 
for (let i = 0; i < ciudad.length; i++) {
  console.log(`La ciudad mas bonita del pais es ${ciudad[i]}`)  +"</br>";
  //conjunto de instrucciones que se debe ejecutar 
}

//EJEMPLO 2
const heroes =["batman", "hombre araña", "la mujer maravilla", "superman", "aquaman", "linterna verde"];
for (let x=0; x<heroes.length; x++){
    console.log(`Entre el top de 10 de mis superheroes favoritos tenemos a: ${heroes[x]}`);
}

//EJEMPLO 3 IMPRIMIR NUMERO DEL CERO AL  100 

for(let n=0;n<=100;n++){
    console.log(n);
}

//CREAR TABLA DE MULTIPLICAR DE CUALQUIER NUMERO
let base= 5;
base= 10;
console.log(`Tabla de multiplicación del ${base}`);
for(let y=0;  y<=10;y++){
        console.log(`El resultado ${base} por ${y} es igual= ${base*y}`);
}