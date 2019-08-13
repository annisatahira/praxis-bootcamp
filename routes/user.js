const express = require('express')
const router = express.Router()
const { create, getAll } = require("../actions/user")
const { isString } = require("lodash")

router.post("/", (req, res) => {
    let data = create(req)

    if (isString(data) === true) {
        return res.status(400).json({
            status: "error",
            message: data
        })
    }

    return res.status(200).json({
        status: "success",
        data,
        message: "New User created successfully!"
    })
})

router.get("/", async (req, res) => {
    let data = await getAll()

    return res.send({
        status: "success",
        data,
        message: "Get all user data"
    })
})

module.exports = router