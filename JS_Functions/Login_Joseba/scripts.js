function balidatu(){
    var userArray = ["Paco","Admin"]
    var passwordArray = ["123","admin123"]

    var usuario = document.getElementById('usuario_txt').value
    var contrasena = document.getElementById('contraseña_txt').value
    var valid = false;
    for(i = 0;i<userArray.length;i++){
        if((usuario == userArray[i]) && (contrasena == passwordArray[i])){
            valid = true
            break
        }
    }
    if(valid){
        alert("Bienvenido!")
    }else{
        alert("usuario no encontrado: " + usuario + " - " + contrasena)
    }
    

}