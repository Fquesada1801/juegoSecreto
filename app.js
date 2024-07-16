//let titulo = document.querySelector('h1'); //document es una funcion para conectar etiquetas de HTML con Javascript
//titulo.innerHTML = 'Juego del numero secreto';

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un numero del 1 al 10';

let numeroSecreto = generarNumeroSecreto(); //Numero secreto guarda el valor que se genere en la funcion.
let intentos = 1;

function asignarTextoElemento(elemento, texto) { //Esta funcion sirve para sustituir el querySelector de arriba y de esta manera reducir el codigo
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;
}

//Logica para la funcion del boton "Intentar"
function verificarDeUsuario() { 
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value); //Se obtiene por medio del Id colocado en la etiqueta HTML
    //console.log(typeof(numeroDeUsuario));//Typeof se utiliza para ver que tipo de dato muestra una variable
    //console.log(numeroSecreto);
    //console.log(typeof(numeroSecreto));
    //console.log(numeroDeUsuario);
    //console.log(numeroDeUsuario === numeroSecreto); //El triple === valida que sea igual en el tipo de dato y en el valor.
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        //La siguiente linea es para desactivar el atributo "disabled" para que se active el boton "Nuevo juego" cuando se acierta el numero.
        document.getElementById('reiniciar').removeAttribute('disabled'); 
    }else {
        //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento("p","El numero secreto es menor");
        }else {
        asignarTextoElemento("p","El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = "";
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del numero secreto");
    asignarTextoElemento("p","Indica un numero del 1 al 10");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
//Primero limpiamos la caja
    limpiarCaja();

//Indicar mensaje de intervalo de numeros //Generar el numero aleatorio //Inicializiar el numero de intentos
    condicionesIniciales();
    
//Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();