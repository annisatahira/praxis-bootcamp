const equal = (input) => {
    if (input == "good") {
        return "Yes"
    } else {
        return "No"
    }
}

const isNumber = (data) => {
    return typeof data != "number" ? false : true
}

const compare = (input) => {
    let result
    let data_type = isNumber(input)

    if (data_type == true) {
        if (input > 2) {
            result = "Success"
        } else if (input == 2) {
            result = "Correct"
        } else {
            result = "Fail"
        }
    } else {
        result = "Wrong type"
    }

    return result
}


const day = (input) => {
    let result

    switch (input) {
        case 0:
            result = "Sunday"
            break
        case 1:
            result = "Monday"
            break
        case 2:
            result = "Tuesday"
            break
        case 3:
            result = "Wednesday"
            break
        case 4:
            result = "Thursday"
            break
        case 5:
            result = "Friday"
            break
        case 6:
            result = "Saturday"
            break
        default:
            result = "Day not found"
    }

    return result
}

module.exports = {
    equal,
    compare,
    day
}
