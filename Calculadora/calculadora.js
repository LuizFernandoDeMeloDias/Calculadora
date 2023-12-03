var elementosTh = document.querySelectorAll('.th-clicaveis');

var funcTh = document.querySelectorAll('.th-func');

var obj_atual;


var cont_tela = '';
var result = 0;
var numeroatual = 0;


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
            cont_tela = '';
            
        }
    }
    
}

function obterfunction(funcao) {
    var conteudo = funcao.textContent;
    if (conteudo === '<' && cont_tela != ''){
        cont_tela = cont_tela.substring(0, cont_tela.length -1);
        document.getElementById('num').innerHTML = cont_tela;
    }

    if (conteudo === '+'){
        numeroatual = parseInt(cont_tela);
        cont_tela = '';
        montarCalc(result, numeroatual);
    }



    if (conteudo === '='){
    }

}

function montarCalc(result, numeroatual){
    console.log('oi');
    result += numeroatual;
    console.log(result, '+', numeroatual, '=', result);
    }
