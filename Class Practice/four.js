//USER INPUT
//Program of Simple Interest by taking input from user..........
var p = Number(prompt("Enter the Principal amount"))
var r = Number(prompt("Enter the Rate of Interest"))
var t = Number(prompt("Enter the Time Period in Years"))

var si = p * r * t / 100
var total = p + si
var emiAmount = total(t + 12)
document.write(`
                <pre>
                    Principal Amount = ${p}
                    Rate             = ${r}
                    Time             = ${t}
                    Simple Interest  = ${si.toFixed(2)}
                    Total Amount     = ${total.toFixed(2)}
                    EMI Amount       = ${emiAmount.toFixed(2)}
                </pre>
            `)