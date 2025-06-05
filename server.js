const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const faqRoutes = require('./routes/faqRoutes')

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/faqs', faqRoutes)

mongoose.connect('mongodb://127.0.0.1:27017/accordionDB')
    .then(() => {
        console.log('MongoDB connected')
        app.listen(5000, () => console.log('Server running on port 5000'))
    })
    .catch(err => console.error(err))
