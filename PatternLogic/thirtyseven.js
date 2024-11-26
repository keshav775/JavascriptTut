/*
ABCDE
BCDEF
CDEFG
DEFGH
EFGHI
*/
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        process.stdout.write(`${String.fromCharCode(i + j + 63)}`)
    }
    console.log()
}