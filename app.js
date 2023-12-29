

//creamos las citas
let citaAlbert="El unico mode de hacer un gran trabajo es amar lo que haces. <b>Steve Jobs</b>"
let citaJose  ="Tu actitud, no tu aptitud, determinara tu altitud. <b>Zig Ziglar</b>"
let citaA="El 80% del exito se basa simplemente en insistir. <b>Woody Allen</b>"
let citaB="No cuentes los dias, haz que los dias cuenten. <b>Muhamed Ali</b>"
let citaC="Si la oportunidad no llama, construlle una puerta. <b>Milton Berle</b>"
let citaD="Con autodisciplina casi todo es posible. <b>Theodore Roosevelt</b>"
//las añadimos a un array
let array =[citaAlbert,citaJose,citaA,citaB,citaC,citaD]
//obtenemos los elementos del DOM
const containerCitas = document.getElementById("cita")
const boton=document.getElementById("siguiente")

//Definimos la funcion que tomara las citas aleatoriamente del array
function aleatorio(){
    let objetivo= containerCitas.firstChild
    if (objetivo===null) {
        containerCitas.innerHTML(citaAlbert)
    }else{
        objetivo.remove()
        const randomIndex = Math.floor(Math.random() * array.length)
        containerCitas.innerHTML=array[randomIndex]
    }
}
boton.addEventListener("click",aleatorio)