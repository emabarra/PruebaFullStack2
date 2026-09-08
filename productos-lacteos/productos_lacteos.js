productos = [
    {
        "id": "PL001",
        "nombre": "Yogurt",
        "precio": 2500,
        "stock": 25,
        "descripcion": "Nacido en el corazón del campo Chileno, este yogur rústico rescatra la utenticidad del campo en cada cucharada. Elaborado artesanalmente con leche entera y fresca de vacas criadas en libre pastoreo, destaca por su textura espesa, cremosa y ese toque ácido tan característico de las recetas de antes. Sin conservantes, espesantes ni procesos industriales: solo fermentos naturales, paciencia y el sabor puro de la naturaleza. Ideal para acompañar con miel silvestre, frutos secos o disfrutar solo, tal como sale de la paila.",
        "imagen": "../imagenes/yogurt.jpg"
    },
    {
        "id": "PL002",
        "nombre": "Queso Gauda Artesanal",
        "precio": 8900,
        "stock": 45,
        "descripcion": "Queso Gauda de elaboración artesanal, madurado a la perfección en cavas climatizadas. Ideal para sándwiches, tablas de queso o fundir. De textura semi-dura y sabor suave con un ligero toque a nuez.",
        "imagen": "../imagenes/quesillo.jpg"
    },
    {
        "id": "PL003",
        "nombre": "Mantequilla de Campo",
        "precio": 4500,
        "stock": 70,
        "descripcion": "Mantequilla tradicional batida a partir de crema fresca, con un toque de sal de mar. Ideal para untar en pan amasado, repostería y salteados. Reconocida por su color amarillo intenso y sabor auténtico a campo.",
        "imagen": "../imagenes/mantequilla.jpg"
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
    precio.textContent = `Precio: $${i["precio"]}`;
    card.appendChild(precio);

    const stock = document.createElement("h1");
    stock.textContent = `Stock: ${i["stock"]} unidades de 500gr`;
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