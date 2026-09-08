productos = [
    {
        "id": "VR001",
        "nombre": "Zanahorias Orgánicas",
        "precio": 1200,
        "stock": 100,
        "descripcion": "Zanahorias crujientes cultivadas sin pesticidas en la Región de O'Higgins. Excelente fuente de vitamina A y fibra, ideales para ensaladas, jugos o como snack saludable.",
        "imagen": "../imagenes/Zanahoria-org.jpg"
    },
    {
        "id": "VR002",
        "nombre": "Espinacas Frescas",
        "precio": 700,
        "stock": 80,
        "descripcion": "Espinacas frescas y nutritivas, perfectas para ensaladas y batidos verdes. Estas espinacas son cultivadas bajo prácticas orgánicas que garantizan su calidad y valor nutricional.",
        "imagen": "../imagenes/fresh-spinach.jpg"
    },
    {
        "id": "VR003",
        "nombre": "Pimientos Tricolores",
        "precio": 1500,
        "stock": 120,
        "descripcion": "Pimientos rojos, amarillos y verdes, ideales para salteados y platos coloridos. Ricos en antioxidantes y vitaminas, estos pimientos añaden un toque vibrante y saludable a cualquier receta.",
        "imagen": "../imagenes/tricolor-pim.jpg"

    },
    {
        "id": "VR004",
        "nombre": "Brócoli Orgánico",
        "precio": 1800,
        "stock": 60,
        "descripcion": "Brócoli fresco de cultivo orgánico, libre de pesticidas. Perfecto para cocinar al vapor, saltear o incorporar en sopas. Cultivado en suelos ricos que garantizan un color verde intenso y alto valor nutricional.",
        "imagen": "../imagenes/brocoli.jpg"

    },
    {
        "id": "VR005",
        "nombre": "Tomates Cherry Orgánicos",
        "precio": 2000,
        "stock": 90,
        "descripcion": "Tomates cherry vibrantes y llenos de sabor, cultivados bajo estrictos estándares orgánicos. Ideales para ensaladas frescas, picoteos o asados. Poseen un equilibrio perfecto entre acidez y dulzor.",
        "imagen": "../imagenes/tomatecherry.jpg"

    }
];

const LLAVE = "carrito";

const section = document.getElementById("productos");
const listaCarrito = document.getElementById("lista");
const divTotal = document.getElementById("total");
const btnFinalizar = document.getElementById("btn-finalizar");
const mensajeCompra = document.getElementById("mensaje-compra")

const contenedorCard = document.createElement("div");
contenedorCard.className = "contenedor-card";
section.appendChild(contenedorCard);

for (const i of productos) {
    const card = document.createElement("div");
    card.className = "card";
    contenedorCard.appendChild(card);

    const nombre = document.createElement("h1");
    nombre.textContent = i.nombre;
    card.appendChild(nombre);

    const imagen = document.createElement("img");
    imagen.src = i.imagen;
    card.appendChild(imagen);

    const precio = document.createElement("h1");
    precio.textContent = `Precio por kg: $${i.precio}`;
    card.appendChild(precio);

    const stock = document.createElement("h1");
    stock.textContent = `Stock disponible: ${i.stock} kg`;
    card.appendChild(stock);

    const descripcion = document.createElement("h1");
    descripcion.textContent = i.descripcion;
    card.appendChild(descripcion);

    const contenedorBtn = document.createElement("div");
    contenedorBtn.className = "contenedor-btn";
    card.appendChild(contenedorBtn);

    const btnAgregarCarro = document.createElement("button");
    btnAgregarCarro.textContent = "Agregar al carrito";
    btnAgregarCarro.className = "btn btn-success";
    btnAgregarCarro.addEventListener("click", function () {
        guardar(i);
    })

    contenedorBtn.appendChild(btnAgregarCarro);
    card.appendChild(contenedorBtn);
    contenedorCard.appendChild(card);
}

//const LLAVE = "carrito";

function guardar(producto) {
    /*console.log(productos);
    lista = [];

    var storageActual = localStorage.getItem(LLAVE);
    var storageParse = JSON.parse(storageActual);

    if (storageActual != null) {
        storageParse.push(productos);
        localStorage.setItem(LLAVE, JSON.stringify(storageParse));
    } else {
        lista.push(productos);
        localStorage.setItem(LLAVE, JSON.stringify(lista));
    }*/

    const storageActual = localStorage.getItem(LLAVE);
    const lista = storageActual ? JSON.parse(storageActual) : [];

    lista.push(producto);
    localStorage.setItem(LLAVE, JSON.stringify(lista));

    if (mensajeCompra) mensajeCompra.textContent = "";
    renderizarCarrito();
}

function renderizarCarrito() {
    if (!listaCarrito || !divTotal) return;

    listaCarrito.innerHTML = "";
    const carrito = JSON.parse(localStorage.getItem(LLAVE)) || [];
    let sumaTotal = 0;

    if (carrito.length === 0) {
        listaCarrito.innerHTML = "<li>El carrito está vacío</li>";
        divTotal.textContent = "0";
        if (btnFinalizar) btnFinalizar.style.display = "none";
        return;
    }

    if (btnFinalizar) btnFinalizar.style.display = "inline-block";

    carrito.forEach((producto, index) => {
        sumaTotal += producto.precio;

        const item = document.createElement("li");
        item.style.marginBottom = "10px";
        item.textContent = `${producto.nombre} - $${producto.precio} `;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.className = "btn btn-danger btn-sm";
        btnEliminar.addEventListener("click", function () {
            eliminarDelCarrito(index);
        });

        item.appendChild(btnEliminar);
        listaCarrito.appendChild(item);
    });

    divTotal.textContent = sumaTotal;
}

function eliminarDelCarrito(posicion) {
    let carrito = JSON.parse(localStorage.getItem(LLAVE)) || [];
    carrito.splice(posicion, 1);
    localStorage.setItem(LLAVE, JSON.stringify(carrito));

    if (mensajeCompra) mensajeCompra.textContent = "";
    renderizarCarrito();
}

if (btnFinalizar) {
    btnFinalizar.addEventListener("click", function () {
        const carrito = JSON.parse(localStorage.getItem(LLAVE)) || [];

        if (carrito.length > 0) {
            localStorage.removeItem(LLAVE);
            if (mensajeCompra) {
                mensajeCompra.textContent = "¡Muchas gracias por tu compra! Tu pedido ha sido procesado con éxito.";
            }
            renderizarCarrito();
        }
    });
}

renderizarCarrito();