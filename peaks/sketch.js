const r = require("raylib");
const lb = require("./lineBar.js");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const WIDTH = 400;
    const HEIGHT = 400;
    const FPS = 60;
    const headerOffset = 0.1;
    const data = [12, 45, 78, 23, 91, 56, 34, 67, 89, 40];
    const peaks = [];
    const lineBar = {};

    r.InitWindow(WIDTH, HEIGHT, "Peaks");
    r.SetTargetFPS(FPS);

    lineBar.maxHeight = HEIGHT * (1 - headerOffset);
    lineBar.hScale = 40;
    lineBar.vScale = lb.calcScaleValue(lineBar.maxHeight, data);

    return { WIDTH, HEIGHT, FPS, lineBar, data, peaks };
}

function getPosition(lineBar, data, HEIGHT, index) {
    return {
        x: lineBar.hScale * index,
        y: HEIGHT - data[index] * lineBar.vScale,
    };
}

function createLine(lineBar, data, HEIGHT, index) {
    const start = getPosition(lineBar, data, HEIGHT, index);
    const end = getPosition(lineBar, data, HEIGHT, index + 1);
    return { start, end };
}

function drawLine(line, colour) {
    r.DrawLineV(line.start, line.end, colour);
}

function drawLineBar(lineBar, data, HEIGHT) {
    for (let index = 0; index < data.length - 1; index++) {
        const line = createLine(lineBar, data, HEIGHT, index);
        drawLine(line, r.WHITE);
    }
}

function isPeak(data, index) {
    return data[index] > data[index + 1] && data[index] > data[index - 1];
}

function setPeakLabel(data, index, lineBar, HEIGHT) {
    const center = getPosition(lineBar, data, HEIGHT, index);
    r.DrawCircleV(center, 5, r.RED);
}

function drawPeaks(data, lineBar, HEIGHT) {
    for (let index = 1; index < data.length - 1; index++) {
        const res = isPeak(data, index);
        if (res) {
            setPeakLabel(data, index, lineBar, HEIGHT);
        }
    }
}

function update(w) {}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    
    drawLineBar(w.lineBar, w.data, w.HEIGHT);
    drawPeaks(w.data, w.lineBar, w.HEIGHT);

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
