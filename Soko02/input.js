
window.addEventListener("keydown", function (e) {

    var key = e.keyCode;
    var px = playerX;
    var py = playerY;

    switch (key) {
        case 37:
        case 65: // left
            px = px - 1;
            break;

        case 38:
        case 87: // up
            py = py - 1;
            break;

        case 39:
        case 68: // right
            px = px + 1;
            break;

        case 40:
        case 83: // down
            py = py + 1;
            break;
    }

    var next = map[py][px];

    if (next != '#') {
        playerX = px;
        playerY = py;
    }

    if (next == '$') {
        sndcoins.play();
        map[py][px] = ' '; // broken -- because strings are immutable
    }

});