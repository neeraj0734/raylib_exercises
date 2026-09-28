const s = require("./setup.js");
const r = require("raylib");

let posX = s.WIDTH / 2;
const posY = 0;
const width = s.WIDTH * 0.07;
const height = s.HEIGHT;
let colour = r.WHITE;
let speed = 4;

module.exports = {
    posX,
    posY,
    width,
    height,
    colour,
    speed,
};

// let scHead2_posX = s.WIDTH / 2;
// const scHead2_posY = 0;
// const scHead2_width = s.WIDTH * 0.07;
// const scHead2_height = s.HEIGHT;
// let scHead2_colour = r.WHITE;
// let scHead2_speed = 4;
