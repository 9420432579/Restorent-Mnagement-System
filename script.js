document.addEventListener('DOMContentLoaded', () => {
    // Handle Order Form Submission
    const orderForm = document.getElementById('orderForm');
    orderForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const customerName = document.getElementById('customerName').value;
        const orderDetails = document.getElementById('orderDetails').value;
        const orderDate = document.getElementById('orderDate').value;
        const orderTime = document.getElementById('orderTime').value;
        const orderStatus = document.getElementById('orderStatus').value;

        // Create a new order entry
        const newOrder = document.createElement('div');
        newOrder.classList.add('order-entry');
        newOrder.innerHTML = `
            <h4>Order for ${customerName}</h4>
            <p><strong>Details:</strong> ${orderDetails}</p>
            <p><strong>Date:</strong> ${orderDate}</p>
            <p><strong>Time:</strong> ${orderTime}</p>
            <p><strong>Status:</strong> ${orderStatus}</p>
        `;

        // Add the new order to the order list
        const orderList = document.getElementById('orderList');
        orderList.appendChild(newOrder);

        // Clear the form
        orderForm.reset();
    });

    // Handle Reservation Form Submission
    const reservationForm = document.getElementById('reservationForm');
    reservationForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;

        // Alert the user that the reservation has been made
        alert(`Reservation made for ${name} on ${date} at ${time} for ${guests} guests. We will contact you at ${phone} or ${email}.`);

        // Clear the form
        reservationForm.reset();
    });

    // Handle Feedback Form Submission
    const feedbackForm = document.getElementById('feedbackForm');
    feedbackForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const feedbackName = document.getElementById('feedbackName').value;
        const feedbackEmail = document.getElementById('feedbackEmail').value;
        const feedbackMessage = document.getElementById('feedbackMessage').value;

        // Alert the user that their feedback has been received
        alert(`Thank you for your feedback, ${feedbackName}! We will review your message and get back to you at ${feedbackEmail}.`);

        // Clear the form
        feedbackForm.reset();
    });
});
