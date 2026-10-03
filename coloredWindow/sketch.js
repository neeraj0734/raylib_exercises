const r = require("raylib");
const l = require("./layout");
const w = require("./window");

let rect1;

function running() {
    return !r.WindowShouldClose();
}
function setup() {
    r.InitWindow(l.layout.WIDTH, l.layout.HEIGHT, l.layout.TITLE);
    r.SetTargetFPS(l.layout.FPS);

    rect1 = w.createRectangle(100, 100, 400, 300);
}

function update() {}

function getRectangles(rect, colour) {
    w.drawRect(rect, colour);
}

function addRectangleLines(rect, colour) {
    w.drawOuterLines(rect, colour);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(l.layout.COLOR);

    getRectangles(rect1, w.windowColour);
    addRectangleLines(rect1, r.BLUE);

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
