function checkPassword() {
    const password = document.querySelector("#password");
    const confirmation = document.querySelector("#confirm_password");

    if ((password.value.length !== 0 || confirmation.value.length !== 0)
    && password.value !== confirmation.value) {
        const invalidString = "Passwords don't match.";
 
        password.setCustomValidity(invalidString);
        confirmation.setCustomValidity(invalidString);

        createErrorMessage();

    } else if (password.value.length !== 0 && confirmation.value.length !== 0) {
        password.setCustomValidity("");
        confirmation.setCustomValidity("");

        removeErrorMessage();
    }
}

function createErrorMessage() {
    if (document.querySelector("#password_mismatch") !== null)
        return;
    
    const message = document.createElement("label");

    message.id = "password_mismatch";
    message.textContent = "* Passwords do not match"

    const passwordElement = document.querySelector("#password");
    passwordElement.parentNode.appendChild(message);
}

function removeErrorMessage() {
    document.querySelector("#password_mismatch").remove();
}

setInterval(checkPassword);
document.querySelector("#submit_button")
    .addEventListener("click", checkPassword);