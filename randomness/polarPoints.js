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

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screen.WIDTH, screen.HEIGHT, "Polar Points");
    r.SetTargetFPS(screen.FPS);

    return { screen, circle };
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

function update(w) {}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.DARKBLUE);
    drawCircleSector(w.circle);
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
