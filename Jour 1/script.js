// LES VARIABLES

let chaine = "Hello world !";
let nombre = 956;
let nombre2 = '956';
let boolean = true;
let rien = null;

chaine = "New Hello World !";

nombre = nombre + 1;
nombre++; //même chose que la ligne précédente

const NOM = 'DELORD';
let date = "Aujourd'hui";

// console.log(chaine);

// Les opérateurs
// + - / * %

chaine = chaine + " Youpi !";
// console.log(chaine);

// Les opérateurs conditionnels
// == est égale à (valeur)
// != n'est pas égale à (valeur)
// === est égale à (type)
// !== n'est pas égale à (type)
// < inférieur à
// <= inférieur ou égal à
// > supérieur à
// >= supérieur ou égal à


// STRUCTURES DE CONTROLE

//Conditions
if (nombre < 1000) {
    // console.log('inférieur à 1000.');
}
else if (nombre > 1000) {
    console.log('supérieur à 1000.');
}
else {
    console.log('égal à 1000.');
}

switch (NOM) {
    case 'DELORD':
        // console.log('Clément');
        break;

    case 'MOULIN':
        console.log('Jean');
        break;

    default:
        console.log('Nom non reconnu.');
        break;
}

// Boucles
for (let i = 1; i <= 10; i++) {
    // console.log(i);
}

let tableau = [89, 76, 52, 12];
let tableau2 = [88, 746, 252, 112];

console.log(tableau);


// for (let y = 0; y < tableau.length; y++) {
//     const elem = tableau[y];
//     console.log(tableau[y]);
// }

// tableau.forEach(element => {
//     console.log(element);
// });


// Fonctions

function hello (str, str2) {
    console.log(str);
    console.log(str2);
}

hello('Salut je suis content !', 'Youpi');

function afficherTableau (tab) {
    tab.forEach(element => {
        console.log(element);
    });
}

// afficherTableau(tableau);
// afficherTableau(tableau2);

function addition (a = 0, b = 0) {
    return a + b
}

let c = addition(10);