class Producto {
  constructor(codigo, producto, precio, cantidad) {
    this.codigo = codigo;
    this.producto = producto;
    this.precio = parseFloat(precio);
    this.cantidad = cantidad;
  }
}

var arrayProductos = [];

do {
  var comprobacion = prompt(
    'Ingrese el código del producto o "Fin" para terminar la carga'
  );
  if (
    comprobacion === "fin" ||
    comprobacion === "FIN" ||
    comprobacion === "Fin"
  ) {
    break;
  } else {
    codigoP = comprobacion;
    var productoP = prompt("Ingrese el nombre del producto");
    var precioP = prompt("Ingrese el precio del producto");
    var cantidadP = prompt("Ingrese la cantidad del producto");
    arrayProductos.push(new Producto(codigoP, productoP, precioP, cantidadP));
  }
} while (
  comprobacion != "fin" ||
  comprobacion != "FIN" ||
  comprobacion != "Fin"
);

console.log(arrayProductos);

for (let producto of arrayProductos) {
  let contenedor = document.createElement("div");
  contenedor.innerHTML = `<p> ${producto.codigo} - ${producto.producto} | $ ${producto.precio} | ${producto.cantidad} Unidades</p>`;
  document.body.appendChild(contenedor);
}

// Mensaje Final

var conPromo = arrayProductos.filter((producto) => producto.cantidad > 100);

console.log(conPromo);

document.write("<h3>Productos cargados correctamente</h3>");

for (var producto of conPromo) {
  document.write("<h3> Este Producto tienen un 20% de descuento </h3>");
  let contenedor = document.createElement("div");
  contenedor.innerHTML = `<p> codigo: ${producto.codigo}</p> 
    <p> Nombre: ${producto.producto}</p>
    <p> Cantidad: ${producto.cantidad} </p> 
    <p> A pagar: ${producto.precio * 0.8} </p>`;
  document.body.appendChild(contenedor);
}
