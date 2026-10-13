const r = require("raylib");

function setup() {
    const WIDTH = 800;
    const HEIGHT = 800;
    const FPS = 50;
    const numberOfPoints = 20;
    const circle = {
        x: calcOffset(WIDTH, 0),
        y: calcOffset(HEIGHT, 0),
        radii: 100,
    };

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(800, 800, "Circle Points");
    r.SetTargetFPS(50);

    return {
        WIDTH,
        HEIGHT,
        FPS,
        circle,
        numberOfPoints,
    };
}

function calcOffset(outer, inner) {
    return (outer - inner) / 2;
}

function getCircle(x, y, radius, colour) {
    r.DrawCircle(x, y, radius, colour);
}

function calcCircumPoint(circle, angleDifference) {
    const y =
        circle.y + circle.radii * Math.sin((angleDifference * Math.PI) / 180);
    const x =
        circle.x + circle.radii * Math.cos((angleDifference * Math.PI) / 180);

    return { x, y };
}

function drawCircumPoints(w) {
    const angleDifference = 360 / w.numberOfPoints;
    for (let index = 0; index < w.numberOfPoints; index++) {
        const point = calcCircumPoint(w.circle, index * angleDifference);
        r.DrawCircle(point.x, point.y, 5, r.RED);
    }
}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    getCircle(w.circle.x, w.circle.y, w.circle.radii, r.WHITE);
    r.EndDrawing();
}

function update(w) {
    drawCircumPoints(w);
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        update(world);
        draw(world);
    }
}

function main() {
    const world = setup();
    loop(world);
}

main();
