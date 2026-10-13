//ejercicìo 1


const url = document.getElementById("url");
const info = document.getElementById("info");
const tam = document.getElementById("tam");
const tamm = document.getElementById("tamm");
const idm = document.getElementById("idm");

url.textContent = window.location.href;
info.textContent = navigator.userAgent;
tam.textContent = window.screen.availWidth;
tamm.textContent = window.screen.availHeight ;
idm.textContent = navigator.language;


//ejercicio 2

function mostrar() {
    const anchoVentana = document.getElementById("anchoVentana");
    const altoVentana = document.getElementById("altoVentana");
    const anchoVisible = document.getElementById("anchoVisible");
    const altoVisible = document.getElementById("altoVisible");

    anchoVentana.textContent = window.outerWidth;
    altoVentana.textContent = window.outerHeight;
    anchoVisible.textContent = window.innerWidth;
    altoVisible.textContent = window.innerHeight;
}


//ejercicio3
function volver() {
    if (window.history.length > 1) {
        window.history.back();
    }
}

function recargar() {
    window.location.reload();
}

//ejercicio4

let temporizador = null;
let segundos = 30;
function iniciar() {
    const contador = document.getElementById("contador");
    if (!contador) {
        return;
    }

    if (temporizador !== null) {
        return;
    }
    segundos = 30;
    contador.textContent = segundos;
    temporizador = setInterval(() => {
        segundos--;
        contador.textContent = segundos;

        if (segundos <= 0) {
            clearInterval(temporizador);
            temporizador = null;
            alert("¡Tiempo agotado!");
        }
    }, 1000);
}

function detener() {
    if (temporizador !== null) {
        clearInterval(temporizador);
        temporizador = null;
    }
    const contador = document.getElementById("contador");
    if (contador) {
        contador.textContent = "30";
    }
}

//ejercicio 5

let miVentana = null;

function abrirVentana() {
    miVentana = window.open( "miVentana");
    if (!miVentana) {
        alert("no se puede");
    }
}

function cerrarVentana() {
    if (miVentana) {
        miVentana.close();
        miVentana = null;
    }
}


