document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Add your form submission logic here
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);

    alert('Form submitted!');
});
