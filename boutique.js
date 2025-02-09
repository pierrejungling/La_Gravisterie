// Configuration de l'API Instagram
const INSTAGRAM_ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN';
const INSTAGRAM_API_URL = 'https://graph.instagram.com/me/media';

// État du panier
let cart = [];

// Fonction pour récupérer les posts Instagram
async function fetchInstagramPosts() {
    try {
        const response = await fetch(`${INSTAGRAM_API_URL}?fields=id,caption,media_url,permalink&access_token=${INSTAGRAM_ACCESS_TOKEN}`);
        const data = await response.json();
        return filterShopProducts(data.data);
    } catch (error) {
        console.error('Erreur lors de la récupération des posts Instagram:', error);
        return [];
    }
}

// Fonction pour filtrer les produits (posts avec prix)
function filterShopProducts(posts) {
    return posts.filter(post => {
        const priceMatch = post.caption.match(/(\d+([.,]\d{2})?)\s*€/);
        return priceMatch !== null;
    });
}

// Fonction pour extraire le prix d'une description
function extractPrice(caption) {
    const priceMatch = caption.match(/(\d+([.,]\d{2})?)\s*€/);
    return priceMatch ? parseFloat(priceMatch[1].replace(',', '.')) : null;
}

// Fonction pour créer une carte produit
function createProductCard(product) {
    const price = extractPrice(product.caption);
    const title = product.caption.split('\n')[0];

    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.media_url}" alt="${title}" class="product-image">
        <div class="product-info">
            <h3 class="product-title">${title}</h3>
            <p class="product-price">${price.toFixed(2)} €</p>
            <button class="add-to-cart" data-product-id="${product.id}">
                Ajouter au panier
            </button>
        </div>
    `;

    return card;
}

// Fonction pour afficher les produits
async function displayProducts() {
    const productsContainer = document.getElementById('products-container');
    const products = await fetchInstagramPosts();

    products.forEach(product => {
        const card = createProductCard(product);
        productsContainer.appendChild(card);
    });
}

// Gestionnaire d'événements pour le panier
function initializeCartEvents() {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = e.target.dataset.productId;
            addToCart(productId);
        }
    });
}

// Fonction pour ajouter au panier
function addToCart(productId) {
    cart.push(productId);
    updateCartUI();
    // Animation ou notification de confirmation
    alert('Produit ajouté au panier !');
}

// Fonction pour mettre à jour l'interface du panier
function updateCartUI() {
    // À implémenter : mise à jour du compteur du panier
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    // Données des produits (à remplacer par une vraie base de données)
    const products = [
        {
            id: 1,
            name: "Cadre Montagne",
            price: "45€",
            category: "decoration",
            image: "../assets/images/products/cadre-montagne.jpg",
            description: "Cadre décoratif en bois gravé représentant un paysage montagneux"
        },
        // Ajouter d'autres produits ici
    ];

    const productsGrid = document.querySelector('.products-grid');
    const categoryButtons = document.querySelectorAll('.category-btn');

    // Fonction pour afficher les produits
    function displayProducts(category = 'all') {
        productsGrid.innerHTML = '';
        
        const filteredProducts = category === 'all' 
            ? products 
            : products.filter(product => product.category === category);

        filteredProducts.forEach(product => {
            const productCard = `
                <div class="product-card">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="price">${product.price}</p>
                        <p class="description">${product.description}</p>
                        <button class="btn btn-primary">Commander</button>
                    </div>
                </div>
            `;
            productsGrid.innerHTML += productCard;
        });
    }

    // Gestion des filtres
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            displayProducts(button.dataset.category);
        });
    });

    // Affichage initial
    displayProducts();

    initializeCartEvents();
}); 