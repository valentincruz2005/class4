let nombreLogin = prompt ("INGRESE SU NOMBRE PARA INGRESAR (tutor/profesor)")
if (nombreLogin == "Diana".toLowerCase().toUpperCase() || nombreLogin == "Rodrigo".toLowerCase().toUpperCase()|| nombreLogin == "Bruno".toLowerCase().toUpperCase()|| nombreLogin == "Laura".toLowerCase().toUpperCase()) {
    alert ("1ER PASO COMPLETADO, CONTINUE")
}
else {
    alert ("TUTOR/PROFESOR NO IDENTIFICADO, INTENTE DE NUEVO")
}

let apellidoPassword = prompt ("INGRESE SU PASSWORD PARA INGRESAR (apellido de tutor/profeso)")
if (apellidoPassword == "Mottura".toLowerCase().toUpperCase() || apellidoPassword == "Plutino".toLowerCase().toUpperCase()|| apellidoPassword == "Simone".toLowerCase().toUpperCase()|| nombreLogin == "Gonzalez".toLowerCase().toUpperCase()) {
    alert ("2DO PASO COMPLETADO, BIENVENIDO")
}
else {
    alert ("PASSWORD INCORRECTO, INTENTE DE NUEVO")
    apellidoPassword = prompt ("INGRESE SU PASSWORD PARA INGRESAR (apellido de tutor/profeso)")
}



let ingresarVerduras = prompt("INGRESE LAS VERDURAS QUE DESEA COMPRAR (hasta que aprete esc)")
while (ingresarVerduras != "ESC".toLowerCase()) {

console.log ("El usuario ingreso "+ ingresarVerduras)
ingresarVerduras= prompt("INGRESE LAS SIGUIENTES VERDURAS QUE DESEA COMPRAR (hasta que aprete esc)")

}

let precioTotal = parseFloat (prompt("INGRESE EL MONTO TOTAL A PAGAR"))

alert ("SI USTED PAGA CON TARJETA CODERBANK, OBTENDRA UN 10%")

let tarjeta = prompt("USTED TIENE ESA TARJETA?")
let diezprociento = precioTotal*0.10

const descuento = function (a,b) {return a - b };

switch (tarjeta) {
    case "si":
        alert ("EL MONTO A PAGAR ES DE "+(descuento (precioTotal,diezprociento)))
        break;
    case "no":
        alert ("EL MONTO A PAGAR ES " + precioTotal)
        break;
    default: 
    alert ("INGRESE UNA RESPUESTA")
    break;
}
    

