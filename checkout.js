// Get the Buy Now button and product info
const buyNowButton = document.getElementById("buy-now");
const productPrice = document.getElementById("product-price").textContent;
const checkoutPage = document.getElementById("checkout-page");
const checkoutTotal = document.getElementById("checkout-total");
const checkoutSummary = document.getElementById("checkout-summary");
const quantityInput = document.getElementById("quantity");
const sizeSelect = document.getElementById("size");

// Event listener for Buy Now button
buyNowButton.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default action of the button

    // Get the selected quantity and size
    const quantity = parseInt(quantityInput.value);
    const selectedSize = sizeSelect.value;

    // Validate the quantity input
    if (quantity < 1) {
        alert("Please select a valid quantity.");
        return; // Exit if invalid
    }

    // Calculate total price
    const totalPrice = quantity * parseFloat(productPrice);

    // Update the checkout total
    checkoutTotal.textContent = totalPrice.toFixed(2);

    // Display the checkout page with product info
    checkoutSummary.innerHTML = `
        <strong>Product:</strong> Awesome Product<br>
        <strong>Size:</strong> ${selectedSize}<br>
        <strong>Quantity:</strong> ${quantity}<br>
        <strong>Price per item:</strong> $${productPrice}<br>
        <strong>Total:</strong> $${totalPrice.toFixed(2)}
    `;

    // Hide the product page and show the checkout page
    document.querySelector('.product').classList.add('hidden');
    checkoutPage.classList.remove('hidden');
});

// Checkout form submission handler
document.getElementById("checkout-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from submitting

    // Get user info from the form
    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;

    // Validate the inputs
    if (!fullName || !email || !address) {
        alert("Please fill in all fields!");
        return;
    }

    // Display confirmation message
    alert("Thank you for your purchase, " + fullName + "! We will send a confirmation email to " + email + ".");

    // Optionally, you can reset the form and redirect or handle the purchase in your back-end
    document.getElementById("checkout-form").reset();
    checkoutPage.classList.add('hidden');
    document.querySelector('.product').classList.remove('hidden');
});
