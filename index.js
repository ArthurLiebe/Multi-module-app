import { getCartItems, addToCart } from './modules/storage.js';
import { fetchProducts } from './modules/network.js';
import { renderProducts } from './modules/ui.js';

const productContainer = document.getElementById('product-container');

// Fetch products and render them on page load
fetchProducts()
.then(products => renderProducts(products, productContainer))
.catch(error => console.error('Error fetching products:', error));

// Add event listener to product cards
productContainer.addEventListener('click', event => {
if (event.target.textContent === 'Add to Cart') {
    const card = event.target.closest('.bg-white');
    const product = {
    title: card.querySelector('h3').textContent,
    price: parseFloat(card.querySelector('p').textContent.slice(1)),
    image: card.querySelector('img').src
    };

    addToCart(product);
    alert('Product added to cart!');
}
});