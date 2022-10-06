   import {teste} from '../pokemons/pokemons.js';

   const pokemon = teste();
 
    for(let i = 0; i < pokemon.length; i++){
        criaPokemon(pokemon[i].nome, pokemon[i].tipo1, pokemon[i].tipo2, pokemon[i].numero);
    }

    function criaNomePokemon(nome){
        const nomePokemon = document.createElement('p');
        nomePokemon.classList.add('nomePoke');
        nomePokemon.innerText = `${nome}`;
        return nomePokemon
    }

    function criaNumPokemon(num){
        const numPokemon = document.createElement('p');
        numPokemon.classList.add('numPoke');
        numPokemon.innerText = `N°${num >= 10 ? '0' + num : '00' + num}`;
        return numPokemon
    }

    function criaImgPokemon(nome){
        const imagemPokemon = document.createElement('img');
        imagemPokemon.src = `../img/${nome}.png`;
        return imagemPokemon
    }

    function criaDivTipo(tipo){
        const divTipo = document.createElement('div');
        divTipo.classList.add(tipo, 'divTipo');
        divTipo.innerText = tipo;
        return divTipo
    }

    function criaLink(tipo1, num){
        const divPokemon = document.createElement('a');

        divPokemon.href = '../sobrePokemon/sobrePokemon.html';

        divPokemon.addEventListener('click', function(){
            const criaNum = JSON.stringify(num);
            localStorage.setItem('poke', criaNum);
        });

        divPokemon.classList.add('pokemon', tipo1);

        return divPokemon;
    }

    function criaNomeNum(){
        const divNomeNum = document.createElement('div');
        divNomeNum.classList.add('nomeNumero');
        return divNomeNum;
    }

    function criaIMG(tipo1){
        const divIMG = document.createElement('div');
        divIMG.classList.add('divIMG', tipo1);
        return divIMG;
    }

    function criaContainerTipo(){
        const containerTipo = document.createElement('div');
        containerTipo.classList.add('containerTipo');
        return containerTipo;
    }

    function criandoDivs(nome, tipo1, tipo2, num, divPokemon, divNomeNum, divIMG, containerTipo, areaPokemon){

        divNomeNum.appendChild(criaNumPokemon(num));
        divNomeNum.appendChild(criaNomePokemon(nome));

        containerTipo.appendChild(criaDivTipo(tipo1));

            if(tipo2){
                containerTipo.appendChild(criaDivTipo(tipo2));
            } 

        divNomeNum.appendChild(containerTipo);
        divIMG.appendChild(criaImgPokemon(nome));
        divPokemon.appendChild(divIMG);
        divPokemon.appendChild(divNomeNum);
        areaPokemon.appendChild(divPokemon);


    }

    function criaPokemon(nome, tipo1, tipo2, num){


        const areaPokemon = document.querySelector('.linha');
        const divPokemon = criaLink(tipo1, num);
        const divNomeNum = criaNomeNum();
        const divIMG = criaIMG(tipo1);
        const containerTipo = criaContainerTipo();

        criandoDivs(nome, tipo1, tipo2, num, divPokemon, divNomeNum, divIMG, containerTipo, areaPokemon)
        
    }
