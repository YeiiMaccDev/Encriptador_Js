// HTML References
const inputText = document.querySelector('#input-text');
const mensajeText = document.querySelector('#mensaje');

/* 
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
*/
const arrayCodigosEncriptado = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
]

function mostrarMensaje() {
    document.getElementById('mensaje').classList.remove('ocultar');
    document.getElementById('mensaje').classList.add('mostrar');
    
    if (document.getElementById('mensaje-nota')){
        document.getElementById('mensaje-nota').remove();
    }
}



const encriptarMensaje = (mensaje) => {
    mensaje = mensaje.toLowerCase();
    for (let i = 0; i < arrayCodigosEncriptado.length; i++) {
        if (mensaje.includes(arrayCodigosEncriptado[i][0])) {
            mensaje = mensaje.replaceAll(arrayCodigosEncriptado[i][0], arrayCodigosEncriptado[i][1]);
        }
    }
    return mensaje;
}



const desencriptarMensaje = (mensaje) => {
    mensaje = mensaje.toLowerCase();
    for (let i = 0; i < arrayCodigosEncriptado.length; i++) {
        if (mensaje.includes(arrayCodigosEncriptado[i][1])) {
            mensaje = mensaje.replaceAll(arrayCodigosEncriptado[i][1], arrayCodigosEncriptado[i][0]);
        }
    }
    return mensaje;
}



const encriptar = () => {
    if (inputText.value) {
        const mensajeEncriptado = encriptarMensaje(inputText.value);
        mensajeText.value = mensajeEncriptado;
        mostrarMensaje();
        inputText.value = '';
    } else {
        alert("Error: Mensaje vacío. Ingresar mensaje a encriptar ");
    }

}


const desencriptar = () => {
    if (inputText.value) {
        const mensajeDesencriptado = desencriptarMensaje(inputText.value);
        mensajeText.value = mensajeDesencriptado;
        inputText.value = '';
        mostrarMensaje();
    } else {
        alert("Error: Mensaje vacío. Ingresar mensaje ");
    }
    
   
}

const copiar = () =>  {
    mensajeText.select();

    navigator.clipboard
        .writeText(mensajeText.value)
        .then(() => {
            alert("Mensaje copiado: " + mensajeText.value);
            mensajeText.value = '';
        })
        .catch(() => {
            alert("Algo salio mal!");
        });

}

const pegar = () => {
    navigator.clipboard
        .readText()
        .then((clipText) => inputText.value = clipText)
        .catch(() => alert("Algo salio mal!"));
}

export {
    encriptar,
    desencriptar,
    copiar,
    pegar
}
