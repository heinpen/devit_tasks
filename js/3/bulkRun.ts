type Bulk = [(...params: any[]) => any, number[]];

async function bulkRun(bulk: Bulk[]) {
  // create an array of promises
  const promiseArray: Promise<number | number[]>[] = [];

  // iterate over the bulk array and push the promises to the promiseArray
  // send resolve function as a callback to the function that is being called
  for (const [foo, params] of bulk) {
    promiseArray.push(
      new Promise((resolve) => {
        foo(...params, resolve);
      })
    );
  }

  return Promise.all(promiseArray);
}

const f1 = (cb) => {
  cb(1);
};
const f2 = (a, cb) => {
  cb(a);
};
const f3 = (a, b, cb) => {
  setTimeout(() => cb([a, b]), 1000);
};

bulkRun([
  [f1, []],
  [f2, [2]],
  [f3, [3, 4]],
]).then(console.log);
// Output: [1, 2, [3, 4]]
