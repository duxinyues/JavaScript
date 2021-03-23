let promise = readFile("./text.txt");


promise.then((res) => {
    console.log(res)
}, (err) => {
    console.log(err)
})