function verEjercicio() {
    let nombre = prompt("Ingresa tu nombre");
    let apellido = prompt("Por favor ingrese su apellido");
    alert("Hola " + nombre + " " + apellido);
    let anoNacimiento = Number(prompt("¿En que año naciste?"));
    let anoActual = 2021;
    let calculoEdad = anoActual - anoNacimiento;
    alert("Tenes " + calculoEdad + " años");
}

