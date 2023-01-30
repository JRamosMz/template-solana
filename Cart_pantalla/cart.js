
let comprar_este = document.getElementById("comprar-este")
let nav = document.getElementById("cont-nav")
let small_screen = document.getElementById("small_creen")

function mover_trash() {
    comprar_este.classList.toggle("desaparecer")
}

function conectWallet() {
    nav.classList.add("closed");
    small_screen.classList.add("open")
}

function salir_small_screen() {
    nav.classList.remove("closed");
    small_screen.classList.remove("open")
}

// aqui se ejecutaran las funciones que harán que entre a mi sesión y borre algunos elementos y cambie otros

let botconnectWallet2 = document.getElementById("boton-conectWallet")
let botInicioSesion = document.getElementById("content-boton_sesion_iniciada")
let content_screen = document.getElementById("contentsmall_screen")
let title_small_screen = document.getElementById("titlesmall_screen")
let img_small_screen = document.getElementById("imgsmall_screen")
let ball_rotate = document.getElementById("lds-rotator")
let get_Start2 = document.getElementById("get_Start")
let options_screen = document.getElementById("optionssmall_screen")
let salir_screen = document.getElementById("salirsmall_screen")


function getStart2() {
  botconnectWallet2.classList.add("closed")
  botInicioSesion.classList.add("open")
  content_screen.classList.add("reduce")
  title_small_screen.classList.add("closed")
  img_small_screen.classList.add("closed")
  ball_rotate.classList.add("open")
  get_Start2.classList.add("closed")
  options_screen.classList.add("closed")
  salir_screen.classList.add("closed")
  setTimeout(() => {
    ball_rotate.classList.remove("open");
    small_screen.classList.remove("open");
    nav.classList.remove("closed");
 }, 3000);
}

/* secciones del perfil, vierprofile disconnect etc */

let vieoptionsperfil = document.getElementById("sections-perfil");

function ClickPerfil() {
    vieoptionsperfil.classList.toggle("open")
}

/* nombre del perfil */
var nombre = "5Li6V...3MxYq";
document.getElementById("nombreEscr").innerHTML=nombre;