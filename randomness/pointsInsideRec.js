const r = require("raylib");

function setup() {
    const WIDTH = 800;
    const HEIGHT = 500;
    const FPS = 10;
    const point = { center: { x: 100, y: 100 }, radii: 3, color: r.WHITE };
    const rect = { x: 100, y: 100, width: 500, height: 300 };
    const totalPoints = 100;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, "Points in Rectangle");
    r.SetTargetFPS(FPS);

    return { WIDTH, HEIGHT, FPS, point, rect, totalPoints };
}
function getRectangle(rect, thick, color) {
    r.DrawRectangleLinesEx(rect, thick, color);
}

function genRandomNumber(range) {
    return range.start + Math.random() * range.end;
}

function drawPoints(rect, totalPoints) {
    for (let point = 0; point < totalPoints; point++) {
        const pointX = genRandomNumber({
            start: rect.x,
            end: rect.width,
        });
        const pointY = genRandomNumber({
            start: rect.y,
            end: rect.height,
        });
        r.DrawCircle(pointX, pointY, 3, r.WHITE);
    }
}

function update(w) {}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    getRectangle(w.rect, 3, r.WHITE);

    drawPoints(w.rect, w.totalPoints);

    r.EndDrawing();
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
