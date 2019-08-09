module.exports = (data) => {
    var text = ""
    console.log(`Before ${text}`)

    let loop = data.forEach((value, index) => {
        text += `Value of ${index} is ${value} | `
    })
    console.log(`After ${text}`)

    let result = {
        loop,
        text
    }

    return result
} 