const { Timestamp } = require("bson");
const mongoose = require("mongoose");

const livroSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: false
    }
},{timestamps: true})

const Livro = mongoose.model("livro", livroSchema)

module.exports = Livro;