const mongoose = require('mongoose')

const HomeSchema = new mongoose.Schema({
    titulo: String
})

const HomeModel = mongoose.model('teste', HomeSchema)

module.exports = HomeModel