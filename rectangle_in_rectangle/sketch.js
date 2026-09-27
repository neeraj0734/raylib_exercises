const r = require("raylib")
const g = require("./geometry")

const WIDTH = 900;
const HEIGHT = 600;
const FPS = 60;

const outerRectPosX = 100;
const outerRectPosY = 100;
const outerRectW = 300;
const outerRectH = 300;

function running() {
    return !r.WindowShouldClose();
}
function setup() {
    r.InitWindow(WIDTH, HEIGHT, "Rectangle inside rectangle")
    r.SetTargetFPS(FPS)
}

function update() {
    // change the state
}

function getCenteredRect(outerRectPosX, outerRectPosY, outerRectW, outerRectH, innerRectW, innerRectH, colour) {
    let innerRectPosX = g.calcOffset(outerRectW, innerRectW)
    let innerRectPosY = g.calcOffset(outerRectH, innerRectH)
    return r.DrawRectangle(innerRectPosX + outerRectPosX, innerRectPosY + outerRectPosY, innerRectW, innerRectH, colour)
}

function draw() {
    r.BeginDrawing()
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(outerRectPosX, outerRectPosY, outerRectW, outerRectH, r.WHITE)
    getCenteredRect(outerRectPosX, outerRectPosY, outerRectW, outerRectH, outerRectW * 0.6, outerRectH * 0.4, r.BLUE)
    r.EndDrawing()
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