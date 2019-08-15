const users = require("./user")
const index = require("./index")
const books = require("./books")
const shops = require("./shop.route")

const routes = (app) => {
    app.use("/", index)
    app.use("/book", books)
    app.use("/shop", shops)
    app.use("/user", users)
}

module.exports = routes