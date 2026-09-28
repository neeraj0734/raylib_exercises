const sketch = require("./sketch");
const geometry = require("./geometry");


function loop() {
    while (sketch.running()) {
        sketch.update();
        sketch.draw();
    }
}

function main() {
    sketch.setup();
    loop();
    sketch.teardown();
}

main();