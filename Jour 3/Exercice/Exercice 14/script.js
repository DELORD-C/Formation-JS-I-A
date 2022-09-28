function tourner () {
    let img = document.getElementById('img');
    img.style.transition = '2s';
    img.style.transform = 'rotate(360deg)';
    setTimeout(function() {
        img.style.transition = '0s';
        img.style.transform = 'rotate(0deg)';
    }, 2000)
}

let p = document.getElementById("parag");

p.addEventListener('mouseenter', () => {
    let colors = ['blue', 'red', 'green', 'orange', 'grey'];
    let rand = Math.floor(Math.random() * colors.length);
    p.style.color = colors[rand];
});

p.addEventListener('mouseleave', () => {
    p.style.color = '';
});

window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    let context = document.getElementById('context');
    context.style.display = 'block';
    context.style.top = e.clientY + 'px';
    context.style.left = e.clientX + 'px';
});