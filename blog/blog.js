noticias = [
    {
        "id": "NT1",
        "titulo": "Nuevo artículo en The Lancet demuestra que el paquete de políticas de alimentación saludable de Chile reduce el exceso de peso en niños y niñas",
        "imagen": "../imagenes-noticias/etiquetados.jpg",
        "link": "https://uchile.cl/noticias/241375/the-lancet-ley-chilena-reduce-exceso-de-peso-en-la-infancia"
    },
    {
        "id": "NT2",
        "titulo": "Alimentación y desigualdad: el alto costo de comer bien en Chile",
        "imagen": "../imagenes-noticias/feriaLibre.jpg",
        "link": "https://www.biobiochile.cl/noticias/opinion/columnas-bbcl/2026/08/12/alimentacion-y-desigualdad-el-alto-costo-de-comer-bien-en-chile.shtml"
    },
    {
        "id": "NT3",
        "titulo": "Organizaciones exigen reactivar normas ambientales al Gobierno y advierten sus efectos en la salud",
        "imagen": "../imagenes-noticias/organizaciones.jpeg",
        "link": "https://www.latercera.com/sustentabilidad/noticia/organizaciones-exigen-reactivar-normas-ambientales-al-gobierno-y-advierten-sus-efectos-en-la-salud/"
    },
    {
        "id": "NT4",
        "titulo": "Cien años de parques nacionales en Chile: el balance de un siglo de conservación",
        "imagen": "../imagenes-noticias/parquesNacionales.jpeg",
        "link": "https://www.latercera.com/nacional/noticia/cien-anos-de-parques-nacionales-en-chile-el-balance-de-un-siglo-de-conservacion/"
    }

]

const section = document.getElementById("noticias");

const contenedorCard = document.createElement("div");
contenedorCard.className = "contenedor-card";
section.appendChild(contenedorCard);

for (const i of noticias) {
    const card = document.createElement("div");
    card.className = "card";
    contenedorCard.appendChild(card);

    const titulo = document.createElement("h1");
    titulo.textContent = i.titulo;
    card.appendChild(titulo);

    const imagen = document.createElement("img");
    imagen.src = i.imagen;
    card.appendChild(imagen);

    const link = document.createElement("a");
    link.href = i.link;
    link.target = "_blank"
    link.textContent = "Leer noticia"
    card.appendChild(link);

    const contenedorBtn = document.createElement("div");
    contenedorBtn.className = "contenedor-btn";
    card.appendChild(contenedorBtn);
}

const LLAVE = "noticias_leidas";

function verNoticia(urlNoticia) {
    console.log(urlNoticia);
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

    window.open(urlNoticia, '_blank');

}