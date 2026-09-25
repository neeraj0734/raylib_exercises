const r = require("raylib");

function getRectPos(windowDimension, rectDimension) {
    const windowCenter = windowDimension / 2;
    const rectCenter = rectDimension / 2;
    return windowCenter - rectCenter;
}
function setup() {
    const windowWidth = 1200;
    const windowHeight = 800;
    r.InitWindow(windowWidth, windowHeight, "scale_and_center");
    r.SetTargetFPS(60);
}
function update() {}

function draw() {
    const rectAPosX = 400;
    const rectAPosY = 200;

    const rectAWidth = 400;
    const rectAHeight = 200;

    const rectBWidth = 0.8;
    const rectBHeight = 0.8;

    const rectBPosX = getRectPos(rectAWidth, rectBRelWidth) + rectAPosX;
    const rectBPosY = getRectPos(rectAHeight, rectBRelHeight) + rectAPosY;

    const rectBRelWidth = rectAWidth * rectBWidth;
    const rectBRelHeight = rectAHeight * rectBHeight;

    r.BeginDrawing();
    r.DrawRectangle(rectAPosX, rectAPosY, rectAWidth, rectAHeight, r.WHITE);
    r.DrawRectangle(rectBPosX, rectBPosY, rectBRelWidth, rectBRelHeight, r.RED);
    r.EndDrawing();
}

function loop() {
    while (!r.WindowShouldClose()) {
        update();
        loop();
    }
}
function main() {
    setup();
    loop();
    r.CloseWindow();
}

main();
