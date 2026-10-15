const r = require("raylib");

function setup() {
    const WIDTH = 600;
    const HEIGHT = 400;
    const FPS = 50;
    const origin = { x: 50, y: 200 };
    const funcPallete = {
        cos: { func: calculateCosineY, color: r.BLUE },
        sin: { func: calculateSineY, color: r.RED },
    };

    const hLine = {
        st: origin,
        end: { x: WIDTH - origin.x, y: origin.y },
        thick: 2,
        color: r.WHITE,
    };

    const vLine = {
        st: { x: origin.x, y: origin.x },
        end: { x: origin.x, y: HEIGHT - origin.x },
        thick: 2,
        color: r.WHITE,
    };

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, "wave");
    r.SetTargetFPS(FPS);

    return { WIDTH, HEIGHT, FPS, origin, hLine, vLine, funcPallete };
}

function calculateSineY(center, index, amplitude) {
    return center.y + Math.sin(degreesToRadians(-index)) * amplitude;
}

function calculateCosineY(center, index, amplitude) {
    return center.y - Math.cos(degreesToRadians(index)) * amplitude;
}

function drawTrigonometricWave(funcPallete, center, trignoFunc, amplitude) {
    let funcX = center.x;
    const trigonometricFunction = funcPallete[trignoFunc];

    for (let index = 0; index < 360; index++) {
        funcX += 1;
        const funcY = trigonometricFunction.func(center, index, amplitude);
        r.DrawCircle(funcX, funcY, 2, trigonometricFunction.color);
    }
}

function degreesToRadians(angle) {
    return (angle * Math.PI) / 180;
}

function drawLine(line) {
    r.DrawLineEx(line.st, line.end, line.thick, line.color);
}

function update(world) {}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    drawTrigonometricWave(w.funcPallete, w.origin, "sin", 100);
    drawTrigonometricWave(w.funcPallete, w.origin, "cos", 100);

    drawLine(w.hLine);
    drawLine(w.vLine);

    r.EndDrawing();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        draw(world);
        update(world);
    }
}
function main() {
    const world = setup();
    loop(world);
}

main();
