// Sample user data stored in an array
const users = [
    { username: "admin", password: "1234" },
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" }
];

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    // Check if credentials match
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert("Login Successful!");
        window.location.href = "developmen.html"; // Redirect to another page
    } else {
        errorMessage.textContent = "Invalid Username or Password!";
    }
}