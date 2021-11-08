//let idade;



function calculaIdade(){
    var idade;
    var data = new Date(document.getElementById("data").value);
    var dataAtual = new Date();

    idade = parseInt(dataAtual.getFullYear()) - parseInt(data.getFullYear());
   
    //alert(idade);

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "A sua idade caso já tenha feito aniversario é: " + idade +
    " caso contrario é: " + parseInt(idade - 1);

}

