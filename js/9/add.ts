function add(x: number) {
  // create that will be used for the next consecutive function call
  const foo = function (y: number) {
    return add(x + y);
  };
  // create custom function valueOf for the Number method that will return a sum
  foo.valueOf = function () {
    return x;
  };
  return foo;
}

console.log(Number(add(1)(2))); // == 3
console.log(Number(add(1)(2)(5))); // == 8
console.log(Number(add(1)(2)(-3)(4))); //  == 4
console.log(Number(add(1)(2)(3)(4)(-5))); // == 5
