const pokeJSON = localStorage.getItem('pokemon');
const Pokemon = JSON.parse(pokeJSON);   

const numPokeJSON = localStorage.getItem('poke');
let numPoke = JSON.parse(numPokeJSON);
const pok = pegaPokemon();

function pegaPokemon(){
    for(let i in Pokemon){
        if(Pokemon[i].numero == numPoke){
            return Pokemon[i];
        }
    }
}

const imagemPoke = document.querySelector('#imagem');
function colocaIMG(){
    const img = document.createElement('img');
    img.src = `../img/${pok.nome}.png`;
    imagemPoke.appendChild(img);
}

const nomeENum = document.querySelector('#title');
function colocaNome(){
    const h2 = document.createElement('h2');
    const num = `${numPoke >= 10 ? 'N°0' + numPoke : 'N°00' + numPoke}`;
    h2.innerHTML = '';
    h2.innerText = `${pok.nome} ${num}`;
    nomeENum.appendChild(h2);
}

const type = document.querySelector('#tipos');
function tipos(tipo){
    const div = document.createElement('div');
    div.classList.add(`divTipo`);
    div.classList.add(`${tipo}`);
    div.innerText = `${tipo}`;
    type.appendChild(div);
}

const altura = document.querySelector('#valorAlt');
const peso = document.querySelector('#valorPeso');
const categoria = document.querySelector('#valorCate');
const habilidades = document.querySelector('#valorHab');
function colocaAtr(){
    altura.innerHTML = pok.altura;
    peso.innerHTML = pok.peso;
    categoria.innerHTML = pok.categoria;
    habilidades.innerHTML = pok.habilidades;
}

const descricao = document.querySelector('#descrPoke');
function descrPokemon(){
    descricao.innerHTML = pok.desc;
}

const esquerda = document.querySelector('.esquerda');
const direita = document.querySelector('.direita');
function post(){
    const numAntes = Number(numPoke) - 1;
    
    if(numAntes === 0){
        esquerda.innerHTML = `-`;   
    }else{
        esquerda.innerHTML = `${numAntes >= 10 ? 'N°0' + numAntes : 'N°00' + numAntes}`;
    }
    const numDepois = Number(numPoke) + 1;
    direita.innerHTML = `${numDepois >= 10 ? 'N°0' + numDepois : 'N°00' + numDepois}`;
}

esquerda.addEventListener('click', function(){
    if(numPoke == 1){
        return;
    }
    numPoke--;
    numPoke = JSON.stringify(numPoke);
    localStorage.setItem('poke', numPoke);
    document.location.reload(true)
})

direita.addEventListener('click', function(){
    numPoke++;
    numPoke = JSON.stringify(numPoke);
    localStorage.setItem('poke', numPoke);
    document.location.reload(true);
})


function inicio(){
    colocaIMG();
    colocaNome();  
    colocaAtr();
    descrPokemon();
    post();
    tipos(pok.tipo1);
    if(pok.tipo2){
        tipos(pok.tipo2);
    }
    document.title =`Sobre: ${pok.nome}`;
}

inicio();