const mongoose = require('mongoose')

const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://Bakary:iXv2EaByIFHTr3s9@cluster0.2w4awkf.mongodb.net/?retryWrites=true&w=majority')
        console.log('database connected')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

module.exports = connect;   