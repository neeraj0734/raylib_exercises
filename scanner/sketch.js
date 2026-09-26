const r = require("raylib")
const math = require("./math")

const WIDTH = 800;
const HEIGHT = 500;
const FPS = 60;


let scHead_posX = 100;
const scHead_posY = 0;
const scHead_width = 50;
const scHead_height = HEIGHT;
let scHead_colour = r.WHITE;
let scHead_speed = 5;

function running() {
    return !r.WindowShouldClose();
}
function setup() {
    r.InitWindow(WIDTH, HEIGHT, "Scanner");
    r.SetTargetFPS(FPS);
}

const pf1_posX = 200;
const pf1_posY = 0;
const pf1_width = 150;
const pf1_height = HEIGHT;
const pf1_colour = r.BLUE;

const pf2_posX = 500;
const pf2_posY = 0;
const pf2_width = 40;
const pf2_height = HEIGHT;
const pf2_colour = r.BLUE;

const detectPf1 = false;
const detectPf2 = true;

function drawScHead() {
    r.DrawRectangle(scHead_posX, scHead_posY, scHead_width, scHead_height, scHead_colour)
}

function scHeadColor() {
    const isDetectedPf1 = math.isOverlap(scHead_posX, scHead_width, pf1_posX, pf1_width)
    const isDetectedPf2 = math.isOverlap(scHead_posX, scHead_width, pf2_posX, pf2_width)

    if (detectPf1 && detectPf2) {
        scHead_colour = (isDetectedPf1 || isDetectedPf2) ? r.RED : r.WHITE
    } else if (detectPf1) {
        scHead_colour = (isDetectedPf1) ? r.RED : r.WHITE
    } else if (detectPf2) {
        scHead_colour = (isDetectedPf2) ? r.RED : r.WHITE
    }
}

function particleFeild() {
    r.DrawRectangle(pf1_posX, pf1_posY, pf1_width, pf1_height, pf1_colour)
    r.DrawRectangle(pf2_posX, pf2_posY, pf2_width, pf2_height, pf2_colour)
}

function update() {
    move();
    scHeadColor();
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