const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageModel = mongoose.Schema({
    sender: {
        type: "string", required: true
    },
    content: { type: "string", trime: true, required: true },
    replies: [{ sender: String, content: String, createdAt: { type: Date, default: Date.now } }],
}, {
    timestamps: true
})

module.exports = mongoose.model('message', messageModel)