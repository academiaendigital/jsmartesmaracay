function displayDate() {
  document.getElementById("demo2").innerHTML = Date();
}


const box = document.getElementById("box");

// Let box listen for mouseover
box.addEventListener("mouseover", function () {
  box.innerHTML = "Hey deja de colocar el mouse sobre mi";
});

// Let box listen for mouseout
box.addEventListener("mouseout", function () {
  box.innerHTML = "Adios!";
});


const name = document.getElementById("name");

// Let k listen for keydown
name.addEventListener("keydown", function (event) {
  document.getElementById("counter").innerHTML = "Tu presionaste: " + event.key;
});


//document.addEventListener("DOMContentLoaded", function () {
  //document.getElementById("bienvenido").innerHTML = "HTML ha cargado!";
//});


window.addEventListener("load", function () {
  document.getElementById("bienvenido").innerHTML = "HTML ha cargado!";
});


function upperCase() {
  const x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.style.color="#ece000";
  obj.style.fontSize="40px";
  obj.innerHTML = "Release Me";
}

function mUp(obj) {
  obj.style.backgroundColor="#2a1a48";
  obj.style.color="#ffff";
  obj.style.fontSize="40px";
  obj.innerHTML="gracias";
}

document.getElementById("myButton").addEventListener("click", myFunction);

function myFunction() {
  alert ("Comprameeeee");

}

function myFunction() {
   var element = document.getElementById("cambio");
   element.classList.remove("box2");
   element.classList.add("box3");
}

var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    /*escuchamos el evento click y ejecutamos la siguiente instruccion*/
    this.parentElement.querySelector(".nested").classList.toggle("active");
    /* seleccionamos el elemento .nested y agrregamos la clase active si vemos el css  */
    this.classList.toggle("caret-down");
    
  });
}