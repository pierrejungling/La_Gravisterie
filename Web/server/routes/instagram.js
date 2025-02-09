const express = require('express');
const router = express.Router();
const axios = require('axios');
const Product = require('../models/Product');

// Récupérer les posts Instagram
router.get('/posts', async (req, res) => {
    try {
        const response = await axios.get(`https://graph.instagram.com/me/media`, {
            params: {
                fields: 'id,caption,media_url,permalink',
                access_token: process.env.INSTAGRAM_ACCESS_TOKEN
            }
        });

        const posts = response.data.data;
        await updateProducts(posts);

        res.json(posts);
    } catch (error) {
        console.error('Erreur Instagram API:', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des posts' });
    }
});

// Mettre à jour la base de données des produits
async function updateProducts(posts) {
    for (const post of posts) {
        const priceMatch = post.caption.match(/(\d+([.,]\d{2})?)\s*€/);
        if (priceMatch) {
            const price = parseFloat(priceMatch[1].replace(',', '.'));
            const title = post.caption.split('\n')[0];

            await Product.findOneAndUpdate(
                { instagramId: post.id },
                {
                    title,
                    description: post.caption,
                    price,
                    imageUrl: post.media_url,
                    instagramUrl: post.permalink
                },
                { upsert: true }
            );
        }
    }
}

module.exports = router; 