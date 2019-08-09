module.exports = (data) => {
    var text = ""
    console.log('Before ${text}')

    for (let i = 0; i < data.length; i++) {
        text += 'Value of ${i} is ${data[i]} |'
    }

    console.log('After ${text')

    return text
}