const r = require("raylib")


const WINDOW_WIDTH = 800;
const WINDOW_HEIGHT = 800;
const FPS = 60;

const c1_iniCenterX = 100;
const c1_iniCenterY = 100;

let c1_centerX = c1_iniCenterX;
let c1_centerY = c1_iniCenterY;

let radius = 50;
let circleColor = r.BLACK;

let c2_centerX = WINDOW_WIDTH - c1_centerX;
let c2_centerY = c1_centerY;

function setC1_dflt_Pos() {
    c1_centerX = c1_iniCenterX;
    c1_centerY = c1_iniCenterY;
}
function setC2_dflt_Pos() {
    c2_centerX = WINDOW_WIDTH - c1_centerX;
    c2_centerY = c1_centerY;
}
function setup() {
    r.InitWindow(WINDOW_WIDTH, WINDOW_HEIGHT, "Intersect");
    r.SetTargetFPS(FPS);
}

function square(number) {
    return number ** 2;
}

function sqrt(number) {
    return number ** 0.5;
}

function distance(x1, y1, x2, y2) {
    const a = square(x2 - x1);
    const b = square(y2 - y1);
    return sqrt(a + b)
}

function update() {
    move();
    //moveC2();
}

let forwardC1 = true;
let forwardC2 = true;

let moveBy = 10;
function move() {
    const isTouchingWall = c1_centerX + radius >= WINDOW_WIDTH || c1_centerX - radius <= 0
    // const isTouchingLeftWall = 

    if (isTouchingWall) {
        // moveBy = 10
        moveBy *= -1;
    }
    c1_centerX += moveBy;

}

function moveC2() {
    if (c2_centerX + radius <= WINDOW_WIDTH && forwardC2) {
        c2_centerX += 10;
        if (c2_centerX + radius === WINDOW_WIDTH) {
            forwardC2 = false;
            c2_centerY += 50;
        }
    } else if (c2_centerX - radius >= 0 && !forwardC2) {
        c2_centerX -= 10;
        if (c2_centerX - radius === 0) {
            forwardC2 = true;
            c2_centerY += 50;
        }
    }
    if (c2_centerY >= WINDOW_HEIGHT) {
        setC2_dflt_Pos();
    }
}

function draw() {
    const dst = distance(c1_centerX, c1_centerY, c2_centerX, c2_centerY);
    const sumOfCRadius = 2 * radius
    const cColor = circlesColour(dst, sumOfCRadius);

    r.BeginDrawing();
    r.ClearBackground(r.WHITE)
    r.DrawCircle(c1_centerX, c1_centerY, radius, cColor);
    r.DrawCircle(c2_centerX, c2_centerY, radius, cColor);
    r.EndDrawing();
}

function circlesColour(dst, sumOfCRadius) {
    if (dst === sumOfCRadius) {
        return r.BLUE;
    }
    if (dst < sumOfCRadius) {
        return r.RED;
    }
    return r.BLACK;
}

function loop() {
    while (!r.WindowShouldClose()) {
        update();
        draw();
    }
}

function main() {
    setup();
    loop();
    r.CloseWindow()
}

main();