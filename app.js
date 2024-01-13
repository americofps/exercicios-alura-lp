//Alterando o h1
let tituloPagina = document.querySelector('h1');
tituloPagina.innerHTML = 'Hora do Desafio';

//Criando funçao para exibir console uma mensagem
function mensagemConsole(){
    console.log('O botão foi clicado');
}

//Criando função exibe alert 
function mensagemAlert(){
    alert('Eu amo JS');
}

//Cria uma funçao com o prompt solicitando uma cidade e a retorne ao usuario
function informarCidade(){
    let cidadeInformada = prompt('Informe uma cidade do Brasil');
    alert(`Estive em ${cidadeInformada} e lembrei de você`);
}

//Ao clicar em soma solicita 2 numeros e exibe o resultado
function soma(){
    let valor1 = prompt('Digite um valor:');
    let valor2 = prompt('Digite outro valor:');
    alert(`O resultado da soma de ${valor1} + ${valor2} é: ` + (parseInt(valor1) + parseInt(valor2)));
}