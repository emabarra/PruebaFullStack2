productos = [
    {
        "id": "PL001",
        "nombre": "-",
        "precio por g": 1,
        "stock": 1,
        "descripcion": "-",
        "imagen": "imagenes/-"
    }
]

const section = document.getElementById("productos");

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
    precio.textContent = i["precio por kg"];
    card.appendChild(precio);

    const stock = document.createElement("h1");
    stock.textContent = i["stock en kg"];
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
}

const LLAVE = "carrito";

function guardar(productos) {
    console.log(productos);
    lista = [];

    var storageActual = localStorage.getItem(LLAVE);
    var storageParse = JSON.parse(storageActual);

    if (storageActual != null) {
        storageParse.push(productos);
        localStorage.setItem(LLAVE, JSON.stringify(storageParse));
    } else {
        lista.push(productos);
        localStorage.setItem(LLAVE, JSON.stringify(lista));
    }

}