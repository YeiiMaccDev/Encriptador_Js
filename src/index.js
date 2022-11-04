import './styles.css';

// funciones encriptador
import { encriptar, desencriptar, copiar, pegar } from './js/encriptador.js';

const btnEncriptar = document.getElementById('btnEncriptar');
const btnDesencriptar = document.getElementById('btnDesencriptar');
const btnPegar = document.getElementById('btnPegar');
const btnCopiar = document.getElementById('btnCopiar');

btnEncriptar.addEventListener('click',  () =>  encriptar() );
btnDesencriptar.addEventListener('click',  () =>  desencriptar() );
btnPegar.addEventListener('click',  () =>  pegar() );
btnCopiar.addEventListener('click',  () =>  copiar() );
