const toFarenheit = require('./toFahrenheit')

test('convert celcius to farenheit', ()=>{
expect(toFarenheit(100)).toEqual(212)
})