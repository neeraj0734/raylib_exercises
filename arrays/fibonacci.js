function getFibonaciArray(n) {
    const fibonaciArray = [0, 1];
    if (n === 0 || n === 1) {
        fibonaciArray.splice(n, 2 - n);
    }
    for (let index = 2; index < n; index++) {
        fibonaciArray.push(fibonaciArray[index - 1] + fibonaciArray[index - 2]);
    }
    return fibonaciArray;
}

const n = 2;
console.log(getFibonaciArray(n));
