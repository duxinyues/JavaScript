const proxy = new Proxy({}, {
    get: () => {
        console.log("get");
    },
    set: () => {
        console.log("set")
    }
})

proxy.count = 1; // set
++proxy.count; // get