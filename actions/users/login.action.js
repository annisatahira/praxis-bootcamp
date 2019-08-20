const User = require("../../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

class Login {
    constructor(req) {
        this.email = req.body.email,
            this.password = req.body.password
    }

    async exec() {
        try {
            let data = await User.find({
                email: this.email,
            }).exec()

            if (data.length == 0) {
                throw Error("User not found")
            }

            let password = await bcrypt.compare(this.password, data[0].password)
            if (!password) {
                throw Error("Unauthenticated")
            }

            let payload = {
                user_id: data[0]._id,
                user_name: data[0].name,
                user_email: data[0].email,
                user_phone: data[0].phone
            }
            let token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: 86400 // expires in 24 hours
            })

            return {
                user: payload,
                token,
                expires_in: '24 hours'
            }
        } catch (err) {
            throw err
        }
    }
}

module.exports = Login