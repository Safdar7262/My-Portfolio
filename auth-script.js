function validateLoginForm() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const errorMessage = document.getElementById('login-error-message');

    if (email === '' || password === '') {
        errorMessage.textContent = 'Please fill in all fields.';
        return false;
    }

    // Additional validation logic can be added here

    errorMessage.textContent = '';
    alert('Login successful!');
    return true; // Replace this with actual authentication logic
}

function validateSignupForm() {
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('signup-error-message');

    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        errorMessage.textContent = 'Please fill in all fields.';
        return false;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return false;
    }

    // Additional validation logic can be added here

    errorMessage.textContent = '';
    alert('Sign up successful!');
    return true; // Replace this with actual sign-up logic
}
