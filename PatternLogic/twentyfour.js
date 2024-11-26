for (var i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if ((i + j - 1) % 2 == 0) {
            process.stdout.write(`0`)
        }
        else
            process.stdout.write(`1`)
    }
    console.log()
}