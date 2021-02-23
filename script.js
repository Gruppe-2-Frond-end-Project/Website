function loadImage () {
    let userPokemon = document.getElementById("searchInput").value;
    fetch("https://pokeapi.co/api/v2/pokemon/" + userPokemon).then(response => response.json()).then(fetchedPokemon => {
        document.getElementById("imagePokemon").src = "https://pokeres.bastionbot.org/images/pokemon/" + fetchedPokemon["id"] +".png";
    });
}