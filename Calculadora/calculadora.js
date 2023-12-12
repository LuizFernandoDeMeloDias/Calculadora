// Seleciona todos os elementos com a classe 'th-clicaveis' e 'th-func'
var elementosTh = document.querySelectorAll('.th-clicaveis');
var funcTh = document.querySelectorAll('.th-func');

// Variáveis globais
var obj_atual = null; //qual elemento está sendo clicado
var cont_tela = ''; // qual conteúdo está sendo manipulado no momento
var conta = ''; // conta total usando numeros e operações

var aux = true;

var result = 0; //resultado atual da conta

var numeros = []; // números que serão calculados 
var oper = []; // uperações usadas 



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
    } else {
        if (proxnum == false){
            cont_tela += conteudo;
            conta += conteudo;
            document.getElementById('num').textContent += conteudo;
            aux = true;
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
            aux = false;
                if (result  == 0){
                    conta += '+';
                    tela.innerHTML = conta;
                    numeros.push(parseInt(cont_tela));
                    cont_tela = '';
                    oper.push('+');    
                }else{
                    conta = '';
                    numeros = [];
                    oper = [];
                    cont_tela = result;
                    numeros.push(result);
                    cont_tela = '';
                    conta += result;
                    result = 0;
                    conta += '+';
                    tela.innerHTML = conta;
                    oper.push('+');
                }
        break

        case '-':
            aux = false;
            conta += '-';
            tela.innerHTML = conta;
            numeros.push(parseInt(cont_tela));
            cont_tela = '';
            oper.push('-');

            break
        case 'X':
            aux = false;
            conta += 'X';
            tela.innerHTML = conta;
            numeros.push(parseInt(cont_tela));
            cont_tela = '';
            oper.push('*');
            
            break
        case '/':
            aux = false;
            conta += '/';
            tela.innerHTML = conta;
            numeros.push(parseInt(cont_tela));
            cont_tela = '';
            oper.push('*');

            break
        case '=':
            if (conteudo === '='){
                numeros.push(parseInt(cont_tela));
                cont_tela = '';
                mostrarConta()
                tela.innerHTML = conta + '=' + result;
            }
            break
        }
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