

//=======bullet running timeset

var t;
var c=0;

window.onclick=function my(e)
 {

 
a=a+50;
//a=a+1;

//t=setTimeout(my,300);
t=setTimeout(my,0);
if(a==100)
{
  new Audio('sound/GunFire.mp3').play();
  TotalBullet=TotalBullet-1;
}
else if(a>=(width-300))
{
a=0;
bx=ox;
console.log("Stop");
clearTimeout(t);

}


}

