//Write a function that takes a number as an argument and returns the sum of each individual digit. 
// So an input of 998 would return 26 (because 9 + 9 + 8) is 26.

function sumOfDigits(number){
let arrayString =number.toString().split("");
let arrayNum = [], total = 0;
arrayString.forEach(string => arrayNum.push(parseInt(string)));
arrayNum.forEach(number => total += number);
return total;
}

module.exports = sumOfDigits;