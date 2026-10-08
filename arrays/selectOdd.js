function selectOdd(array) {
    const oddsArray = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element % 2 === 1) {
            oddsArray.push(element);
        }
    }
    return oddsArray;
}

const array = [3, 2, 4, 5, 7];
console.log(selectOdd(array));
