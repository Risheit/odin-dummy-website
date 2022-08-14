function checkPassword() {
    const password = document.querySelector("#password");
    const confirmation = document.querySelector("#confirm_password");

    if ((password.value.length !== 0 || confirmation.value.length !== 0)
        && password.value !== confirmation.value) {
        const invalidString = "Passwords don't match.";
        password.setCustomValidity(invalidString);
        confirmation.setCustomValidity(invalidString);
    } else if (password.value.length !== 0 && confirmation.value.length !== 0) {
        password.setCustomValidity("");
        confirmation.setCustomValidity("");
    }
}

setInterval(checkPassword);
document.querySelector("#submit_button")
    .addEventListener("click", checkPassword);