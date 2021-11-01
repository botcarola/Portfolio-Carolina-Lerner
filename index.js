// ELEMENTOS DEL DOM

const spanLigthMode = document.querySelector(".button-fa-sun");
const spanDarkMode = document.querySelector(".button-fa-moon");
const buttonDarkLigthMode = document.querySelector(".button-dark-mode");
const buttonContactMe = document.querySelector("#b-contact")


buttonDarkLigthMode.onclick = () => {
    spanLigthMode.classList.toggle("button-none")
    spanDarkMode.classList.toggle("button-none")
}

buttonContactMe.onclick = () => {
    window.location.hash = "contacto"

}
