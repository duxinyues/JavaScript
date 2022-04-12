const fs = require("fs")

let readFilePromise = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}
readFilePromise('./fs.json').then(res => {
    console.log("res", res)
})