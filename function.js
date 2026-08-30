const LLAVE_STORAGE = "usuarios";

function enviar() {
    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellido").value;
    var correo = document.getElementById("txtCorreo").value;
    var telefono = document.getElementById("txtTelefono").value;

    if (nombre == "" || nombre.length < 3) {
        alert("Debes ingresar un nombre valido");
    } else if (apellido == "" || apellido.length < 3) {
        alert("Debes ingresar un apellido valido");
    } else if (correo == "") {
        alert("Debes ingresar un correo electronico");
    } else if (telefono == "" || telefono.length < 6) {
        alert("Debes ingresar un telefono valido");
    } else {
        var usuario = [
            {
                "nombre": nombre,
                "apellido": apellido,
                "correo electronico": correo,
                "telefono": telefono
            }
        ];

        localStorage.setItem(LLAVE_STORAGE, JSON.stringify(usuario));

        var storage = localStorage.getItem(LLAVE_STORAGE);
        console.log("STORAGE SIN PARSE: ", storage);
        console.log("STORAGE CON PARSE: ", JSON.parse(storage));


    }
}