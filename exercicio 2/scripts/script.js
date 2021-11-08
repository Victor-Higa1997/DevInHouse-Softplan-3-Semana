function soma(){

    const valor1 = document.getElementById("valor1").value;
    const valor2 = document.getElementById("valor2").value;

    const resultado = parseInt(valor1) + parseInt(valor2);

    document.getElementById("resultado").value = resultado;
}

function subtracao(){

    const valor1 = document.getElementById("valor1").value;
    const valor2 = document.getElementById("valor2").value;

    const resultado = parseInt(valor1) - parseInt(valor2);

    document.getElementById("resultado").value = resultado;
}

function multiplicacao(){

    const valor1 = document.getElementById("valor1").value;
    const valor2 = document.getElementById("valor2").value;

    const resultado = parseInt(valor1) * parseInt(valor2);

    document.getElementById("resultado").value = resultado;
}

function divisao(){

    const valor1 = document.getElementById("valor1").value;
    const valor2 = document.getElementById("valor2").value;

    const resultado = parseInt(valor1) / parseInt(valor2);

    document.getElementById("resultado").value = resultado;
}

