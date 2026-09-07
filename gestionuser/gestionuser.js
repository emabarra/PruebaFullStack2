const runUser = document.getElementById('runUser')
const nombreUser = document.getElementById('nombreUser')
const correoUser = document.getElementById('correoUser')
const fechaNacUser = document.getElementById('fechaNacUser')
const tipoUsuario = document.getElementById('tipoUsuario')
const direccionUser = document.getElementById('direccionUser')
const apellidosUser = document.getElementById('apellidosUser')
const errorElementEli = document.getElementById('errorEli')
const exitoElementEli = document.getElementById('exitoEli')
const errorElement = document.getElementById('error')
const exitoElement = document.getElementById('exito')
const selectRegion = document.getElementById('regionUser')
const selectComuna = document.getElementById('comunaUser');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    let messages = []

    if (runUser.value.length > 9 || runUser.value.length < 7){
        messages.push('El run del cliente debe tener como minimo 7 caracteres y máximo 9')
    }

    if (nombreUser.value.trim() === '' || nombreUser.value === null){
        messages.push('El nombre del usuario es necesario')
    }

    if(nombreUser.value.length > 50 ){
        messages.push('El nombre del usuario no puede tener mas de 50 caracteres')
    }

    if(apellidosUser.value.length > 100 ){
        messages.push('Los apellidos del usuario no puede tener más de 100 caracteres')
    }

    if(correoUser.value.length > 100 ){
        messages.push('El stock del producto deber ser minimo 0')
    }

    if (correoUser.value.trim() === '' || correoUser.value === null){
        messages.push('El correo del usuario no puede estar vacio')
    }

    if(direccionUser.value.length > 300){
        messages.push('La direccion del usuario no puede tener mas de 300 caracteres')
    }
    
    if (messages.length > 0) {
    errorElement.innerText = messages.join(', ')
    } else {
        errorElement.innerText = '';
        exitoElement.innerText = 'Usuario agregado correctamente!';
        form.reset();

        setTimeout(() => {
            exitoElement.innerText = '';
        }, 3000);
    }

})


formEliminar.addEventListener('submit', (e) => {
    e.preventDefault();

        let messages = []

    if (codigoPE.value.length <= 2){
        messages.push('El codigo del producto debe tener como minimo 3 caracteres')
    }

    if (messages.length > 0) {
    errorElementEli.innerText = messages.join(', ')
    } else {
        errorElementEli.innerText = '';
        exitoElementEli.innerText = '¡Producto eliminado correctamente!';
        formEliminar.reset();

        setTimeout(() => {
            exitoElement.innerText = '';
        }, 3000);
    }

})

const regionesYcomunas = [
    {
      "region": "Arica y Parinacota",
      "comunas": ["Arica", "Camarones", "Putre", "General Lagos"]
    },
    {
      "region": "Tarapacá",
      "comunas": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"]
    },
    {
      "region": "Antofagasta",
      "comunas": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"]
    },
    {
      "region": "Atacama",
      "comunas": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
    },
    {
      "region": "Coquimbo",
      "comunas": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]
    },
    {
      "region": "Valparaíso",
      "comunas": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"]
    },
    {
      "region": "Región del Libertador Gral. Bernardo O'Higgins",
      "comunas": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
    },
    {
      "region": "Región del Maule",
      "comunas": ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
    },
    {
      "region": "Región de Ñuble",
      "comunas": ["Cobquecura", "Coelemu", "Ninhue", "Portezuelo", "Quirihue", "Ránquil", "Treguaco", "Bulnes", "Chillán Viejo", "Chillán", "El Carmen", "Pemuco", "Pinto", "Quillón", "San Ignacio", "Yungay", "Coihueco", "Ñiquén", "San Carlos", "San Fabián", "San Nicolás"]
    },
    {
      "region": "Región del Biobío",
      "comunas": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío"]
    },
    {
      "region": "Región de la Araucanía",
      "comunas": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"]
    },
    {
      "region": "Región de Los Ríos",
      "comunas": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"]
    },
    {
      "region": "Región de Los Lagos",
      "comunas": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"]
    },
    {
      "region": "Región Aisén del Gral. Carlos Ibáñez del Campo",
      "comunas": ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O'Higgins", "Tortel", "Chile Chico", "Río Ibáñez"]
    },
    {
      "region": "Región de Magallanes y de la Antártica Chilena",
      "comunas": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
    },
    {
      "region": "Región Metropolitana de Santiago",
      "comunas": ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Buin", "Calera de Tango", "Paine", "San Bernardo", "Alhué", "Curacaví", "María Pinto", "Melipilla", "San Pedro", "Talagante", "Colina", "Lampa", "Tiltil", "Santiago"]
    }
];

function cargarRegiones() {
    regionesYcomunas.forEach(item => {
        const option = document.createElement('option');
        option.value = item.region;
        option.textContent = item.region;
        selectRegion.appendChild(option);
    });
}

selectRegion.addEventListener('change', (e) => {
    const regionSeleccionada = e.target.value;
    
    selectComuna.innerHTML = '<option value="">Seleccione una comuna...</option>';
    
    if (regionSeleccionada !== "") {
        selectComuna.disabled = false;
        const regionData = regionesYcomunas.find(r => r.region === regionSeleccionada);
        
        if (regionData) {
            regionData.comunas.forEach(comuna => {
                const option = document.createElement('option');
                option.value = comuna;
                option.textContent = comuna;
                selectComuna.appendChild(option);
            });
        }
    } else {
        selectComuna.disabled = true;
    }
});

cargarRegiones();
