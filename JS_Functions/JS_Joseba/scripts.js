var userArray = ["Paco", "Admin"]
var passwordArray = ["123", "admin123"]

function balidatu() {
    var usuario = document.getElementById('usuario_txt').value
    var contrasena = document.getElementById('contraseña_txt').value
    var valid = false;
    for (i = 0; i < userArray.length; i++) {
        if ((usuario == userArray[i]) && (contrasena == passwordArray[i])) {
            valid = true
            break
        }
    }
    if (valid) {
        alert("Bienvenido!")
    } else {
        alert("usuario no encontrado: " + usuario + " - " + contrasena)
    }


}

function gordeErabiltzailea() {

    const user = {
        username: document.getElementById('erabiltzailea_txt').value,
        pasahitza: document.getElementById('pasahitza_txt').value,
        izena: document.getElementById('izena_txt').value,
        abizena: document.getElementById('abizena_txt').value,
        posta: document.getElementById('posta_txt').value
    }

    userArray.push(user.username)
    passwordArray.push(user.pasahitza)
    alert("Egun on " + user.izena + " " + user.abizena)
}
function deskontuaKalkulatu() {
    var produktua = document.getElementById("produktuak").value
    var prezioa

    if (produktua == "Kebab") {
        const kebab = {
            prezio: 10,
            deskontua: true,
            portzentaia: 25
        }
        prezioa = kebab.prezio
        if (kebab.deskontua) {
            prezioa = kebab.prezio - kebab.prezio * (kebab.portzentaia / 100)
        }

        alert(produktua + " hurrengo prezioa dauka: " + prezioa)
    } else {
        const bocadillo = {
            prezio: 5,
            deskontua: false,
            portzentaia: null
        }
        prezioa = bocadillo.prezio
        if (bocadillo.deskontua) {
            prezioa = prezio - prezio * (portzentaia / 100)
        }

        alert(produktua + " hurrengo prezioa dauka: " + prezioa)
    }

}


