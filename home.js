

function imprimir(){
    var campoTxt = document.getElementById("text").value;
    console.log(campoTxt);
    limpiar();
}

function limpiar(){
    document.getElementById("text").value="";
}