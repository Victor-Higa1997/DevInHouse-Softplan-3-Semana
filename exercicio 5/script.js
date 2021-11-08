

setInterval(function atualiza(){
    var data = new Date();
    document.getElementById("relogio").innerHTML = data.getHours() +
     ":" + data.getMinutes() + ":" + data.getSeconds();
}, 1000);



