const { DrawRectangleRec } = require("raylib");

function maxValueInData(data) {
    let max = data[0];
    for (const value of data) {
        if (value > max) max = value;
    }
    return max;
}

function calcScaleValue(maxHeight, data) {
    const maxData = maxValueInData(data);

    return maxHeight / maxData;
}

function getBar(bar, colour) {
    DrawRectangleRec(bar, colour);
}



module.exports = {
    maxValueInData,
    calcScaleValue,
    getBar,
};
