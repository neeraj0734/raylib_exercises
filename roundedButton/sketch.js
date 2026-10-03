const r = require("raylib");
const l = require("./layout");
const b = require("./button");

let btn;
let btnProps;
let btnText;

function running() {
    return !r.WindowShouldClose();
}
function setup() {
    r.InitWindow(l.layout.WIDTH, l.layout.HEIGHT, l.layout.TITLE);
    r.SetTargetFPS(l.layout.FPS);

    btn = b.createbutton(100, 100, 200, 100);
    btnProps = b.createBtnProps(0.5, 40, r.YELLOW);
    btnText = b.createText("Fire Alarm", 100, 100, 40, r.BLUE);
}

function update() {}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(l.layout.COLOR);
    b.applyLinesOnRect(btn, r.BLUE);
    b.getRoundedButton(btn, btnProps);
    b.writeTextOnRect(btnText, btn);

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
