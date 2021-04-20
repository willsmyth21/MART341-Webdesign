
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createRadialGradient(50, 50, 10, 100, 100, 300);
grd.addColorStop(0, "red");
grd.addColorStop(1, "#90EE90");


// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 500, 500);

ctx.fillStyle = "red";
ctx.fillRect(300, 20, 200, 50);
ctx.fillStyle = "#87CEEB";
ctx.fillRect(100, 200, 100, 400);


// transparency
ctx.globalAlpha = 0.2;
ctx.fillStyle = "blue";
ctx.fillRect(00, 20, 500, 50);
ctx.fillStyle = "#710CO4";
ctx.fillRect(150, 250, 300, 50);
ctx.fillStyle = "blue";
ctx.fillRect(300, 20, 200, 400);
ctx.fillStyle = "#E3242B";
ctx.fillRect(0, 400, 250, 50);

ctx.globalAlpha = 1.0;
ctx.font = "30px Arial";
ctx.fillText("_CITi-LyFE_", 312, 100);
ctx.font = "15px Arial";
ctx.fillText("will---------------------smyth", 312, 425);
