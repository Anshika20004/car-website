
function openBookingForm(carModel, price) {
    document.getElementById('car-model').value = carModel;
    document.getElementById('days').value = '';
    
    document.getElementById('form').onsubmit = function(event) {
        event.preventDefault(); // Prevent the form from submitting

        const days = document.getElementById('days').value;
        const totalCost = days * price;

        // Show confirmation alert
        alert(`Booking Confirmed!\nCar Model: ${carModel}\nTotal Cost: $${totalCost}`);
        
        // Optionally, reset the form
        document.getElementById('form').reset();
    };
}