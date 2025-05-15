// HERO SECTION


  // Play and pause video on scroll
  const heroVideo = document.querySelector('.hero-video');
  let lastScrollY = 0;
  const scrollThreshold = 100;

  window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold && !heroVideo.paused) {
      heroVideo.pause();
    } else if (window.scrollY <= scrollThreshold && heroVideo.paused) {
      heroVideo.play();
    }
    lastScrollY = window.scrollY;
  });

  // Scroll down smooth animation
  const scrollDownButton = document.querySelector('.scroll-down');
  scrollDownButton.addEventListener('click', () => {
    window.scroll({
      top: window.innerHeight, // Scroll to the hero section height
      behavior: 'smooth'
    });
  });


  
  // Pause video on smaller devices to save battery
  window.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('heroVideo');
    if (window.innerWidth < 576) {
      video.pause();
    }
  });


  // product Gallery
  // 
  const modal = document.getElementById("quickViewModal");
  const cartModal = document.getElementById("cartModal");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const checkoutBtn = document.getElementById("checkoutBtn");
  const goToCheckout = document.getElementById("goToCheckout");
  const checkoutPage = document.getElementById("checkoutPage");
  const checkoutItems = document.getElementById("checkout-items");
  const checkoutTotal = document.getElementById("checkout-total");

  let cart = [];

  document.querySelectorAll(".quick-view-btn").forEach(button => {
    button.onclick = (e) => {
      const card = e.target.closest(".product-card");
      document.getElementById("modalImage").src = card.dataset.image;
      document.getElementById("modalTitle").textContent = card.dataset.title;
      document.getElementById("modalPrice").textContent = "$" + card.dataset.price;
      modal.style.display = "flex";
    };
  });

  document.getElementById("addToCartBtn").onclick = () => {
    const title = document.getElementById("modalTitle").textContent;
    const price = parseFloat(document.getElementById("modalPrice").textContent.slice(1));
    const quantity = parseInt(document.getElementById("modalQuantity").value);
    const image = document.getElementById("modalImage").src;

    const existing = cart.find(item => item.title === title);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ title, price, quantity, image });
    }

    updateCart();
    modal.style.display = "none";
  };

  function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;
      cartItems.innerHTML += `
        <div style="display:flex; gap:10px; margin-bottom:10px;">
          <img src="${item.image}" style="width:50px;height:50px;object-fit:cover;border-radius:5px;">
          <div>
            <b>${item.title}</b><br>
            Qty: ${item.quantity} | Price: $${(item.price * item.quantity).toFixed(2)}
          </div>
        </div>`;
    });
    cartTotal.textContent = "Total: $" + total.toFixed(2);
    checkoutTotal.textContent = "Total: $" + total.toFixed(2);
    checkoutItems.innerHTML = cartItems.innerHTML;

    const msg = encodeURIComponent(cart.map(item => `${item.title} x${item.quantity} = $${(item.price * item.quantity).toFixed(2)}`).join('\n') + `\nTotal: $${total.toFixed(2)}`);
    checkoutBtn.href = "https://wa.me/86180543655167?text=" + msg;
  }

  function closeModal() {
    modal.style.display = "none";
  }
  function closeCart() {
    cartModal.style.display = "none";
  }

  goToCheckout.onclick = () => {
    document.querySelector(".product-gallery").style.display = "none";
    cartModal.style.display = "none";
    checkoutPage.style.display = "block";
  };

  // Optional: Close modal on outside click
  window.onclick = function(event) {
    if (event.target === modal) modal.style.display = "none";
    if (event.target === cartModal) cartModal.style.display = "none";
  };