const r = require("raylib");
const colour = require("./colour.js");
const w = require("./properties.js");
const crl = require("./circles/circle.js");

function running() {
    return !r.WindowShouldClose();
}
function setup() {
    r.InitWindow(800, 600, "title");
    r.SetTargetFPS(60);
}

function update() {
    // change the state
}
const targetPosition = {
    x: 100,
    y: 120,
};

const start = {
    x: 50,
    y: 50,
};

const end = {
    x: 250,
    y: 150,
};

const panel = {
    x: 50,
    y: 50,
    width: 300,
    height: 150,
};

function circleV() {
    return r.DrawCircleV(crl.target, 30, r.RED);
}
function circleSector() {
    return r.DrawCircleSector(crl.target, 40, 0, 120, 20, r.BLUE);
}

function drawRanges() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    circleSector();
    // circleV();
    // r.DrawRectangleGradientH(
    //     panel.x + panel.width,
    //     panel.y,
    //     panel.width,
    //     panel.height,
    //     r.BLUE,
    //     r.WHITE,
    // );

    // r.DrawRectangleGradientV(
    //     panel.x,
    //     panel.y,
    //     panel.width,
    //     panel.height,
    //     r.BLUE,
    //     r.WHITE,
    // );

    // r.DrawRectangleRec(panel, r.BLUE);
    // r.DrawRectangleRounded(panel, 0.2, 8, r.BLUE);
    // r.DrawRectangleRoundedLinesEx(w.windowRect, 0.2, 8, 4, r.WHITE);
    // r.DrawRectangleRoundedLines(w.windowRect, 0.2, 8, 2, r.WHITE);
    // r.DrawRectangleRounded(w.windowRect, 0.2, 8, r.BLUE);
    // r.DrawLineV(start, end, r.WHITE);
    // r.DrawLine(50, 50, 250, 150, r.WHITE);
    // r.DrawLineEx(start, end, 5, r.WHITE);
    // r.DrawCircleV(targetPosition, 100, r.RED);
    // r.DrawCircleLines(targetPosition.x, targetPosition.y, 100, r.RED);
    // r.DrawCircleV(targetPosition, 50, r.YELLOW);
    // r.DrawCircleLines(targetPosition.x, targetPosition.y, 50, r.WHITE);
    // r.DrawRectangleV(button.position, button.size, r.BLUE);
    // r.DrawRectangle(100, 100, 200, 100, glass);
    // r.DrawRectangleLines(
    //     w.windowRect.x,
    //     w.windowRect.y,
    //     w.windowRect.width,
    //     w.windowRect.height,
    //     r.RED,
    // );
    r.EndDrawing();
}

function draw() {
    drawRanges();
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
