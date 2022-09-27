let form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let errors = 0;
    
    let email = document.getElementById('email');
    let tel = document.getElementById('tel');

    let regex = /^(([a-z]|[0-9]){2}([a-z]|[0-9])+)@(([a-z]|[0-9]){2}([a-z]|[0-9])+)\.(([a-z]|[0-9]){1}([a-z]|[0-9])+)$/;
    let regex2 = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;

    if (!email.value.match(regex)) {
        email.style.border = 'solid 3px red';
        errors++;
    }
    else {
        email.style.border = '';
    }

    if (!tel.value.match(regex2)) {
        tel.style.border = 'solid 3px red';
        errors++;
    }
    else {
        tel.style.border = '';
    }

    if (errors == 0) {
        form.submit();
    }
});