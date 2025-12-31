function addToWishlist(name, price){
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlist.push({name, price});

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    alert("Added to Wishlist ❤️");
}