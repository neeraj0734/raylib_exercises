function reverse(array) {
    const reversedArray = [];
    for (let index = array.length - 1; index >= 0; index--) {
        const element = array[index];
        reversedArray.push(element);
    }
    return reversedArray;
}

const array = [];

console.log(reverse(array));
// console.log();
