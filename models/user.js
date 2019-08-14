/**
 * User Schema
 */

const mongoose = require("mongoose")
const Schema = mongoose.Schema

let userSchema = new Schema({
    name: String,
    email: String,
    phone: {
        type: Number,
        default: 0
    },
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