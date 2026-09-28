const r = require("raylib");
const s = require("./setup.js");

let posX = 0;
const posY = s.HEIGHT * 0.4;
let width = s.WIDTH;
let height = s.HEIGHT * 0.05;
let colour = r.BLUE;
// let speed = 10;

module.exports = {
    posX,
    posY,
    width,
    height,
    colour,
};
