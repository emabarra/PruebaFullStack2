productos = [
    {
        "id": "VR001",
        "nombre": "Zanahorias Orgánicas",
        "precio por kg": 1200,
        "stock en kg": 100,
        "descripcion": "Zanahorias crujientes cultivadas sin pesticidas en la Región de O'Higgins. Excelente fuente de vitamina A y fibra, ideales para ensaladas, jugos o como snack saludable.",
        "imagen": "imagenes/-"
    },
    {
        "id": "VR002",
        "nombre": "Espinacas Frescas",
        "precio por bolsa de 50g": 700,
        "stock en kg": 80,
        "descripcion": "Espinacas frescas y nutritivas, perfectas para ensaladas y batidos verdes. Estas espinacas son cultivadas bajo prácticas orgánicas que garantizan su calidad y valor nutricional.",
        "imagen": "imagenes/-"
    },
    {
        "id": "VR003",
        "nombre": "Pimientos Tricolores",
        "precio por kg": 1500,
        "stock en kg": 120,
        "descripcion": "Pimientos rojos, amarillos y verdes, ideales para salteados y platos coloridos. Ricos en antioxidantes y vitaminas, estos pimientos añaden un toque vibrante y saludable a cualquier receta.",
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