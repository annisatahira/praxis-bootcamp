/**
 * Book Schema
 */

const mongoose = require("mongoose")
const Schema = mongoose.Schema

let bookSchema = new Schema({
    title: String,
    description: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

let Book = mongoose.model("Book", bookSchema)

module.exports = Book