const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Order = require('../models/Order');

// Créer une commande
router.post('/', async (req, res) => {
    try {
        const { customer, products, total } = req.body;

        // Créer la session de paiement Stripe
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: products.map(item => ({
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: item.title
                    },
                    unit_amount: item.price * 100
                },
                quantity: item.quantity
            })),
            mode: 'payment',
            success_url: `${req.protocol}://${req.get('host')}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.protocol}://${req.get('host')}/cancel`
        });

        // Créer la commande
        const order = new Order({
            customer,
            products: products.map(item => ({
                productId: item.id,
                quantity: item.quantity,
                price: item.price
            })),
            total,
            stripePaymentId: session.id
        });
        await order.save();

        res.json({ sessionId: session.id });
    } catch (error) {
        console.error('Erreur commande:', error);
        res.status(500).json({ error: 'Erreur lors de la création de la commande' });
    }
});

module.exports = router; 