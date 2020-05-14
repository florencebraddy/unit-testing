const sum = require("../sum");

test("add two numnbers", () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(1, "")).toEqual(NaN);
  expect(sum()).toEqual(NaN);
});
