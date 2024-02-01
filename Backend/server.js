const express = require("express")
const connect = require('./db')
const cors = require('cors')
const app = express()


app.use(cors())


connect()
app.use(express.json({ extended: false }))

app.get('/', (req, res) => {
    res.json("Hello")
})




app.use('/api', require('./routes/userController'))

app.use('/forum', require('./routes/messageController'))



const port = process.env.PORT || 5000

app.listen(port, () => console.log(`app running on port:${port}`))