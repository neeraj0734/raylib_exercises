function findIndex(array, searchElement) {
    for (let index = array.length - 1; index >= 0; index--) {
        const arrayElement = array[index];
        if (arrayElement === searchElement) {
            return index;
        }
    }
}

const array = ["apple", "cake", "tea", "coffee", "tea", "pen"];
console.log(findIndex(array, "pen"));
