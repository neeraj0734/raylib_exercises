function findIndex(array, searchElement) {
    for (let index = 0; index < array.length; index++) {
        const arrayElement = array[index];
        if (arrayElement === searchElement) {
            return index;
        }
    }
}

const array = ["apple", "cake", "tea", "coffee", "tea", "pen"];
console.log(findIndex(array, "coffee"));
