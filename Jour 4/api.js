let search = document.getElementById('search');
// On récupère notre champ de recherche

let results = document.getElementById('results');
// On récupère la div vide dans laquelle on ajoutera les résultats

search.addEventListener('change', () => {
    //On ajoute l'event listener sur le champ recherche
    searchMovie(search.value);
    // Quand celui est déclenché, on lance la fonction
    // searchMovie en lui donnant en paramètre la valeur du champ
});

function searchMovie (query) {
    let requete = new XMLHttpRequest();
    //Création de la requète

    requete.onreadystatechange = function () {
        // Création du pseudo event listener
        // Qui nous permet d'agir lors de la résolution
        // De la requète
        if (requete.readyState === 4) {
            // On vérifie l'état de la requète (4 = résolue)
            let reponse = JSON.parse(requete.responseText);
            // On récupère la réponse, et on analyse le JSON
            // puis on le transforme en objet gràce à
            // JSON.parse()
            results.innerHTML = "";
            //On vide la div (si il y avait des précédents résultats)
            reponse.results.forEach(film => {
                // On ittère sur chaque résultat (film)
                let p = document.createElement('p');
                // Pour chaque résultat on créé un paragraphe
                p.innerHTML = film.original_title;
                // On met titre du film dedans
                results.append(p);
                // On ajoute le paragraphe à la div
            });
        }
    }
    requete.open('GET', "https://api.themoviedb.org/3/search/movie?api_key=625b3e1220c0fca7c7ac7f6fcca786ac&language=fr_FR&query=" + query);
    // On définit l'url de notre requète
    requete.send();
    // On envoie la requète
}

