class Personnage {
    constructor (nom, classe, force, intelligence, agilite, vie) {
        this.nom = nom;
        this.classe = classe;
        this.force = force;
        this.intelligence = intelligence;
        this.agilite = agilite;
        this.vie = vie;
    }

    attaque (cible) {
        cible.vie = cible.vie - this.force;
        return this.nom + " attaque " + cible.nom + " avec " + this.force + " points de dégâts.";
    }
}