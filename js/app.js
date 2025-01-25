let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    
    amigos.push(amigo.value);

    if (lista.textContent == ''){
        lista.textContent = amigo.value;
    }else{
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
}

function sortear(){
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