let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');

    if(amigo == ''){
        alert('Informe o nome do amigo');
        return;
    }

    if(amigos.includes(amigo.value)){
        alert('Amigo já adicionado');
        document.getElementById('nome-amigo').value = '';
        return;
    }


    let lista = document.getElementById('lista-amigos');
    
    amigos.push(amigo.value);

    if (lista.textContent == ''){
        lista.textContent = amigo.value;
    }else{
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';

    atualizarLista();
    atualizarSorteio();
}

function sortear(){
    
    if (amigos.length < 4){
        alert('Digitar pelo menos 4 pessoas');
        return;
    }
    
    embaralha(amigos);

    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';

    for (let i = 0; i < amigos.length; i++){
        if (i == amigos.length -1){ 
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        }else{
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
        // uma forma de fazer
        /*let proximo = (i + 1) % amigos.length;       
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[proximo] + '<br>';
        */
    }
}

function embaralha(lista){

    for (let indice = lista.length; indice; indice-- ){
        const indiceAleatorio = Math.floor(Math.random() * indice);

        //atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML='';

}
function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';


    for (let i = 0; i < amigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });


        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}

// Função para remover duplicatas de um array
