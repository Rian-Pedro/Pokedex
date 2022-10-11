 function teste(){
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
            evolucao1: 'Bulbasaur',
            evolucao2: 'Ivysaur',
            evolucao3: 'Venusaur',
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
            evolucao1: 'Bulbasaur',
            evolucao2: 'Ivysaur',
            evolucao3: 'Venusaur',
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
            evolucao1: 'Bulbasaur',
            evolucao2: 'Ivysaur',
            evolucao3: 'Venusaur',
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
            evolucao1: 'Charmander',
            evolucao2: 'Charmeleon',
            evolucao3: 'Charizard',
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
            evolucao1: 'Charmander',
            evolucao2: 'Charmeleon',
            evolucao3: 'Charizard',
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
            evolucao1: 'Charmander',
            evolucao2: 'Charmeleon',
            evolucao3: 'Charizard',
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
            evolucao1: 'Squirtle',
            evolucao2: 'Wartortle',
            evolucao3: 'Blastoise',
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
            evolucao1: 'Squirtle',
            evolucao2: 'Wartortle',
            evolucao3: 'Blastoise',
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
            evolucao1: 'Squirtle',
            evolucao2: 'Wartortle',
            evolucao3: 'Blastoise',
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
    return pokemon;
}

export {teste};