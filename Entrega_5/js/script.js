class Pedido {
    constructor(producto, presentacion, cantidad, precio) {
        this.producto = producto;
        this.presentacion = presentacion;
        this.cantidad = cantidad;
        this.precio = precio;
    }

    mostrarPedido() {
        console.log(`Has comprado ${this.cantidad} ${this.presentacion} de ${this.producto} a $${this.precio} cada uno`);
    }
}

let pedido1 = new Pedido('Almendras', 'Paquetes x 100gr', 10, 100);
pedido1.mostrarPedido();

class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    verProducto() {
        console.log(`${this.codigo} - ${this.nombre} ---> $${this.precio}`);
    }
}

let producto1 = new Producto('0001', 'Almendras', 100);
producto1.verProducto();