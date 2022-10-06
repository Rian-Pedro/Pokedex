let name;

function inicio(){

    let count = 0;
    const areaPokemon = document.querySelector('.linha');
    const pokemon = [
        {
            nome: 'Bulbasaur',
            tipo1: 'Grass',
            tipo2: 'Poison',
            numero: '1',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dignissimos repellendus veritatis nisi aperiam, similique recusandae Bulbasaur.',
            altura: '0.7 m',
            peso: '6.9 kg',
            categoria: 'Grama',
            habilidades: 'Navalha',
        },
        {
            nome: 'Ivysaur',
            tipo1: 'Grass',
            tipo2: 'Poison',
            numero: '2',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dignissimos repellendus veritatis nisi aperiam, similique recusandae Ivysaur.',
            altura: '',
            peso: '',
            categoria: '',
            habilidades: '',
        },
        {
            nome: 'Venusaur',
            tipo1: 'Grass',
            tipo2: 'Poison',
            numero: '3',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dignissimos repellendus veritatis nisi aperiam, similique recusandae Venusaur.',
            altura: '',
            peso: '',
            categoria:'',
            habilidades:'',
        },
        {
            nome: 'Charmander',
            tipo1: 'Fire',
            tipo2: '',
            numero: '4',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dignissimos repellendus veritatis nisi aperiam, similique recusandae Charmander.',
            altura:'',
            peso:'',
            categoria:'',
            habilidades:'',
        },
        {
            nome: 'Charmeleon',
            tipo1: 'Fire',
            tipo2: '',
            numero: '5',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dignissimos repellendus veritatis nisi aperiam, similique recusandae Charmeleon.',
            altura:'',
            peso:'',
            categoria:'',
            habilidades:'',
        },
        {
            nome: 'Charizard',
            tipo1: 'Fire',
            tipo2: 'Flying',
            numero: '6',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dignissimos repellendus veritatis nisi aperiam, similique recusandae Charizard.',
            altura:'',
            peso:'',
            categoria:'',
            habilidades:'',
        },
        {
            nome: 'Squirtle',
            tipo1: 'Water',
            tipo2: '',
            numero: '7',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dignissimos repellendus veritatis nisi aperiam, similique recusandae Squirtle.',
            altura:'',
            peso:'',
            categoria:'',
            habilidades:'',
        },
        {
            nome: 'Wartortle',
            tipo1: 'Water',
            tipo2: '',
            numero: '8',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dignissimos repellendus veritatis nisi aperiam, similique recusandae Wartortle.',
            altura:'',
            peso:'',
            categoria:'',
            habilidades:'',
        },
        {
            nome: 'Blastoise',
            tipo1: 'Water',
            tipo2: '',
            numero: '9',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dignissimos repellendus veritatis nisi aperiam, similique recusandae Blastoise.',
            altura:'',
            peso:'',
            categoria:'',
            habilidades:'',
        },
        {
            nome: 'Pikachu',
            tipo1: 'Electric',
            tipo2: '',
            numero: '25',
            desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dignissimos repellendus veritatis nisi aperiam, similique recusandae Pikachu.',
            altura:'',
            peso:'',
            categoria:'',
            habilidades:'',
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

    function criaPokemon(nome, tipo1, tipo2, num){

        const divPokemon = document.createElement('a');
        const divNomeNum = document.createElement('div');
        const divIMG = document.createElement('div');
        const containerTipo = document.createElement('div');

        divPokemon.href = '../sobrePokemon/teste.html';

        divPokemon.addEventListener('click', function(){
            const criaNum = JSON.stringify(num);
            localStorage.setItem('poke', criaNum);
        })

        divPokemon.classList.add('pokemon', tipo1);
        divNomeNum.classList.add('nomeNumero');
        divIMG.classList.add('divIMG', tipo1);
        containerTipo.classList.add('containerTipo');

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

}

inicio();

