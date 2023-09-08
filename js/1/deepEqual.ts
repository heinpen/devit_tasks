console.log(deepEqual({ name: "test" }, { name: "test" })); // output true
console.log(deepEqual({ name: "test" }, { name: "test1" })); // output false
console.log(
  deepEqual(
    { name: "test", data: { value: 1 } },
    { name: "test", data: { value: 2 } }
  )
); // output false
console.log(deepEqual({ name: "test" }, { name: "test", age: 10 })); // false

function deepEqual(value1: any, value2: any): boolean {
  if (value1 === value2) {
    // check if the values are equal or reference the same object
    return true;
  }

  if (typeof value1 !== "object" || typeof value2 !== "object") {
    // if one of the values is not an object and the previous check failed, then the values are not equal
    return false;
  }

  if (Object.keys(value1).length !== Object.keys(value2).length) {
    // as we iterate over the keys of the first object, we need to check if the second object has the same amount of keys
    return false;
  }

  for (let key in value1) {
    if (value2.hasOwnProperty(key)) {
      // check if the second object has the same key name
      if (!deepEqual(value1[key], value2[key])) {
        // and repeat the process recursively, if deepEqual returns true, then it will continue to the next key
        return false;
      }
    } else {
      return false;
    }
  }

  // return true if all the checks are passed
  return true;
}
