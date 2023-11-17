
let citas=document.getElementById("cita");
let boton=document.getElementById("boton-cambiar-cita")
let autor=document.getElementById("autor")

function elementoAleatorio(min,max){
    return Math.floor(Math.random()*(max-min)+min)
}
console.log(elementoAleatorio(0,5))

function cambiarCita(){
    let indiceAleatorio=elementoAleatorio(0,citasMotivadoras.length);
    citas.innerText=`"${citasMotivadoras[indiceAleatorio].texto}"`;
    autor.innerText=citasMotivadoras[indiceAleatorio].autor;
}



cambiarCita()

boton.addEventListener("click",(e)=>{
   return cambiarCita()
})