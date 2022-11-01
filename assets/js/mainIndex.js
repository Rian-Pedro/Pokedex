//importando array com objetos(imformações dos pokemons)
import {teste} from '../../../pokemons/pokemons.js';
const pokemon = teste();

//inicio da criação dos cards de cada pokemon
function inicio(){
    for(let i = 0; i < pokemon.length; i++){
        criaPokemon(pokemon[i].nome, pokemon[i].tipo1, pokemon[i].tipo2, pokemon[i].numero);
    }
}

inicio();

//cria paragrafo do nome do Pokemon
function criaNomePokemon(nome){
    const nomePokemon = document.createElement('p');
    nomePokemon.classList.add('nomePoke');
    nomePokemon.innerText = `${nome}`;
    return nomePokemon
}

//cria paragrafo do número do Pokemon
function criaNumPokemon(num){
    const numPokemon = document.createElement('p');
    numPokemon.classList.add('numPoke');
    numPokemon.innerText = `N°${num >= 10 ? '0' + num : '00' + num}`;
    return numPokemon
}

//cria imagem do Pokemon
function criaImgPokemon(nome){
    const imagemPokemon = document.createElement('img');
    imagemPokemon.src = `../img/${nome}.png`;
    return imagemPokemon
}

//cria container do tipo do Pokemon
function criaDivTipo(tipo){
    const divTipo = document.createElement('div');
    divTipo.classList.add(tipo, 'divTipo');
    divTipo.innerText = tipo;
    return divTipo
}

//cria container link para a pagina sobre o Pokemon
function criaLink(tipo1,num,img,nomeNum){
    const divPokemon = document.createElement('a');
    divPokemon.href = 'sobrePokemon.html';
    divPokemon.addEventListener('click', function(){
        const criaNum = JSON.stringify(num);
        localStorage.setItem('poke', criaNum);
    });
    divPokemon.classList.add('pokemon', tipo1);
    divPokemon.appendChild(img);
    divPokemon.appendChild(nomeNum);
    return divPokemon;
}

//cria container com o nome e numero do Pokemon
function criaNomeNum(nome,num,tipagem){
    const divNomeNum = document.createElement('div');
    divNomeNum.classList.add('nomeNumero');
    divNomeNum.appendChild(criaNumPokemon(num));
    divNomeNum.appendChild(criaNomePokemon(nome));
    divNomeNum.appendChild(tipagem);
    return divNomeNum;
}

//cria divisão da imagem do Pokemon
function criaIMG(tipo1,nome){
    const divIMG = document.createElement('div');
    divIMG.classList.add('divIMG', tipo1);
    divIMG.appendChild(criaImgPokemon(nome));
    return divIMG;
}

//cria container dos tipos do Pokemon, caso tenha dois
function criaContainerTipo(tipo1,tipo2){
    const containerTipo = document.createElement('div');
    containerTipo.classList.add('containerTipo');
    containerTipo.appendChild(criaDivTipo(tipo1));
    if(tipo2){
        containerTipo.appendChild(criaDivTipo(tipo2));
    } 
    return containerTipo;
}

//cria card do Pokemon
function criaPokemon(nome, tipo1, tipo2, num){
    const areaPokemon = document.querySelector('#areapokemon');
    areaPokemon.appendChild(criaLink(tipo1,num,criaIMG(tipo1,nome),criaNomeNum(nome,num,criaContainerTipo(tipo1,tipo2))));
}

//Código da area de pesquisa
const form = document.querySelector('.pesquisa');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const pokemonteste = document.querySelectorAll('div .pokemon');
    const botao = document.querySelector("#enviarNome");
    let casa = document.querySelector('#pesquisaNome');
    let name = document.querySelector('#pesquisaNome').value;

    if(!casa.value){
        for(let i of pokemonteste){
            i.remove();
        }
        botao.classList.remove('reload');
        botao.classList.add('search');
        inicio();
        return;
    }

    for(let i of pokemonteste){
        if(!i.innerHTML.includes(name)){
            i.remove();
        }
    }

    casa.value = '';
    botao.classList.remove('search');
    botao.classList.add('reload');

});

const filtroSelecionado = document.querySelector("#tipos");
filtroSelecionado.addEventListener("submit", function(e){
    e.preventDefault();
    const valorFiltro = document.querySelector("#selecionar");
    
    const pokemonteste = document.querySelectorAll('div .pokemon');
    for(let i of pokemonteste){
        if(!i.innerHTML.includes(valorFiltro.value)){
            i.remove();
        }
        
        if(valorFiltro.value == 'Padrao'){
            for(let i of pokemonteste){
                i.remove();
            }

            inicio();
            return;
        }
    }

})

