Move = {};

Move.update = function () {

    if (Map._map[player.y][player.x] == 'E') {

        Map._map[player.y][player.x] = ' ';
        sndcoins.play();
        Map._coins--;

        // player animation
        Animation.DoSmile(player);

        if (Map._coins == 0) {
            // You Win
            Level.complete();
        }

    }


};