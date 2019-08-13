const Book = require("../models/book")
const { isInteger } = require("lodash")

const create = (req) => {
    let { title, description, price } = req.body
    price = parseInt(price)
    console.log(`Value of price ${price}`)

    if (isInteger(price) === false) {
        return "Wrong type of `price`"
    }

    var insert_data = {
        title,
        description,
        price
    }

    let data = new Book(insert_data)
    data.save()

    return data
}

const getAll = async () => {
    let query = await Book.find({}).exec()
    console.log(`Result ${query}`)

    return query
}

module.exports = {
    create,
    getAll
}