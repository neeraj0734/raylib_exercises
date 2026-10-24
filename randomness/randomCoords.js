const r = require("raylib");

function setup() {
    const screen = {
        WIDTH: 800,
        HEIGHT: 800,
        FPS: 60,
    };

    const circles = createCircles(100, {
        width: screen.WIDTH,
        height: screen.HEIGHT,
    });

    const boundry = {
        horizontal: { start: 0, end: screen.WIDTH },
        vertical: { start: 0, end: screen.HEIGHT },
    };

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screen.WIDTH, screen.HEIGHT, "Test");
    r.SetTargetFPS(screen.FPS);

    return { screen, circles, boundry };
}

const directionPallete = {
    0: { x: -1, y: 0 }, // left
    1: { x: 1, y: 0 }, // right
    2: { x: 0, y: -1 }, // up
    3: { x: 0, y: 1 }, // down
};

function getRandomColor() {
    const red = getRandomValue({ start: 0, end: 255 });
    const blue = getRandomValue({ start: 0, end: 255 });
    const green = getRandomValue({ start: 0, end: 255 });
    const alpha = getRandomValue({ start: 0, end: 255 });

    return { r: red, g: green, b: blue, a: alpha };
}

function getdirection(range) {
    const value = getRandomValue(range);
    return directionPallete[value];
}

function getRandomValue(range) {
    return (
        range.start + Math.floor(Math.random() * (range.end - range.start + 1))
    );
}

function getRandomCircleCoords(dimension, radius) {
    return radius + Math.floor(Math.random() * (dimension - 2 * radius + 1));
}

function getCircleProps(width, height) {
    const color = getRandomColor();
    const radius = getRandomValue({ start: 10, end: 40 });
    const x = getRandomCircleCoords(width, radius);
    const y = getRandomCircleCoords(height, radius);
    const angle = getRandomValue({ start: 0, end: 359 });
    const speed = getRandomValue({ start: 0, end: 5 });
    const direction = getdirection({ start: 0, end: 3 });
    const accelaration = getRandomValue({ start: -1, end: 1 });

    return { x, y, radius, color, angle, speed, direction, accelaration };
}

function createCircles(count, dimensions) {
    const circles = [];
    for (let index = 0; index < count; index++) {
        circles.push(getCircleProps(dimensions.width, dimensions.height));
    }
    return circles;
}

function reverseDirection(direction) {
    return { x: direction.x * -1, y: direction.y * -1 };
}

function isOutOfBound(boundry, target) {
    return target >= boundry.end || target <= boundry.start;
}

function hasCircleTouchedBoundry(circle, boundry) {
    const hBound = isOutOfBound(boundry.horizontal, circle.x - circle.radius);
    const vBound = isOutOfBound(boundry.vertical, circle.y - circle.radius);

    if (hBound || vBound) {
        circle.direction = reverseDirection(circle.direction);
    }
}

function moveCircle(circles, boundry) {
    for (const circle of circles) {
        if (circle.speed >= 0) {
            circle.speed += circle.accelaration;
        }
        if (circle.speed > 50) {
            circle.speed = 0;
        }
        hasCircleTouchedBoundry(circle, boundry);
        circle.x += circle.direction.x * circle.speed;
        circle.y += circle.direction.y * circle.speed;
    }
}

function drawCircles(circles) {
    for (const c of circles) {
        r.DrawCircle(c.x, c.y, c.radius, c.color);
    }
}

function update(w) {
    moveCircle(w.circles, w.boundry);
}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.GRAY);

    drawCircles(w.circles);

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
