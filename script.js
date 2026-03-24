document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Simple validation (you can expand this)
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    if (name && email && message) {
        // Simulate sending (in a real app, send to server)
        document.getElementById('successMsg').textContent = 'Message sent successfully!';
        document.getElementById('successMsg').style.display = 'block';
        // Reset form
        this.reset();
    } else {
        document.getElementById('successMsg').textContent = 'Please fill in all required fields.';
        document.getElementById('successMsg').style.display = 'block';
    }
});

// Hamburger menu toggle
document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('active');
});