
const button = document.querySelector("button")

button.addEventListener("click", numberRamdom)


function numberRamdom() {

    const min = Math.ceil(document.querySelector("#input-number1").value)
    const max = Math.floor(document.querySelector("#input-number2").value)

   const result = Math.floor(Math.random() * (max-min + 1)) + min

   alert(result)

}