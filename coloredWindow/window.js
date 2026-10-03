const { DrawRectangleRec, DrawRectangleLines } = require("raylib");

const windowColour = { r: 255, g: 255, b: 255, a: 100 };

function createRectangle(x, y, w, h, c) {
    return {
        x,
        y,
        width: w,
        height: h,
    };
}

function drawRect(rect, colour) {
    DrawRectangleRec(rect, colour);
}

function drawOuterLines(rect, colour) {
    DrawRectangleLines(rect.x, rect.y, rect.width, rect.height, colour);
}

module.exports = {
    windowColour,
    createRectangle,
    drawRect,
    drawOuterLines,
};
