const r = require("raylib");

function setup() {
    const WIDTH = 800;
    const HEIGHT = 500;
    const FPS = 10;
    const circle = { center: { x: 400, y: 250 }, radius: 200 };
    const totalPoints = 1;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, "Points in Circle");
    r.SetTargetFPS(FPS);

    const childCircles = getCircleProp(circle.center, circle.radius, 101);
    console.log(childCircles);

    return { WIDTH, HEIGHT, FPS, circle, totalPoints, childCircles };
}

function drawCircle(c) {
    r.DrawCircleLines(c.center.x, c.center.y, c.radius, r.WHITE);
}

function angleToRadian(angle) {
    return angle * (Math.PI / 180);
}

function getSinValue(angle) {
    return Math.sin(angleToRadian(angle));
}

function getCosValue(angle) {
    return Math.cos(angleToRadian(angle));
}

function getRandomValue(range) {
    return (
        range.start + Math.floor(Math.random() * (range.end - range.start + 1))
    );
}

function getCircumPoint(refPoint, radius, angle) {
    const x = refPoint.x + radius * getSinValue(angle);
    const y = refPoint.y + radius * getCosValue(angle);

    return { x, y };
}

function getCircleCenter(refPoint, endPoint) {
    const x = getRandomValue({
        start: refPoint.x,
        end: endPoint.x,
    });
    const y = getRandomValue({
        start: refPoint.y,
        end: endPoint.y,
    });
    return { x, y };
}

function createCircleProps(refPoint, refRadius) {
    const angle = getRandomValue({ start: 0, end: 359 });
    const radius = getRandomValue({ start: 3, end: 5 });
    const endPoint = getCircumPoint(refPoint, refRadius, angle);
    const circleCenter = getCircleCenter(refPoint, endPoint);

    return { center: circleCenter, radius };
}

function getCircleProp(refPoint, refRadius, count) {
    const circles = [];
    for (let index = 0; index < count; index++) {
        circles.push(createCircleProps(refPoint, refRadius));
    }
    return circles;
}

function drawPoints(points) {
    for (const point of points) {
        drawCircle(point);
    }
}

function update(w) {}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.DARKBLUE);

    drawCircle(w.circle);
    drawPoints(w.childCircles);

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
