// alert(" hola Pedro como estas?")
// confirm("desea continuar en la Pagina?")    
function CalPrecioFinal(){

    console.log("Ingreso a calcular precio"); // esto es para debug por consola
    // cantEnt almacena la cantidad de entradas que ingreso el usuario
    let cantEnt=document.getElementById("cantidadentradas").value;
        // console.log() me da los valores que va entregando la variable en la consola para corregir y lo quiero
        console.log("cantEnt: " + cantEnt)


    // porcDesc almacena el valor de descuento elegido por el usuario
    let porcDesc=document.getElementById("porcDescuento").value;
        console.log("porcDesc: " + porcDesc)


    // descuento almacena los pesos totales a descontar
    let descuento = (cantEnt*200) * porcDesc/100;
         console.log("descuento: " + descuento)


    let precioTotal = (cantEnt*200) - descuento;
    // estoy modificando el html dinamicamente para colocar el precio total en la pantalla
    document.getElementById("valorTotal").value=`Total a pagar = ${precioTotal}`;




}