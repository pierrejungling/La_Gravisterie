document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');

    // Fonction pour créer et afficher le popup
    function showSuccessPopup() {
        // Supprimer tout popup existant
        const existingPopups = document.querySelectorAll('.popup-overlay');
        existingPopups.forEach(popup => popup.remove());
        
        const popup = document.createElement('div');
        popup.className = 'popup-overlay confirmation-popup';
        
        popup.innerHTML = `
            <div class="popup-content">
                <div class="logo-container">
                    <img src="assets/images/La%20Gravisterie_N.svg" alt="Logo La Gravisterie" class="popup-logo">
                </div>
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
    
    // Empêche la propagation du clic sur la liste des fichiers
    selectedFiles.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Ouvre le sélecteur de fichiers au clic sur la zone
    dropZone.addEventListener('click', () => {
        // Sauvegarde des fichiers existants
        const existingFiles = Array.from(fileInput.files);
        
        // Création d'un gestionnaire d'événement temporaire pour le changement de fichiers
        const handleFileInputChange = function() {
            // Création d'un objet DataTransfer pour fusionner les fichiers
            const dt = new DataTransfer();
            
            // Ajout des fichiers existants
            existingFiles.forEach(file => {
                dt.items.add(file);
            });
            
            // Ajout des nouveaux fichiers
            Array.from(fileInput.files).forEach(file => {
                dt.items.add(file);
            });
            
            // Mise à jour de l'input file avec tous les fichiers
            fileInput.files = dt.files;
            
            // Suppression du gestionnaire d'événement temporaire
            fileInput.removeEventListener('change', handleFileInputChange);
        };
        
        // Ajout du gestionnaire d'événement temporaire
        fileInput.addEventListener('change', handleFileInputChange);
        
        // Ouverture du sélecteur de fichiers
        fileInput.click();
    });

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
        
        // Création d'un objet DataTransfer pour fusionner les fichiers
        const dt = new DataTransfer();
        
        // Ajout des fichiers existants
        if (fileInput.files.length > 0) {
            Array.from(fileInput.files).forEach(file => {
                dt.items.add(file);
            });
        }
        
        // Ajout des nouveaux fichiers
        Array.from(e.dataTransfer.files).forEach(file => {
            dt.items.add(file);
        });
        
        // Mise à jour de l'input file avec tous les fichiers
        fileInput.files = dt.files;
        updateFileList();
    });

    // Mise à jour de la liste des fichiers
    fileInput.addEventListener('change', updateFileList);

    function updateFileList() {
        const files = Array.from(fileInput.files);
        selectedFiles.innerHTML = '';
        
        if (files.length > 0) {
            const fileList = document.createElement('div');
            fileList.className = 'file-list';
            
            files.forEach((file, index) => {
                const fileItem = document.createElement('div');
                fileItem.className = 'file-item';
                
                const fileName = document.createElement('span');
                fileName.className = 'file-name';
                fileName.textContent = file.name;
                
                const removeBtn = document.createElement('button');
                removeBtn.className = 'file-remove';
                removeBtn.innerHTML = '&times;';
                removeBtn.setAttribute('type', 'button');
                removeBtn.setAttribute('aria-label', 'Supprimer le fichier');
                removeBtn.dataset.index = index;
                
                removeBtn.addEventListener('click', function(e) {
                    e.stopPropagation(); // Empêche la propagation du clic vers la zone de dépôt
                    removeFile(parseInt(this.dataset.index));
                });
                
                fileItem.appendChild(fileName);
                fileItem.appendChild(removeBtn);
                fileList.appendChild(fileItem);
                
                // Empêche la propagation du clic sur l'élément de fichier
                fileItem.addEventListener('click', function(e) {
                    e.stopPropagation();
                });
            });
            
            selectedFiles.appendChild(fileList);
        }
    }
    
    function removeFile(index) {
        const dt = new DataTransfer();
        const files = Array.from(fileInput.files);
        
        files.forEach((file, i) => {
            if (i !== index) {
                dt.items.add(file);
            }
        });
        
        fileInput.files = dt.files;
        updateFileList();
    }
}); 