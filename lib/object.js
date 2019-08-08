const manipulate = (data) => {
    let firstname, all

    firstname = data.firstname
    all = data

    let result = {
        firstname,
        all
    }

    return result
}

//req--import--//




const merge = function (data, input) {
    return data.concat(input)
}

// concat untuk file yang berbeda //
//biar ga pake berulang kali//
//input --> data//


const insert = (data, input) => {
    data.push(input)
}

const sort = function (a, b) {
    if (a > b) {
        return -1;
    }
    if (b > a) {
        return 1;
    }
    return 0;
}

module.exports = {
    manipulate,
    merge: merge,
    add: insert
}