
// Funcoes para alternar a borda dos cards
//Prato
function selecionaPrato(elemento){
    removePrato();
    elemento.classList.toggle('prato-selecionado');
    ativaBotao();
}
function removePrato(){
    let verde = document.querySelector(".prato-selecionado");
    document.querySelector(".prato-selecionado") ? verde.classList.remove("prato-selecionado"): "";
}
//Drink
function selecionaDrink(elemento){
    removeDrink();
    elemento.classList.toggle('drink-selecionado');
    ativaBotao();
}
function removeDrink(){
    let verde = document.querySelector(".drink-selecionado");
    document.querySelector(".drink-selecionado") ? verde.classList.remove("drink-selecionado"): "";
}
//Sobremesa
function selecionaSobremesa(elemento){
    removeSobremesa();
    elemento.classList.toggle('sobremesa-selecionado');
    ativaBotao();
}
function removeSobremesa(){
    let verde = document.querySelector(".sobremesa-selecionado");
    document.querySelector(".sobremesa-selecionado") ? verde.classList.remove("sobremesa-selecionado"): "";
}

//Funcoes para ativar o botao quando as 3 opções estiverem escolhidas
function ativaBotao(){
    let prato = document.querySelector(".prato-selecionado");
    let drink = document.querySelector(".drink-selecionado");
    let sobremesa = document.querySelector(".sobremesa-selecionado");
    if( prato && drink && sobremesa){
        mudarCor();
        let botao = document.querySelector('.botao-finalizar-verde');
        botao.innerHTML = "Fechar pedido";
    }
}
function mudarCor(){
    let botao = document.querySelector('.botao-finalizar');
    botao.classList.remove('botao-finalizar');
    botao.classList.add('botao-finalizar-verde');
}

//Pedido no zap
function mensagemWhatsApp(){
    let botaoVerde = document.querySelector('.botao-finalizar-verde');
    let nome;
    let endereco;
    if(botaoVerde){
        nome = prompt('Digite o nome do destinatário:');
        endereco = prompt('Digite o endereço de entrega:');
    }

    let prato = document.querySelector('.prato-selecionado');
    let nomePrato = prato.querySelector('.titulo-card').innerHTML;
    let precoPrato = prato.querySelector('.preco-card').innerHTML;
    // precoPrato.replace('R$ ','');
    // precoPrato.replace(',','.');
    // parseFloat(precoPrato);

    let bebida = document.querySelector('.drink-selecionado');
    let nomeBebida = bebida.querySelector('.titulo-card').innerHTML;
    let precoBebida = bebida.querySelector('.preco-card').innerHTML;
    // precoBebida.replace('R$ ','');
    // precoBebida.replace(',','.');
    // parseFloat(precoBebida);

    let sobremesa = document.querySelector('.sobremesa-selecionado');
    let nomeSobremesa = sobremesa.querySelector('.titulo-card').innerHTML;
    let precoSobremesa = sobremesa.querySelector('.preco-card').innerHTML;
    // precoSobremesa.replace('R$ ','');
    // precoSobremesa.replace(',','.');
    // parseFloat(precoSobremesa);

    let valorTotal = `${precoPrato} + ${precoBebida} + ${precoSobremesa}`;

    let mensagem = `Olá, gostaria de fazer o pedido:\n
    - Prato: ${nomePrato}\n
    - Bebida: ${nomeBebida}\n
    - Sobremesa: ${nomeSobremesa}\n
    Total: ${valorTotal}`
    let mensagemFormatada = encodeURIComponent(mensagem);
    let url = `https://wa.me/5531986011351?text=${mensagemFormatada}`;
    window.open(url, '_blank')
}