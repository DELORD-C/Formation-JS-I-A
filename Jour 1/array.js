let tab = [12, 15, 4, 6, 8, 3];
// let tab2 = new Array(12, 15, 'yes');

tab.push(78);
// tab2 = tab.splice(0, 2);
// tab2 = tab.slice(0,2);
// tab.pop();
// tab.shift();
// tab.reverse();

function estPremier (element) {
    let debut = 2;
    for (let i = 0; debut <= Math.sqrt(element); i++) {
        if (element % debut ++ < 1) {
            return false;
        } 
    }
    return true;
}

console.log(tab.find(estPremier));