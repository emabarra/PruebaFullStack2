function loguear() {
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("contraseña").value;

    if (user == "usuario" && pass == "1234") {
        window.location = "../perfil-usuario/usuario.html"
    } else if (user == "admin" && pass == "1234") {
        window.location = "../perfil-admin/admin.html"
    } else {
        alert("Contraseña o Usuario Incorrecto");
    }
}