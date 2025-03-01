// Gestion du formulaire
async function handleProjectSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const projectData = {
        name: formData.get('name'),
        description: formData.get('description'),
        dimensions: formData.get('dimensions'),
        category: formData.get('category'),
        material: formData.get('material'),
        features: formData.get('features').split('\n').filter(f => f.trim()),
        client: formData.get('client')
    };

    // Gestion des images
    const fileInput = document.querySelector('#imageUploader input[type="file"]');
    const files = fileInput.files;
    
    if (files.length > 0) {
        projectData.images = await handleImageUpload(files);
    } else if (form.dataset.editIndex) {
        // Conserver les images existantes en mode édition
        const existingProject = projects[form.dataset.editIndex];
        projectData.images = existingProject.images;
    }

    if (form.dataset.editIndex) {
        // Mode édition
        const index = parseInt(form.dataset.editIndex);
        projects[index] = { ...projects[index], ...projectData };
    } else {
        // Mode création
        projectData.id = generateUniqueId();
        projects.push(projectData);
    }

    // Sauvegarder les modifications
    saveChangesToFile();
    
    // Rafraîchir l'affichage
    currentProjects = [...projects];
    displayProjects();
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
    return `assets/images/projects/${fileName}`;
}

// Gestion du drag & drop
function initializeDragAndDrop() {
    const projectsList = document.getElementById('projectsList');
    
    projectsList.addEventListener('dragstart', e => {
        const card = e.target.closest('.item-card');
        if (card) {
            card.classList.add('dragging');
            e.dataTransfer.setData('text/plain', card.dataset.index);
        }
    });

    projectsList.addEventListener('dragend', e => {
        const card = e.target.closest('.item-card');
        if (card) {
            card.classList.remove('dragging');
        }
    });

    projectsList.addEventListener('dragover', e => {
        e.preventDefault();
        const draggingCard = document.querySelector('.dragging');
        const card = e.target.closest('.item-card');
        
        if (draggingCard && card && draggingCard !== card) {
            const dragIndex = parseInt(draggingCard.dataset.index);
            const dropIndex = parseInt(card.dataset.index);
            
            // Réorganiser les projets
            const [movedProject] = currentProjects.splice(dragIndex, 1);
            currentProjects.splice(dropIndex, 0, movedProject);
            
            // Mettre à jour l'affichage
            displayProjects();
            
            // Sauvegarder le nouvel ordre
            saveChangesToFile();
        }
    });
}

// Gestion de la suppression
function openDeleteConfirmation(index) {
    projectToDelete = index;
    document.getElementById('confirmModal').style.display = 'block';
}

function closeConfirmModal() {
    document.getElementById('confirmModal').style.display = 'none';
    projectToDelete = null;
}

function confirmDelete() {
    if (projectToDelete !== null) {
        projects.splice(projectToDelete, 1);
        currentProjects = [...projects];
        saveChangesToFile();
        displayProjects();
        closeConfirmModal();
    }
}

// Utilitaires
function generateUniqueId() {
    return `project-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function saveChangesToFile() {
    // Dans une vraie application, vous devrez implémenter la logique de sauvegarde sur le serveur
    console.log('Changements sauvegardés:', projects);
}

// Ajout de la gestion du thème sombre
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    // Vérifier le thème actuel
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcons(currentTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcons(newTheme);
    });

    function updateThemeIcons(theme) {
        if (theme === 'dark') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }
}); 