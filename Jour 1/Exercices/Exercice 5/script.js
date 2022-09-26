function sapinDeNoel (x) {
    for (let i = 1; i <= x; i++) {
        let nbEspaces = x - i;
        let nbZeros = (i * 2) - 1;
        let chaine = "";
        for (let y = 0; y < nbEspaces; y++) {
            chaine += ' ';
        }
        for (let z = 0; z < nbZeros; z++) {
            chaine += '0';
        }
        console.log(chaine);
    }
}

sapinDeNoel(10);