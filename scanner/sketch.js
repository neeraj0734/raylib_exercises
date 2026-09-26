const r = require("raylib")
const math = require("./math")

const WIDTH = 1200;
const HEIGHT = 800;
const FPS = 60;

let scHead1_posX = 0;
const scHead1_posY = 0;
const scHead1_width = WIDTH * 0.07;
const scHead1_height = HEIGHT;
let scHead1_colour = r.WHITE;
let scHead1_speed = 10;

let scHead2_posX = WIDTH / 2;
const scHead2_posY = 0;
const scHead2_width = WIDTH * 0.07;
const scHead2_height = HEIGHT;
let scHead2_colour = r.WHITE;
let scHead2_speed = 4;

const scHead3_posX = 0;
let scHead3_posY = 0;
const scHead3_width = WIDTH;
const scHead3_height = HEIGHT * 0.07;
let scHead3_colour = r.WHITE;
let scHead3_speed = 4;

function running() {
    return !r.WindowShouldClose();
}
function setup() {
    r.InitWindow(WIDTH, HEIGHT, "Scanner");
    r.SetTargetFPS(FPS);
}

const pf1_posX = WIDTH * 0.2;
const pf1_posY = 0;
const pf1_width = WIDTH * 0.1;
const pf1_height = HEIGHT;
const pf1_colour = r.BLUE;

const pf2_posX = WIDTH * 0.6;
const pf2_posY = 0;
const pf2_width = WIDTH * 0.05;
const pf2_height = HEIGHT;
const pf2_colour = r.BLUE;

const pf3_posX = 0;
const pf3_posY = HEIGHT * 0.4;
const pf3_width = WIDTH;
const pf3_height = HEIGHT * 0.05;
const pf3_colour = r.BLUE;

const detectPf1 = true;
const detectPf2 = true;
const detectPf3 = true;

function drawScHead() {
    r.DrawRectangle(scHead1_posX, scHead1_posY, scHead1_width, scHead1_height, scHead1_colour)
    r.DrawRectangle(scHead2_posX, scHead2_posY, scHead2_width, scHead2_height, scHead2_colour)
    r.DrawRectangle(scHead3_posX, scHead3_posY, scHead3_width, scHead3_height, scHead3_colour)
}

function scHeadColor() {
    const isDetectedPf1 = math.isOverlap(scHead1_posX, scHead1_width, pf1_posX, pf1_width)
    const isDetectedPf2 = math.isOverlap(scHead2_posX, scHead2_width, pf2_posX, pf2_width)
    const isDetectedPf3 = math.isOverlap(scHead3_posY, scHead3_height, pf3_posY, pf3_height)
    if (detectPf1 && detectPf2) {
        scHead1_colour = (isDetectedPf1 || isDetectedPf2) ? r.RED : r.WHITE
    }
    if (detectPf1) {
        scHead1_colour = isDetectedPf1 ? r.RED : r.WHITE
    }
    if (detectPf2) {
        scHead2_colour = isDetectedPf2 ? r.RED : r.WHITE
    }
    if (detectPf3) {
        scHead3_colour = isDetectedPf3 ? r.RED : r.WHITE
    }
    console.log(scHead3_colour);
}

function particleFeild() {
    r.DrawRectangle(pf1_posX, pf1_posY, pf1_width, pf1_height, pf1_colour)
    r.DrawRectangle(pf2_posX, pf2_posY, pf2_width, pf2_height, pf2_colour)
    r.DrawRectangle(pf3_posX, pf3_posY, pf3_width, pf3_height, pf3_colour)
}

function update() {
    move();
    scHeadColor();
}

function move() {
    scHead1_posX += scHead1_speed;
    const isTouching1 = ((scHead1_posX + scHead1_width) >= WIDTH / 2) || (scHead1_posX <= 0)
    if (isTouching1) {
        scHead1_speed *= -1;
    }

    scHead2_posX += scHead2_speed;
    const isTouching2 = ((scHead2_posX + scHead2_width) >= WIDTH) || (scHead2_posX <= WIDTH / 2)
    if (isTouching2) {
        scHead2_speed *= -1;
    }

    scHead3_posY += scHead3_speed
    const isTouching3 = ((scHead3_posY + scHead3_height) >= HEIGHT) || (scHead3_posY <= 0)
    if (isTouching3) {
        scHead3_speed *= -1
    }
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