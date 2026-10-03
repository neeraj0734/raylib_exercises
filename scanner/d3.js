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
