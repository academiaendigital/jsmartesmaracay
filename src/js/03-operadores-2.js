 //OPERADORES DE COMPARACION OR Y AND
let fechaNac= 1996;
if(fechaNac>=1995 && fechaNac<= 2010){ // ambas condiciones se deben cumplir si o si
    console.log("eres generacion z ");

}else{
 console.log("eres de otra generacion");
} 

//al menos una de las dos condiciones sea verdadera se ejecuta la instruccion del codigo if 
let fechaNac2= 2011;
if(fechaNac2>=1995 || fechaNac2<= 2010){
    console.log("eres generacion z ");

}else{
 console.log("eres de otra generacion");
} 
