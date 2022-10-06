    const pokemon = [
        {
            nome: 'Bulbasaur',
            tipo1: 'Grass',
            tipo2: 'Poison',
            numero: '1',
            desc: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
            altura: '0.7 m',
            peso: '6.9 kg',
            categoria: 'Seed',
            habilidades: 'Overgrow',
        },
        {
            nome: 'Ivysaur',
            tipo1: 'Grass',
            tipo2: 'Poison',
            numero: '2',
            desc: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
            altura: '1.0 m',
            peso: '13.0 kg',
            categoria: 'Seed',
            habilidades: 'Overgrow',
        },
        {
            nome: 'Venusaur',
            tipo1: 'Grass',
            tipo2: 'Poison',
            numero: '3',
            desc: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
            altura: '2.0 m',
            peso: '100.0 kg',
            categoria:'Seed',
            habilidades:'Overgrow',
        },
        {
            nome: 'Charmander',
            tipo1: 'Fire',
            tipo2: '',
            numero: '4',
            desc: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
            altura:'0.6 m',
            peso:'8.5 kg',
            categoria:'Lizard',
            habilidades:'Blaze',
        },
        {
            nome: 'Charmeleon',
            tipo1: 'Fire',
            tipo2: '',
            numero: '5',
            desc: 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
            altura:'1.1 m',
            peso:'19.0 kg',
            categoria:'Flame',
            habilidades:'Blaze',
        },
        {
            nome: 'Charizard',
            tipo1: 'Fire',
            tipo2: 'Flying',
            numero: '6',
            desc: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
            altura:'1.7 m',
            peso:'90.5 kg',
            categoria:'Flame',
            habilidades:'Blaze',
        },
        {
            nome: 'Squirtle',
            tipo1: 'Water',
            tipo2: '',
            numero: '7',
            desc: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
            altura:'0.5 m',
            peso:'9.0 kg',
            categoria:'Tiny Turtle',
            habilidades:'Torrent',
        },
        {
            nome: 'Wartortle',
            tipo1: 'Water',
            tipo2: '',
            numero: '8',
            desc: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
            altura:'1.0 m',
            peso:'22.5 kg',
            categoria:'Turtle',
            habilidades:'Torrent',
        },
        {
            nome: 'Blastoise',
            tipo1: 'Water',
            tipo2: '',
            numero: '9',
            desc: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
            altura:'1.6 m',
            peso:'85.5 kg',
            categoria:'Shellfish',
            habilidades:'Torrent',
        },
        {
            nome: 'Pikachu',
            tipo1: 'Electric',
            tipo2: '',
            numero: '25',
            desc: 'Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.',
            altura:'0.4 m',
            peso:'6.0 kg',
            categoria:'Mouse',
            habilidades:'Static',
        },
    ];

    const pokemonJSON = JSON.stringify(pokemon);
    localStorage.setItem('pokemon', pokemonJSON);

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
