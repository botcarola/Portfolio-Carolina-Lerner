// DOM


const buttonDarkLigthMode = document.querySelector(".button-dark-mode");
const buttonContactMe = document.querySelector("#b-contact")
const buttonProjects = document.querySelector("#buttonProjects")
const body = document.querySelector("body")
const imgHeader = document.querySelector("#img-header")
const iconDarkMode = document.querySelector(".fa-moon")

// DARK/LIHGT MODE


buttonDarkLigthMode.onclick = () => {  
body.classList.toggle("dark-mode")
body.classList.toggle("light-mode") 
iconDarkMode.classList.toggle("fa-sun")

if(iconDarkMode.classList.contains("fa-sun")){
buttonDarkLigthMode.style.background = "rgb(33, 17, 77)"
imgHeader.src = "images/undraw_proud_coder_7ain.svg"
} 
else{
    buttonDarkLigthMode.style.background = "#660066"
    imgHeader.src = "images/undraw_proud_coder.svg"
}
}

// BUTTONS/LINKS

const buttonWindowLocation = (boton, ancla) => {
boton.onclick = () => {
window.location.hash = ancla
}
}

buttonWindowLocation(buttonContactMe, "contacto")
buttonWindowLocation(buttonProjects, "proyectos")
