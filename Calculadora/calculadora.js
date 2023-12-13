// Seleciona todos os elementos com a classe 'th-clicaveis' e 'th-func'
var elementosTh = document.querySelectorAll('.th-clicaveis');
var funcTh = document.querySelectorAll('.th-func');

// Variáveis globais
var obj_atual = null;

var cont_tela = '';

var conta = '';

var aux = true;

var result = 0;

var stats = '1';


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
        cont_tela = conteudo;
        conta += cont_tela;
        document.getElementById('num').innerHTML = conta;
        aux = true;
        stats = '2'
    } else {
        if (proxnum == false){
            cont_tela += conteudo;
            conta += conteudo;
            document.getElementById('num').textContent += conteudo;
            aux = true;
            stats = '2'
        }
    }
}
// Função para obter a função do botão clicado
function obterfunction(funcao) {
    var tela = document.getElementById('num')
    var conteudo = funcao.textContent;
    
    // Lidar com o botão de exclusão
    if (conteudo === '<' && cont_tela != ''){
        cont_tela = cont_tela.substring(0, cont_tela.length -1);
        tela.innerHTML = cont_tela;
    }
    // Lidar com o botão de adição
    if(aux == true){
    switch (conteudo){
        case '+':
            if (result  == 0){
                aux = false;
                conta += '+';
                tela.innerHTML = conta;
                cont_tela = ''; 
            }else{
                aux = false;
                conta = '';
                cont_tela = '';
                conta += result;
                result = 0;
                conta += '+';
                tela.innerHTML = conta;
              }
        break

        case '-':
            if (result == 0){
                aux = false;
                conta += '-';
                tela.innerHTML = conta;
                cont_tela = '';
            }else{
                aux = false;
                conta = '';
                cont_tela = '';
                conta = result;
                result = 0;
                conta += '-';
                tela.innerHTML = conta
            }
            

            break
        case 'X':

            if (stats == '2'){
                aux = false;
                conta += '*';
                tela.innerHTML = conta;
                cont_tela = '';
            }

            break
        case '/':
            if (stats == '2'){
                aux = false;
                conta += '/';
                tela.innerHTML = conta;
                cont_tela = '';
            }

            break
        case '=':
            console.log(eval(conta));
            cont_tela = '';
            result = eval(conta);
            tela.innerHTML = conta + '=' + result;
            stats = '1'
            
            break
        }
    }
}