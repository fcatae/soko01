
var Animation = {};

Animation.DoSmile = function (obj) {

    var oldfunc = obj.draw;
    var oldtime = time;

    obj.draw = (function () {

        if (time - oldtime < 200) {
            context.drawImage(imgfacewow, 0, 0, imgfacewow.width, imgfacewow.height,
            this.x * BSIZE, this.y * BSIZE, BSIZE, BSIZE);
        } else if (time - oldtime < 400) {
            context.drawImage(imgface, 0, 0, imgface.width, imgface.height,
            this.x * BSIZE, this.y * BSIZE, BSIZE, BSIZE);
        } else if (time - oldtime < 800) {
            context.drawImage(imgfacewow, 0, 0, imgfacewow.width, imgfacewow.height,
            this.x * BSIZE, this.y * BSIZE, BSIZE, BSIZE);
        } else {
            this.draw = oldfunc;
        }

    }).bind(obj);

};