 
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", function(e) {

    e.preventDefault();

    let url = this.href;

    // trigger exit animation
    document.body.classList.add("slide-out");

    // go to next page
    setTimeout(() => {
      window.location.href = url;
    }, 500);

  });
});
 

// GET CART OR EMPTY
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// UPDATE COUNT FUNCTION
function updateCartCount() {
  let countElement = document.getElementById("cart-count");
  if (countElement) {
    countElement.innerText = cart.length;
  }
}

// RUN ON PAGE LOAD
updateCartCount();

// SELECT BUTTONS
let buttons = document.querySelectorAll(".add-button");

buttons.forEach(btn => {

  btn.addEventListener("click", function() {

    let name = this.getAttribute("data-name");
    let price = parseInt(this.getAttribute("data-price"));

    cart.push({ name, price });

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount(); // 🔥 update number

    alert(name + " added to cart 🛒");

  });

});