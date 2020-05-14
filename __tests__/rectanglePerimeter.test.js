const rectanglePerimeter = require('./rectanglePerimeter')

test('find perimeter of rectangle', ()=>{
    expect(rectanglePerimeter("", 30)).toEqual(NaN)
    expect(rectanglePerimeter(78, "")).toEqual (NaN)
expect(rectanglePerimeter(13, 5)).toEqual(36)
})