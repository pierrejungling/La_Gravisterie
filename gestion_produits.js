// Variables globales
let currentProducts = [...products];
let productToDelete = null;

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    initializeEventListeners();
    initializeDragAndDrop();
});

// Initialisation des écouteurs d'événements
function initializeEventListeners() {
    // Recherche
    document.getElementById('searchInput').addEventListener('input', filterProducts);
    
    // Filtre par catégorie
    document.getElementById('categoryFilter').addEventListener('change', filterProducts);
    
    // Ajout de produit
    document.getElementById('addProduct').addEventListener('click', () => openModal());
    
    // Formulaire de produit
    document.getElementById('productForm').addEventListener('submit', handleProductSubmit);
    
    // Fermeture des modals
    document.querySelectorAll('.close').forEach(button => {
        button.addEventListener('click', closeModal);
    });
    
    // Upload d'images
    initializeImageUploader();
}

// Affichage des produits
function displayProducts(productsToDisplay = currentProducts) {
    const productsList = document.getElementById('productsList');
    productsList.innerHTML = '';

    productsToDisplay.forEach((product, index) => {
        const card = createProductCard(product, index);
        productsList.appendChild(card);
    });
}

// Création d'une carte produit
function createProductCard(product, index) {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.draggable = true;
    card.dataset.index = index;

    const mainImage = product.images ? product.images[0] : product.image;
    
    card.innerHTML = `
        <div class="item-image">
            <img src="${mainImage}" alt="${product.name}">
        </div>
        <div class="item-info">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <div class="item-actions">
                <button class="btn btn-secondary" onclick="openModal(${index})">Éditer</button>
                <button class="btn btn-danger" onclick="openDeleteConfirmation(${index})">Supprimer</button>
            </div>
        </div>
    `;

    return card;
}

// Filtrage des produits
function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;

    const filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                            product.description.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || product.category === category;
        
        return matchesSearch && matchesCategory;
    });

    currentProducts = filtered;
    displayProducts(filtered);
}

// Gestion du modal
function openModal(index = null) {
    const modal = document.getElementById('productModal');
    const form = document.getElementById('productForm');
    const title = modal.querySelector('h2');
    
    if (index !== null) {
        // Mode édition
        const product = currentProducts[index];
        fillFormWithProduct(product);
        form.dataset.editIndex = index;
        title.textContent = 'Éditer le produit';
    } else {
        // Mode création
        form.reset();
        delete form.dataset.editIndex;
        title.textContent = 'Ajouter un produit';
    }
    
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
    document.getElementById('productForm').reset();
    document.querySelector('.preview-container').innerHTML = '';
}

// Remplissage du formulaire
function fillFormWithProduct(product) {
    const form = document.getElementById('productForm');
    
    form.name.value = product.name;
    form.price.value = product.price;
    form.description.value = product.description;
    form.dimensions.value = product.dimensions || '';
    form.category.value = product.category;
    form.material.value = product.material;
    form.features.value = product.features.join('\n');
    form.inStock.checked = product.inStock;
    form.customizable.checked = product.customizable;
    
    if (product.priceDetails) {
        form.priceDetails.value = product.priceDetails.join('\n');
    }
    
    // Afficher les images existantes
    const previewContainer = document.querySelector('.preview-container');
    previewContainer.innerHTML = '';
    
    if (product.images) {
        product.images.forEach(imagePath => {
            const img = document.createElement('img');
            img.src = imagePath;
            previewContainer.appendChild(img);
        });
    }
}

