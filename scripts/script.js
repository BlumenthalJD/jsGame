var gameWindow=document.getElementById("gameWindow");
var context=gameWindow.getContext("2d");
var x=gameWindow.width/3;
var y=gameWindow.height-30;
var dx=20;
var dy=-20;
var mouseStatus=false;


drawSquare();

function drawSquare()
{
    context.beginPath();
    context.rect(x, y, 50, 50);
    context.fillStyle = "#FF0000";
    context.fill();
    context.closePath();
}

function bounceSquare()
{
    context.clearRect(0, 0, gameWindow.width, gameWindow.height);
    drawSquare();
    x+=dx;
    y+=dy;
}
