//Assignment 3: Login Validation System
const username = "admin";
const password = "password123"; 
function validateLogin(inputUsername, inputPassword) {
    if (inputUsername === username && inputPassword === password) {
        console.log("Login successful!");
    } else if(inputUsername !== username && inputPassword !== password) {
        console.log("Invalid Both username and password. Please try again.");
    } else if (inputUsername !== username) {
        console.log("Invalid username. Please try again.");
    } else if (inputPassword !== password) {
        console.log("Invalid password. Please try again.");
    } else  {
        console.log("Invalid username or password. Please try again.");
    }
}
validateLogin(); // Valid credentials

