function calcOffset(outer, inner) {
    return (outer - inner) / 2;
}

function isTouchingWall(wallPoint, objectPoint) {
    if (wallPoint <= objectPoint) {
        return true;
    }
    return false;
}
// console.log(isTouchingWall(400, 4
module.exports = {
    calcOffset, isTouchingWall,
} 