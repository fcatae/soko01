"use strict";

var context = canvas.getContext("2d");

var playerX;
var playerY;
var coins;

window.onload = function () {

    setInterval(function () {

        //context.fillStyle = "#000000";
        context.clearRect(0, 0, canvas.width, canvas.height);

        map.draw();
        player.draw();

    }, 100);

};

function drawBrick(x, y) {
    drawImage(imgbrick, x, y);
}

function drawGold(x, y) {
    drawImage(imggold, x, y);
}

function drawBox(x, y) {
    drawImage(imgbox, x, y);
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