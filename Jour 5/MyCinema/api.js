let search = document.getElementById('search');
let results = document.getElementById('results');
let card = `
<a class="card mb-3" style="max-width: 540px;" href="LINK">
    <div class="row g-0">
        <div class="col-md-4">
        <img src="IMG" style="object-fit: cover; width: 100%; height: 100%;" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">TITLE</h5>
            <p class="card-text" style="display: -webkit-box; -webkit-line-clamp: 5; -webkit-box-orient: vertical; overflow: hidden;">RESUME</p>
            <p class="card-text"><small class="text-muted">DATE</small></p>
        </div>
        </div>
    </div>
</a>
`;
let timeout;
let loading = document.getElementById('loading');

search.addEventListener('keydown', () => {
    loading.style.display = 'block';
    results.innerHTML = '';
    clearTimeout(timeout);
    timeout = setTimeout(searchMovie, 1000);
});

function searchMovie () {
    let query = search.value;
    let requete = new XMLHttpRequest();

    requete.onreadystatechange = function () {
        if (requete.readyState === 4) {
            let reponse = JSON.parse(requete.responseText);
            let fullContent = '';
            if (reponse.results) {
                reponse.results.forEach(film => {
                    let content = card;
    
                    content = content.replace('TITLE', film.title);
                    content = content.replace('RESUME', film.overview);
                    content = content.replace('DATE', film.release_date);
                    content = content.replace('LINK', "https://www.themoviedb.org/movie/" + film.id);
                    
                    if (film.poster_path) {
                        content = content.replace('IMG', 'https://image.tmdb.org/t/p/w500' + film.poster_path);
                    }
                    else {
                        content = content.replace('IMG', 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg');
                    }
    
                    fullContent += content;
                });
            }
            results.innerHTML = fullContent;
            loading.style.display = 'none';
        }
    }
    requete.open('GET', "https://api.themoviedb.org/3/search/movie?api_key=625b3e1220c0fca7c7ac7f6fcca786ac&language=fr_FR&query=" + query);
    requete.send();
}

