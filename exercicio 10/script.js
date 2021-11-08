function calcularPA(){
    document.getElementById("resultado").value = "";
    
    if((document.getElementById("valorInicial").value.length == 0) || (document.getElementById("raiz").value.length == 0)){
        alert("Insira os valores");    
    }
    else{
        var valorInicial = document.getElementById("valorInicial").value;
        var raiz = document.getElementById("raiz").value;

        var resultado = valorInicial;

        for(var i = 0; i < 10; i++){
            resultado = parseInt(resultado) + parseInt(raiz);

            document.getElementById("resultado").value = document.getElementById("resultado").value 
            + resultado  + ",";
        }

    }
}
function calcularPG(){
    document.getElementById("resultado").value = "";

    if((document.getElementById("valorInicial").value.length == 0) || (document.getElementById("raiz").value.length == 0)){
        alert("Insira os valores");    
    }
    else{
        var valorInicial = document.getElementById("valorInicial").value;
        var raiz = document.getElementById("raiz").value;

        var resultado = valorInicial;

        for(var i = 0; i < 10; i++){
            resultado = parseInt(resultado) * parseInt(raiz);

            document.getElementById("resultado").value = document.getElementById("resultado").value 
            + resultado  + ",";
        }

    }
}