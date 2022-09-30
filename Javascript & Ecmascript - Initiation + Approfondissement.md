# Javascript & Ecmascript - Initiation + Approfondissement

## Liens Utiles

Mon Compte Dawan
> https://moncompte.dawan.fr

Repository Github
> https://github.com/DELORD-C/JS-init-appro

Doc JS
> https://developer.mozilla.org/en-US/

The Movie DB API Key
> 625b3e1220c0fca7c7ac7f6fcca786ac
> https://api.themoviedb.org/3/search/movie?api_key=625b3e1220c0fca7c7ac7f6fcca786ac&language=fr_FR&query=

Ahaslides
> https://ahaslides.com/FDJ

Exercices JS
> https://odyssey.sdlm.be

Codepen
> https://codepen.io/your-work

## Variables

### Définition

```javascript=
let chainedecaracteres = "Valeur";
let nombre = 12;
let boolean = true;
let tableau = [13, 'yes', 78, false];

// On utilise let au lieu de var car c'est une meilleur pratique
```

### Utilisation

```javascript=
console.log(nombre + chainedecaracteres);
// Affichera "12Valeur" dans la console.
```

## Opérateurs


| Addition | Soustraction | Multiplication | Division | Modulo |
| -------- | -------- | -------- | -------- | -------- |
| + | - | * | / | % |
> L'opérateur `+` sert aussi à concaténer les chaînes de caractères.

## Structures de contrôle


### Conditions


```javascript=
//if (si)
if (a < b) {
    console.log('A est inférieur à B');
}
else if (a > b) {
    console.log('B est inférieur à A');
}
else {
    console.log('A est égal à B');
}
```

```javascript=
//switch
switch (nombre) {
    case 12:
        console.log("Douze");
        break;
}
```

#### Opérateurs de condition



| Opérateur | Définition |
| -------- | -------- |
| >     | Supérieur à |
| >=    | Supérieur ou égal à |
| <     | Inférieur à |
| <=    | Inférieur ou égal à |
| ==    | égal à |
| !=    | différent de |
| ===   | égal à (avec type) |
| !==   | différent de (avec type) |


### Boucles

```javascript=
//for
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// Affichera :
// 1
// 2
// 3
// etc.
```

```javascript=
//foreach
tableau.foreach(element => {
    console.log(element);
})
// Affichera :
// 13
// yes
// 78
// false
```

## Fonctions

### Déclaration

```javascript=
function nomDeLaFonction (argument1, argument2, ...) {
    console.log(argument1);
}
```

### Utilisation

```javascript=
nomDeLaFonction('Test', 0);
// Affichara 'Test'
```

### Paramètre optionnel & valeur par défaut
> Si on affecte une valeur à un paramètre dans la déclaration de la fonction, celui-ci deviens alors facultatif :
```javascript=
function nomDeLaFonction (argument1, argument2 = 'Non') {
    console.log(argument1);
    console.log(argument2);
}

nomDeLaFonction('Test');
// Affichera :
// Test
// Non
```

## DOM

### Récupérer un élément

```javascript=
//Via son id
let button = document.getElementById('button')

//Via leurs balises
let buttons = document.getElementsByTagName('button');

//Via leurs classes
let buttons = document.getElementsByClassName('button');

//Via un identifiant CSS
let button = document.querySelector('button#button');
let buttons = document.querySelectorAll('.button');
```

### Ecouter un évènement

```javascript=
let button = document.getElementById('button');

button.addEventListener('click', function () {
    console.log('Button pressed !');
});
```

### Affecter un élement

```javascript=
let button = document.getElementById('button');

//changer le css
button.style.color = 'red';
button.style.fontSize = '20px';

//changer le contenu
button.innerHTML = 'Appuyer';

//ajouter une classe
button.classList.add('Test');

//Il existe pleins d'autres opérations
```

### Naviguer dans le DOM

> On peut utiliser les voisins, les parents et les enfants pour se déplacer manuellement dans le dom

```htmlmixed=
<div>
    <span>Test</span>
    <button id='button'>Press</button>
    <img src='/image1.jpg'>
</div>
```

```javascript=
let button = document.getElementById('button');
let img = button.nextElementSibling();
let div = button.parent();
let span = div.firstElementChild();
```



## Les Objets

### Créer un objet literral et accéder à ses propriétés

