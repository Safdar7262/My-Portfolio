function validateContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const errorMessage = document.getElementById('contact-error-message');

    if (name === '' || email === '' || message === '') {
        errorMessage.textContent = 'Please fill in all fields.';
        return false;
    }

    if (!validateEmail(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return false;
    }

    // Add more validation logic if needed

    errorMessage.textContent = '';
    alert('Message sent successfully!');
    return true; // Submit the form
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
