const r = require("raylib");

function setup() {
    const WIDTH = 600;
    const HEIGHT = 400;
    const FPS = 50;
    const origin = { x: 50, y: 200 };
    const waveColorPallete = {
        cos: { color: r.BLUE },
        sin: { color: r.RED },
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

    return { WIDTH, HEIGHT, FPS, origin, hLine, vLine, waveColorPallete };
}

function calculateCoordY(center, index, amplitude, trignoFunc) {
    return center.y - Math[trignoFunc](degreesToRadians(index)) * amplitude;
}

function drawTrigonometricWave(
    waveColorPallete,
    center,
    trignoFunc,
    amplitude,
) {
    let funcX = center.x;
    const waveColor = waveColorPallete[trignoFunc];

    for (let index = 0; index < 360; index++) {
        funcX += 1;
        const funcY = calculateCoordY(center, index, amplitude, trignoFunc);
        r.DrawCircle(funcX, funcY, 2, waveColor.color);
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

    drawTrigonometricWave(w.waveColorPallete, w.origin, "sin", 100);
    drawTrigonometricWave(w.waveColorPallete, w.origin, "cos", 100);

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
