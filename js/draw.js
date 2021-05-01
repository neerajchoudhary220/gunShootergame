
function draw()
{

canvas.style.width=width+"px";
canvas.style.height=height+"px";
gun.clearRect(0,0,152,height+100);

  //gun.beginPath();
 // ctx.arc(ox,oy,10,0,2*Math.PI);
  //gun.arc(gamebox_left,gamebox_top,10,0,2*Math.PI);
 // gun.moveTo(gamebox_left,gamebox_top);
  //gun.lineTo(10,15);
//gun.strokeStyle="red";
//gun.fillStyle="gold";
/*
document.getElementById('cL').value=ox+10;
document.getElementById('cT').value=oy+10;*/

if(ox>=60)
{
  ox=60;
  
}
else if(ox<=5)
{
  ox=5;
}

if(oy+10>=430)
{
  oy=415;
}
else if(oy<=5)
{
  oy=5;
}
/*
gun.moveTo(10+ox, 10+oy);
gun.lineTo(65+ox, 10+oy);
gun.lineTo(65+ox, 25+oy);
gun.lineTo(40+ox, 25+oy);
gun.lineTo(40+ox, 45+oy);
gun.lineTo(25+ox, 45+oy);
gun.lineTo(25+ox, 70+oy);
gun.lineTo(10+ox, 70+oy);
gun.lineTo(10+ox, 70+oy);
*/
gun.closePath();






gun.lineTo
gun.stroke();
gun.fill();

/*
var g = canvas.getContext("2d");
g.strokeStyle="black";
g.beginPath();
g.moveTo(60+ox,10+oy);
g.lineTo(60+ox,25+oy);


g.stroke();
g.closePath();*/

//=============gun img==========
var gunC = canvas.getContext("2d");
var gun_img = new Image();
gun_img.src="img/gun.png";
gunC.drawImage(gun_img,10+ox,21+oy,60,55);

callFun();
if(gameOver==1 || TotalBullet == 0)
{
  gameOverFun();
  rs();
  
  }

}

