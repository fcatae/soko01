
var context = canvas.getContext("2d");

var playerX = 1;
var playerY = 1;

window.onload = function () {

    setInterval(function () {

        context.clearRect(0, 0, canvas.width, canvas.height);

        map.draw();

        drawPlayer(playerX, playerY);

    }, 100);

};

function drawBrick(x, y) {
    drawImage(imgbrick, x, y);
}

function drawGold(x, y) {
    drawImage(imggold, x, y);
}

function drawPlayer(x, y) {
    var image = imgface1;
    drawImage(image, x, y);
}

function drawImage(image,x,y)
{
    context.drawImage(image,
        0, 0, image.width, image.height,
        x * image.width, y * image.width, image.width, image.height);

}