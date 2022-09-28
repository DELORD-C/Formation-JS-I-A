// async function genererNbPremiers(quota) {

//     function estPremier(n) {
//       for (let c = 2; c <= Math.sqrt(n); ++c) {
//         if (n % c === 0) {
//             return false;
//          }
//       }
//       return true;
//     }
  
//     const nbPremiers = [];
//     const maximum = 1000000;
  
//     while (nbPremiers.length < quota) {
//       const candidat = Math.floor(Math.random() * (maximum + 1));
//       if (estPremier(candidat)) {
//         nbPremiers.push(candidat);
//       }
//     }
  
//     return nbPremiers;
// }
  
// document.querySelector('#generer').addEventListener('click', () => {
//     const quota = document.querySelector('#quota').value;
//     const nbPremiers = genererNbPremiers(quota);
//     document.querySelector('#output').textContent = `Génération de ${quota} nombres premiers terminée !`;
// });
  
// document.querySelector('#recharger').addEventListener('click', () => {
//     document.location.reload();
// });





function getPremier () {
  return new Promise (resolve => setTimeout(function () {
    resolve('Les 1000 nombres premiers sont patati et patata...')
  }, 5000))
}

getPremier().then((data) => {
  alert(data);
});

console.log('test');