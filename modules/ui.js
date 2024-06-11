// Function to create a product card
export function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-lg shadow-md overflow-hidden';

    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.title;
    image.className = 'w-full h-48 object-cover';

    const body = document.createElement('div');
    body.className = 'p-4';
 
    const title = document.createElement('h3');
    title.textContent = product.title;
    title.className = 'font-bold text-lg mb-2';

    const price = document.createElement('p');
    price.textContent = `$${product.price}`;
    price.className = 'text-gray-600 mb-4';

    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.className = 'bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600';

    body.appendChild(title);
    body.appendChild(price);
    body.appendChild(button);

    card.appendChild(image);
    card.appendChild(body);

    return card;
}

  // Function to render product cards
export function renderProducts(products, containerElement) {
    containerElement.innerHTML = '';
    products.forEach(product => {
    const card = createProductCard(product);
    containerElement.appendChild(card);
    });
}