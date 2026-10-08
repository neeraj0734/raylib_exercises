function mapLengths(array) {
    const wordsArray = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index].length;
        wordsArray.push(element);
    }
    return wordsArray;
}

const words = ["apple", "cat", "Four"];
console.log(mapLengths(words));
