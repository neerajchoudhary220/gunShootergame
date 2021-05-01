function shootobject()
{

      
   var my = rH+55;
if((bx+a)>=(bt-84) && (by>=rH && by<=my))
  
{
 bulletDefaultPosition();
  bt=width;
 
  
  //document.getElementById('rH').value="working";


      clearTimeout(tt);
      Random=Math.floor(Math.random()*5)+1;
      tt=setTimeout(redBalloon,10);
}




document.getElementById('bL').value=bx+a;
//document.getElementById('rH').value=by;
//document.getElementById('gunY').value=by;


//===========shoot the bomb====================
if(bombImgCount.value=='0')
{
if((bx+a)>=(bombLt-37) && (by>=bomb_sH && by<=(bomb_sH+25)))
{
bulletDefaultPosition();
gameOver=1;
 new Audio('sound/bomb.mp3').play()
   //bombLt=width;
 bombSrc.value='img/bomb_blast.gif';


 bombImgCount.value=1;
 document.getElementById('bombImgCount').value=1;

 if(bombLt<=148)
      {

bombLt=width-280;
bomb_Random = Math.floor(Math.random()*70)+1;

bombSrc='img/bomb.png';
document.getElementById('bombImgCount').value=0;
bombImgCount.value=0;  

      }



}
} 

//===========shoot the bomb1====================
if(bomb1ImgCount.value=='0')
{
if((bx+a)>=(bomb1Lt-37) && (by>=bomb1_sH && by<=(bomb1_sH+25)))
{
bulletDefaultPosition();
gameOver=1;
new Audio('sound/bomb.mp3').play()
   //bomb1Lt=width;
 bomb1Src.value='img/bomb_blast.gif';


 bomb1ImgCount.value=1;
 document.getElementById('bomb1ImgCount').value=1;

 if(bomb1Lt<=148)
      {

bomb1Lt=width-270;
bomb1_Random = Math.floor(Math.random()*75)+1;

bomb1Src='img/bomb.png';
document.getElementById('bomb1ImgCount').value=0;
bomb1ImgCount.value=0;  

      }



}
} 

//===========shoot the bomb2====================
if(bomb2ImgCount.value=='0')
{
if((bx+a)>=(bomb2Lt-37) && (by>=bomb2_sH && by<=(bomb2_sH+25)))
{
bulletDefaultPosition();
gameOver=1;
new Audio('sound/bomb.mp3').play()
   //bomb2Lt=width;
 bomb2Src.value='img/bomb_blast.gif';


 bomb2ImgCount.value=1;
 document.getElementById('bomb2ImgCount').value=1;

 if(bomb2Lt<=148)
      {

bomb2Lt=width-260;
bomb2_Random = Math.floor(Math.random()*70)+1;

bomb2Src='img/bomb.png';
document.getElementById('bomb2ImgCount').value=0;
bomb2ImgCount.value=0;  

      }



}
} 



appleShoot();
BulletPckageShoot();
lemonShoot();
orangeShoot();
mangoShoot();
pineappleShoot();
}
//===================================================================




function bulletDefaultPosition()
{
      a=0;
      bx=ox;
      clearTimeout(t);
}

