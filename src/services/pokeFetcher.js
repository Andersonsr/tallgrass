const url = 'https://pokeapi.co/api/v2/';

const fetchPokemon = (name) => 
    fetch(`${url}pokemon/${name}`)
    .then(response => response.json());

const fetchType = (type) => 
    fetch(`${url}type/${type}`)
    .then(response => response.json());

const fetchPokedex = (region) =>
    fetch(`${url}pokedex/${region}`)
    .then(response => response.json());

export {
    fetchPokemon,
    fetchType,
    fetchPokedex
}