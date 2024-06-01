/*Tienda de bebidas, venta de bebidas alcoholicas, el cliente pone cantidad, producto y marca seleccionada. Da como resultado valores a pagar y costos de envio, calculado por la cantidad de la compra.*/

//Variables globales

const bebidaA = 1000
const bebidaB = 2000
const bebidaC = 10000

let cantidad;
let marcaBebida;
let resultado;

//Operación multiplicar

function multiplicar(valor1, valor2) {
    const resultado = valor1 * valor2;
    return resultado;
}

//paso 1: el prompt da la cantidad de bebidas que quiere llevar.

//paso 2: elija la marca de la bebida que desea comprar, con A, B, y C

while (cantidad != 0) {
    cantidad = parseInt(prompt("Ingresar cantidad de bebida que desea, recuerde que 0 termina la carga"));

    if (cantidad === 0) {
        break;
    }

    marcaBebida = prompt("Ingrese la marca de la bebida que desee: \n\ Si quiere bebida A ingrese = A \n\ Si quiere bebida B ingrese = B \n\ Si quiere bebida C ingrese = C ");

    switch (marcaBebida) {
        case "A":
            resultado = multiplicar(bebidaA, cantidad);
            alert("Debe abonar $ "+ resultado + " por la compra de bebida marca A");
            break;
        case "B":
            resultado = multiplicar(bebidaB, cantidad);
            alert("Debe abonar $ "+ resultado + " por la compra de bebida marca B");
            break;
        case "C":
            resultado = multiplicar(bebidaC, cantidad);
            alert("Debe abonar $ "+ resultado + " por la compra de bebida marca C");
            break;
        default:
            alert("Operación invalida");
            break;    
    }

    if (cantidad >= 10) {
        valorEnvio = 0
        alert("Su costo de envio es $"+ valorEnvio);
    }
    else if (cantidad >= 5) {
        valorEnvio = 100
        alert("Su costo de envio es $"+ valorEnvio);
    }
    else {
        valorEnvio = 200
        alert("Su costo de envio es $"+ valorEnvio);
    }
  }