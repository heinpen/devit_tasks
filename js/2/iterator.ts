const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(iterator.next()); // { value: [1,2,3], done: false }
console.log(iterator.next()); // { value: [4,5,6], done: false }
console.log(iterator.next()); // { value: [7,8], done: false }
console.log(iterator.next()); // { value: undefined, done: true }

function* chunkArray(numbers: number[], size: number): Generator<number[] | undefined, void, void>  {
    for (let i = 0; i < numbers.length; i += size) {
        yield numbers.slice(i, i + size);
    }
}
