const r = require("raylib");

function setup() {
    const WIDTH = 800;
    const HEIGHT = 800;
    const FPS = 50;

    const polygon = {
        center: { x: calcOffset(WIDTH, 0), y: calcOffset(HEIGHT, 0) },
        radii: 150,
        numberOfSides: 100,
        points: [],
    };

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(800, 800, "Polygon");
    r.SetTargetFPS(50);

    return { WIDTH, HEIGHT, FPS, polygon };
}

function calcOffset(outer, inner) {
    return (outer - inner) / 2;
}

function calcCircumPoint(shape, angle) {
    const x = shape.center.x + shape.radii * Math.cos((angle * Math.PI) / 180);
    const y = shape.center.y + shape.radii * Math.sin((angle * Math.PI) / 180);
    return { x, y };
}

function drawPolygon(polygon) {
    const angleDifference = 360 / polygon.numberOfSides;
    for (let index = 0; index < polygon.numberOfSides; index++) {
        drawLine(polygon, index, angleDifference);
    }
}

function drawLine(polygon, index, angleDifference) {
    const { start, end } = calcLineCoords(polygon, index, angleDifference);
    r.DrawLineV(start, end, r.WHITE);
}

function calcLineCoords(polygon, index, angleDifference) {
    const start = calcCircumPoint(polygon, (index - 1) * angleDifference);
    const end = calcCircumPoint(polygon, index * angleDifference);
    return { start, end };
}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    drawPolygon(w.polygon);
    r.EndDrawing();
}

function update(w) {}

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
