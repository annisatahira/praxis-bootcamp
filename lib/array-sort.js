const ascending_sort = (data) => {
    return data.sort()
}

const descending_sort = (data) => {
    let shorting = ascending_sort(data)

    return shorting.reverse()
}

module.exports = {
    ascending_sort,
    descending_sort
}