var elementosTh = document.querySelectorAll('.th-clicaveis');
var funcTh = document.querySelectorAll('.th-func');
var obj_atual;
var numeros = [];
var cont_tela = '';

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
    console.log(conteudo);
    atualizarNumerosTela(conteudo);
}

function atualizarNumerosTela(conteudo, proxnum = false){
    if(cont_tela == ''){
        document.getElementById('num').innerHTML = conteudo;
        cont_tela = conteudo;
    }else{
        if (proxnum == false){
            cont_tela += conteudo;
            document.getElementById('num').innerHTML =  cont_tela;
        }else{
            numeros.push(parseInt(cont_tela))
            console.log(numeros);
            cont_tela = '';
            
        }
    }
    
}

function obterfunction(funcao) {
    var conteudo = funcao.textContent;
    console.log(conteudo);


}