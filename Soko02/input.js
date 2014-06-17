
window.addEventListener("keydown", function (e) {

    var key = e.keyCode;

    switch (key) {
        case 37:
        case 65: // left
            playerX = playerX - 1;
            break;

        case 38:
        case 87: // up
            playerY = playerY - 1;
            break;

        case 39:
        case 68: // right
            playerX = playerX + 1;
            break;

        case 40:
        case 83: // down
            playerY = playerY + 1;
            break;
    }

});