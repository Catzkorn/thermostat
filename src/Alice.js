console.log("in calculator")

class Calculator {
  sum(numbers) {
    let accumulator = 0;
    for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
      accumulator += number;
      console.log(number);
    }
    return accumulator;
  }
}

// TODO
// forEach
// reduce


// defining functions outside of class

// function a() { return 3};
// var a = function() { return 3;};

// var a = () => { return 3;}
// var a = () => 3;
