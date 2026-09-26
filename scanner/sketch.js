const r = require("raylib")

const WIDTH = 800;
const HEIGHT = 500;
const FPS = 60;


function running() {
    return !r.WindowShouldClose();
}
function setup() {
    r.InitWindow(WIDTH, HEIGHT, "Scanner");
    r.SetTargetFPS(FPS);
}

function update() {
    // change the state
}

function sc_carriage() {
    r.DrawRectangle(sc_carr_PosX, sc_carr_PosY, sc_carr_width, sc_carr_height, sc_carr_colour)
}

const sc_carr_PosX = 100;
const sc_carr_PosY = 0;
const sc_carr_width = 50;
const sc_carr_height = HEIGHT;
const sc_carr_colour = r.WHITE;

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK)
    sc_carriage();
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