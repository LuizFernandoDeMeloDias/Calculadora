// Seleciona todos os elementos com a classe 'th-clicaveis' e 'th-func'
var elementosTh = document.querySelectorAll('.th-clicaveis');
var funcTh = document.querySelectorAll('.th-func');

// Variáveis globais
var obj_atual = null;
var cont_tela = '';
var result = 0;
var numeros = [];
var oper = [];

// Adiciona eventos de clique para os elementos com a classe 'th-clicaveis'
elementosTh.forEach(function (elemento) {
    elemento.addEventListener('click', function () {
        obterConteudo(this);
    });
});

// Adiciona eventos de clique para os elementos com a classe 'th-func'
funcTh.forEach(function (funcao){
    funcao.addEventListener('click', function () {
        obterfunction(this);
    });
});

// Função para obter o conteúdo do elemento clicado
function obterConteudo(elemento) {
    var conteudo = elemento.textContent;
    atualizarNumerosTela(conteudo);
}

// Função para atualizar os números na tela
function atualizarNumerosTela(conteudo, proxnum = false){
    if(cont_tela == ''){
        document.getElementById('num').innerHTML = conteudo;
        cont_tela = conteudo;
    } else {
        if (proxnum == false){
            cont_tela += conteudo;
            document.getElementById('num').innerHTML =  cont_tela;
        } else {
            numeros.push(parseInt(cont_tela))
            cont_tela = '';
        }
    }
}

// Função para obter a função do botão clicado
function obterfunction(funcao) {
    var conteudo = funcao.textContent;
    
    // Lidar com o botão de exclusão
    if (conteudo === '<' && cont_tela != ''){
        cont_tela = cont_tela.substring(0, cont_tela.length -1);
        document.getElementById('num').innerHTML = cont_tela;
    }

    // Lidar com o botão de adição
    if (conteudo === '+'){
        cont_tela = document.getElementById('num').textContent;
        numeros.push(parseInt(cont_tela));
        cont_tela = '';
        oper.push('+');
        console.log(numeros, oper);
    }

    // Lidar com o botão de igual
    if (conteudo === '='){
        numeros.push(parseInt(cont_tela));
        cont_tela = '';
        mostrarConta()
        document.getElementById('num').innerHTML = result;
    }
}

// Função para calcular e exibir o resultado
function mostrarConta(){
    var conta = null;
    for(i = 0; i<= Math.max(numeros.length, oper.length) ; i++){
        
        if (i < numeros.length){
            conta += numeros[i];
        }
        if (i < oper.length){
            conta += oper[i];
        }
    }
    result = eval(conta);
}

