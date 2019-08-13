const express = require('express')
const router = express.Router()
const BookModel = require("../models/book")


router.post("/", (req, res) => {
    let { title, description, price } = req.body
    var insert_data = {
        title,
        description,
        price
    }

    let data = new BookModel(insert_data)
    data.save()

    return res.send({
        status: "success",
        data,
        message: "Book created successfully!"
    })
})

module.exports = router