// ELEMENTOS DEL DOM

const spanLigthMode = document.querySelector(".button-fa-sun");
const spanDarkMode = document.querySelector(".button-fa-moon");
const buttonDarkLigthMode = document.querySelector(".button-dark-mode");

buttonDarkLigthMode.onclick = () =>{
    spanLigthMode.classList.toggle("button-none")
    spanDarkMode.classList.toggle("button-none")
}

let numeros = [10, 7, 10]

const suma = numeros.reduce ((acc, numero) =>{ 
    return (numero / 3) + acc
     // return acc + (numero / numeros.length)
}, 0)

console.log(suma)
