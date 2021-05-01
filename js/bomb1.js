//==bomb1========//

function bomb1_Fun()
{
  
//When bomb1 will be midline touch after bomb1 explosion sound start and change imge bom
//into to bomb1_blas
bomb1Src='img/bomb.png';

if(bomb1ImgCount.value=='0')
{
if(bomb1Lt<=148)
{
  bomb1Src='img/bomb_blast.gif';
  bomb1ImgCount.value=0;
  document.getElementById('bomb1ImgCount').value=0;
  //new Audio("sound/bombExposiion.wav").play();
}

else 
{
  bomb1Src='img/bomb.png';
}


}

else if(bomb1ImgCount.value=='1'){
  bomb1Src='img/bomb_blast.gif';
 
  if(bomb1Lt<=148)
{
  
  bomb1ImgCount.value=0;
  document.getElementById('bomb1ImgCount').value=0;
  
}
  
}
  var bomb1context = canvas.getContext("2d");
 
  
  bomb1Img = new Image();
  bomb1Img.src = bomb1Src;
  //bomb1Img.src='img/bomb.png';
var bomb1Height =430;
//bomb1Lt=200;
//var bomb1Height =300;
//bomb1_sH=bomb1Height-10;

//document.getElementById('Br').value=bomb1Lt;
//bomb1context.drawImage(bomb1Img,bomb1Lt, bomb1Height,20,35);

  switch(bomb1_Random)
  {
      case 1:
bomb1Height= bomb1Height-30;
bomb1context.drawImage(bomb1Img,bomb1Lt, bomb1Height,20,35);
break;  

case 6:
bomb1Height= bomb1Height-60;
bomb1context.drawImage(bomb1Img,bomb1Lt, bomb1Height,20,35);
break;  

case 11:
bomb1Height= bomb1Height-90;
bomb1context.drawImage(bomb1Img,bomb1Lt, bomb1Height,20,35);
break;  

case 16:
bomb1Height= bomb1Height-120;
bomb1context.drawImage(bomb1Img,bomb1Lt, bomb1Height,20,35);
break; 

case 21:
bomb1Height= bomb1Height-150;
bomb1context.drawImage(bomb1Img,bomb1Lt, bomb1Height,20,35);
break; 

case 26:
bomb1Height= bomb1Height-180;
bomb1context.drawImage(bomb1Img,bomb1Lt, bomb1Height,20,35);
break; 

case 31:
bomb1Height= bomb1Height-210;
bomb1context.drawImage(bomb1Img,bomb1Lt, bomb1Height,20,35);
break; 

case 36:
bomb1Height= bomb1Height-240;
bomb1context.drawImage(bomb1Img,bomb1Lt, bomb1Height,20,35);
break; 

case 41:
bomb1Height= bomb1Height-270;
bomb1context.drawImage(bomb1Img,bomb1Lt, bomb1Height,20,35);
break; 

case 46:
bomb1Height= bomb1Height-300;
bomb1context.drawImage(bomb1Img,bomb1Lt, bomb1Height,20,35);
break; 

case 51:
bomb1Height= bomb1Height-330;
bomb1context.drawImage(bomb1Img,bomb1Lt, bomb1Height,20,35);
break; 

case 56:
bomb1Height= bomb1Height-360;
bomb1context.drawImage(bomb1Img,bomb1Lt, bomb1Height,20,35);
break; 

case 61:
bomb1Height= bomb1Height-390;
bomb1context.drawImage(bomb1Img,bomb1Lt, bomb1Height,20,35);
break; 

case 66:
bomb1Height= bomb1Height-420;
bomb1context.drawImage(bomb1Img,bomb1Lt, bomb1Height,20,35);
break; 


}
bomb1_sH=bomb1Height-20;

  
}