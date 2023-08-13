document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        // You can add code here to process the form data, like sending an email or saving it to a database.
        alert("Thank you for your message! We'll get back to you soon.");
        form.reset();
    });
});