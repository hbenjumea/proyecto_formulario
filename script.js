const submitFunction = (event) => {
    
    if(!validarFomulario()){
        event.preventDefault() // hace que se prevenga la actualizacion de la web
    }else{
        event.preventDefault() // hace que se prevenga la actualizacion de la web
        alert(
            'Los datos enviados fueron: \n' +
            'Nombre: ' + document.getElementById('name').value + '\n' +
            'Apelido: ' + document.getElementById('lastname').value + '\n' +
            'Documento: ' + document.getElementById('nuid').value + '\n' +
            'Email: ' + document.getElementById('email').value + '\n' +
            'Edad: ' + document.getElementById('age').value + '\n' +
            'Actividad: ' + document.getElementById('job').value + '\n' +
            'Nivel de estudio: ' + document.getElementById('studyLevel').value + '\n' 
        );
    }
}

// Escucha el envio del formulario
document.getElementById('formulario').addEventListener('submit', submitFunction)

function validarFomulario() {

    // Esto valida los campos de texto
    const camposTexto = document.querySelectorAll('input[type="text"]')
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

    // Esto vaida el campo de email
    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { // este regex valida que el formato del email sea valido
        ocultarError(errorEmail)
    }else{
        mostrarError(errorEmail, 'Ingrese un correo valido')
        validacionCorrecta = false;
    }

    // validacion de edad
    const edad = document.getElementById('age');
    const errorEdad = document.getElementById('errorAge');

    if (edad.value < 18) {
        mostrarError(errorEdad, 'Debe ser mayor de 18')
        validacionCorrecta = false;
    } else {
        ocultarError(errorEdad);
    }

    // validacion de la actividad

    const actividad = document.getElementById('job');
    const errorActividad = document.getElementById('errorJob');

    if (actividad.value == '') {
        mostrarError(errorActividad, 'Seleccione una actividad');
        validacionCorrecta = false;
    } else {
        ocultarError(errorActividad);
    }

    // validacio de nivel de estudio

    const nivelEstudio = document.getElementById('studyLevel');
    const errorNivelestudio = document.getElementById('errorStudyLevel')

    if (nivelEstudio.value == '') {
        mostrarError(errorNivelestudio, 'Seleccione un nivel de estudio');
        validacionCorrecta = false;
    } else {
        ocultarError(errorNivelestudio);
    }

    // validar termisno y condiciones

    const aceptoTerminos = document.getElementById('acceptTerminus');
    const errorAceptoTerminos = document.getElementById('errorAcceptTerminus');

    if (!aceptoTerminos.checked) {
        mostrarError(errorAceptoTerminos, 'Debes aceptar los ternminos');
        validacionCorrecta = false;
    } else {
        ocultarError(errorAceptoTerminos);
    }

    return validacionCorrecta;

}

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = "none";
}