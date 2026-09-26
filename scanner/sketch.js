const r = require("raylib")
const math = require("./math")

const WIDTH = 800;
const HEIGHT = 500;
const FPS = 60;


let scHead_PosX = 100;
const scHead_PosY = 0;
const scHead_width = 50;
const scHead_height = HEIGHT;
const scHead_colour = r.WHITE;
let scHead_speed = 5;

function running() {
    return !r.WindowShouldClose();
}
function setup() {
    r.InitWindow(WIDTH, HEIGHT, "Scanner");
    r.SetTargetFPS(FPS);
}
function drawScHead() {
    r.DrawRectangle(scHead_PosX, scHead_PosY, scHead_width, scHead_height, scHead_colour)
}

function update() {
    move();
}

function move() {
    let isTouchingRightWall = math.isTouchingWall(WIDTH, (scHead_PosX + scHead_width))
    let isTouchingLeftWall = math.isTouchingWall(scHead_PosX, 0)
    const isTouching = isTouchingLeftWall || isTouchingRightWall
    if (isTouching) {
        scHead_speed *= -1
    }
    scHead_PosX += scHead_speed;

}
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK)
    drawScHead();
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