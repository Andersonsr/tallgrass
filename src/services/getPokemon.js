import { fetchPokedex, fetchPokemon, fetchType } from "./pokeFetcher.js";

async function getPokemonByType(type){
    const typeInfo = await fetchType(type);
    const result = []

    for(let i=0; i<typeInfo.pokemon.length; i++) { 
        let pokemon = typeInfo.pokemon[i];
        // console.log(pokemon);
        let splited = pokemon.pokemon.url.split('/');
        let id = splited[splited.length - 2];
        let pokemonInfo = await fetchPokemon(id);
        result.push(pokemonInfo);
    }
    return result;
}

async function getPokemonByRegion(region){
    const regionInfo = await fetchPokedex(region);
    const result = [];
    for(let i =0; i<regionInfo.pokemon_entries.length; i++){
        let pokemon = regionInfo.pokemon_entries[i];
        let splited = pokemon.pokemon_species.url.split('/');
        let id = splited[splited.length - 2];
        let pokemonInfo = await fetchPokemon(id);
        result.push(pokemonInfo);
    }
    return result;
}

async function getPokemon(id){
    let pokemonInfo = await fetchPokemon(id);
    return pokemonInfo;
}

export{
    getPokemonByType,
    getPokemonByRegion,
    getPokemon
}