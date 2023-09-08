const obj = {
  a: {
    b: {
      c: 12,
      d: "Hello World",
    },
    e: [1, 2, 3],
  },
};

type Obj = {
  [key: string]: any;
};

function mapObject(obj: Obj): Obj {
  const result = {}; // create an empty object
  for (const key in obj) {
    // iterate over the object and check if the value is an object and not an array
    // then call the function recursively if not then assign the value to the key
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      const subObj = mapObject(obj[key]);
      // iterate over the sub object and add current key to the sub key
      for (const subKey in subObj) {
        result[key + "/" + subKey] = subObj[subKey];
      }
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}

console.log(mapObject(obj));
// Outputs: {
//     'a/b/c': 12,
//     'a/b/d': 'Hello World',
//     'a/e': [1,2,3]
//   }
