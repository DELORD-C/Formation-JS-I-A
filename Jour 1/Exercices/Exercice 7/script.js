let p = document.getElementById('paragraph');
let button = document.getElementById('del');

button.addEventListener('click', () => {
    if (confirm('Voulez-vous supprimer le paragraphe ?')) {
        p.remove();
    }
});