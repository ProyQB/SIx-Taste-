document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const guests = document.getElementById('guests').value;
    const feedback = document.getElementById('formFeedback');

    // Simple validation & UI logic
    if (service && date && guests) {
        feedback.textContent = `Thank you! Your request for a ${service.replace('-', ' ')} on ${date} for ${guests} people has been received. Our family will contact you shortly!`;
        feedback.classList.remove('hidden');
        
        // Reset form
        this.reset();
        
        // Scroll to feedback
        feedback.scrollIntoView({ behavior: 'smooth' });
    } else {
        alert("Please fill in all fields.");
    }
});
