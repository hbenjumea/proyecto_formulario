const submitFunction = (event) => {
    event.preventDefault() // hace que se prevenga la actualizacion de la web
    validarFomulario();
}

// Escucha el envio del formulario
document.getElementById('formulario').addEventListener('submit', submitFunction)

function validarFomulario() {
    let camposTexto = document.querySelectorAll('input[type="text"]')
    let validacionCorrecta = true;

    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)) // error + id con la primera en mayuscula
        if (campo.value.length == '') {
            mostrarError(errorCampo, 'Es requerido')
            validacionCorrecta = false;
        }else if (campo.value.length > 0 && campo.value.length <3) {
            mostrarError(errorCampo, 'Debe tener al menos 3 caracteres')
            validacionCorrecta = false;
        }else{
            ocultarError(errorCampo)
        }
    })

}

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = "none";
}