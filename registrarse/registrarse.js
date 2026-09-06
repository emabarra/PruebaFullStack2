function registrarse() {
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let contraseña = document.getElementById("contraseña").value;

    if (nombre === "" || correo === "" || contraseña === "") {
        alert("Algunos de los campos estan vacios");
    } else {
        alert("Se ha creado el usuario")
    }
}