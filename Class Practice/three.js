// Program to find Simple Interest 
var p = 567834
var r = 12.36
var t = 5
var si = p * r * t / 100
var total = p + si
var emiAmount = total / (t * 12)

console.log("Principal Amount: ", p);
console.log("Rate            : ", r);
console.log("Time            : ", t);
console.log("Simple Interest : ", si.toFixed(2));
console.log("Total Amount    : ", total.toFixed(2));
console.log("EMI Amount      : ", emiAmount.toFixed(2));