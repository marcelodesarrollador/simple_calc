window.addEventListener('load', ()=> {  /* Escuchar cuando se carga el documento */

    /* Creo dos constantes y guardo los elementos que se necesitan */
    const display = document.querySelector('.calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button');

    /* Creo otra constante para convertir el HTMLCollection a Array */
    const keypadButtonsArray = Array.from(keypadButtons);

    /* Iterar por el nuevo Array de Botones */
    keypadButtonsArray.forEach( (button) => {

        /* a cada boton le agrego un listener */
        button.addEventListener('click', ()=> {
            calculadora(button, display);
        })
    })
})

function calculadora(button, display) {
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;

        case '=':
            calcular(display);
            break;

        default:
            actualizar(display, button);
            break;
    }
}

function calcular(display) {
    display.innerHTML = eval(display.innerHTML)  /* Tomar el string, resolver y guradarlo en el innerHTML del display  */
}

function actualizar(display, button) {
    if (display.innerHTML == 0) {
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
    /* esto es lo mismo que escribir (display.innerHTML = display.innerHTML + button.innerHTML) */
}

function borrar(display) {
    display.innerHTML = 0;
}
