let email = document.getElementById('email');

let nom = email.getAttribute('name');
email.setAttribute('zbr', 'test');

console.log(nom);

let submit = document.getElementById('btn');
let div = submit.previousElementSibling;
let city = div.firstElementChild;

console.log(city);