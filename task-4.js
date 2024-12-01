let form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    let emailInput = form.querySelector('input[type="email"]');
    let passwordInput = form.querySelector('input[type="password"]');

    let result = checkFields(emailInput, passwordInput);
    if (result) {
        console.log(result);
        // form.reset();
    }

});

function checkFields(...fields) {
    let error = false;
    for (let field of fields) {
        if (field.value.trim() === '') {
            alert('All form fields must be filled in.');
            error = true;
            break;
        }
    }

    if (error) return null;
    let result = {};
    for (let field of fields) {
        result[field.name] = field.value;
    }
    return result;
}

// form.addEventListener('reset', () => {
//     console.log("Form has been reset");
// })
