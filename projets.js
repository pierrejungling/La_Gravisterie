// Liste des projets
const projects = [
    {
        id: 'calendrier-maternelle',
        name: 'Calendrier perpétuel',
        category: 'autres',
        description: 'Projet réalisé pour une classe de maternelle en immersion en anglais. Un calendrier interactif permettant aux enfants d\'apprendre les jours, les mois et la météo.',
        features: [
            'Calendrier interactif',
            'Apprentissage des jours en anglais',
            'Système météo interchangeable',
            'Pièces mobiles et durables'
        ],
        images: [
            'assets/images/projects/calendrier-1.jpg',
            'assets/images/projects/calendrier-2.jpg',
            'assets/images/projects/calendrier-3.jpg',
            'assets/images/projects/calendrier-4.jpg',
            'assets/images/projects/calendrier-5.jpg',
            'assets/images/projects/calendrier-6.jpg',
            'assets/images/projects/calendrier-7.jpg',
        ],
        material: 'Bois',
        client: 'École maternelle'
    },
    {
        id: 'plaque-voiture-gtr',
        name: 'Plaque Nissan GT-R',
        category: 'perso',
        description: 'Gravure personnalisée réalisée pour un passionné de Nissan GT-R, représentant la voiture sous trois angles différents.',
        features: [
            'Design personnalisé',
            'Vue avant, profil et arrière',
            'Logo GT-R intégré',
            'Finition professionnelle'
        ],
        images: [
            'assets/images/projects/gtr-1.jpg'
        ],
        material: 'Bois',
        client: '@thimigtr_'
    },
    {
        id: 'horloge-alpine',
        name: 'Horloge Alpine personnalisée',
        category: 'automobile',
        description: 'Réalisation sur-mesure pour l\'anniversaire d\'un fan d\'Alpine : une horloge personnalisée en relief avec logo Alpine et porte-clés assortis.',
        features: [
            'Design Alpine authentique',
            'Horloge fonctionnelle',
            'Porte-clés assortis',
            'Finition bicolore',
            'initiales sur les aiguilles'
        ],
        images: [
            'assets/images/projects/alpine-1.jpg',
            'assets/images/projects/alpine-2.jpg',
            'assets/images/projects/alpine-3.jpg'
        ],
        material: 'Bois',
        client: 'Privé'
    },
    {
        id: 'cadres-maman',
        name: 'Cadres "Maman, mon héroïne"',
        category: 'perso',
        description: 'Création de cadres personnalisés célébrant le lien mère-enfant, avec illustrations peintes à la main et gravure délicate.',
        features: [
            'Illustrations personnalisées',
            'Peinture à la main',
            'Gravure de texte',
            'Finition soignée'
        ],
        images: [
            'assets/images/projects/maman-1.jpg',
            'assets/images/projects/maman-2.jpg'
        ],
        material: 'Bois',
        client: 'Privé'
    },
    {
        id: 'trophee-velo',
        name: 'Trophée Inter-troupe vélo 2024',
        category: 'evenements',
        description: 'Trophée réalisé pour "L\'inter-troupe vélo 2024" entre les unités scouts de Stembert, Marie-Med et de Ste-Ju.',
        features: [
            'Design personnalisé',
            'Gravure détaillée',
            'Format plaque',
            'Logos intégrés'
        ],
        images: [
            'assets/images/projects/trophee-1.jpg',
            'assets/images/projects/trophee-2.jpg'
        ],
        material: 'Bois',
        client: 'Unité Scoute de Stembert HF010'
    },
    {
        id: 'badges-gravures',
        name: 'Gravures & Expérimentations',
        category: 'autres',
        description: 'Gravures & Expérimentations est un espace dédié aux essais, prototypes et créations spontanées. Chaque pièce est le résultat d\'une exploration technique ou d\'une inspiration du moment, sans forcément entrer dans une collection définie. Certaines peuvent être uniques, d\'autres adaptées sur demande.',
        features: [
            'Gravures détaillées',
            'Designs variés',
        ],
        images: [
            'assets/images/projects/badge-rum.jpg',
            'assets/images/projects/badge-pumpkin.jpg',
            'assets/images/projects/badge-raven.jpg',
            'assets/images/projects/badge-shoe1.jpg',
            'assets/images/projects/badge-shoe2.jpg',
            'assets/images/projects/badge-1.jpg',
            'assets/images/projects/badge-2.jpg',
            'assets/images/projects/badge-3.jpg',
        ],
        material: 'Bois',
        client: 'L\'imagination d\'Akili'
    },
    
    {
        id: 'relais-pommard',
        name: 'Planche de présentation Le Relais de Pommard',
        category: 'entreprises',
        description: 'Planche de présentation élégante réalisée pour l\'hôtel-restaurant Le Relais de Pommard, avec une gravure détaillée de la façade de l\'établissement.',
        features: [
            'Gravure architecturale',
            'Logo personnalisé',
            'Support de présentation',
            'Finition naturelle'
        ],
        images: [
            'assets/images/projects/relais-pommard.jpg'
        ],
        material: 'Bois',
        client: 'Le Relais de Pommard'
    },
    {
        id: 'logo-para-commando',
        name: 'Logo Amicale Para-Commando',
        category: 'entreprises',
        description: 'Logo de l\'amicale para-commando régionale de Liège réalisé en deux versions : une gravure sur plaque et une découpe détaillée.',
        features: [
            'Double réalisation',
            'Gravure précise',
            'Découpe fine',
            'Design militaire'
        ],
        images: [
            'assets/images/projects/para-commando-1.jpg',
            'assets/images/projects/para-commando-2.jpg'
        ],
        material: 'Bois',
        client: 'Amicale Para-Commando Régionale de Liège'
    },
    {
        id: 'palo-cheval',
        name: 'Palo le cheval cabré',
        category: 'perso',
        description: 'Gravure personnalisée d\'un cheval cabré dans un médaillon circulaire.',
        features: [
            'Design circulaire',
            'Silhouette dynamique',
            'Personnalisation du nom',
            'Finition soignée'
        ],
        images: [
            'assets/images/projects/palo-cheval.jpg'
        ],
        material: 'Bois',
        client: 'Privé'
    },
    {
        id: 'enseigne-oprestige',
        name: 'Enseigne O\'Prestige Barbershop',
        category: 'entreprises',
        description: 'Enseigne élégante pour le salon de coiffure O\'Prestige Barbershop Spa, combinant un design classique avec des éléments modernes.',
        features: [
            'Design bicolore',
            'Typographie élégante',
            'Ornements décoratifs',
            'Finition professionnelle'
        ],
        images: [
            'assets/images/projects/oprestige-enseigne.jpg'
        ],
        material: 'Bois',
        client: 'O\'Prestige Barbershop Spa'
    },
    {
        id: 'tigre-personnalise',
        name: 'Tigre géométrique personnalisé',
        category: 'perso',
        description: 'Portrait de tigre en style géométrique avec option de personnalisation du nom. Disponible en plusieurs versions : simple, avec fond blanc, ou avec marquage personnalisé.',
        features: [
            'Design géométrique',
            'Personnalisation possible',
            'Plusieurs finitions disponibles',
            'Style moderne'
        ],
        images: [
            'assets/images/projects/tigre-geometrique.jpg'
        ],
        material: 'Bois',
        client: 'Privé',
        pricing: {
            basic: '15 €',
            whiteBg: '25 €',
            custom: '30 €'
        },
        dimensions: {
        }
    },
    {
        id: 'loup-prenom',
        name: 'Loup + prénom personnalisé',
        category: 'perso',
        description: 'Silhouette de loup hurlant avec possibilité d\'ajouter un prénom personnalisé. Une décoration unique et personnelle.',
        features: [
            'Design nature',
            'Personnalisation du prénom',
            'Gravure détaillée',
            'Style sauvage'
        ],
        images: [
            'assets/images/projects/loup-prenom.jpg'
        ],
        material: 'Bois',
        dimensions: '20 x 40 cm',
        client: 'Privé'
    },
    {
        id: 'puzzle-personnalise',
        name: 'Puzzle personnalisé en bois',
        category: 'autres',
        description: 'Puzzle en bois personnalisable, parfait pour une activité avec les enfants, annoncer un événement spécial ou offrir un cadeau unique. Chaque pièce est soigneusement découpée pour garantir un assemblage parfait.',
        features: [
            'Design entièrement personnalisable',
            'Différentes tailles de pièces disponibles',
            'Adapté à tous les âges',
            'Finition soignée',
        ],
        images: [
            'assets/images/projects/puzzle-1.jpg',
            'assets/images/projects/puzzle-2.jpg',
            'assets/images/projects/puzzle-3.jpg'
        ],
        material: 'Bois',
        client: 'Privé'
    },
    {
        id: 'panneau-qr-code',
        name: 'Panneau QR code Instagram',
        category: 'entreprises',
        description: 'Panneau en bois avec QR code Instagram intégré et compteur de followers, réalisé pour L\'Annexe Bar. Un moyen élégant de connecter l\'espace physique aux réseaux sociaux.',
        features: [
            'QR code gravé avec précision',
            'Compteur de followers intégré',
            'Design professionnel',
            'Support mural inclus',
            'Finition personnalisée'
        ],
        images: [
            'assets/images/projects/qr-code-1.jpg'
        ],
        material: 'Bois',
        dimensions: '40 x 40 cm',
        client: 'L\'Annexe Bar'
    },
    {
        id: 'cake-topper-anniversaire',
        name: 'Cake topper personnalisé',
        category: 'evenements',
        description: 'Décoration de gâteau personnalisée pour célébrer 55 ans de mariage. Un design en forme de cœur avec les prénoms des mariés, créant une touche élégante pour cette occasion spéciale.',
        features: [
            'Design en forme de cœur',
            'Prénoms personnalisés',
            'Support intégré',
            'Finition dorée disponible',
            'Taille adaptée aux gâteaux'
        ],
        images: [
            'assets/images/projects/cake-topper-1.jpg',
            'assets/images/projects/cake-topper-2.jpg'
        ],
        material: 'Bois',
        client: 'Privé'
    },
    {
        id: 'trophees-trottiloup',
        name: 'Trophées Trottiloup 2024',
        category: 'evenements',
        description: 'Collection de trophées et porte-clés créés pour la course de trottinettes Trottiloup, organisée par l\'Unité Scoute de Stembert HF10. Un design unique combinant trottinette et récompense sportive.',
        features: [
            'Design original en forme de trottinette',
            'Gravure personnalisée',
            'Porte-clés assortis',
            'Différentes finitions disponibles'
        ],
        images: [
            'assets/images/projects/trottiloup-1.jpg',
            'assets/images/projects/trottiloup-2.jpg',
            'assets/images/projects/trottiloup-3.jpg',
            'assets/images/projects/trottiloup-4.jpg',
            'assets/images/projects/trottiloup-5.jpg'
        ],
        material: 'Bois',
        client: 'Unité Scoute de Stembert HF010'
    },
    {
        id: 'carte-monde-personnalisee',
        name: 'Carte du monde personnalisée',
        category: 'autres',
        description: 'Carte du monde décorative en liège et bois, personnalisable avec le nom du propriétaire. Parfaite pour marquer vos voyages et créer un souvenir unique de vos aventures.',
        features: [
            'Carte du monde détaillée',
            'Nom personnalisable',
            'Combinaison bois et liège',
            'Support mural intégré',
            'Marqueurs de voyage possibles'
        ],
        images: [
            'assets/images/projects/carte-monde-1.jpg'
        ],
        material: 'Bois et liège',
        dimensions: '60 x 40 cm',
        client: 'Privé'
    },
    {
        id: 'ardoise-samosa',
        client: 'Privé',
        name: '"It\'s Samosa Time"',
        category: 'perso',
        description: "Ardoise gravée personnalisée pour la présentation de samosas, combinant élégance et style vintage avec une illustration détaillée.",
        images: [
            'assets/images/projects/samosa-1.jpg'
        ],
        material: "Ardoise",
        dimensions: "30 x 30 cm",
        features: [
            "Gravure laser de précision",
            "Finition mate naturelle",
            "Illustration style vintage",
            "Texte personnalisé",
            "Support alimentaire",
            "Nettoyage facile"
        ],
        details: {
            technique: "Gravure laser sur ardoise",
            finition: "Naturelle",
            usage: "Présentation culinaire"
        }
    }
];

