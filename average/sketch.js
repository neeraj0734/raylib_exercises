const r = require("raylib");
const b = require("./bar.js");
const { calcAverage } = require("./math.js");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const WIDTH = 600;
    const HEIGHT = 500;
    const FPS = 60;
    const headerOffset = 0.1;
    const background = { r: 241, g: 241, b: 242, a: 255 };

    const bar = {};
    const data = [
        10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160,
    ];

    r.InitWindow(WIDTH, HEIGHT, "Bar Chart");
    r.SetTargetFPS(FPS);

    bar.maxHeight = HEIGHT * (1 - headerOffset);
    bar.scale = b.calcScaleValue(bar.maxHeight, data);
    bar.width = 30;
    bar.gap = 2;

    return {
        WIDTH,
        HEIGHT,
        FPS,
        bar,
        data,
        background,
        headerOffset,
    };
}

function drawBar(world) {
    for (let index = 0; index < world.data.length; index++) {
        const x = (world.bar.width + world.bar.gap) * index;
        const y = world.HEIGHT - world.bar.scale * world.data[index];
        const width = world.bar.width;
        const height = world.bar.scale * world.data[index];

        b.drawBar({ x, y, width, height }, r.BLUE);
        r.DrawText(world.data[index].toString(), x + 5, y + 5, 12, r.WHITE);
    }
}

function drawAverageLine(w) {
    const { y1, x2, avg } = getAverageLineInfo(w);
    r.DrawLine(0, y1, x2, y1, r.RED);
    r.DrawText(`Average: ${avg.toString()}`, 10, 10, 20, r.BLACK);
}

function getAverageLineInfo(w) {
    const avg = calcAverage(w.data);
    const headerOffsetHeight = w.headerOffset * w.HEIGHT;
    const y1 = w.bar.maxHeight - w.bar.scale * avg + headerOffsetHeight;
    const x2 = w.WIDTH;
    return { y1, x2, avg };
}

function update(w) {}

function draw(w) {
    r.BeginDrawing();
    r.ClearBackground(w.background);

    drawBar(w);
    drawAverageLine(w);

    r.EndDrawing();
}
function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};
