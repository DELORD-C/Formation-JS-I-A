class Personne {
    constructor(nom, prenom, age, presence) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.presence = presence;
    }

    presentation() {
        console.log("Bonjour, je m'appelle " + this.prenom + ", j'ai " + this.age + ' ans.');
    }
}

let personne1 = new Personne('DELORD', 'Clément', 28, true);
let personne2 = new Personne('SOSSOE', 'Kelly', 32, true);
let personne3 = new Personne('HUGON', 'Hervé', 53, true);

personne3.presentation();