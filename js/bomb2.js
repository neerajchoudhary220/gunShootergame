//==bomb2========//

function bomb2_Fun()
{
  
//When bomb2 will be midline touch after bomb2 explosion sound start and change imge bom
//into to bomb2_blas
bomb2Src='img/bomb.png';

if(bomb2ImgCount.value=='0')
{
if(bomb2Lt<=148)
{
  bomb2Src='img/bomb_blast.gif';
  bomb2ImgCount.value=0;
  document.getElementById('bomb2ImgCount').value=0;
  //new Audio("sound/bombExposiion.wav").play();
}

else 
{
  bomb2Src='img/bomb.png';
}


}

else if(bomb2ImgCount.value=='1'){
  bomb2Src='img/bomb_blast.gif';
 
  if(bomb2Lt<=148)
{
  
  bomb2ImgCount.value=0;
  document.getElementById('bomb2ImgCount').value=0;
  
}
  
}
  var bomb2context = canvas.getContext("2d");
 
  
  bomb2Img = new Image();
  bomb2Img.src = bomb2Src;
  //bomb2Img.src='img/bomb.png';
var bomb2Height =430;
//bomb2Lt=200;
//var bomb2Height =300;
//bomb2_sH=bomb2Height-10;

//document.getElementById('Br').value=bomb2Lt;
//bomb2context.drawImage(bomb2Img,bomb2Lt, bomb2Height,20,35);

  switch(bomb2_Random)
  {
      case 1:
bomb2Height= bomb2Height-30;
bomb2context.drawImage(bomb2Img,bomb2Lt, bomb2Height,20,35);
break;  

case 6:
bomb2Height= bomb2Height-60;
bomb2context.drawImage(bomb2Img,bomb2Lt, bomb2Height,20,35);
break;  

case 11:
bomb2Height= bomb2Height-90;
bomb2context.drawImage(bomb2Img,bomb2Lt, bomb2Height,20,35);
break;  

case 16:
bomb2Height= bomb2Height-120;
bomb2context.drawImage(bomb2Img,bomb2Lt, bomb2Height,20,35);
break; 

case 21:
bomb2Height= bomb2Height-150;
bomb2context.drawImage(bomb2Img,bomb2Lt, bomb2Height,20,35);
break; 

case 26:
bomb2Height= bomb2Height-180;
bomb2context.drawImage(bomb2Img,bomb2Lt, bomb2Height,20,35);
break; 

case 31:
bomb2Height= bomb2Height-210;
bomb2context.drawImage(bomb2Img,bomb2Lt, bomb2Height,20,35);
break; 

case 36:
bomb2Height= bomb2Height-240;
bomb2context.drawImage(bomb2Img,bomb2Lt, bomb2Height,20,35);
break; 

case 41:
bomb2Height= bomb2Height-270;
bomb2context.drawImage(bomb2Img,bomb2Lt, bomb2Height,20,35);
break; 

case 46:
bomb2Height= bomb2Height-300;
bomb2context.drawImage(bomb2Img,bomb2Lt, bomb2Height,20,35);
break; 

case 51:
bomb2Height= bomb2Height-330;
bomb2context.drawImage(bomb2Img,bomb2Lt, bomb2Height,20,35);
break; 

case 56:
bomb2Height= bomb2Height-360;
bomb2context.drawImage(bomb2Img,bomb2Lt, bomb2Height,20,35);
break; 

case 61:
bomb2Height= bomb2Height-390;
bomb2context.drawImage(bomb2Img,bomb2Lt, bomb2Height,20,35);
break; 

case 66:
bomb2Height= bomb2Height-420;
bomb2context.drawImage(bomb2Img,bomb2Lt, bomb2Height,20,35);
break; 


}
bomb2_sH=bomb2Height-20;

  
}