// Variables globales
let currentPage = 1;
const projectsPerPage = 9;
let projectsGrid;

// Fonction pour afficher les projets
function displayProjects(category = 'all') {
    // Supprimer toute pagination existante
    const existingPagination = document.querySelector('.pagination');
    if (existingPagination) {
        existingPagination.remove();
    }

    if (!projectsGrid) return;
    projectsGrid.innerHTML = '';
    
    const filteredProjects = category === 'all' 
        ? projects 
        : projects.filter(project => project.category === category);

    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const currentProjects = filteredProjects.slice(startIndex, endIndex);

    currentProjects.forEach(project => {
        const projectCard = `
            <div class="project-card" data-project-id="${project.id}">
        <div class="project-image">
            ${project.images && project.images.length > 1 ? `
                <div class="image-gallery">
                            <img src="${project.images[0]}" 
                                 alt="${project.name}" 
                                 class="main-image" 
                                 data-image-index="0">
                            <div class="gallery-nav-container">
                    <button class="gallery-nav prev" onclick="event.stopPropagation(); changeImage('${project.id}', 'prev')">
                        <svg viewBox="0 0 24 24">
                            <path d="M15 18l-6-6 6-6" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button class="gallery-nav next" onclick="event.stopPropagation(); changeImage('${project.id}', 'next')">
                        <svg viewBox="0 0 24 24">
                            <path d="M9 18l6-6-6-6" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                            </div>
                </div>
            ` : `
                        <img src="${project.images[0]}" alt="${project.name}">
            `}
        </div>
        <div class="project-info">
            <h3>${project.name}</h3>
            <p class="description">${project.description}</p>
            <div class="project-tags">
                ${project.material ? `<span class="tag">${project.material}</span>` : ''}
                        ${project.client ? `<span class="tag">${project.client}</span>` : ''}
                    </div>
            </div>
        </div>
    `;
        projectsGrid.innerHTML += projectCard;
    });

    // Ajouter les gestionnaires d'événements
    document.querySelectorAll('.project-card').forEach(card => {
        const projectId = card.dataset.projectId;
        const project = projects.find(p => p.id === projectId);
        
        if (project.images && project.images.length > 1) {
            handleCardTouchGallery(card, project);
        }

        card.addEventListener('click', () => {
            const popup = createProjectPopup(project);
            document.body.appendChild(popup);
            document.body.classList.add('popup-open');
            handleTouchGallery(popup, project);
        });
    });

    // Créer la pagination si nécessaire
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    if (totalPages > 1) {
        const paginationContainer = document.createElement('div');
        paginationContainer.className = 'pagination';
        
        // Bouton précédent
        if (currentPage > 1) {
            const prevButton = document.createElement('button');
            prevButton.className = 'pagination-btn prev';
            prevButton.innerHTML = '&larr; Précédent';
            prevButton.addEventListener('click', () => {
                currentPage--;
                displayProjects(category);
                window.scrollTo(0, 0);
            });
            paginationContainer.appendChild(prevButton);
        }
        
        // Numéros de page
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.className = `pagination-btn page ${i === currentPage ? 'active' : ''}`;
            pageButton.textContent = i;
            pageButton.addEventListener('click', () => {
                currentPage = i;
                displayProjects(category);
                window.scrollTo(0, 0);
            });
            paginationContainer.appendChild(pageButton);
        }
        
        // Bouton suivant
        if (currentPage < totalPages) {
            const nextButton = document.createElement('button');
            nextButton.className = 'pagination-btn next';
            nextButton.innerHTML = 'Suivant &rarr;';
            nextButton.addEventListener('click', () => {
                currentPage++;
                displayProjects(category);
                window.scrollTo(0, 0);
            });
            paginationContainer.appendChild(nextButton);
        }

        // Ajouter la pagination après la grille de projets
        projectsGrid.parentNode.insertBefore(paginationContainer, projectsGrid.nextSibling);
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    projectsGrid = document.querySelector('.projects-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentPage = 1;
            const category = button.getAttribute('data-category');
            displayProjects(category);
        });
    });

    displayProjects();
    
    // Activer le bouton "Tout" par défaut
    const allButton = document.querySelector('.filter-btn[data-category="all"]');
    if (allButton) {
        allButton.classList.add('active');
    }
});

