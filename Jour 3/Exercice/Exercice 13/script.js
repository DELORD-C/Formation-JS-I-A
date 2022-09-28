// let btn = document.getElementById('btn');

// btn.addEventListener('click', () => {

// });

function generateEM () {
    
    let numbers = [];
    let p;
    
    //Ici on calcule la grille
    for (let i = 0; i < 7; i++) {
        let number;
        if (i < 2) {
            number = Math.ceil(Math.random() * 12);
        }
        else {
            number = Math.ceil(Math.random() * 50);
        }
        
        if (numbers.includes(number)) {
            i--;
        }
        else {
            numbers.push(number);
        }
    }


    if (document.getElementById('content')) {
        p = document.getElementById('content')
    }
    else {
        p = document.createElement('p');
        p.setAttribute('id', 'content');
        document.body.append(p);
    }
    p.innerHTML = numbers[0] + ', ' + numbers[1] + ', ' + numbers[2] + ', ' + numbers[3] + ', ' + numbers[4] + ', ' + numbers[5] + ', ' + numbers[6];
    
}