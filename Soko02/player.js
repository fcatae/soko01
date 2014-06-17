var player = {};

player.draw = function () {

    if (this.animation != null) {
        this.animation();
    }
    else {
        drawImage(imgface1, playerX, playerY);
    }
};

player.smile = function () {

    if (!player.animation) {

        var that = player;
        var startTime = (new Date()).getTime();
        
        this.animation = function () {

            var image = imgface1;
            var curTime = (new Date()).getTime();
            var delta = curTime - startTime;

            if (delta < 300) {
                image = imgface0;
            } else if (delta < 600) {
                image = imgface1;
            } else if (delta < 800) {
                image = imgface0;
            } else {
                that.animation = null;
            }

            drawImage(image, playerX, playerY);
        };
            
    }

};