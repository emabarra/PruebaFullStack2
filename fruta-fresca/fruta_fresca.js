productos = [
    {
        "id": "FR001",
        "nombre": "Manzanas Fuji",
        "precio por kg": 1200,
        "stock en kg": 150,
        "descripcion": "Manzanas Fuji crujientes y dulces, cultivadas en el Valle del Maule. Perfectas para meriendas saludables o como ingrediente en postres. Estas Manzanas son conocidas por su textura firme y su sabor equilibrado entre dulce y ácido.",
        "imagen": "../imagenes/ManzanaFuji.jpg"
    },
    {
        "id": "FR002",
        "nombre": "Naranjas Valencia",
        "precio por kg": 1000,
        "stock en kg": 200,
        "descripcion": "Jugosas y ricas en vitamina C, estas naranjas Valencia son ideales para jugos frescos y refrescantes. Cultivadas en condiciones climáticas óptimas que aseguran su dulzura y jugosidad.",
        "imagen": "../imagenes/NaranjaValencia.jpeg"
    },
    {
        "id": "FR003",
        "nombre": "Uvas Thompson",
        "precio por kg": 2500,
        "stock en kg": 80,
        "descripcion": "Uvas Thompson dulces y sin semilla, cultivadas en los soleados valles de la zona central. Excelentes para disfrutar frescas o en ensaladas de frutas. Destacan por su piel fina y gran jugosidad.",
        "imagen": "../imagenes/uvas.jpg"
    },
    {
        "id": "FR004",
        "nombre": "Peras Packham",
        "precio por kg": 1400,
        "stock en kg": 120,
        "descripcion": "Peras Packham jugosas y de textura suave, originarias de huertos del sur. Ideales para consumo directo o compotas. Estas peras son reconocidas por su pulpa blanca y sabor delicado.",
        "imagen": "../imagenes/peras.jpg"
    },
    {
        "id": "FR005",
        "nombre": "Arándanos Frescos",
        "precio por kg": 4000,
        "stock en kg": 110,
        "descripcion": "Arándanos frescos y firmes, cosechados a mano en la región de La Araucanía. Perfectos para batidos, repostería o como un snack rico en antioxidantes. Destacan por su intenso color azul y sabor dulce con un ligero toque ácido",
        "imagen": "../imagenes/arandanos.jpg"
    },
    
];

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

    const precio = document.createElement("h1"); /*cambio h1 por p*/
    precio.textContent = `Precio por kg: $${i["precio por kg"]}`;
    card.appendChild(precio);

    const stock = document.createElement("h1"); /*cambio h1 por p*/
    stock.textContent = `Stock disponible: ${i["stock en kg"]} kg`;
    card.appendChild(stock);

    const descripcion = document.createElement("p"); /*cambio h1 por p*/
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
};

const LLAVE = "carrito";
function guardar(producto) {
    console.log(producto);
    lista = [];

    var storageActual = localStorage.getItem(LLAVE);
    var storageParse = JSON.parse(storageActual);

    if (storageActual != null) {
        storageParse.push(producto);
        localStorage.setItem(LLAVE, JSON.stringify(storageParse));
    } else {
        lista.push(producto);
        localStorage.setItem(LLAVE, JSON.stringify(lista));
    }
}