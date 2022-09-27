let date = new Date();
let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

console.log(date.toLocaleDateString('fr-FR', options));