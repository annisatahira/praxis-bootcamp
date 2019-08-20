const User = require("../models/user.model")

const create = async (req) => {
    let { _id, name, email, phone } = req.body
    phone = parseInt(phone)
    var insert_data = {
        name,
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
                _id: v.id,
                name: v.name,
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

const update = async (id, updated_data) => {
    let { name, email, phone, fresh } = updated_data
    let opts = {
        new: fresh === "true" ? true : false
    }
    let data = {
        name,
        email,
        phone
    }

    try {
        let query = await User.findOneAndUpdate({
            _id: id
        }, data, opts).exec()

        return query
    } catch (err) {
        throw err
    }
}

const destroy = async (id) => {
    try {
        let query = await User.findOneAndDelete({
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
    getDetail,
    update,
    destroy
}