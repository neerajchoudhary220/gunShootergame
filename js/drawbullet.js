//========DRAW BULLET==========//

function bullet()
{
bx=ox;
by=oy;
var bullet = canvas.getContext("2d");

bullet.width=25;
bullet.beginPath();
bullet.fillStyle="red";
bullet.strokeStyle="red";

document.getElementById('gunY').value=by;
 /*
bullet.moveTo(68+bx+a,13+by);
bullet.lineTo(78+bx+a,13+by);
bullet.lineTo(82+bx+a,15+by);
bullet.lineTo(82+bx+a,15+by);
bullet.lineTo(82+bx+a,20+by);
bullet.lineTo(78+bx+a,22+by);
bullet.lineTo(68+bx+a,22+by);
    */
bullet.closePath();
bullet.fill();
bullet.stroke();



/*
document.getElementById('bL').value=bx+a;
document.getElementById('rH').value=rH;*/

//============BULLET IMAGE==============
//if(gunShot==1)
//{
   
var bulletC = canvas.getContext("2d");
var bullet_img = new Image();
bullet_img.src="img/bullet.png";
bulletC.drawImage(bullet_img,15+bx+a,9+by,25,40);
gunShot=0;
//}}
    
shootobject();

}
