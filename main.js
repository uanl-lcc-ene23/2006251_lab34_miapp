var arr=[];
var mostrarArreglo = document.getElementById("mostrarArreglo");

function agregar(){
    let gasto = document.getElementById("gasto");
    let monto = document.getElementById("monto");
    arr.push(gasto.value+": $"+monto.value)
    console.log(arr);
    mostrarArreglo.innerHTML = arr;
    limpiar();
}

function limpiar(){
    document.getElementById("gasto").value="";
    document.getElementById("monto").value=null;
}