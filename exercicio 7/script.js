function addItem(){

    var lista = document.getElementById("listaItens");

    var opcao = document.createElement("option");
    opcao.text = document.getElementById("item").value;
    
    lista.add(opcao);

    document.getElementById("item").value = "";

}