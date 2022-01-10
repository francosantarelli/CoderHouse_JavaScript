window.onload = function () {
    // Variables
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'Almendras',
            precio: 200,
            imagen: './img/almendras.jpg'
        },
        {
            id: 2,
            nombre: 'Nueces',
            precio: 100,
            imagen: './img/nueces.jpg'
        },
        {
            id: 3,
            nombre: 'Castañas de Cajú',
            precio: 300,
            imagen: './img/castañasDeCaju.jpg'
        },
        {
            id: 4,
            nombre: 'Almohaditas',
            precio: 50,
            imagen: './img/almohaditas.jpg'
        }

    ];

    let carrito = [];
    let total = 0;

    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');

    /* Inserto los productos a partir de la base de datos. */

    function renderizarProductos() {
        baseDeDatos.forEach((info) => {
            // Estructura
            const miNodo = $("<div></div>")
                .addClass("card")
                .addClass("col-sm-6");
            // Body
            const miNodoCardBody =  $("<div></div>")
                .addClass("card-body");
            // Titulo
            const miNodoTitle = $("<h5></h5>")
                .addClass('card-title')
                .text (info.nombre);
            // Imagen
            const miNodoImagen = $("<img></img>")
                .addClass("img-fluid")
                .attr("src", info.imagen);
            // Precio
            const miNodoPrecio = $("<p></p>")
                .addClass("card-text")
                .text ('$' + info.precio);
            // Boton 
            const miNodoBoton =  $("<button></button>")
                .addClass('btn')
                .addClass('btn-secondary')
                .text("+")
                .attr("marcador", info.id)
                .click(aniadirProductoAlCarrito);
            // Insertamos
            miNodoCardBody.append(miNodoImagen);
            miNodoCardBody.append(miNodoTitle);
            miNodoCardBody.append(miNodoPrecio);
            miNodoCardBody.append(miNodoBoton);
            miNodo.append(miNodoCardBody);
            $("#items").append(miNodo);
        });
    }


    /* Añado un producto al carrito de la compra */

    function aniadirProductoAlCarrito(evento) {
        // Añado el Nodo a nuestro carrito
        carrito.push(evento.target.getAttribute('marcador'))
        // Calculo el total
        calcularTotal();
        // Actualizamos el carrito 
        renderizarCarrito();

    }


    /* Inserta los productos guardados en el carrito */

    function renderizarCarrito() {
        // Vaciamos todo el html
        DOMcarrito.textContent = '';
        // Quitamos los duplicados
        const carritoSinDuplicados = [...new Set(carrito)];
        // Generamos los Nodos a partir de carrito
        carritoSinDuplicados.forEach((item) => {
            // Obtenemos el item que necesitamos de la variable base de datos
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                // ¿Coincide las id? Solo puede existir un caso
                return itemBaseDatos.id === parseInt(item);
            });
            // Cuenta el número de veces que se repite el producto
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
                return itemId === item ? total += 1 : total;
            }, 0);

            // Creamos el nodo del item del carrito
            const miNodo = $("<li></li")
                .addClass("list-group-item")
                .addClass("text-right")
                .addClass("mx-2")
                .text(`${numeroUnidadesItem} x ${miItem[0].nombre} - $${miItem[0].precio}`);

            // Boton de borrar
            const miBoton = $("<button></button")
                .addClass("btn")
                .addClass("btn-success")
                .addClass("mx-5")
                .text("X")
                .css("marginLeft", "1rem")
                .data("item", item)
                .click(borrarItemCarrito);
            
                // Mezclamos nodos
            miNodo.append(miBoton);
            $("#carrito").append(miNodo);
        });
    }


    /* Borrar un elemento del carrito */

    function borrarItemCarrito(evento) {
        // Obtenemos el producto ID que hay en el boton pulsado
        const id = $(evento.target).data('item');
        // Borramos todos los productos
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        // volvemos a renderizar
        renderizarCarrito();
        // Calculamos de nuevo el precio
        calcularTotal();
    }


    /* Calcula el precio total teniendo en cuenta los productos repetidos */

    function calcularTotal() {
        // Limpiamos precio anterior
        total = 0;
        // Recorremos el array del carrito
        carrito.forEach((item) => {
            // De cada elemento obtenemos su precio
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            total = total + miItem[0].precio;
        });
        // Renderizamos el precio en el HTML
        DOMtotal.textContent = total.toFixed(2);
    }


    /* Varia el carrito y vuelve a dibujarlo */

    function vaciarCarrito() {
        // Limpiamos los productos guardados
        carrito = [];
        // Renderizamos los cambios
        renderizarCarrito();
        calcularTotal();
    }

    // Eventos
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);

    // Inicio
    renderizarProductos();


}