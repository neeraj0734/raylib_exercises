const r = require("raylib");

function setup() {
    const WIDTH = 800;
    const HEIGHT = 500;
    const FPS = 10;
    const rect = { x: 100, y: 100, width: 500, height: 300 };
    const totalPoints = 500;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, "Points in Rectangle");
    r.SetTargetFPS(FPS);

    const points = createPoints(totalPoints, rect);

    return { WIDTH, HEIGHT, FPS, points, rect, totalPoints };
}

function getRectangle(rect, thick, color) {
    r.DrawRectangleLinesEx(rect, thick, color);
}

function genRandomNumber(range) {
    return range.start + Math.random() * range.end;
}

function drawPoints(points) {
    const WHITE = { r: 255, g: 255, b: 255, a: 180 };
    for (const point of points) {
        r.DrawCircle(point.x, point.y, 10, WHITE);
    }
}

function createPoints(totalPoints, rect) {
    const points = [];
    for (let point = 0; point < totalPoints; point++) {
        const pointX = genRandomNumber({
            start: rect.x,
            end: rect.width,
        });
        const pointY = genRandomNumber({
            start: rect.y,
            end: rect.height,
        });

        const pointObj = {
            x: pointX,
            y: pointY,
        };

        points.push(pointObj);
    }

    return points;
}

function update(w) {}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.DARKBLUE);

    getRectangle(w.rect, 3, r.WHITE);

    drawPoints(w.points);

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
