const inputTexto = document.getElementById("input-texto");
const outputTexto = document.getElementById("output-texto");

const btnEncriptar = document.getElementById("btn-encriptar");
const btnDesencriptar = document.getElementById("btn-desencriptar");
const btnCopiar = document.getElementById("btn-copiar");

const reglasEncriptacion = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function encriptar() {
    let texto = inputTexto.value.toLowerCase();
    // Validación de entrada (solo letras minúsculas y sin acentos)
    if (!/^[a-z\s]+$/.test(texto)) {
        alert("Solo se permiten letras minúsculas y sin acentos.");
        return;
    }
    let textoEncriptado = texto.replace(/[eiaou]/g, letra => reglasEncriptacion[letra]);
    outputTexto.value = textoEncriptado;
}

function desencriptar() {
    let texto = inputTexto.value;
    for (const vocal in reglasEncriptacion) {
        const reemplazo = reglasEncriptacion[vocal];
        texto = texto.replaceAll(reemplazo, vocal);
    }
    outputTexto.value = texto;
}

function copiar() {
    outputTexto.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles!");
}

btnEncriptar.addEventListener('click', encriptar);
btnDesencriptar.addEventListener('click', desencriptar);
btnCopiar.addEventListener('click', copiar);