// Fonctions de gestion des images et du tactile (inchangées)
function changeImage(projectId, direction) {
    const project = projects.find(p => p.id === projectId);
    if (!project || !project.images) return;

    const productCard = document.querySelector(`.project-card[data-project-id="${projectId}"]`);
    const mainImage = productCard.querySelector('.main-image');
    const currentIndex = parseInt(mainImage.dataset.imageIndex);
    
    let newIndex;
    if (direction === 'prev') {
        newIndex = (currentIndex - 1 + project.images.length) % project.images.length;
    } else {
        newIndex = (currentIndex + 1) % project.images.length;
    }
    
    mainImage.src = project.images[newIndex];
    mainImage.dataset.imageIndex = newIndex;
}

function handleCardTouchGallery(card, project) {
    const mainImage = card.querySelector('.main-image');
    let touchStartX = 0;
    let touchStartY = 0;
    let currentIndex = parseInt(mainImage.dataset.imageIndex) || 0;

    // Ajouter l'indicateur de pagination
    if (project.images && project.images.length > 1) {
        const paginationContainer = document.createElement('div');
        paginationContainer.className = 'pagination-dots';
        
        project.images.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.className = `dot ${index === currentIndex ? 'active' : ''}`;
            paginationContainer.appendChild(dot);
        });
        
        card.querySelector('.image-gallery').appendChild(paginationContainer);
    }

    // Gestionnaire de swipe
    mainImage.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].pageY;
    }, { passive: true });

    mainImage.addEventListener('touchmove', (e) => {
        if (e.touches.length > 1) return;

        const deltaX = e.touches[0].clientX - touchStartX;
        const deltaY = e.touches[0].pageY - touchStartY;

        // Si le mouvement est plus horizontal que vertical
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            e.preventDefault();
        }
    }, { passive: false });

    mainImage.addEventListener('touchend', (e) => {
        const deltaX = e.changedTouches[0].clientX - touchStartX;
        const deltaY = e.changedTouches[0].pageY - touchStartY;

        // Si c'est un swipe horizontal
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                currentIndex = (currentIndex - 1 + project.images.length) % project.images.length;
            } else {
                currentIndex = (currentIndex + 1) % project.images.length;
            }
            mainImage.src = project.images[currentIndex];
            mainImage.dataset.imageIndex = currentIndex;
            
            // Mettre à jour les points de pagination
            const dots = card.querySelectorAll('.pagination-dots .dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        } else if (Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10) {
            // Si c'est un tap simple
            openProjectPopup(project.id);
        }
    }, { passive: true });
}

