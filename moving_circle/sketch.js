const r = require("raylib")
const geometry = require("./geometry")

const WIDTH = 400;
const HEIGHT = 400;
const FPS = 60;

function running() {
    return !r.WindowShouldClose();
}
function setup() {
    r.InitWindow(WIDTH, HEIGHT, "Moving Circle")
    r.SetTargetFPS(FPS)
}

const cColour = r.RED;
const radius = 50;
let centerX = WIDTH / 2;
const centerY = HEIGHT / 2;

let isTouching = geometry.isTouchingWall(WIDTH, (centerX + radius))

function update() {
    isTouching = geometry.isTouchingWall(WIDTH, (centerX + radius))
    centerX = isTouching ? radius : centerX + 1
}
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK)
    r.DrawCircle(centerX, centerY, radius, cColour)
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