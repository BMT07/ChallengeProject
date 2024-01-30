const Message = require('../models/messageModel')
const express = require('express')
const router = express.Router()
const authentication = require('../middleware/auth')


router.post('/create', authentication, async (req, res) => {
    try {
        const { content, parentMessageId } = req.body;
        const sender = req.utilisateur.name;

        if (parentMessageId) {
            const parentMessage = await Message.findById(parentMessageId);
            if (!parentMessage) {
                return res.status(404).json({ error: 'Parent message not found' });
            }

            parentMessage.replies.push({ sender, content });
            await parentMessage.save();
            res.status(201).json(parentMessage);
        } else {
            const newMessage = new Message({ sender, content });
            await newMessage.save();
            res.status(201).json(newMessage);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});


router.get('/list', async (req, res) => {
    try {
        const messages = await Message.find();
        res.json(messages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;