function handleTouchGallery(popup, project) {
    if (!project.images || project.images.length <= 1) return;
    
    const mainImage = popup.querySelector('.popup-main-image');
    const thumbnails = popup.querySelectorAll('.popup-thumbnail');
    let touchStartX = 0;
    let touchStartY = 0;
    let currentIndex = 0;

    mainImage.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].pageY;
    }, { passive: true });

    mainImage.addEventListener('touchmove', (e) => {
        if (e.touches.length > 1) return;

        const deltaX = e.touches[0].clientX - touchStartX;
        const deltaY = e.touches[0].pageY - touchStartY;

        // Si le mouvement est plus horizontal que vertical
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            e.preventDefault();
        }
    }, { passive: false });

    mainImage.addEventListener('touchend', (e) => {
        const deltaX = e.changedTouches[0].clientX - touchStartX;
        const deltaY = e.changedTouches[0].pageY - touchStartY;

        // Si c'est un swipe horizontal
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                currentIndex = (currentIndex - 1 + project.images.length) % project.images.length;
            } else {
                currentIndex = (currentIndex + 1) % project.images.length;
            }
            updateImage(currentIndex);
        }
    }, { passive: true });

    function updateImage(index) {
        mainImage.src = project.images[index];
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        thumbnails[index].classList.add('active');
        currentIndex = index;
    }
}

