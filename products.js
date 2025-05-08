// Shuffle products randomly on each page load
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.product-grid');
    const cards = Array.from(container.children);
    cards.sort(() => Math.random() - 0.5);
    cards.forEach(card => container.appendChild(card));
  });
  
  // Filter products by selected size
  document.getElementById('product-size').addEventListener('change', function () {
    const selectedSize = this.value;
    const products = document.querySelectorAll('.product-card');
  
    products.forEach(product => {
      const size = product.getAttribute('data-size');
      if (selectedSize === 'all' || size === selectedSize) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });
  
  // Buy Now button logic
  document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', function () {
      const productCard = this.closest('.product-card');
      const productName = productCard.querySelector('.product-title').innerText;
      const productSize = productCard.getAttribute('data-size');
      const price = parseFloat(productCard.querySelector('.product-price').dataset.price);
      const quantity = parseInt(productCard.querySelector('.quantity-input').value);
      
      const total = (price * quantity).toFixed(2);
      
      // Pass data to checkout via URL
      const params = new URLSearchParams({
        name: productName,
        size: productSize,
        price: price,
        quantity: quantity,
        total: total
      });
  
      window.location.href = `checkout.html?${params.toString()}`;
    });
  });
  