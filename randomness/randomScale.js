const r = require("raylib");

function setup() {
    const WIDTH = 800;
    const HEIGHT = 500;
    const FPS = 50;
    const range = { start: 0, end: WIDTH };
    const lineCount = 100;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, "Scale");
    r.SetTargetFPS(FPS);

    const points = createScalePoints(range, lineCount);
    console.log("Points", points);

    return { WIDTH, HEIGHT, FPS, points };
}

function genRandomNumber(range) {
    return range.start + Math.random() * range.end;
}

function createScalePoints(range, lineCount) {
    const points = [];
    for (let index = 0; index < lineCount; index++) {
        const pointX = Math.ceil(genRandomNumber(range));
        points.push(pointX);
    }
    return points;
}

function createLines(points, screenHeight) {
    const lines = [];
    for (let index = 0; index < points.length; index++) {
        const point = points[index];

        const start = { x: point, y: 0 };
        const end = { x: point, y: screenHeight };

        lines.push({ start, end });
    }
    return lines;
}

function drawLines(lines) {
    for (let index = 0; index < lines.length; index++) {
        const line = lines[index];
        r.DrawLineV(line.start, line.end, r.WHITE);
    }
}

function update(w) {}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.DARKBLUE);

    const lines = createLines(w.points, w.HEIGHT);
    drawLines(lines);

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
