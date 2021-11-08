
function atualiza(){
    var data = new Date();

    var inicioPrimavera = new Date("2021-09-22");
    var fimPrimavera = new Date("2021-12-21"); 

    var inicioVerao = new Date("2021-12-22");
    var fimVerao = new Date("2021-12-31"); 

    var inicioVerao2 = new Date("2021-01-01");
    var fimVerao2 = new Date("2021-03-21");

    var inicioOutono = new Date("2021-03-22");
    var fimOutono = new Date("2021-06-21"); 

    var inicioInverno = new Date("2021-06-22");
    var fimInverno = new Date("2021-09-21"); 

   
    if ((data >= inicioOutono) && (data <= fimOutono)){
        document.getElementById("imagem").src = "imagens/outono.jpg";
    }
    if ((data >= inicioPrimavera)  && (data <= fimPrimavera)){
        document.getElementById("imagem").src = "imagens/primavera.jpg";
    }
    if ((data >= inicioInverno) && (data <= fimInverno)){
    document.getElementById("imagem").src = "imagens/inverno.jpg";
    }
    if ((data >= inicioVerao) && (data <= fimVerao)){
        document.getElementById("imagem").src = "imagens/verao.jpg";
    }
    if ((data >= inicioVerao2) && (data <= fimVerao2)){
        document.getElementById("imagem").src = "imagens/verao.jpg";
    }
   
}


    