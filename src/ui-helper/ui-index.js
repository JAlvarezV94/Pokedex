import '../data/pokeapi-data.js';

export default function printPkmnList(pkmnList){
    var imgBase = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    var pkmnGrid = document.getElementById("pkmnGrid");

    for(var i = 0; i < pkmnList.length; i++){

        var currentImg = imgBase + (i+1) +'.png';
        // create a new card.
        var newCard = document.createElement('div');
        newCard.classList.add('pkm-card');

        var pkmnImage = document.createElement('img');
        pkmnImage.setAttribute('src', currentImg);

        var divName = document.createElement('div');
        divName.classList.add('type-tag');
        divName.classList.add('type-grass');

        var pkmnName = document.createElement('p');
        pkmnName.classList.add('pkm-name');
        pkmnName.innerText = pkmnList[i].name;

        divName.appendChild(pkmnName);

        newCard.appendChild(pkmnImage);
        newCard.appendChild(divName);

        // add the created card to grid.
        pkmnGrid.appendChild(newCard);
    }
}