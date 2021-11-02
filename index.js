// ELEMENTOS DEL DOM

const spanLightMode = document.querySelector(".button-fa-sun");
const spanDarkMode = document.querySelector(".button-fa-moon");
const buttonDarkLigthMode = document.querySelector(".button-dark-mode");
const buttonContactMe = document.querySelector("#b-contact")


buttonDarkLigthMode.onclick = () => {
spanLightMode.classList.toggle("button-none")
spanDarkMode.classList.toggle("button-none")
}

buttonContactMe.onclick = () => {
window.location.hash = "contacto"
}
