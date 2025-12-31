// Get cart from localStorage or empty array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart count UI
function updateCartCount(){
    document.getElementById("cartCount").innerText = cart.length;
}

// Add product to cart
function addToCart(name, price){
    cart.push({name, price});
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

// Run when page loads
updateCartCount();

function addToWishlist(name, price){
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist.push({name, price});
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert("Added to Wishlist!");
}