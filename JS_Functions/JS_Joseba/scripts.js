var userArray = ["Paco", "Admin"]
var passwordArray = ["123", "admin123"]
var produktuak = []
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
function deskontuaKalkulatu(){
    var select = document.getElementById("produktuak");
    var produktua = select.value;


    if(produktua == "Kebab"){
        deskontua = 10 - 10 * 0.25
        alert(produktua + " produktua deskontuarekin dago, prezio berria: " + deskontua)
    }else{
        alert(produktua + " ez dauka deskontua")
    }

}


