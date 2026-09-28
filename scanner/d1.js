const s = require("./setup.js");
const r = require("raylib");

let posX = 0;
const posY = 0;
let width = s.WIDTH * 0.07;
let height = s.HEIGHT;
let colour = r.WHITE;
let speed = 10;

module.exports = {
    posX,
    posY,
    width,
    height,
    colour,
    speed,
};

// let scHead1_posX = 0;
// const scHead1_posY = 0;
// const scHead1_width = s.WIDTH * 0.07;
// const scHead1_height = s.HEIGHT;
// let scHead1_colour = r.WHITE;
// let scHead1_speed = 10;
