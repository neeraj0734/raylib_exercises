const r = require("raylib");

function setup() {
    const screen = {
        WIDTH: 800,
        HEIGHT: 500,
        FPS: 10,
    };
    const circle = {
        center: { x: 10, y: 10 },
        radius: 400,
        startAngle: 0,
        endAngle: 90,
        segments: 40,
        color: r.WHITE,
    };

    const childCircles = getCircleProp(circle.center, circle.radius, 100);

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screen.WIDTH, screen.HEIGHT, "Polar Points");
    r.SetTargetFPS(screen.FPS);

    return { screen, circle, childCircles };
}

function drawCircleSector(c) {
    r.DrawCircleSectorLines(
        c.center,
        c.radius,
        c.startAngle,
        c.endAngle,
        c.segments,
        c.color,
    );
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

function getColor() {
    const r = getRandomValue({ start: 0, end: 255 });
    const g = getRandomValue({ start: 0, end: 255 });
    const b = getRandomValue({ start: 0, end: 255 });
    const a = getRandomValue({ start: 0, end: 255 });

    return { r, g, b, a };
}

function createCircleProps(refPoint, refRadius) {
    const angle = getRandomValue({ start: 0, end: 90 });
    const radius = getRandomValue({ start: 10, end: 10 });
    const color = getColor();
    const endPoint = getCircumPoint(refPoint, refRadius, angle);
    const circleCenter = getCircleCenter(refPoint, endPoint);

    return { center: circleCenter, radius, color };
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
        r.DrawCircleV(point.center, point.radius, point.color);
    }
}

function update(w) {}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    drawCircleSector(w.circle);
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
