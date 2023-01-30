
let enlaceBrowse = document.getElementById("enlaceBrowse")

function toggleAper() {
    enlaceBrowse.classList.toggle("open")
}



/* nombre del perfil */
var nombre = "5Li6V...3MxYq";
document.getElementById("nombreEscr").innerHTML = nombre;
document.getElementById("nombreEscr2").innerHTML = nombre;
document.getElementById("nombreEscr3").innerHTML = nombre;
/* el tema del cambio de border y de contenido en los botones del perfil */
/* DOCUMENTOS CON DETALLES DE CADA OPCION */

let optiondell1 = document.getElementById("options-detail1");
let dell1 = document.getElementById("cont-contenido1");
let dell2 = document.getElementById("cont-contenido2");
let datTexts = document.getElementById("contenedores-texts");
let datTexts2 = document.getElementById("contenedores-texts_2");

/* botones y bordes */

let bot1 = document.getElementById("bot1");
let bot2 = document.getElementById("bot2");
let bot3 = document.getElementById("bot3");
let bot4 = document.getElementById("bot4");

function detallesuno() {
    bot1.classList.remove("bordernone");
    bot2.classList.remove("border");
    bot3.classList.remove("border");
    bot4.classList.remove("border");
    optiondell1.classList.remove("closed")
    dell1.classList.remove("closed")
    dell2.classList.remove("open")
    datTexts.classList.remove("open");
    datTexts2.classList.remove("open")
}

function detallesdos() {
    bot1.classList.add("bordernone");
    bot2.classList.add("border");
    bot3.classList.remove("border");
    bot4.classList.remove("border");
    optiondell1.classList.add("closed")
    dell1.classList.add("closed");
    dell2.classList.add("open");
    datTexts.classList.remove("open");
    datTexts2.classList.remove("open");

}

function detallestres() {
    bot1.classList.add("bordernone");
    bot2.classList.remove("border");
    bot4.classList.remove("border");
    bot3.classList.add("border");
    optiondell1.classList.add("closed");
    dell1.classList.add("closed");
    dell2.classList.remove("open");
    datTexts.classList.add("open");
    datTexts2.classList.remove("open");

}

function detallescuatro() {
    bot1.classList.add("bordernone");
    bot2.classList.remove("border");
    bot3.classList.remove("border");
    bot4.classList.add("border");
    optiondell1.classList.add("closed");
    dell1.classList.add("closed");
    dell2.classList.remove("open");
    datTexts.classList.remove("open");
    datTexts2.classList.add("open");
}

let vieoptionsperfil = document.getElementById("sections-perfil");

function ClickPerfil() {
    vieoptionsperfil.classList.toggle("open")
}