function recuperar() {
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;

    if (nombre === "" || correo === "") {
        alert("Algunos de los campos estan vacios");
    } else {
        alert("Se le ha enviado un correo para recuperar contraseña")
    }
}