function validateForm() {
    var emailInput = document.getElementById("emailInput").value;
    var passwordInput = document.getElementById("passwordInput").value;
    var loginButton = document.getElementById("loginButton");

    if (emailInput.trim() !== "" && passwordInput.trim() !== "") {
        loginButton.classList.remove("redButton");
        loginButton.classList.add("greenButton");
        loginButton.disabled = false;
    } else  {
        loginButton.classList.remove("greenButton");
        loginButton.classList.add("redButton");
        loginButton.disabled = true;
    }
}
