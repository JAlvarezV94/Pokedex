export default function loadPokemonRange(pkmnStart, pkmnEnd, callback){

    var pkmnList = [];

    fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    .then(response=>response.json())
    .then(data=>{ 
        pkmnList = data.results;
        callback(pkmnList);
     })
    .catch((error) => {
        console.log(error.message);
    })

    callback();
}