// Función para encriptar texto
function encriptarTexto() {
    const textoInput = document.getElementById('textoInput').value;
    const resultadoTexto = document.getElementById('resultadoTexto');

    const reglasEncriptacion = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    let textoEncriptado = '';

    // Recorremos cada letra en el texto
    for (let i = 0; i < textoInput.length; i++) {
        let letra = textoInput[i];

        // Verificamos si la letra está en las reglas de encriptación
        if (letra in reglasEncriptacion) {
            // Si está en las reglas, agregamos su versión encriptada al textoEncriptado
            textoEncriptado += reglasEncriptacion[letra];
        } else {
            // Si no está en las reglas, simplemente agregamos la letra al textoEncriptado sin cambios
            textoEncriptado += letra;
        }
    }

    // Mostramos el texto encriptado en el área de resultado
    resultadoTexto.innerText = textoEncriptado;
    ocultarImagen();
}

function desencriptarTexto() {
    // Obtener el valor del área de entrada de texto
    const textoInput = document.getElementById('textoInput').value;

    // Definir las reglas de desencriptación
    const reglasDesencriptacion = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    // Realizar el reemplazo directo de las palabras encriptadas
    let textoDesencriptado = textoInput;
    for (const palabraEncriptada in reglasDesencriptacion) {//aca recorre cada palabra de la oracion
        const expresionRegular = new RegExp(palabraEncriptada, 'g');//aca toma las expresiones regulares de cada palabra
        textoDesencriptado = textoDesencriptado.replace(expresionRegular, reglasDesencriptacion[palabraEncriptada])//aca toma las expresiones regulares y les reemplaza por la vocal segun las reglas de desencriptacion
    }

    // Mostrar el resultado desencriptado en el área de resultado
    document.getElementById('resultadoTexto').innerText = textoDesencriptado;//muestra la oracion desencriptada
    ocultarImagen();
}

function ocultarImagen() {
    // Ocultar la imagen y mostrar el área de texto
    document.getElementById('imagenResultado').style.display = 'none';
    document.getElementById('resultadoTexto').style.display = 'block';
}

function copiarResultado() {
    const resultadoTexto = document.getElementById('resultadoTexto').innerText;

    // Crear un área de texto temporal y agregar el texto al área
    const textarea = document.createElement('textarea');
    textarea.value = resultadoTexto;

    // Agregar el área de texto al DOM
    document.body.appendChild(textarea);

    // Seleccionar y copiar el texto
    textarea.select();
    document.execCommand('copy');

    // Eliminar el área de texto temporal
    document.body.removeChild(textarea);

    // Alerta o mensaje indicando que el texto se copió al portapapeles
    alert('Texto copiado al portapapeles');
}
