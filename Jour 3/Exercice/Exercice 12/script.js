// let btn = document.getElementById('btn');

// btn.addEventListener('click', () => {

// });

function generateLoto () {
    // On créé un tableau vide qui contiendra nos nombres
    let numbers = [];

    // On ajoute le premier nombre entre 1 et 10
    numbers.push(Math.ceil(Math.random() * 10));

    // On créé une variable pour le deuxième nombre entre 1 et 10
    let subTen = false;

    // On lance une boucle sur 5 itérations
    for (let i = 0; i < 5; i++) {
        // On génère un nombre netre 1 et 49
        let number = Math.ceil(Math.random()*49);

        // Si le nombre est déjà dans le tableau ou
        // Si le nombre ets inférieur à 11 et que
        // notre variable subTen est vrai
        if (numbers.includes(number) || (number <= 10 && subTen)) {
            // On ajoute une itération
            i--;
        }
        // Sinon
        else {
            // Si le nombre est inférieur à 11
            if (number <= 10) {
                // On passe notre variable subTen sur vrai
                subTen = true;
            }
            // On ajoute le nombre au tableau
            numbers.push(number);
        }
    }


    if (document.getElementById('content')) {
        let p = document.getElementById('content')
        p.innerHTML = numbers[0] + ', ' + numbers[1] + ', ' + numbers[2] + ', ' + numbers[3] + ', ' + numbers[4] + ', ' + numbers[5];
    }
    else {
        let p = document.createElement('p');
        p.setAttribute('id', 'content');
        p.innerHTML = numbers[0] + ', ' + numbers[1] + ', ' + numbers[2] + ', ' + numbers[3] + ', ' + numbers[4] + ', ' + numbers[5];
        document.body.append(p);
    }
    
}