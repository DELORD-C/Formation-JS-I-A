let img = document.getElementById('img');
let nbChatons = 3;

function next() {
    let nbChatonActuel = img.getAttribute('src');
    nbChatonActuel = nbChatonActuel.slice(8);
    nbChatonActuel = nbChatonActuel.slice(0, -5);
    console.log(nbChatonActuel);
    let nbChatonFutur = parseInt(nbChatonActuel) + 1;
    if (nbChatonFutur >= nbChatons) {
        nbChatonFutur = 0;
    }
    img.setAttribute('src', 'chaton (' + nbChatonFutur + ').jpg')
}

function prev() {
    let nbChatonActuel = img.getAttribute('src');
    nbChatonActuel = nbChatonActuel.slice(8);
    nbChatonActuel = nbChatonActuel.slice(0, -5);
    console.log(nbChatonActuel);
    let nbChatonFutur = parseInt(nbChatonActuel) - 1;
    if (nbChatonFutur < 0) {
        nbChatonFutur = nbChatons - 1;
    }
    img.setAttribute('src', 'chaton (' + nbChatonFutur + ').jpg')
}