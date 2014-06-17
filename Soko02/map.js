
var map = [
    "##########",
    "#       $#",
    "####  ####",
    "#  $   $ #",
    "#  ####  #",
    "#     $  #",
    "##########"
];

map.draw = function () {

    var maxx = map[0].length;
    var maxy = map.length;

    for (var y = 0; y < maxy; y++) {
        for (var x = 0; x < maxx; x++) {

            if (map[y][x] == '#') {
                drawBrick(x, y);
            }

            if (map[y][x] == '$') {
                drawGold(x, y);
            }

        }
    }

};