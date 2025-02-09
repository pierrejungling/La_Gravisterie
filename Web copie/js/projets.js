// Configuration de l'API Instagram
const INSTAGRAM_ACCESS_TOKEN = 'YOUR_ACCESS_TOKEN';
const INSTAGRAM_API_URL = 'https://graph.instagram.com/me/media';

// Fonction pour récupérer les posts Instagram
async function fetchInstagramPosts() {
    try {
        const response = await fetch(`${INSTAGRAM_API_URL}?fields=id,caption,media_url,permalink&access_token=${INSTAGRAM_ACCESS_TOKEN}`);
        const data = await response.json();
        return filterProjects(data.data);
    } catch (error) {
        console.error('Erreur lors de la récupération des posts Instagram:', error);
        return [];
    }
}

// Fonction pour filtrer les projets (posts sans prix)
function filterProjects(posts) {
    return posts.filter(post => {
        const priceMatch = post.caption.match(/(\d+([.,]\d{2})?)\s*€/);
        return priceMatch === null;
    });
}

// Fonction pour créer une carte projet
function createProjectCard(project) {
    const title = project.caption.split('\n')[0];

    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <img src="${project.media_url}" alt="${title}" class="project-image">
        <div class="project-info">
            <h3 class="project-title">${title}</h3>
            <p>${project.caption.substring(0, 150)}...</p>
            <a href="/contact" class="customize-btn">Demander une personnalisation</a>
        </div>
    `;

    return card;
}

// Fonction pour afficher les projets
async function displayProjects() {
    const projectsContainer = document.getElementById('projects-container');
    const projects = await fetchInstagramPosts();

    projects.forEach(project => {
        const card = createProjectCard(project);
        projectsContainer.appendChild(card);
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    displayProjects();

    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Fonction de filtrage
    function filterProjects(category) {
        projectCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Gestion des clics sur les filtres
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Mise à jour de la classe active
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filtrage des projets
            const category = button.dataset.filter;
            filterProjects(category);
        });
    });
}); 