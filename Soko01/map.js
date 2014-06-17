

var Map = {};

Map._map = [];
Map._player = [0,0];
Map._coins = 0;

Map.load = function (lvl) {

    var w = lvl[0].length;
    var h = lvl.length;

    var map = new Array(h);

    for(var j=0; j<h; j++) {
        map[j] = new Array(w);
        for (var i = 0; i < w; i++) {
            map[j][i] = lvl[j].substring(i, i+1);

            if (map[j][i] == 'P') {
                Map._player = [i, j];
            }

            if (map[j][i] == 'E') {
                Map._coins++;
            }
        }
    }

    Map._map = map;

};

Map.draw = function () {
    var map = Map._map;
    var w = map[0].length;
    var h = map.length;

    for (var j = 0; j < h; j++) {
        for (var i = 0; i < w; i++) {

            var image = null;

            switch (map[j][i]) {
                case '*': image = imgbrick;
                    break;
                case 'E': image = imgegg;
                    break;
                case ' ': break;
            };

            image &&
            context.drawImage(image, 0, 0, image.width, image.height,
                i * BSIZE, j * BSIZE, BSIZE, BSIZE);
        }
    }
};