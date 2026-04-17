const inputNombre = document.getElementById("inputNombre");
const inputCorreo = document.getElementById("inputEmail");
const inputMensaje = document.getElementById("inputMensaje");
const formulario = document.getElementById("form");

formulario.addEventListener("submit", event =>{

    let nombreIngresado = inputNombre.value.trim().toLowerCase();
    let correoIngresado = inputCorreo.value.trim();
    let mensajeIngresado = inputMensaje.value.trim();

    if(nombreIngresado === ""){
        alert("Debes ingresar tu nombre antes de enviar el formulario");
        event.preventDefault();
    }
    else if(!correoIngresado.includes("@") || !correoIngresado.includes(".com")){
        alert("Ingresa un correo valido");
        event.preventDefault();
    }
    else if(mensajeIngresado === ""){
        alert("Debes ingresar un mensaje antes de enviar el formulario");
        event.preventDefault();  
    }
    else{
        alert("Mensaje enviado exitosamente!!");
    }
})