const r = require("raylib");

function setup() {
    const screen = {
        WIDTH: 800,
        HEIGHT: 500,
        FPS: 10,
    };

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(screen.WIDTH, screen.HEIGHT, "Polar Points");
    r.SetTargetFPS(screen.FPS);

    return { screen };
}

function update(w) {}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.DARKBLUE);

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