// Gestion du formulaire
async function handleProductSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const productData = {
        name: formData.get('name'),
        price: formData.get('price'),
        description: formData.get('description'),
        dimensions: formData.get('dimensions'),
        category: formData.get('category'),
        material: formData.get('material'),
        features: formData.get('features').split('\n').filter(f => f.trim()),
        inStock: formData.get('inStock') === 'on',
        customizable: formData.get('customizable') === 'on'
    };

    if (formData.get('priceDetails')) {
        productData.priceDetails = formData.get('priceDetails')
            .split('\n')
            .filter(detail => detail.trim());
    }

    // Gestion des images
    const fileInput = document.querySelector('#imageUploader input[type="file"]');
    const files = fileInput.files;
    
    if (files.length > 0) {
        productData.images = await handleImageUpload(files);
    } else if (form.dataset.editIndex) {
        // Conserver les images existantes en mode édition
        const existingProduct = products[form.dataset.editIndex];
        productData.images = existingProduct.images;
    }

    if (form.dataset.editIndex) {
        // Mode édition
        const index = parseInt(form.dataset.editIndex);
        products[index] = { ...products[index], ...productData };
    } else {
        // Mode création
        productData.id = generateUniqueId();
        products.push(productData);
    }

    // Sauvegarder les modifications
    saveChangesToFile();
    
    // Rafraîchir l'affichage
    currentProducts = [...products];
    displayProducts();
    closeModal();
}

// Gestion des images
function initializeImageUploader() {
    const uploader = document.getElementById('imageUploader');
    const input = uploader.querySelector('input[type="file"]');
    const preview = uploader.querySelector('.preview-container');

    uploader.addEventListener('dragover', e => {
        e.preventDefault();
        uploader.classList.add('dragover');
    });

    uploader.addEventListener('dragleave', () => {
        uploader.classList.remove('dragover');
    });

    uploader.addEventListener('drop', e => {
        e.preventDefault();
        uploader.classList.remove('dragover');
        handleFiles(e.dataTransfer.files);
    });

    input.addEventListener('change', () => {
        handleFiles(input.files);
    });

    function handleFiles(files) {
        preview.innerHTML = '';
        Array.from(files).forEach(file => {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = e => {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    preview.appendChild(img);
                };
                reader.readAsDataURL(file);
            }
        });
    }
}

async function handleImageUpload(files) {
    const imagePaths = [];
    
    for (const file of files) {
        if (file.type.startsWith('image/')) {
            const path = await saveImage(file);
            imagePaths.push(path);
        }
    }
    
    return imagePaths;
}

// Fonction pour sauvegarder une image
async function saveImage(file) {
    // Simuler la sauvegarde d'une image
    // Dans une vraie application, vous devrez implémenter la logique de sauvegarde sur le serveur
    const fileName = `${Date.now()}-${file.name}`;
    return `assets/images/products/${fileName}`;
}

// Gestion du drag & drop
function initializeDragAndDrop() {
    const productsList = document.getElementById('productsList');
    
    productsList.addEventListener('dragstart', e => {
        const card = e.target.closest('.item-card');
        if (card) {
            card.classList.add('dragging');
            e.dataTransfer.setData('text/plain', card.dataset.index);
        }
    });

    productsList.addEventListener('dragend', e => {
        const card = e.target.closest('.item-card');
        if (card) {
            card.classList.remove('dragging');
        }
    });

    productsList.addEventListener('dragover', e => {
        e.preventDefault();
        const draggingCard = document.querySelector('.dragging');
        const card = e.target.closest('.item-card');
        
        if (draggingCard && card && draggingCard !== card) {
            const dragIndex = parseInt(draggingCard.dataset.index);
            const dropIndex = parseInt(card.dataset.index);
            
            // Réorganiser les produits
            const [movedProduct] = currentProducts.splice(dragIndex, 1);
            currentProducts.splice(dropIndex, 0, movedProduct);
            
            // Mettre à jour l'affichage
            displayProducts();
            
            // Sauvegarder le nouvel ordre
            saveChangesToFile();
        }
    });
}

// Gestion de la suppression
function openDeleteConfirmation(index) {
    productToDelete = index;
    document.getElementById('confirmModal').style.display = 'block';
}

function closeConfirmModal() {
    document.getElementById('confirmModal').style.display = 'none';
    productToDelete = null;
}

function confirmDelete() {
    if (productToDelete !== null) {
        products.splice(productToDelete, 1);
        currentProducts = [...products];
        saveChangesToFile();
        displayProducts();
        closeConfirmModal();
    }
}

// Utilitaires
function generateUniqueId() {
    return `product-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function saveChangesToFile() {
    // Dans une vraie application, vous devrez implémenter la logique de sauvegarde sur le serveur
    console.log('Changements sauvegardés:', products);
} 