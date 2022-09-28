function tourner () {
    let img = document.getElementById('img');
    img.style.transition = '2s';
    img.style.transform = 'rotate(360deg)';
    setTimeout(function() {
        img.style.transition = '0s';
        img.style.transform = 'rotate(0deg)';
    }, 2000)
}