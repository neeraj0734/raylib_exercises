const r = require("raylib");

function setup() {
    const WIDTH = 600;
    const HEIGHT = 400;
    const FPS = 50;
    const origin = { x: 50, y: 200 };

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

    return { WIDTH, HEIGHT, FPS, origin, hLine, vLine };
}

function drawSinWave(center) {
    const amplitude = 100;
    let sinX = center.x;
    for (let index = 0; index < 360; index++) {
        sinX += 1;
        const sinY = center.y + Math.sin(calcRadian(index)) * amplitude;
        console.log(sinX, sinY);
        r.DrawCircle(sinX, sinY, 2, r.RED);
    }
}

function calcRadian(angle) {
    return (angle * Math.PI) / 180;
}

function drawLine(line) {
    r.DrawLineEx(line.st, line.end, line.thick, line.color);
}

function update(world) {}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    drawSinWave(w.origin);

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
