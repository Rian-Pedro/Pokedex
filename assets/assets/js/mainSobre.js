//importando as informações dos pokemon
import {teste} from '../../../pokemons/pokemons.js'

const Pokemon = teste(); 

const numPokeJSON = localStorage.getItem('poke');
let numPoke = JSON.parse(numPokeJSON);
const pok = pegaPokemon();

function pegaPokemon(){
    for(let i of Pokemon){
        if(i.numero == numPoke){
            return i;
        }
    }
}

//cria e coloca a imagem referente ao pokemon
const imagemPoke = document.querySelector('#imagem');
function colocaIMG(){
    const img = document.createElement('img');
    img.src = `../img/${pok.nome}.png`;
    imagemPoke.appendChild(img);
}

//cria e coloca o nome e o numero do pokemon
const nomeENum = document.querySelector('#title');
function colocaNome(){
    const h2 = document.createElement('h2');
    const num = `${numPoke >= 10 ? 'N°0' + numPoke : 'N°00' + numPoke}`;
    h2.innerHTML = '';
    h2.innerText = `${pok.nome} ${num}`;
    nomeENum.appendChild(h2);
}

//cria e coloca o tipo(s) do pokemon
const type = document.querySelector('#tipos');
function tipos(tipo){
    const div = document.createElement('div');
    div.classList.add(`divTipo`);
    div.classList.add(`${tipo}`);
    div.innerText = `${tipo}`;
    type.appendChild(div);
}

//cria e coloca os atributos do pokemon
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

//cria e coloca a descrição do pokemon
const descricao = document.querySelector('#descrPoke');
function descrPokemon(){
    descricao.innerHTML = pok.desc;
}

//cria e coloca os botões para trocar de pokemon
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

//cria funcionalidade do botão esquerdo
esquerda.addEventListener('click', function(){
    if(numPoke == 1){
        return;
    }
    numPoke--;
    numPoke = JSON.stringify(numPoke);
    localStorage.setItem('poke', numPoke);
    document.location.reload(true)
})

//cria a funcionalidade do botão da direita
direita.addEventListener('click', function(){
    numPoke++;
    numPoke = JSON.stringify(numPoke);
    localStorage.setItem('poke', numPoke);
    document.location.reload(true);
})

//cria e coloca as evoluções do pokemon atual, o colocando como destaque
const evolu1 = document.querySelector('#evolu1');
const evolu2 = document.querySelector('#evolu2');
const evolu3 = document.querySelector('#evolu3');
function criaEvolucao(nome){
    const img = document.createElement('img');
    img.src = `../img/${nome}.png`;
    return img;
}

//carrega as imagens doa pokemons da evolução do atual
function carregaIMG(){
    evolu1.appendChild(criaEvolucao(pok.evolucao1));
    evolu2.appendChild(criaEvolucao(pok.evolucao2));
    evolu3.appendChild(criaEvolucao(pok.evolucao3));
    if(pok.evolucao1 === pok.nome){
        evolu1.style.border = '5px solid gray';
    }
    if(pok.evolucao2 === pok.nome){
        evolu2.style.border = '5px solid gray';
    }
    if(pok.evolucao3 === pok.nome){
        evolu3.style.border = '5px solid gray';
    }
}


//inicia a criação das informações
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
    carregaIMG();
}

inicio();