const express = require('express')
const router = express.Router()
const Register = require("../actions/users/register.action")
const Login = require("../actions/users/login.action")

router.post("/register", async (req, res) => {
    try {
        let data = await new Register(req).exec()

        return res.status(201).json({
            status: "success",
            data,
            message: "Register successfully!"
        })
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

router.post("/login", async (req, res) => {
    try {
        let data = await new Login(req).exec()

        return res.status(200).json({
            status: "success",
            data,
            message: "Login successfully!"
        })
    } catch (err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

module.exports = router