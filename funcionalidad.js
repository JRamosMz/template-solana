let enlaceBrowse = document.getElementById("enlaceBrowse")
let sucesorbutton = document.getElementById("sucesor")
let comprar_este = document.getElementById("comprar-este")
let nav = document.getElementById("cont-nav")
let small_screen = document.getElementById("small_creen")

 function toggleAper() {
    enlaceBrowse.classList.toggle("open")
 }

 function cambiar() {
   sucesorbutton.classList.toggle("open2")
 }

 function mover_trash() {
  comprar_este.classList.toggle("desaparecer")
 }

 function conectWallet() {
   nav.classList.add("closed");
   small_screen.classList.add("open3")
 }

 function salir_small_screen() {
  nav.classList.remove("closed");
  small_screen.classList.remove("open3")
 }
