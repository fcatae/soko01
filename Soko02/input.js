
window.addEventListener("keydown", function (e) {

    var key = e.keyCode;
    var px = playerX;
    var py = playerY;
    var dx = 0;
    var dy = 0;

    switch (key) {
        case 37:
        case 65: // left
            px = px - 1;
            dx = -1;
            break;

        case 38:
        case 87: // up
            py = py - 1;
            dy = -1;
            break;

        case 39:
        case 68: // right
            px = px + 1;
            dx = 1;
            break;

        case 40:
        case 83: // down
            py = py + 1;
            dy = 1;
            break;
    }

    var next = map.getAt(px, py);
    var canmove = true;
    // parede
    if (next == '#') {
        canmove = false;
    }

    // moeda
    if (next == '$') {
        sndcoins.play();
        map.setAt(px, py, ' ');
        coins--;

        if (coins == 0) {
            game_screen.classList.add("visible");
        }
    }

    // caixa
    if (next == 'B') {
        var movenext = map.getAt(px + dx, py + dy);
        
        // can move it further?
        if (movenext == ' ') {
            map.setAt(px, py, ' ');
            map.setAt(px + dx, py + dy, 'B');
        }
        else {
            canmove = false;
        }
            
    }

    if (canmove) {
        playerX = px;
        playerY = py;
    }


});