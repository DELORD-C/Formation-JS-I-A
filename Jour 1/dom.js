// window
// document

let p = document.getElementById('paragraph');
let button = document.getElementById('button');
console.log(p);

button.addEventListener('click', function () {
    p.style.color = 'red';
});
// p = document.getElementsByTagName('p');
// console.log(p);

// p = document.querySelector("p#paragraph");
// console.log(p);