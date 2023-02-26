let usuarioTXT= document.getElementById("usuario");
let p=document.getElementById("message");
let passwordTXT=document.getElementById("password");

function login(){
    p.innerHTML = "Login correcto, " + usuarioTXT.value;
    limpiar();
}


function registro(){
    p.innerHTML = "Registro con éxito, " + usuarioTXT.value;
    limpiar();
}

function limpiar(){
    usuarioTXT.value="";
    passwordTXT.value="";
}