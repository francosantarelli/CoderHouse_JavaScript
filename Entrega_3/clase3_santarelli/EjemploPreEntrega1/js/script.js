class Producto {
    constructor(nombre, precio, detalle, cantidad) {
        this.nombre = nombre; this.precio = parseFloat(precio); this.detalle = detalle; this.cantidad = cantidad; this.disponible = true;
    }
    sumarlva() {
        return this.precio * 1.21;
    }
    Vender() {
        this.disponible = false;
    }
    precioSugerido() {
        return this.precio * 1.21 * 1.25;
    }

}
var arrayProductos = [];
do {
    var comprobacion = prompt('Ingrese un nombre del producto o fin para terminar de agregar');
    if (comprobacion === "fin" | comprobacion === "FIN" | comprobacion === "Fin") {
        break;
    } else {
        nombreP = comprobacion;
        var precioP = prompt('Ingrese el precio del producto');
        var detalleP = prompt('Ingrese el detalle del producto');
        var cantidadP = prompt('Ingrese la cantidad comprada del producto');
        arrayProductos.push(new Producto(nombreP, precioP, detalleP, cantidadP));
    }
}
while (comprobacion != "fin" || comprobacion != "FIN" || comprobacion != "Fin");

console.log(arrayProductos);

//document.write("<h3> EL precio de costo deL producto a caicuLar es: "+precioCostoN+"</h3>")
for (var producto of arrayProductos) {
    document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>");
    document.write("<li><h3> Detalle: " + producto.detalle + "</h3></li>");
    document.write("<li><h3> Cantidad: " + producto.cantidad + "</h3></li>");
    document.write("<li><h3> Precio: " + producto.precio + "</h3></li>");
    document.write("<li><h3> Precio con IVA es: " + producto.sumarlva() + "</h3></li></ul><br>");
    console.log(producto.nombre);
    console.log(producto.detalle);
    console.log(producto.cantidad);
    console.log(producto.sumarlva);

    // POCO STOCK - NENOS DE 3 PRODUCTOS
    var pocoStock = arrayProductos.filter(producto => producto.cantidad <= 3);
    console.log('Productos con Poco stock, comprar nuevamente: ');
    console.log(pocoStock);
    document.write("<h3> Lista de Productos con poco Stock (menos de 3 unidades): </h3>");

    for (var producto of pocoStock) {
        document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>");
        document.write("<li><h3> Detalle: " + producto.detalle + "</h3></li>");
        document.write("<li><h3> Cantidad: " + producto.cantidad + "</h3></li></ul><br>");
    }

    // PRODUCTOS SIN STOCK
    var sinStock = arrayProductos.filter(producto => producto.cantidad == 0 || producto.disponible == false);
    console.log(sinStock);
    document.write("<h3> Lista de Productos sin Stock (cantidad = 0 o disponible = false): </h3>");
    for (var producto of sinStock) {
        document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>");
        document.write("<li><h3> Detalle: " + producto.detalle + "</h3></li>");
        document.write("<li><h3> Cantidad: " + producto.cantidad + "</h3></li></ul><br>");
    }

    // BUSCAR UN PRODUCTO ESPECIFICO POR NOMBRE INGRESADO
    var ingresado = prompt('Ingresar el producto que quiero buscar');
    var prodlngresado = arrayProductos.filter(producto => producto.nombre.includes(ingresado));
    console.log(prodlngresado);
    document.write("<h3> Lista de Productos ingresados para busqueda: </h3>");

    for (var producto of prodlngresado) {
        document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>");
        document.write("<li><h3> Detalle: " + producto.detalle + "</h3></li>");
        document.write("<li><h3> Precio: " + producto.precio + "</h3></li></ul><br>");
    }

    //ORDENADOS FOR CANTIDAD
    var ordenadosCantidad = []; //DecLamos ei array ordenadosCantidad en una nueva posicion de memoria 
    ordenadosCantidad = arrayProductos.map(elemento => elemento);
    ordenadosCantidad.sort(function (a, b) {
        return a.cantidad - b.cantidad;
    });
    console.log('Ordenados por Cantidad Ascendente: '); console.log(ordenadosCantidad);
    document.write("<h3> Lista de Productos ordenados por cantidad: </h3>");
    for (var producto of ordenadosCantidad) {
        document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>");
        document.write("<li><h3> Detalle: " + producto.detalle + "</h3></li>");
        document.write("<li><h3> Cantidad: " + producto.cantidad + "</h3></li></ul><br>");

        //ORDENADOS POR PRECIO
        var ordenadosPrecio = []; //DecLamos ei array ordenadosCantidad en una nueva posiciôn de memoria 
        ordenadosPrecio = arrayProductos.map(elemento => elemento); 
        var ordenadosPrecio = arrayProductos;


        ordenadosPrecio.sort(function (a, b) {
            return a.precio - b.precio;
        });
        console.log('Ordenados por Precios Ascendentes');
        console.log(ordenadosPrecio);
        document, write("<h3> Lista de Productos ordenados por Precio ascendente: </h3>")
        for (var producto of ordenadosPrecio) {
            document.write("<ul><li><h3>Nombre: " + producto.nombre + "</h3></li>");
            document.write("<li><h3> Detalle: " + producto.detalle + "</h3></li>");
            document.write("<li><h3> Precio: " + producto.precio + "</h3></li></ul><br>");
        }
    }
}




