//Write a function that displays the result of 5+6+7+8+9+10.

function sum(a, b) {
  if (a === "" || b === "") return NaN;
  if (a === undefined && b === undefined) return NaN;
  return a + b;
}
//sum(5, 6);

module.exports = sum;
