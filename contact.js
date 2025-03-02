document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');

    // Fonction pour créer et afficher le popup
    function showSuccessPopup() {
        const popup = document.createElement('div');
        popup.className = 'popup-overlay';
        
        popup.innerHTML = `
            <div class="popup-content">
                <img src="assets/images/La%20Gravisterie%20carré_N.svg" alt="Logo La Gravisterie" class="popup-logo">
                <h3 class="popup-title">Merci pour votre message !</h3>
                <p class="popup-message">Nous avons bien reçu votre demande et nous vous répondrons dans les plus brefs délais.</p>
                <button class="popup-close">Fermer</button>
            </div>
        `;

        document.body.appendChild(popup);

        // Animation d'entrée
        setTimeout(() => {
            popup.classList.add('active');
        }, 10);

        // Gestionnaire pour fermer le popup
        const closeButton = popup.querySelector('.popup-close');
        const closePopup = () => {
            popup.classList.remove('active');
            setTimeout(() => {
                popup.remove();
            }, 300);
        };

        closeButton.addEventListener('click', closePopup);
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                closePopup();
            }
        });
    }

    // Modification du gestionnaire de soumission du formulaire
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        
        // Ajout des fichiers
        const fileInput = document.querySelector('.file-input');
        if (fileInput.files.length > 0) {
            Array.from(fileInput.files).forEach((file, index) => {
                formData.append('attachments[]', file);
            });
        }

        try {
            const response = await fetch('send-mail.php', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                showSuccessPopup(); // Utilisation du nouveau popup
                contactForm.reset();
                document.querySelector('.selected-files').textContent = '';
            } else {
                throw new Error(result.message || 'Erreur lors de l\'envoi du message');
            }
        } catch (error) {
            console.error('Erreur:', error);
            alert(error.message || 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
        }
    });

    const dropZone = document.querySelector('.file-drop-zone');
    const fileInput = document.querySelector('.file-input');
    const selectedFiles = document.querySelector('.selected-files');

    // Ouvre le sélecteur de fichiers au clic sur la zone
    dropZone.addEventListener('click', () => fileInput.click());

    // Gestion du drag & drop
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        fileInput.files = e.dataTransfer.files;
        updateFileList();
    });

    // Mise à jour de la liste des fichiers
    fileInput.addEventListener('change', updateFileList);

    function updateFileList() {
        const files = Array.from(fileInput.files);
        if (files.length > 0) {
            selectedFiles.textContent = files.map(f => f.name).join(', ');
        } else {
            selectedFiles.textContent = '';
        }
    }
}); 