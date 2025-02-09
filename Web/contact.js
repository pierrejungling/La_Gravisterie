document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        try {
            // À remplacer par votre endpoint d'API
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Message envoyé avec succès !');
                contactForm.reset();
            } else {
                throw new Error('Erreur lors de l\'envoi du message');
            }
        } catch (error) {
            console.error('Erreur:', error);
            alert('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
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