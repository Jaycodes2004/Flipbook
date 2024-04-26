function validateLoginForm() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
    var usernameRegex = /^[a-zA-Z0-9_]+$/; // Only allow alphanumeric characters and underscores
    var passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+]{6,}$/; // Password must be at least 6 characters long, and can contain these special characters

    if (!username.match(usernameRegex)) {
        alert("Username can only contain letters, numbers, and underscores.");
        return false;
    }

    if (!password.match(passwordRegex)) {
        alert("Password must be at least 6 characters long and can contain letters, numbers, and special characters (!@#$%^&*()_+).");
        return false;
    }

    return true;
}

function validateSignupForm() {
    var username = document.getElementById("signupUsername").value;
    var password = document.getElementById("signupPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var usernameRegex = /^[a-zA-Z0-9_]+$/; // Only allow alphanumeric characters and underscores
    var passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+]{6,}$/; // Password must be at least 6 characters long, and can contain these special characters

    if (!username.match(usernameRegex)) {
        alert("Username can only contain letters, numbers, and underscores.");
        return false;
    }

    if (!password.match(passwordRegex)) {
        alert("Password must be at least 6 characters long and can contain letters, numbers, and special characters (!@#$%^&*()_+).");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    return true;
}