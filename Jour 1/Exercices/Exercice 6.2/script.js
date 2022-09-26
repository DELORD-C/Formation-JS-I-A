let unSurDeux = document.getElementById('1-2');
let classes = document.getElementById('classes');
let paragraphs = document.getElementsByTagName('p');

unSurDeux.addEventListener('click', function () {
    for (let i = 0; i < paragraphs.length; i++) {
        if (i % 2 == 0) {
            paragraphs[i].style.color = 'red';
        }
    }
});

classes.addEventListener('click', function () {
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].classList.add(i);
    }
});