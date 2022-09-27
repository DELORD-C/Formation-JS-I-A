//Fonctions JS

//Fonction nommée
function myFunction () {
    
}

//Fonction anonyme
// function () {
    
// }

//Fonction fléchée anonyme
() => {

}

//Ternaire
let a = 1;
let b = 2;

if (a + b > 3) {
    c = true;
}
else {
    c = false;
}

c = a + b > 3 ? true : false;

// Affectation par décomposition
let y, x, rest;
[y, x] = [10, 20];
[y, x, ...rest] = [10, 20, 30, 40, 50, 60, 70];

function sum(a, b, c, d, e) {
    return a + b + c + d + e;
}

// ... est un spread operator il permet de transformer un tableau en suite de donnée
sum(...rest);

console.log(rest);