var context = canvas.getContext("2d");
var BSIZE = 40;
var time = 0;
var time_delta = 20;

function Game() {

    this.load = function () {
        Map.load(level_0);

        this.start();
    };

    this.start = function () {
        InputMgr.start();
        player.start();

        setInterval(this.gameloop.bind(this), time_delta);
    };

    this.gameloop = function () {
        time += time_delta;

        context.clearRect(0, 0, canvas.width, canvas.height);

        this.update();
        this.draw();
    };

    this.update = function () {
        player.update();
        Move.update();
    };

    this.draw = function () {
        player.draw();
        Map.draw();
    };
}

var game = new Game();

window.onload = game.load.bind(game);