function getFibonaciArray(n) {
    const fibonaciArray = [1, 0];
    if (n === 0 || n === 1) {
        fibonaciArray.splice(0, 2 - n);
    }
    for (let index = 2; index < n; index++) {
        fibonaciArray.unshift(fibonaciArray[0] + fibonaciArray[1]);
    }
    return fibonaciArray;
}

const n = 5;
console.log(getFibonaciArray(n));
