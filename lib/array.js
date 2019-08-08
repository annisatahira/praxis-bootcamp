module.exports = (data) => {
    let length, first, second, last, all

    length = data.length
    first = data[0]
    second = data[1]
    last = data[length - 1]
    all = data

    let result = {
        length,
        first,
        second,
        last,
        all
    }

    return result
}