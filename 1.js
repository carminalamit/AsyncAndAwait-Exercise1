function task(name) {
    function perform() {
    let task = new Promise((resolve, reject) => {
    console.log(`'${name}' in progress!`)
    if (name)
    resolve()
    else
    reject()
    })
    
    task.then(() => {
    console.log(`Done performing '${name}!'`)
    }).catch(() => {
    console.log(`Rejected '${name}!'`)
    })
    }
    
    return perform
}
    
(async () => {
    const task1 = task("add sugar")
    const task2 = task("add spice")
    const task3 = task("add everything nice")
    const task4 = task("add chemical X")
    
    await task1()
    await task2()
    await task3()
    await task4()
    
    console.log("Created Powerpuff Girls!")
})()