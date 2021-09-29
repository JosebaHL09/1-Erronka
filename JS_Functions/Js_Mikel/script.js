function mezua(parametro){
    const notak=[];
    for (var i = 0; i <parametro; i++) {
        var mezua =parseInt(prompt("Idatzi nota"));
        notak.push(mezua);
    }
    //sumar
    var sum = notak.reduce(function(a, b){
        return a + b;
    }, 0);
    if((sum/parametro) > 5){
        alert("Gaindituta");
    }else{
        alert("Ez Gaindituta");
    }
}
function password(){
    do{
        var mezuaP = prompt("Idatzi pasahitza");
        var mezuaP2 = prompt("Idatzi pasahitza berriro");
        alert("Ez dira berdinak!")
    }
    while(mezuaP != mezuaP2);
    alert("Berdinak dira");
}
function factorial(){
    var mezua4 = prompt("Idatzi zenbaki bat");
    var valoresAceptados = /^[0-9]+$/;
    if(!valoresAceptados.test(mezua4)){
        alert("Sartu zenbaki bat!")
    }else{
        let r =1;
        for(let i = mezua4; i>0; i--){
            r *= i;
        }
        alert(r);
    }
}
function gabonEguna(){
    let da='';
    var expresion=/^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
    do{
        da= prompt("Idatzi data (dd/mm/aaaa)")
    }while(!expresion.test(da));
    const dates= da.split("/");
    const date = new Date(dates[2],dates[1] - 1, dates[0]);
    if(date.getDate() == 25 && (date.getMonth()+1) == 12){
        alert(date.toLocaleDateString() + " si navidad !")
    }else{
        alert(date.toLocaleDateString() + " no navidad !")
    }
}
function liburuak(){

    var liburuKopurua =parseInt(prompt("Idatzi liburu kopurua:"));
    var manyPersons = new Array();
    for(var j=0; j<liburuKopurua;j++){
        var titulua = prompt("Idatzi titulua");
        var autorea = prompt("Idatzi autorea");
        var irakurrita =prompt("Idatzi irakurri duen ala ez (Bai/Ez)");
        if(irakurrita.toLocaleUpperCase == "BAI") {
            var irakurritaBool = true;
        }else{
            var irakurritaBool = false;

        }
        var liburua = {titulua:titulua, autorea:autorea, irakurrita:irakurritaBool};
        manyPersons.push(liburua);

    }

    for(var i = 0 ; i<manyPersons.length;i++){
        if(manyPersons[i].irakurrita){
            alert("Liburu hau irakurri behar duzu: "+ manyPersons[i].titulua +" "+ manyPersons[i].autorea)
        }else{
            alert("Liburu hau irakurri behar duzu: "+ manyPersons[i].titulua +" " +manyPersons[i].autorea)
        }
    }
}
function comprobarUsuario(){
  var user=  prompt("Idatzi usuario bat");;
  var passwd=  prompt("Idatzi contraseña bat");;

  var usuarios=[{nombre_usuario:"myke",password:"1234"},
  {nombre_usuario:"joseba",password:"12345"}]

  var h = false;
  usuarios.forEach(function(usr) {
  if(usr.nombre_usuario == user && usr.password==passwd){ 
      h=true;
  }  
  });
  alert(h ? "Jarraitu aurrera!":"Ez daukagu izen horiekin erabiltzailerik!");
}
function comprobarFecha(){
    let date= prompt("Idatzi data (aaaa-mm-aa)");
    const data = new Date(date);
    var expresion=/^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
    var expresionH=/^\d{1,2}:\d{1,2}:\d{1,2}$/;
    if(expresion.test(data.toLocaleDateString()) && expresionH.test(data.toLocaleTimeString())){
        alert("Data egokiak sartu dituzu")
    }else{
        alert("Ez dira data egokiak")
    }

}
function comprobarCarrito(){
    var erosketak=[{erosketa_id:0,erosketa_izena:"galletas",prezioa:10,bidalketaPrezioa:2},{erosketa_id:1,erosketa_izena:"gallinas",prezioa:5,bidalketaPrezioa:3}];
    var bezeroKopurua =parseInt(prompt("Idatzi bezero kopurua:"));
    var manyBezero = new Array();
    let erosketaGuztira=0;
    let bidalketaPrezioaGuztira=0;
    for(var j=0; j<bezeroKopurua;j++){
        var bezeroizena = prompt("Idatzi bezero izena");
        var bezeroAdina = prompt("Idatzi bezero adina");
        var bezerotelefonoa =prompt("Idatzi bezero telefonoa");

        var bezeroa = {bezeroIzena:bezeroizena, bezeroAdina:bezeroAdina, bezeroTelefonoa:bezerotelefonoa};
        manyBezero.push(bezeroa);
    }

    for(var i = 0 ; i<erosketak.length;i++){
      erosketaGuztira+=erosketak[i].prezioa;
      bidalketaPrezioaGuztira+=erosketak[i].bidalketaPrezioa;
    }
    for(var i = 0 ; i<erosketak.length;i++){
        alert(erosketak[i].erosketa_id + " - " +erosketak[i].erosketa_izena + " - " + erosketak[i].prezioa + " - " +  erosketak[i].bidalketaPrezioa + "|" +erosketaGuztira+","+bidalketaPrezioaGuztira)
      }

}
