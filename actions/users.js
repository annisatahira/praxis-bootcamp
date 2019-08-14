const User = require("../models/user")
const EmailValidator = require('email-validator')

const create = async (req) => {
    let { nama, email, phone } = req.body

    phone = parseInt(phone)
    email = email.toLowerCase()
    if (EmailValidator.validate(email) === false) {
        return "Wrong type of `email`"
    }

    console.log(`Value of phone ${phone}`)
    console.log(`Value of email ${email}`)

    var insert_data = {
        nama,
        email,
        phone
    }

    let data = new User(insert_data)

    try {

        await data.save()

        return data
    } catch (err) {
        throw err
    }
}

const getAll = async () => {
    try {
        let query = await User.find({}).exec()
        let data = query.map((v, i) => {
            return {
                nama: v.nama,
                email: v.email,
                phone: v.phone
            }
        })

        return data
    } catch (err) {
        throw err
    }
}

const getDetail = async (id) => {
    try {
        let query = await User.findOne({
            _id: id
        }).exec()

        return query
    } catch (err) {
        throw err
    }
}

module.exports = {
    create,
    getAll,
    getDetail
}