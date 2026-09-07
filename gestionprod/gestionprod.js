const codigoP = document.getElementById('codigoP')
const codigoPE = document.getElementById('codigoPE')
const form = document.getElementById('form');
const formEliminar = document.getElementById('formEliminar');
const nombreP = document.getElementById('nombreP')
const descP = document.getElementById('descP')
const precioP = document.getElementById('precioP')
const stockP = document.getElementById('stockP')
const stockPcrit = document.getElementById('stockPcrit')
const categoriaP = document.getElementById('categoriaP')
const imagenP = document.getElementById('imagenP')
const errorElementEli = document.getElementById('errorEli')
const exitoElementEli = document.getElementById('exitoEli')
const errorElement = document.getElementById('error')
const exitoElement = document.getElementById('exito');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let messages = []

    if (codigoP.value.length <= 2){
        messages.push('El codigo del producto debe tener como minimo 3 caracteres')
    }

    if (nombreP.value.trim() === '' || nombreP.value === null){
        messages.push('El nombre del producto no puede estar vacio')
    }

    if(nombreP.value.length >= 100 ){
        messages.push('El nombre del producto no puede tener mas de 100 caracteres')
    }

    if(precioP.value <= 0 ){
        messages.push('El precio del producto deber ser minimo 0 (Gratis)')
    }

    if(stockP.value <= 0 ){
        messages.push('El stock del producto deber ser minimo 0')
    }
    
    if (messages.length > 0) {
    errorElement.innerText = messages.join(', ')
    } else {
        errorElement.innerText = '';
        exitoElement.innerText = '¡Producto agregado correctamente!';
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
