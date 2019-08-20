/**
 * User Schema
 */

const mongoose = require("mongoose")
const Schema = mongoose.Schema

let userSchema = new Schema({
    name: String,
    email: String,
    phone: Number,
    password: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

let User = mongoose.model("User", userSchema)

module.exports = User