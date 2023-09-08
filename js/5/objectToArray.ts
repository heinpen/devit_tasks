type Values = [string, string | Values[]] | [];

function objectToArray(obj: { [key: string]: any }) {
  const arr: Values[] = []; // create an empty array
  for (const [key, value] of Object.entries(obj)) {
    // iterate over the object and check if value is an object then call the function recursively 
    // if not then push the value to the array
    if (typeof value === "object") {
      arr.push([key, objectToArray(value)]);
    } else {
      arr.push([key, value]);
    }
  }
  return arr;
}

console.log(objectToArray({
  name: "developer",
  age: 5,
  skills: {
    html: 4,
    css: 5,
    js: 5,
  },
}));

// Outputs: [['name', 'developer'], ['age', 5], ['skills', [['html', 4], ['css', 5], ['js', 5]]]]