function createProjectPopup(project) {
    const popup = document.createElement('div');
    popup.className = 'project-popup';
    
    const content = document.createElement('div');
    content.className = 'popup-content';
    
    // Bouton de fermeture
    const closeButton = document.createElement('button');
    closeButton.className = 'close-popup';
    closeButton.innerHTML = '&times;';
    content.appendChild(closeButton);
    
    const gallery = document.createElement('div');
    gallery.className = 'popup-gallery';
    
    // Conteneur d'image principal
    const imageContainer = document.createElement('div');
    imageContainer.className = 'popup-image-container';
    
    const mainImage = document.createElement('img');
    mainImage.className = 'popup-main-image';
    mainImage.src = project.images[0];
    imageContainer.appendChild(mainImage);

    // Boutons de navigation
    if (project.images && project.images.length > 1) {
        const prevButton = document.createElement('button');
        prevButton.className = 'popup-nav prev';
        prevButton.innerHTML = `
            <svg viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
        
        const nextButton = document.createElement('button');
        nextButton.className = 'popup-nav next';
        nextButton.innerHTML = `
            <svg viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
        
        imageContainer.appendChild(prevButton);
        imageContainer.appendChild(nextButton);
    }

    gallery.appendChild(imageContainer);

    // Vignettes
    if (project.images && project.images.length > 1) {
        const thumbnailsContainer = document.createElement('div');
        thumbnailsContainer.className = 'popup-thumbnails';
        
        project.images.forEach((image, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.className = `popup-thumbnail ${index === 0 ? 'active' : ''}`;
            thumbnail.src = image;
            thumbnail.addEventListener('click', () => {
                mainImage.src = image;
                document.querySelectorAll('.popup-thumbnail').forEach(thumb => thumb.classList.remove('active'));
                thumbnail.classList.add('active');
            });
            thumbnailsContainer.appendChild(thumbnail);
        });
        
        gallery.appendChild(thumbnailsContainer);
    }

    // Ajout de la section info
    const infoSection = document.createElement('div');
    infoSection.className = 'popup-info';
    
    infoSection.innerHTML = `
        <h2>${project.name}</h2>
        <p class="popup-description">${project.description}</p>
        <div class="popup-details">
            <p><strong>Client :</strong> ${project.client}</p>
            <p><strong>Matériau :</strong> ${project.material}</p>
        </div>
        <div class="popup-features">
            <h3>Caractéristiques :</h3>
            <ul>
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
        <button class="btn btn-primary popup-contact">Contactez-nous pour un projet similaire</button>
    `;

    content.appendChild(gallery);
    content.appendChild(infoSection);
    popup.appendChild(content);
    
    // Ajouter le gestionnaire d'événements pour le bouton de fermeture
    closeButton.addEventListener('click', () => {
        popup.remove();
        document.body.classList.remove('popup-open');
    });

    // Ajouter le gestionnaire d'événements pour le bouton de contact
    const contactButton = infoSection.querySelector('.popup-contact');
    contactButton.addEventListener('click', () => {
        window.location.href = 'contact.html';
    });
    
    return popup;
}

function openProjectPopup(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const popup = createProjectPopup(project);
    document.body.appendChild(popup);
    document.body.classList.add('popup-open');
    handleTouchGallery(popup, project);

    // Gestion de la fermeture du popup
    popup.querySelector('.close-popup').addEventListener('click', () => {
        popup.remove();
        document.body.classList.remove('popup-open');
    });

    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.remove();
            document.body.classList.remove('popup-open');
        }
    });

    // Gestion du bouton de contact
    popup.querySelector('.popup-contact').addEventListener('click', () => {
        window.location.href = 'contact.html';
    });
}

function initializeProjectSwiper() {
    const projectSwiper = new Swiper('.project-swiper', {
        touchRatio: 1,
        touchAngle: 45,
        resistance: true,
        touchStartPreventDefault: false,
        nested: true,
        touchMoveStopPropagation: false,
        passiveListeners: true,
        on: {
            touchStart: function(swiper, event) {
                event.stopPropagation();
            }
        }
    });
} 