// Get elements
const quantityModal = document.getElementById("quantity-modal");
const quantityInput = document.getElementById("quantity");
const proceedBtn = document.getElementById("proceed-btn");
const closeBtn = document.getElementById("close-btn");

// Handle product click event to show quantity modal
const productImages = document.querySelectorAll(".product-image");

productImages.forEach(image => {
  image.addEventListener("click", function() {
    quantityModal.style.visibility = 'visible';
    quantityModal.style.opacity = '1';
  });
});

// Close modal if Cancel is clicked
closeBtn.addEventListener("click", function() {
  quantityModal.style.visibility = 'hidden';
  quantityModal.style.opacity = '0';
});

// Proceed to checkout page with selected quantity
proceedBtn.addEventListener("click", function() {
  const quantity = quantityInput.value;
  const productName = this.closest(".product-card").querySelector(".product-title").textContent;
  const productSize = this.closest(".product-card").querySelector(".product-size").textContent.split(":")[1].trim();

  // Redirect to checkout page with product details
  window.location.href = `checkout.html?product=${productName}&size=${productSize}&qty=${quantity}`;
});

// Randomize product images position on page refresh
window.addEventListener("load", function() {
  const productCards = document.querySelectorAll(".product-card");
  productCards.forEach(card => {
    const randomTop = Math.floor(Math.random() * 300) + 100;
    const randomLeft = Math.floor(Math.random() * 500) + 100;
    card.style.position = "absolute";
    card.style.top = `${randomTop}px`;
    card.style.left = `${randomLeft}px`;
  });
});
