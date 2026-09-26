const r = require("raylib")
const math = require("./math")

const WIDTH = 800;
const HEIGHT = 500;
const FPS = 60;


let scHead_posX = 100;
const scHead_posY = 0;
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
    r.DrawRectangle(scHead_posX, scHead_posY, scHead_width, scHead_height, scHead_colour)
}
const pf_posX = 400;
const pf_posY = 0;
const pf_width = 150;
const pf_height = HEIGHT;
const pf_colour = r.BLUE;

function particleFeild() {
    r.DrawRectangle(pf_posX, pf_posY, pf_width, pf_height, pf_colour)
}

function update() {
    move();
}

function move() {
    let isTouchingRightWall = math.isTouchingWall(WIDTH, (scHead_posX + scHead_width))
    let isTouchingLeftWall = math.isTouchingWall(scHead_posX, 0)
    const isTouching = isTouchingLeftWall || isTouchingRightWall
    if (isTouching) {
        scHead_speed *= -1
    }
    scHead_posX += scHead_speed;

}
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK)
    particleFeild();
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