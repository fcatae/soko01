var player;

player = {
    x: 0,
    y: 0,

    start: function() {
        this.x = Map._player[0];
        this.y = Map._player[1];
    },

    update: function() {

    },

    draw: function () {
        context.drawImage(imgface, 0, 0, imgface.width, imgface.height,
            this.x * BSIZE, this.y * BSIZE, BSIZE, BSIZE);
    }

};

var InputMgr = {};

InputMgr.start = function () {
    
    window.onkeydown = function (key) {

        var oldx = player.x;
        var oldy = player.y;

        switch (key.keyCode) {
            case 37: player.x--;
                break;
            case 38: player.y--;
                break;
            case 39: player.x++;
                break;
            case 40: player.y++;
                break;
        }

        if (Map._map[player.y][player.x] == '*') {
            player.x = oldx;
            player.y = oldy;
        }

    };
};

InputMgr.stop = function () {

    window.onkeydown = null;

}

