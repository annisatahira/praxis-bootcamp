const Book = require("../models/book")
const { isInteger } = require("lodash")
const User = require("../models/user")

const create = (req) => {
    let { title, description, price, author } = req.body
    price = parseInt(price)
    console.log(`Value of price ${price}`)

    if (isInteger(price) === false) {
        return "Wrong type of `price`"
    }

    var insert_data = {
        title,
        description,
        price,
        author
    }

    let data = new Book(insert_data)
    data.save()

    return data
}

const getAll = async () => {
    let query = await Book.find({})
        .populate([
            {
                path: 'author',
                model: User
            }
        ]).exec()

    console.log(`Result ${query}`)

    return query
}

module.exports = {
    create,
    getAll
}