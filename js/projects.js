var projIDs = {
    merkle: 0,
    nutrak: 1,
    letsplay: 2,
    fishy: 3,
    tasktime: 4,
    phaser: 5,
    libra: 6
}
var showProjectPage = function(proj) {
    proj = projIDs[proj];
    if (projWrapper) {
        projWrapper.style.left = (proj * -100) + "%";
    }
}

document.onRe