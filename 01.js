const csvtojson = require('csvtojson')

const filepath = "file.csv"

csvtojson()
.fromFile(filepath)
.then((json) => {
    console.log(json)
})