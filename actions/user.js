const User = require("../models/user")
const { isInteger } = require("lodash")

const create = (req) => {
    let { nama, email, phone } = req.body
    phone = parseInt(phone)
    email = email.toLowerCase()
    console.log(`Value of phone ${phone}`)
    console.log(`Value of email ${email}`)

    if (isInteger(phone) === false) {
        return "Wrong type of `phone`"
    }

    var insert_data = {
        nama,
        email,
        phone
    }

    let data = new User(insert_data)
    data.save()

    return data
}

const getAll = async () => {
    let query = await User.find({}).exec()
    console.log(`Result ${query}`)

    return query
}

module.exports = {
    create,
    getAll
}