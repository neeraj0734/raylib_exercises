function calcOffset(outer, inner) {
    return (outer - inner) / 2;
}

function isTouchingWall(wallPoint, objectPoint) {
    if (wallPoint <= objectPoint) {
        return true;
    }
    return false;
}
module.exports = {
    calcOffset,
    isTouchingWall,
} 