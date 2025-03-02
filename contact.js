document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');

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
                alert('Message envoyé avec succès !');
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