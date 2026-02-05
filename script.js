function register() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Registration Successful");
    window.location.href = "login.html";
}

function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Login");
    }
}
