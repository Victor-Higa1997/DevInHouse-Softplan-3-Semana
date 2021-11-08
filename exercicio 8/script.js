
let vetorItens = [];
var i = 0;

function addItem(){

    var lista = document.getElementById("listaItens");
    var opcao = document.createElement("option");

    vetorItens[i] = document.getElementById("item").value;

    opcao.text = vetorItens[i];
    
    lista.add(opcao);

    i++;
    document.getElementById("item").value = "";

}

function salvarLocalStorage(){
    var lista = document.getElementById("listaItens");

    for(var x = 0;x < vetorItens.length;x++){
        localStorage.setItem('item' + x, vetorItens[x]);    
    }
}

