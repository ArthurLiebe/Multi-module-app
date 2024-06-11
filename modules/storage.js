// Function to get cart items from localStorage
export function getCartItems() {
    const cartItems = localStorage.getItem('cartItems');
    return cartItems ? JSON.parse(cartItems) : [];
}

  // Function to add an item to the cart in localStorage
export function addToCart(item) {
    const cartItems = getCartItems();
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}