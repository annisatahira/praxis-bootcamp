const object_loop = (data) => {
    var text = ""
    console.log(`Before ${text}`)

    data.map((val, i) => {
        console.log(`Value of ${i} is ${val.name}`)

        text += `${val.name} | `
    })

    return text
}

module.exports = object_loop