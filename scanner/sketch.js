const math = require("./math");
const r = require("raylib");
const s = require("./setup.js");
const sc1 = require("./d1.js");
const sc2 = require("./d2.js");
const sc3 = require("./d3.js");
const pf1 = require("./pf1.js");
const pf2 = require("./pf2.js");
const pf3 = require("./pf3.js");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(s.WIDTH, s.HEIGHT, "Scanner");
    r.SetTargetFPS(s.FPS);
}

function drawRange(x, y, width, height, colour) {
    r.DrawRectangle(x, y, width, height, colour);
}

function drawScanners() {
    drawRange(sc1.posX, sc1.posY, sc1.width, sc1.height, sc1.colour);
    drawRange(sc2.posX, sc2.posY, sc2.width, sc2.height, sc2.colour);
    drawRange(sc3.posX, sc3.posY, sc3.width, sc3.height, sc3.colour);
}

function getColour(istrue) {
    return istrue ? r.RED : r.WHITE;
}

function setScannerColour() {
    setScanner1Colour();
    setScanner2Colour();
    setScanner3Colour();
}

function setScanner3Colour() {
    const isDetectedPf3 = isScannerOverLapsVerticalFields(sc3.posY, sc3.height);
    sc3.colour = getColour(isDetectedPf3);
}

function setScanner2Colour() {
    const isDetectedPf2 = isScannerOverLapsHorizontalFields(
        sc2.posX,
        sc2.width,
    );
    sc2.colour = getColour(isDetectedPf2);
}

function setScanner1Colour() {
    const isDetectedPf1 = isScannerOverLapsHorizontalFields(
        sc1.posX,
        sc1.width,
    );
    sc1.colour = getColour(isDetectedPf1);
}

function isScannerOverLapsHorizontalFields(position, size) {
    let scannerOverlapsP1 = math.isOverlapping(
        position,
        size,
        pf1.posX,
        pf1.width,
    );
    let scannerOverlapsP2 = math.isOverlapping(
        position,
        size,
        pf2.posX,
        pf2.width,
    );
    return scannerOverlapsP1 || scannerOverlapsP2;
}

function isScannerOverLapsVerticalFields(position, size) {
    let detectPf1 = math.isOverlapping(position, size, pf3.posY, pf3.height);
    return detectPf1;
}

function particleFeilds() {
    drawRange(pf1.posX, pf1.posY, pf1.width, pf1.height, pf1.colour);
    drawRange(pf2.posX, pf2.posY, pf2.width, pf2.height, pf2.colour);
    drawRange(pf3.posX, pf3.posY, pf3.width, pf3.height, pf3.colour);
}

function update() {
    moveScanners();
    setScannerColour();
}

function moveScanners() {
    moveScanner1();

    moveScanner2();

    moveScanner3();
}

function moveScanner3() {
    sc3.posY += sc3.speed;
    sc3.speed = getScannerVelocity(
        sc3.posY,
        sc3.height,
        s.HEIGHT,
        0,
        sc3.speed,
    );
}

function moveScanner2() {
    sc2.posX += sc2.speed;
    sc2.speed = getScannerVelocity(
        sc2.posX,
        sc2.width,
        s.WIDTH,
        s.WIDTH / 2,
        sc2.speed,
    );
}

function moveScanner1() {
    sc1.posX += sc1.speed;
    sc1.speed = getScannerVelocity(
        sc1.posX,
        sc1.width,
        s.WIDTH / 2,
        0,
        sc1.speed,
    );
}

function getScannerVelocity(start, width, upper, lower, velocity) {
    const isOutOfBound = start + width >= upper || start <= lower;
    return isOutOfBound ? -velocity : velocity;
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    particleFeilds();
    drawScanners();
    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};
