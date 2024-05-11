// querySelector
const heading = document.querySelector(".header__texto h2"); // 0 o 1 elementos
heading.textContent = "Nuevo heading";
// heading.classList.add('nueva-clase') // para agregar nueva class a un elemento de html

//queryselectorAll
const enlaces = document.querySelectorAll(".navegacion a");
console.log(enlaces[0]);
enlaces[0].textContent = "Nuevo texto para enlace"; //cambiamos el texto del enlace
enlaces[0].href = "https://google.com"; //cambiamos la direccion del enlace
enlaces[0].classList.add("nueva-class"); //agregamos nueva class de estilos
enlaces[0].classList.remove("navegacion__enlace"); //quitamos una class de estilos

// generar un nuevo enlace
const nuevoEnlace = document.createElement("A");
//agregar el href
nuevoEnlace.href = "nosotros.html";

//agregar el texto
nuevoEnlace.textContent = "Tienda virtual";

//agregar la class
nuevoEnlace.classList.add("navegacion__enlace");

//agregarlo al DOM
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

//eventos
console.log(1);
window.addEventListener("load", function () {
  //load espera a que el JS  y los archivos que dependen del HTML estén listos
  console.log(2);
});
window.onload = function () {
  console.log(3);
};
document.addEventListener("DOMContentLoaded", function () {
  //DOMContenLoaded Solo espera por el HTML, pero no espera CSS o imagenes
  console.log(4);
});
console.log(5);

// window.onscroll = function(){
//     console.log('scrolling...');
// }

// Selecionar elementos y asociarles un evento

// const btnEnviar = document.querySelector('.boton--primario')
// btnEnviar.addEventListener('click',(evento)=>{
//     evento.preventDefault()
//    // Validar un formulario
//     console.log('enviando formulario');
// })

// Eventos de los Inputs y Textarea

const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};

const nombreInput = document.querySelector("#nombre");
const emailInput = document.querySelector("#email");
const mensajeInput = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombreInput.addEventListener("input", leerTexto);
emailInput.addEventListener("input", leerTexto);
mensajeInput.addEventListener("input", leerTexto);

// El evento de submit
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  //validar el formulario
  const { nombre, email, mensaje } = datos;
  console.log(nombre);
  console.log(email);
  console.log(mensaje);
  if (nombre === "" || email === "" || mensaje === "") {
    mostrarAlerta("Todos los campos son obligatorios", "error");
    return;
  }

  // crear la alerta de enviar

  //enviar el formulario
  mostrarAlerta('Mensaje enviado correctamente')

});

function leerTexto(e) {
  // console.log(e.target.value);
  datos[e.target.id] = e.target.value;
  console.log(datos);
}

//
function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P')
    alerta.textContent = mensaje

    if(error){
        alerta.classList.add('error')
    }else{
        alerta.classList.add('correcto')
    }

    
    formulario.appendChild(alerta)
     // Desaparece despues de 5 segundos
     setTimeout(() => {
        alerta.remove();
      }, 5000);
    
}

