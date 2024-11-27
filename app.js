/**
 * Muestra el primer formulario; el de los datos
 * básicos de envío.
 */
function mostrarPrimero() {
    document.getElementById('cont-formulario-1').style.display = 'block'
}

/**
 * Muestra el segundo formulario, el de 
 * las empresas que pueden enviar el paquete,
 * únicamente cuando el usuario haya llenado completamente el primer formulario.
 */
function mostrarEmpresas() {
    // Obteniendo las entradas del formulario
    const ancho = document.getElementById('ancho').value
    const alto = document.getElementById('alto').value
    const largo = document.getElementById('largo').value
    const peso = document.getElementById('peso').value
    const postalOrigen = document.getElementById('postal-origen').value
    const postalDestino = document.getElementById('postal-destino').value

    // No permitir avanzar hasta que se haya llenado todo
    if (!ancho || !alto || !largo || !peso || !postalOrigen || !postalDestino) {
        alert('ERROR: Llena todos los campos del formulario antes de continuar.')
        return
    }

    // Mostrar la parte de las empresas de paquetería
    const form2 = document.getElementById('cont-formulario-2')
    form2.style.display = 'block'
    form2.scrollIntoView({ behavior: 'smooth' });
}

function mostrarFormDatosPersonales() {
    const form3 = document.getElementById('cont-formulario-3')
    form3.style.display = 'block'
    form3.scrollIntoView({ behavior: 'smooth' });
}

function enviar() {
    const remitente = document.getElementById('nombre-remitente').value;
    const destinatario = document.getElementById('nombre-destinatario').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;

    if (!remitente || !destinatario || !direccion || !telefono || !email) {
        alert('ERROR: Llena todos los campos del formulario antes de continuar.');
        return;
    }

    alert('Datos enviados correctamente.');
}