/* Incorporación Objetos */

class Venta {
    constructor(mensaje, precio) {
        this.mensaje = mensaje;
        this.precio = precio;
    }

    entregaPedido() {
        alert(`${this.mensaje} el total es ${this.precio}`);
        cobrar(this.precio);
    }

}

/* Importe a Pagar */

const multiplicar = (a, b) => {
    return a * b;
}

/* Función Cobrar */

const cobrar = (importe) => {
    let pago = 0;
    let descuento = 0.20;

    const medioPago = Number(prompt(`Seleccioná el Medio de Pago
    
    1- Cupón Promocional 20%
    2- Mercado Pago
    
    `));

    if (medioPago == 1) {
        alert(`Se le aplicará un descuento del ${descuento*100}%. Su pago será de ${importe - (importe * descuento)}`);
        while (importe > 0 && pago != (importe - (importe * descuento))) {
            pago = Number(prompt(`Ingrese importe ${importe - (importe * descuento)}`));
        }
    } else {
        while (importe > 0 && pago != importe) {
            pago = Number(prompt(`Ingrese importe ${importe}`));
        }
    }

    alert('Muchas gracias por su compra!');
}

/* Función Entrega Pedido y valida Productos */

function prepararPedido(prod, cant) {
    let mensaje = '';
    let precio = 0;
    let venta;

    if (prod == 0) {
        alert('No ha seleccionado un producto válido');
    }

    switch (prod) {
        case 1:
            mensaje = 'Aquí están sus nueces';
            precio = 100;
            precio = multiplicar(precio, cant);
            break;
        case 2:
            mensaje = 'Aquí están sus almendras';
            precio = 200;
            precio = multiplicar(precio, cant);
            break;
        case 3:
            mensaje = 'Aquí están sus castañas';
            precio = 300;
            precio = multiplicar(precio, cant);
            break;
        case 4:
            mensaje = 'Aquí están sus almohaditas';
            precio = 50;
            precio = multiplicar(precio, cant);
            break;
        default:
            mensaje = 'No ha seleccionado un producto válido';
            break;
    }
    venta = new Venta(mensaje, precio);
    venta.entregaPedido();
}

/* Función Toma Pedido */

const tomarPedido = () => {
    const producto = Number(prompt(`Seleccioná el producto:
    
    1- Nueces       --->        100
    2- Almendras    --->        200
    3- Castañas     --->        300
    4- Almohaditas  --->        50`));

    const cantidad = Number(prompt(`Ingrese la cantidad`));
    prepararPedido(producto, cantidad)
}

/* Ejecuta Programa */

tomarPedido();