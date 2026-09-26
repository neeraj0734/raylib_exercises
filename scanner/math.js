function calcOffset(outer, inner) {
    return (outer - inner) / 2;
}

function isTouchingWall(wallPoint, objectPoint) {
    if (wallPoint <= objectPoint) {
        return true;
    }
    return false;
}

function isOverlap(scHead_posX, scHead_width, pf_posX, pf_width,) {
    const isDetectedInForth = (scHead_posX + scHead_width) >= pf_posX
    const isDetectedInBack = scHead_posX <= (pf_posX + pf_width)
    const isOverlapDetected = (isDetectedInForth && isDetectedInBack);
    return isOverlapDetected;
}

module.exports = {
    calcOffset,
    isTouchingWall,
    isOverlap,
} 