```javascript=
let personne = {
    "nom" : "DELORD",
    "prenom" : "Clément",
    "age" : 28,
    "presence" : true
}

console.log(personne.prenom);
// Affichera "Clément"
```

### Ajouter une méthode à un objet litteral

```javascript=
personne.presentation = function () {
    console.log("Bonjour, je m'appelle " + this.prenom + ".");
}
```
> `this` permet de faire référence à l'objet du contexte

### Objet Math

```javascript=
console.log(Math.random());
// Math.random() renvoie un nombre décimal compris entre 0 et 1

let rand = Math.ceil(Math.random() * 10); 
//on récupère un nombre entre 1 et 10

// Math.ceil donne l'arrondi supérieur
// Math.floor donne l'arrondi inférieur
// Math.round donne l'arrondi proche
```

### Classes

> Une classe est modèle réutilisable d'un objet, il contient des attributs et des méthodes

```javascript=
class NomDeLaClasse {
    constructor(param1, param2) {
        this.param1 = param1;
        this.param2 = param2;
    }
    
    direBonjour() {
        console.log('Bonjour je suis ' + this.param1)
    }
}

let objet = new NomDeLaClasse('param1', 'param2');
```

## Sucres syntaxiques

```javascript=
//Fonction fléchée anonyme
() => {

}

//Ternaire
let a = 1;
let b = 2;
let c = a + b > 3 ? true : false;
// Si a+b > 3, alors valeur true sinon valeur false
// CONDITION ? VALEUR SI VRAI : VALEUR SI FAUX

// Affectation par décomposition
let y, x, rest;
[y, x] = [10, 20];
[y, x, ...rest] = [10, 20, 30, 40, 50, 60, 70];

function sum(a, b, c, d, e) {
    return a + b + c + d + e;
}

// ... est un spread operator il permet de transformer un tableau en suite de donnée
sum(...rest);
```
### Spécificité click
> Il est possible d'affecter un écouteur d'évènnement directement dans le code html5, on évite ainsi d'avoir à le coder en js
```htmlmixed=
<button onclick="fonctionPersonnalisee()">Press</button>
```
> On affecte en réalité une fonction à l'évènnement.

### Internationnalisation

#### Date

```javascript=
let date = new Date();
let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}
// Ici long correspond à une écriture en toute lettres

console.log(date.toLocaleDateString('fr-FR', options));
// On passe la locale (fr-FR, en-US, etc...) à la méthode toLocaleDateString()

console.log(Date.now());
// Date.now() renvoie le timestamp actuel
```

#### Monnaie

```javascript=
let price = 14700000.15;

let dollarUS = Intl.NumberFormat('en-US');
let euroFR = Intl.NumberFormat('fr-FR');

console.log(dollarUS.format(price) + ' $');// 14,700,000.15 $
console.log(euroFR.format(price) + ' €');// 14 700 000,15 €
```

## Animations

> On utilise la propriété css `transition` pour effectuer des animations facilement en JS

```css=
#img {
    transition: 2s;
}
```
```javascript=
let img = document.getElementById('img');
img.style.transform = "Rotate(360deg)";
```
> L'emeple ci-dessus fera pivoter l'image sur 360 degrés en 2 secondes à l'arrivée sur la page.

## Asynchrone

> Dés lors que l'on veut un traitement asynchrone, on utilisera une promesse

![](https://hedgedoc.dawan.fr/uploads/upload_23cc34fb7be2f00613a34d37da093458.png)

```javascript=
//On simule un traitement long (5s) avec setTimeout
function getPremier () {
  return new Promise (resolve => setTimeout(function () {
      //On appelle resolve() pour terminer la fonction
    resolve('Les 1000 nombres premiers sont patati et patata...')
  }, 5000))
}

//On appelle la fonction
getPremier().then((data) => {
    // On effectue des actions une fois la fonction terminée
    alert(data);
});

//le console log se fera instantanemment car la fonction ci-dessus est traitée de manière asynchrone.
console.log('test');
```

## Ajax & API

```javascript=
let requete = new XMLHttpRequest();
requete.onreadystatechange = function () {
    if (requete.readyState === 4) {
        let reponse = JSON.parse(requete.responseText);
        console.log(reponse);
    }
}
requete.open('GET', "https://api.themoviedb.org/3/search/movie?api_key=625b3e1220c0fca7c7ac7f6fcca786ac&language=fr_FR&query=" + query);
requete.send();
```