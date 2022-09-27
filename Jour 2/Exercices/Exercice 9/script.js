let search = document.getElementById('search');

search.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        let value = search.value.toLowerCase();
        let elements = document.getElementsByTagName('li');
        for (let i = 0; i < elements.length; i++) {
            let li = elements[i];
            let liContent = li.innerText.toLowerCase();
            if (liContent.includes(value)) {
                li.style.display = '';
            }
            else {
                li.style.display = 'none';
            }
        }
    }
});