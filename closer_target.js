const r = require("raylib");

function calculateDistance(trgtACircleX, trgtACircleY) {
    const distance = sqrt(
        square(trgtACircleX - srcCirleX) + square(trgtACircleY - srcCirleY),
    );
    return distance;
}
function square(number) {
    return number ** 2;
}
function sqrt(number) {
    return number ** 0.5;
}

function setup() {
    const windowWidth = 1000;
    const windowHeight = 600;
    r.InitWindow(windowWidth, windowHeight, "closer_target");
    r.SetTargetFPS(60);
}

function update() {}

function draw() {
    const srcCirleX = 50,
        srcCirleY = 50,
        srcRadius = 20;

    let distSrcToTargetA = calculateDistance(trgtACircleX, trgtACircleY);
    let distSrcToTargetB = calculateDistance(trgtBCircleX, trgtBCircleY);

    const trgtACircleX = 500,
        trgtACircleY = 50,
        trgtARadius = 20;
    const trgtBCircleX = 150,
        trgtBCircleY = 350,
        trgtBRadius = 20;

    r.BeginDrawing();

    r.DrawCircle(srcCirleX, srcCirleY, srcRadius, r.BLUE);
    r.DrawCircle(trgtACircleX, trgtACircleY, trgtARadius, r.RED);
    r.DrawCircle(trgtBCircleX, trgtBCircleY, trgtBRadius, r.WHITE);

    if (distSrcToTargetA < distSrcToTargetB) {
        r.DrawLine(srcCirleX, srcCirleY, trgtACircleX, trgtACircleY, r.WHITE);
    } else {
        r.DrawLine(srcCirleX, srcCirleY, trgtBCircleX, trgtBCircleY, r.WHITE);
    }
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
