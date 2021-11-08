function verifica(){
    const valor = document.getElementById("valor").value;

    const resultado = parseInt(valor) % 2;

    if(resultado == 0){
        document.getElementById("resultado").value = "Este numero é PAR!";
    }
    else{
        document.getElementById("resultado").value = "Este numero é ÍMPAR!";
    }

}