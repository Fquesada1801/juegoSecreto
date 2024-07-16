//*MISMO CODIGO AL ARCHIVO app.js PERO CON ARRAYS*//

//let titulo = document.querySelector('h1'); //document es una funcion para conectar etiquetas de HTML con Javascript
//titulo.innerHTML = 'Juego del numero secreto';

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un numero del 1 al 10';

let numeroSecreto = generarNumeroSecreto(); //Numero secreto guarda el valor que se genere en la funcion.
let intentos = 1;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

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

//Funcion con un Array
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya sorteamos todos los numeros
    if(listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya e sortearon todos los numeros posibles');
    }else{
        //Si el numero generado esta incluido en la lista...
        if(listaNumeroSorteados.includes(numeroGenerado)){//El metodo 'includes' busca el valor dentro de un arreglo
            return generarNumeroSecreto();//Si el valor ya existe en la lista vuelve a entrar a la misma funcion (Recursividad)
        }else{
            listaNumeroSorteados.push(numeroGenerado);//"push" inserta el valor en el array
            return numeroGenerado;
            }
    }
}

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del numero secreto");
    asignarTextoElemento("p",`Indica un numero del 1 al ${numeroMaximo}`);
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