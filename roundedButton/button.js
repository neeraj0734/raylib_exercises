const g = require("./geometry");

const {
    DrawRectangleRounded,
    DrawRectangleRec,
    DrawRectangleLines,
    DrawRectangleLinesEx,
    DrawText,
    DrawTextEx,
    TextLength,
} = require("raylib");

function createbutton(x, y, w, h) {
    return {
        x,
        y,
        width: w,
        height: h,
    };
}

function createBtnProps(roundness, segments, colour) {
    return {
        roundness: roundness,
        segments: segments,
        colour: colour,
    };
}

function createText(text, x, y, fontsize, colour) {
    //DrawText(text, x, y, fontsize, colour);
    return {
        text,
        x,
        y,
        fontsize,
        colour,
    };
}

function getBtnCenter(btn) {
    const btnCentrX = (btn.width + btn.x) / 2;
    const btnCentrY = (btn.height + btn.y) / 2;
    return { x: btnCentrX, y: btnCentrY };
}

function getTextCenter(textObj) {
    const txtLength = textObj.text.length;
    const textWidth = (txtLength * textObj.fontsize) / 2;
    const textheight = textObj.fontsize / 2;
    return { x: textWidth, y: textheight };
}

function getIniPointsForText(btn) {
    const btnCenter = getBtnCenter(btn);
    const iniX = btn.width / 4 + btn.x;
    const iniY = btn.height / 4 + btn.y;
    return {
        x: iniX,
        y: iniY,
    };
}

function writeTextOnRect(textObj, btn) {
    // const rectCentrX = (rect.width + rect.x) / 2;
    // const rectCentrY = (rect.height + rect.y) / 2;

    // const txtLength = textObj.text.length;
    // const textWidth = txtLength * textObj.fontsize;

    const rectCenter = getBtnCenter(btn);
    const txtCenter = getTextCenter(textObj);

    const txtIniPoints = getIniPointsForText(btn);
    console.log(txtIniPoints);

    DrawText(
        textObj.text,
        txtIniPoints.x,
        txtIniPoints.y,
        textObj.fontsize,
        textObj.colour,
    );
}

function getNormalButton(btn, colour) {
    DrawRectangleRec(btn, colour);
}

function getRoundedButton(btn, props) {
    DrawRectangleRounded(btn, props.roundness, props.segments, props.colour);
}

function applyLinesOnRect(rect, colour) {
    DrawRectangleLines(rect.x, rect.y, rect.width, rect.height, colour);
}

module.exports = {
    createbutton,
    getNormalButton,
    getRoundedButton,
    createBtnProps,
    applyLinesOnRect,
    createText,
    writeTextOnRect,
};
