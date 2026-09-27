const r = require("raylib")
const g = require("./geometry")

const WIDTH = 600;
const HEIGHT = 300;

function running() {
    return !r.WindowShouldClose();
}
function setup() {
    r.InitWindow(WIDTH, HEIGHT, "center_rectangle");
    r.SetTargetFPS(50);
}

function update() {
    // change the state
}

function getCenteredRect(outerRectW, outerRectH, innerRectW, innerRectH, colour) {
    let innerRectPosX = g.calcOffset(outerRectW, innerRectW)
    let innerRectPosY = g.calcOffset(outerRectH, innerRectH)
    return r.DrawRectangle(innerRectPosX, innerRectPosY, innerRectW, innerRectH, colour)
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK)
    getCenteredRect(WIDTH, HEIGHT, WIDTH * 0.5, HEIGHT * 0.4, r.WHITE)
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