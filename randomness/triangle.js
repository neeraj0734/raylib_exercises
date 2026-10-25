const r = require("raylib");

function setup() {
    const screen = {
        WIDTH: 800,
        HEIGHT: 800,
        FPS: 60,
    };

    const triangle = {
        vA: { x: 400, y: 100 },
        vB: { x: 200, y: 500 },
        vC: { x: 600, y: 500 },
        color: r.WHITE,
    };

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screen.WIDTH, screen.HEIGHT, "Triangle");
    r.SetTargetFPS(screen.FPS);

    return { screen, triangle };
}

function update(w) {}

function draw(w) {
    const { vA, vB, vC, color } = w.triangle;
    r.BeginDrawing();
    r.ClearBackground(r.GRAY);

    r.DrawTriangleLines(vA, vB, vC, color);

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
