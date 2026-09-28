const r = require("raylib");
const s = require("./setup.js");

const posX = 0;
let posY = 0;
const width = s.WIDTH;
const height = s.HEIGHT * 0.07;
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

// const scHead3_posX = 0;
// let scHead3_posY = 0;
// const scHead3_width = s.WIDTH;
// const scHead3_height = s.HEIGHT * 0.07;
// let scHead3_colour = r.WHITE;
// let scHead3_speed = 4;
