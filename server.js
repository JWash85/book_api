const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

//Configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
app.use(cors())

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

//Middleware
app.use(express.json())

//Index Route
app.get('/', (req, res) =>{
    res.send("Hello World")
})

//ensuring routes in book controller are used when going to /books
const bookController = require('./controllers/books_controller')
app.use('/books', bookController)


// LISTEN
app.listen(PORT, () => {
    console.log("nomming at port", PORT);
});