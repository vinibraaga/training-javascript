var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdAltura = paciente.querySelector(".info-altura");
    var tdPeso = paciente.querySelector(".info-peso");
    var tdImc = paciente.querySelector(".info-imc");
    
    
    var altura = tdAltura.textContent;
    var peso = tdPeso.textContent;
    
    var alturaEhValida = true;
    var pesoEhValido = true;
    
    if (peso <= 0 || peso > 1000) {
        tdPeso.textContent = "Peso inválido!";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido");
    }
    
    if (altura <= 0 || altura >= 3) {
        tdAltura.textContent = "Altura inválida!";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
    }
    
    if (alturaEhValida && pesoEhValido) {
    
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;    
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!"
    }
}

function calculaImc(peso,altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

