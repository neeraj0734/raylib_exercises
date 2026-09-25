const r = require("raylib");

function getRectPos(windowDimension, rectDimension) {
    const windowCenter = windowDimension / 2;
    const rectCenter = rectDimension / 2;
    return windowCenter - rectCenter;
}
function setup() {
    const windowWidth = 1200;
    const windowHeight = 800;
    r.InitWindow(windowWidth, windowHeight, "center_rectangle");
    r.SetTargetFPS(50);
}
function update() {}
function draw() {
    const rectAPosX = 400;
    const rectAPosY = 200;

    const rectAWidth = 400;
    const rectAHeight = 200;

    const rectBWidth = 200;
    const rectBHeight = 100;
    const rectBPosX = getRectPos(rectAWidth, rectBWidth) + rectAPosX;
    const rectBPosY = getRectPos(rectAHeight, rectBHeight) + rectAPosY;

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawRectangle(rectAPosX, rectAPosY, rectAWidth, rectAHeight, r.WHITE);
    r.DrawRectangle(rectBPosX, rectBPosY, rectBWidth, rectBHeight, r.RED);

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
