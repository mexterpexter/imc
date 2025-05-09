peso = document.getElementById("peso");
altura = document.getElementById("altura");
butao = document.getElementById("calcular");
resultado = document.getElementById("resultado");
feminino = document.getElementById("feminino");
masculino = document.getElementById("masculino");

butao.addEventListener("click", function() {
    var pesoValue = parseFloat(peso.value);
    var alturaValue = parseFloat(altura.value);

    if (isNaN(pesoValue) || isNaN(alturaValue) || pesoValue <= 0 || alturaValue <= 0) {
        resultado.innerHTML = "Por favor, insira valores válidos.";
        return;
    }

    // Verificar qual botão de rádio está selecionado
    var sexo = "";
    if (feminino.checked) {
        sexo = "Feminino";
    } else if (masculino.checked) {
        sexo = "Masculino";
    } else {
        resultado.innerHTML = "Por favor, selecione o sexo.";
        return;
    }

    // Calcular o IMC
    var imcValue = pesoValue / (alturaValue * alturaValue);
    resultado.innerHTML = "Seu IMC é: " + imcValue.toFixed(2);

    // Chamar a função para avaliar o IMC
    avaliarIMC(imcValue, sexo);
});

function avaliarIMC(imc, sexo) {
    if (sexo === "Feminino") {
        if (imc < 19.1) {
            resultado.innerHTML += "<br>Você está abaixo do peso.";
        } else if (imc >= 19.1 && imc <= 25.8) {
            resultado.innerHTML += "<br>Você está com o peso normal.";
        } else if (imc > 25.8 && imc <= 27.3) {
            resultado.innerHTML += "<br>Você está acima do peso.";
        } else if (imc > 27.3 && imc <= 32.3) {
            resultado.innerHTML += "<br>Você está com sobrepeso.";
        } else {
            resultado.innerHTML += "<br>Você está obesa.";
        }
    } else if (sexo === "Masculino") {
        if (imc < 20.7) {
            resultado.innerHTML += "<br>Você está abaixo do peso.";
        } else if (imc >= 20.7 && imc <= 26.4) {
            resultado.innerHTML += "<br>Você está com o peso normal.";
        } else if (imc > 26.4 && imc <= 27.8) {
            resultado.innerHTML += "<br>Você está acima do peso.";
        } else if (imc > 27.8 && imc <= 31.1) {
            resultado.innerHTML += "<br>Você está com sobrepeso.";
        } else {
            resultado.innerHTML += "<br>Você está obeso.";
        }
    }
}