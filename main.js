var arr=[];

function agregar(){
    var gasto = document.getElementById("gasto");
    var monto = document.getElementById("monto");
    arr.push(gasto.value+": $"+monto.value)
    console.log(arr);
    limpiar();
}

function limpiar(){
    document.getElementById("gasto").value="";
    document.getElementById("monto").value=null;
}