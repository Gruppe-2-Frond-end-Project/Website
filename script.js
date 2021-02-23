function loadImage () {
    let userPokemon = document.getElementById("searchInput").value;
    document.getElementById("imagePokemon").src = "https://pokeres.bastionbot.org/images/pokemon/" + userPokemon +".png";
}