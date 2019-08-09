const isString = (input) => {
    return typeof input == "string" ? true : false
}

const task1 = (data1, data2) => {
    let result = []
    let check1 = isString(data1)
    let check2 = isString(data2)

    if (check1 === true && check2 === true) {
        result.push(data1)
        result.push(data2)

        return result
    } else {
        return "Failed"
    }
}

const task2 = (name, email) => {
    let result = {
        name,
        email
    }

    return result
}

module.exports = {
    task1,
    task2
}