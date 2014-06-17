
var _map;

var level_01 = [
    "##########",
    "#  B    $#",
    "#### B####",
    "#  $   $ #",
    "#  ####  #",
    "#    P$  #",
    "##########"
];
 
var map = {};

map.load = function (level) {

    coins = 0;

    var maxx = level[0].length;
    var maxy = level.length;

    _map = new Array(maxy);

    for (var y = 0; y < maxy; y++) {
        _map[y] = new Array(maxx);

        for (var x = 0; x < maxx; x++) {

            var ch = level[y][x];

            _map[y][x] = ch;

            if (ch == '$') {
                coins++;
            }

            if (ch == 'P') {
                playerX = x;
                playerY = y;
                _map[y][x] = ' ';
            }
        }
    }

};

map.draw = function () {

    var maxx = _map[0].length;
    var maxy = _map.length;

    for (var y = 0; y < maxy; y++) {
        for (var x = 0; x < maxx; x++) {

            if (_map[y][x] == '#') {
                drawBrick(x, y);
            }

            if (_map[y][x] == '$') {
                drawGold(x, y);
            }

            if (_map[y][x] == 'B') {
                drawBox(x, y);
            }

        }level_01
    }
};

map.getAt = function (x, y) {
    return _map[y][x];
};

map.setAt = function (x, y, ch) {
    _map[y][x] = ch;
};

map.load(level_01);