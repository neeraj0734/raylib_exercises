const r = require("raylib");

const windowWidth = 1200;
const windowHeight = 800;

function getPosRectX(windowWidth, rectWidth) {
    const windowCenterX = windowWidth / 2;
    const rectCenterX = rectWidth / 2;
    return windowCenterX - rectCenterX;
}
function getPosRectY(windowHeight, rectHeight) {
    const windowCenterY = windowHeight / 2;
    const rectCenterY = rectHeight / 2;
    return windowCenterY - rectCenterY;
}
function setup() {
    r.InitWindow(windowWidth, windowHeight, "center_rectangle");
    r.SetTargetFPS(50);
}
function update() {}
function draw() {
    const rectWidth = 400;
    const rectHeight = 100;

    let rectPosX = getPosRectX(windowWidth, rectWidth);
    let rectPosY = getPosRectY(windowHeight, rectHeight);

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(rectPosX, rectPosY, rectWidth, rectHeight, r.WHITE);
    r.EndDrawing();
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
    r.CloseWindow();
}

main();
