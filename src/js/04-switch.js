//CREA UNA PROGRAMA QUE SEGUN TU FECHA DE NACIMIENTO TE DIGA DE QUE GENERACION ERES

//
const fechaNac= 1984;
switch (true) {
    case fechaNac >= 1981 && fechaNac <=1996:
        console.log(`Eres generacion Milenial y naciste en el año ${fechaNac}`);
        break;
    case fechaNac >= 1997 && fechaNac <=2012:
        console.log(`Eres generacion Centenial (z) y naciste en el año ${fechaNac}`); 
        break;
    case fechaNac >= 2013 && fechaNac <=2020:
        console.log(`Eres generacion alfa y naciste en el año ${fechaNac}`);  
        break;

    default:
        console.log(`Lo sentimos naciste en una  fecha diferente, no tengo registro `);
        break;
    
}

//CREA UN PROGRAMA QUE SEGUN LA CIUDAD DE DONDE NACISTE TE INDIQUE EL GENTILICIO 
const ciudad= "maracay";
switch(true){
    case ciudad==="caracas":
        console.log(`Naciste en ${ciudad} entonces eres caraqueño/a`);
        break;
     case ciudad==="maracay":
        console.log(`Naciste en ${ciudad} entonces eres maracayero/a`);
        break;
    case ciudad==="valencia":
        console.log(`Naciste en ${ciudad} entonces eres valenciano/a`);
        break;
    case ciudad==="barquisimeto":
        console.log(`Naciste en ${ciudad} entonces eres guaro/a`);
        break;
     case ciudad==="maracaibo":
        console.log(`Naciste en ${ciudad} entonces eres maracgucho/a`);
        break;
    default:
        console.log(`no tengo registro de la ciudad de donde naciste, descozco como llamarte`);
        break;
}
//CREAR UN PROGRAMA PARA VALIDAR EL INGRESO AL SISTEMA 

const usuario ="rodrigo";
const password="123abc4";
const rol= "invitado";
switch(true){
    case usuario==="rodrigo" && password ==="123abc" && rol==="admin":
        console.log(`Hola ${usuario} eres ${rol} bienvenido al Sistema Endigital`);
        break;
    case usuario==="rodrigo" && password ==="123abc" && rol==="invitado":
        console.log(`Hola ${usuario} eres ${rol} bienvenido al Sistema Endigital`);
        break;
        case usuario==="rodrigo" && password ==="123abc" && rol==="escritor":
        console.log(`Hola ${usuario} eres ${rol} bienvenido al Sistema Endigital`);
        break;
    default:
        console.log(`hey no eres un usuario registrado o alguna de tus credencias esta incorrecta`);
        break;     
}
