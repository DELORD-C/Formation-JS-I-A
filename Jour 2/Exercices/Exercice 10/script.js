let perso1 = new Personnage('Gandalf', 'Mage', 10, 50, 15, 100);
let perso2 = new Personnage('Saruman', 'Mage', 15, 45, 10, 120);

let attaque1 = document.getElementById('attaque1');
let attaque2 = document.getElementById('attaque2');
let text = document.getElementById('text');

attaque1.addEventListener('click', () => {
    display(perso1.attaque(perso2));
    updatePv();
});

attaque2.addEventListener('click', () => {
    display(perso2.attaque(perso1));
    updatePv();
});

function display (msg) {
    text.innerHTML = msg;
}

function updatePv () {
    if (perso1.vie <= 0) {
        alert('Gandalf est mort !');
    }
    if (perso2.vie <= 0) {
        alert('Saruman est mort !');
    }
    document.getElementById('pdv1').innerHTML = perso1.vie;
    document.getElementById('pdv2').innerHTML = perso2.vie;
}