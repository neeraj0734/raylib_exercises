const r = require("raylib");

function setup() {
    const screen = {
        WIDTH: 800,
        HEIGHT: 800,
        FPS: 60,
    };

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screen.WIDTH, screen.HEIGHT, "Triangle");
    r.SetTargetFPS(screen.FPS);

    return { screen };
}

function update(w) {}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.GRAY);

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
