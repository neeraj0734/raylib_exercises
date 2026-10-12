function calcAverage(data) {
    let sum = 0;
    for (const element of data) {
        sum += element;
    }
    return sum / data.length;
}

module.exports = {
    calcAverage,
};
