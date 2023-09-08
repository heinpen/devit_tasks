function arrayToObject(arr) {
  const obj = {}; // create an empty object
  for (const [key, value] of arr) {
    // iterate over the array and check if value is an array then call the function recursively 
    // if not then assign the value to the key
    if (Array.isArray(value)) {
      obj[key] = arrayToObject(value);
    } else {
      obj[key] = value;
    }
  }
  return obj;
}

var arr = [
    ["name", "developer"],
    ["age", 5],
    [
      "skills",
      [
        ["html", 4],
        ["css", 5],
        ["js", 5],
      ],
    ],
  ];
  
  console.log(arrayToObject(arr));
  // Outputs: {
  // 	name: 'developer',
  // 	age: 5,
  // 	skills: {
  // 		html: 4,
  // 		css: 5,
  // 		js: 5
  //      }
  //   }
  