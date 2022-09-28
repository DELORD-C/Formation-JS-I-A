// let btn = document.getElementById('btn');

// btn.addEventListener('click', () => {

// });

function generateEM () {
    
    let numbers = [];
    
    //Ici on calcule la grille


    if (document.getElementById('content')) {
        let p = document.getElementById('content')
        p.innerHTML = numbers[0] + ', ' + numbers[1] + ', ' + numbers[2] + ', ' + numbers[3] + ', ' + numbers[4] + ', ' + numbers[5] + ', ' + numbers[6];
    }
    else {
        let p = document.createElement('p');
        p.setAttribute('id', 'content');
        p.innerHTML = numbers[0] + ', ' + numbers[1] + ', ' + numbers[2] + ', ' + numbers[3] + ', ' + numbers[4] + ', ' + numbers[5] + ', ' + numbers[6];
        document.body.append(p);
    }
    
}