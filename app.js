const colores = {
    fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5',
    ghost: '#c77dff',
    ice: '#c0fdff',
    steel: '#adb5bd',
    sinister: '#463f3a',
    dark: '#3c6e71'
}

const tipoPrincipal = Object.keys(colores);

const contenedor = document.querySelector('#contenedor');
const numeroDePokemons = 150; 

const esperarPokemon = async () => {
    for(let i = 1; i<= numeroDePokemons; i++){
        await obtenerPokemon(i);
    }
}

const obtenerPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const respuesta = await fetch(url);
    const pokemon = await respuesta.json();
    crearCarta(pokemon);
}

const crearCarta = (pokemon) => {
    const pokemonDiv = document.createElement('div');
    pokemonDiv.classList.add('pokemon');
    const tipoPokemon = pokemon.types.map(type => type.type.name);
    const tipo = tipoPrincipal.find(type => tipoPokemon.indexOf(type) > -1);
    const nombre = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const color = colores[tipo];
    pokemonDiv.style.backgroundColor = color;
    const pokemonHTML = `
        <div class="imgContenedor">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png">
        </div>
        <div class="informacion">
            <span class="numeroPokemon">#${pokemon.id.toString().padStart(3, '0')}</span>
            <h3 class="nombrePokemon">${nombre}</h3>
            <h4 class="tipo">Tipo: ${tipo}</h4>
        </div>
    `;

    pokemonDiv.innerHTML = pokemonHTML;

    contenedor.appendChild(pokemonDiv);

}

esperarPokemon();
