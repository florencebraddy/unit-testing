//Write a new function that returns the perimeter of a rectangle with the width and height being specified as arguments to the function.  
//  const perimeter = (w, h) => (w + h) * 2;

function rectanglePerimeter (width, height) {
    if(width  === "" || height === "") return NaN
return (width + height) * 2
}
module.exports = rectanglePerimeter;