function verEjercicio() {
    alert("Ingresá tantos números como quieras, cuando termines te voy a mostrar cual es el menor!. Para sali presiona 0 (cero)");
    let menorvalorIngresado = 99999999;
    let contador = 1;
    let valorIngresado = Number(prompt("Ingresa un número"));
    if (valorIngresado == 0) {
        alert(`Saliste del programa`);
    }
    while (valorIngresado != 0) {
        if (valorIngresado < menorvalorIngresado) {
            menorvalorIngresado = valorIngresado;
        }
        contador++;
        valorIngresado = Number(prompt("Ingresa el valor que ocupará el espacio " + contador + ". Para salir presiona 0"));
        if (valorIngresado == 0) {
            alert(`Saliste del programa, ocupaste ${contador - 1} lugares y el menor valor ingresado es ${menorvalorIngresado}`);
            break;
        }
        /* alert("Ocupaste el espacio: " + contador); */
    }
    alert(`Gracias por Jugar!!!`);
}
