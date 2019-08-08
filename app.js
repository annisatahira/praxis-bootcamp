const express = require('express')
const app = express()
const array_lib = require("./lib/array")
const object_lib = require("./lib/object")
const array_sort = require("./lib/array-sort")
const conditional = require("./lib/conditional")

/**
 * List of imported routes
 */
const array_routes = require('./routes/array')

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    return res.send(`Welcome to the beginning of nothingness`)
})

app.post('/tambah', (req, res) => {
    var a, b, c
    // Data type of variable a & b must be number, not string
    a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    c = a + b

    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)

    return res.send(`The result value is ${c}`)
})

app.get('/example-1', (req, res) => {
    let data = ["Red", "Blue", "Yellow", "Green"]
    let manipulation = array_lib(data)

    return res.send(manipulation)
})

app.get('/example-2', (req, res) => {
    let data = {
        firstname: "John",
        lastname: "Doe",
        email: "john.doe@mail.com",
        gender: "men"
    }
    let result = object_lib.manipulate(data)

    return res.send(result)
})

app.get("/example-3", (req, res) => {
    let input = ["Black"]
    let data = ["Red", "Blue", "Yellow", "Green"]
    console.log("before ", data)

    let result = object_lib.merge(data = data, input = input)
    console.log("after ", result)

    return res.send(result)
})

app.get("/example-4", (req, res) => {
    let empty_data = []
    console.log("before", empty_data)

    let color = "Red"
    object_lib.add(empty_data, color)
    console.log("after ", empty_data)

    return res.send(empty_data)
})

app.get("/task-1", (req, res) => {
    let animals = [
        "elephant", "bee", "horse", "cat"
    ]

    console.log("Before ", animals)

    let result = array_sort.ascending_sort(animals)
    console.log("After ", result)

    return res.send(result)

})

app.get("/task-2", (req, res) => {
    let flowers = [
        "lily",
        "tulip",
        "dandelion",
        "rose"
    ]
    console.log("Before ", flowers)

    let result = array_sort.descending_sort(flowers)
    console.log("After ", flowers)

    return res.send(result)
})

/**
 * How to using query parameter:
 * 
 * http://your_url:your_port/your_route?q=your_value
 * or type in Query Params when using postman
 * key      | value
 * q        | your_value
 */

app.get("/task3", (req, res) => {
    var q = req.query.q
    console.log("First value ", q)

    let result = conditional.equal(q)

    return res.send(result)
})

app.get("/task4", (req, res) => {
    let today = new Date().getDay()
    console.log("Today ", today)

    let result = conditional.day(today)

    return res.send(result)
})

app.post("/task5", (req, res) => {
    let number = req.body.number
    console.log("section1 ", typeof number)
    number = parseInt(number)
    console.log("section2 ", typeof number)

    let result = conditional.compare(number)

    return res.send(result)
})
//

/**
 * Set all routes
 */
app.use("/array", array_routes)

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})
