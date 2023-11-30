var elementosTh = document.querySelectorAll('.th-clicaveis');
var funcTh = document.querySelectorAll('.th-func');
var obj_atual;
var numeros = [];

elementosTh.forEach(function (elemento) {
    elemento.addEventListener('click', function () {
        obterConteudo(this);
    });
});

funcTh.forEach(function (funcao){
    funcao.addEventListener('click', function () {
        obterfunction(this);
    });
});

function obterConteudo(elemento) {
    var conteudo = elemento.textContent;
    obj_atual = conteudo;
    adicionarNumero(obj_atual);
}

function adicionarNumero(obj_atual) {
    numeros.push(obj_atual);
    var tam_array = numeros.length;
    if (tam_array <= 10){
        var elemento = document.getElementById(tam_array - 1);
        if (elemento) {
            elemento.innerHTML = obj_atual;
            console.log(numeros);
        }
    }
}



function obterfunction(funcao) {
    var func = funcao.textContent;
    if (func === 'clear') {
        var tam_array = numeros.length;
        if (tam_array <= 10){
            var elemento = document.getElementById(tam_array - 1);
            if (elemento) {
                elemento.innerHTML = '0';
            }
        }
    }
        numeros.pop();
}
