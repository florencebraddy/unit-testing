// Write a function that calculates tip with 2 arguments, the bill and the tip percentage. 
// Use the build-in JS toFixed() method to round the answer to two decimal places.

function calcTip (bill, tipPercentage){
    if (tipPercentage === undefined) return bill
return Number((bill * tipPercentage).toFixed(0))
}

module.exports = calcTip