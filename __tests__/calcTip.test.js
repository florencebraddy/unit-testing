const calcTip = require('../calcTip')

test("calculate tips", ()=>{
    expect(calcTip(1000, .2)).toEqual(200);
    expect(calcTip(1000)).toEqual(1000)
})
