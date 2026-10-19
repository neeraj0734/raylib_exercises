const r = require("raylib");

function setup() {
    const WIDTH = 800;
    const HEIGHT = 500;
    const FPS = 10;
    const circle = {
        center: { x: 100, y: 100 },
        radii: 10,
        color: r.WHITE,
    };

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, "Random");
    r.SetTargetFPS(FPS);

    return { WIDTH, HEIGHT, FPS, circle };
}

function update(w) {
    const randomX = Math.ceil(Math.random() * 800);
    const randomY = Math.ceil(Math.random() * 500);
    w.circle.center.x = randomX;
    w.circle.center.y = randomY;
}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawCircleV(w.circle.center, w.circle.radii, w.circle.color);

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
