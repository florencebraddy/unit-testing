const toCelcius = require('../toCelcius')
console.log("convert 212 f to c is 100", toCelcius(212) === 100)
test('convert temperature into celcius', () => {
    expect(toCelcius(212)).toEqual(100);
    expect(toCelcius("")).toEqual(NaN);
    expect(toCelcius(-100)).toEqual(-73)
})