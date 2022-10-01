var operador = "nada";
var numero1 = 0;
var numero2 = 0;

function sumar ()  {
    //var - let - const
    //variable para todo mi archivo, let local y me permite modificarla
    //const yo declaro una constante
    //const pi = 3.1416;
    //console.log(document.getElementById('numero').value);
    //logear hacia la console con el valor que queramos

    const sumando1 = document.getElementById('sumando1').value;
    //mi variable a le estoy dando el valor que tiene dentro de mi text
    const sumando2 = document.getElementById('sumando2').value;
    
    const suma =  parseInt(sumando1) + parseInt(sumando2);
    document.getElementById('resultado').innerHTML = suma;
}

function asignarValor(valor){

    const valorOriginal = document.getElementById('txtOperacion').value;
    document.getElementById('txtOperacion').value = valorOriginal + valor;
    //para concatenar los numeros ingresados

}

function marcarOperacion(operacion) {
    numero1 =  document.getElementById('txtOperacion').value;

    document.getElementById('txtOperacion').value = "";

    operador = operacion;

}

function calcular(){
    numero2 =  document.getElementById('txtOperacion').value;
    

    let calculo = 0;
    switch(operador){
        case 'suma':
            calculo = parseInt(numero1) + parseInt(numero2);
            break;
        default:
            break;
    }

    document.getElementById('txtOperacion').value = calculo;
}

const limpiar = () => {
    document.getElementById('txtOperacion').value = "";

}