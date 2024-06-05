function calcular(){
    var fPeso = parseFloat(document.getElementById("peso").value)
    console.log(fPeso)
    var fAltura = parseFloat(document.getElementById("altura").value)
    var fIMC = fPeso/(fAltura*fAltura)
    document.getElementById("imc").innerHTML = fIMC
    if(fIMC<18.5){
        document.getElementById("STATUS").innerHTML = "STATUS: BAIXO PESO"  
    } else if(fIMC<=24.9){
        document.getElementById("STATUS").innerHTML = "STATUS: PESO IDEAL"
    } else if(fIMC<=29.9){
        document.getElementById("STATUS").innerHTML = "STATUS: SOBREPESO"
    } else if(fIMC<=34.9){
        document.getElementById("STATUS").innerHTML = "STATUS: OBESIDADE 1"
    } else if(fIMC<=39.9){
        document.getElementById("STATUS").innerHTML = "STATUS: OBESIDADE 2"
    }else{
        document.getElementById("STATUS").innerHTML = "STATUS: OBESIDADE MORBIDA"
    }
}
