"use strict";
console.log("calculator spec");

describe("Calculator", function () {
  it("when sum is called with [3], it returns 3", function () {
    console.log("test 1");
    let calc = new Calculator(); // calc = Calculator.new
    expect(calc.sum([3])).toEqual(3);
  });

  it("when sum is called with [4], it returns 4", function () {
    console.log("test 2");
    let calc = new Calculator(); // calc = Calculator.new
    expect(calc.sum([4])).toEqual(4);
  });

  // [1, 3, 5] => 9
  it("when sum is called with [1, 3, 5], it returns 9", function () {
    console.log("test 3");
    let calc = new Calculator(); // calc = Calculator.new
    expect(calc.sum([1, 3, 5])).toEqual(9);
  });

});