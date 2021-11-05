function verEjercicio() {
    let primerValor = Number(prompt("Ingresa un valor"));
    let segundoValor = Number(prompt("Ingresa otro valor"));

    let resultado = primerValor / segundoValor;

    let mensajeResultado = `El resultado es `;
    let mensajeDivision = `Vamos a dividir ${primerValor} / ${segundoValor}`;

    if (segundoValor == 0) {
        alert("No se puede dividir por cero");
    } else if (primerValor > segundoValor) {
        alert(mensajeDivision);
        alert(mensajeResultado + resultado.toFixed(2));
    } else if (primerValor < segundoValor) {
        alert(mensajeDivision);
        alert(mensajeResultado + parseFloat(resultado.toFixed(2)));
    }

}
