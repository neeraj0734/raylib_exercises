function filterBelow(array, threshold) {
    const filteredElements = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element < threshold) {
            filteredElements.push(element);
        }
    }
    return filteredElements;
}

const array = [6, 2, 3, 1, 4, 7];
console.log(filterBelow(array, 3));
