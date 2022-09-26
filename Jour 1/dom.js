// window
// document

let p = document.getElementById('paragraph');
let button = document.getElementById('button');
// console.log(p);

button.addEventListener('click', function () {
    if (confirm('Vous avez cliqué sur le boutton !')) {
        console.log("L'utilisateur a validé !");
    }
});
// p = document.getElementsByTagName('p');
// console.log(p);

// p = document.querySelector("p#paragraph");
// console.log(p);