let form = document.getElementById('form');
let errors = 0;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let email = document.getElementById('email');
    let regex = /^(([a-z]|[0-9]){2}([a-z]|[0-9])+)@(([a-z]|[0-9]){2}([a-z]|[0-9])+)\.(([a-z]|[0-9]){1}([a-z]|[0-9])+)$/;
    if (email.value.match(regex)) {
        form.submit();
    }
    else {
        errors++;
        email.style.border = 'solid 3px red';
        if (errors > 3) {
            form.reset();
        }
    }
});

let submit = document.getElementById('submit');

submit.addEventListener('click', (event) => {
    console.log(event);
});