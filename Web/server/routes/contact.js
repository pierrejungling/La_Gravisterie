const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');

// Configuration nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Envoyer un message de contact
router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Sauvegarder dans la base de données
        const contact = new Contact({
            name,
            email,
            message
        });
        await contact.save();

        // Envoyer l'email
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: 'contact@lagravisterie.fr',
            subject: `Nouveau message de ${name}`,
            text: `De: ${name} (${email})\n\nMessage:\n${message}`
        });

        res.json({ success: true });
    } catch (error) {
        console.error('Erreur contact:', error);
        res.status(500).json({ error: 'Erreur lors de l\'envoi du message' });
    }
});

module.exports = router; 