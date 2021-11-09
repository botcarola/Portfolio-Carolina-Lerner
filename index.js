// ELEMENTOS DEL DOM

const spanLightMode = document.querySelector(".button-fa-sun");
const spanDarkMode = document.querySelector(".button-fa-moon");
const buttonDarkLigthMode = document.querySelector(".button-dark-mode");
const buttonContactMe = document.querySelector("#b-contact")
const buttonProjects = document.querySelector("#buttonProjects")
const body = document.querySelector("body")


// MODO OSCURO

console.log("hola")

buttonDarkLigthMode.onclick = () => {
spanLightMode.classList.toggle("button-none")
spanDarkMode.classList.toggle("button-none")

if(spanDarkMode.classList.contains("button-none")){
    body.classList.remove("light-mode")
    body.classList.add("dark-mode")
} else {
    body.classList.remove("dark-mode")
    body.classList.add("light-mode")    
 }
}


// BOTONES && ENLACES DE ANCLA

const buttonWindowLocation = (boton, ancla) => {
boton.onclick = () => {
window.location.hash = ancla
}
}

buttonWindowLocation(buttonContactMe, "contacto")
buttonWindowLocation(buttonProjects, "proyectos")
