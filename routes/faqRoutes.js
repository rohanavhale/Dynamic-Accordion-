const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Faq = require('../models/Faq')

// Get all FAQs
router.get('/', async (req, res) => {
    const faqs = await Faq.find()
    res.json(faqs)
})

// Create FAQ
router.post('/', async (req, res) => {
    const { question, answer } = req.body
    const faq = new Faq({ question, answer })
    await faq.save()
    res.json(faq)
})


router.patch('/:id', async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ error: 'Invalid FAQ ID' });
    }

    const { question, answer } = req.body;
    const faq = await Faq.findByIdAndUpdate(req.params.id, { question, answer }, { new: true });
    res.json(faq);
});

// DELETE
router.delete('/:id', async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ error: 'Invalid FAQ ID' });
    }

    await Faq.findByIdAndDelete(req.params.id);
    res.json({ message: 'FAQ deleted' });
});

module.exports = router
