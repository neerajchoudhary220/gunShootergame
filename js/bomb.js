//==bomb========//
function bomb()
{
  /*
//When bomb will be midline touch after bomb explosion sound start and change imge bom
into to bomb_blas*/
bombSrc='img/bomb.png';

if(bombImgCount.value=='0')
{
if(bombLt<=148)
{
  bombSrc='img/bomb_blast.gif';
  bombImgCount.value=0;
  document.getElementById('bombImgCount').value=0;
  //new Audio("sound/bombExposiion.wav").play();
}

else 
{
  bombSrc='img/bomb.png';
}


}

else if(bombImgCount.value=='1'){
  bombSrc='img/bomb_blast.gif';
 
  if(bombLt<=148)
{
  
  bombImgCount.value=0;
  document.getElementById('bombImgCount').value=0;
  
}
  
}
  var bombcontext = canvas.getContext("2d");
 
  
  bombImg = new Image();
  bombImg.src = bombSrc;
  //bombImg.src='img/bomb.png';
var bombHeight =430;
//bombLt=200;
//var bombHeight =300;
//bomb_sH=bombHeight-10;

//document.getElementById('Br').value=bombLt;
//bombcontext.drawImage(bombImg,bombLt, bombHeight,20,35);

  switch(bomb_Random)
  {
      case 1:
bombHeight= bombHeight-30;
bombcontext.drawImage(bombImg,bombLt, bombHeight,20,35);
break;  

case 6:
bombHeight= bombHeight-60;
bombcontext.drawImage(bombImg,bombLt, bombHeight,20,35);
break;  

case 11:
bombHeight= bombHeight-90;
bombcontext.drawImage(bombImg,bombLt, bombHeight,20,35);
break;  

case 16:
bombHeight= bombHeight-120;
bombcontext.drawImage(bombImg,bombLt, bombHeight,20,35);
break; 

case 21:
bombHeight= bombHeight-150;
bombcontext.drawImage(bombImg,bombLt, bombHeight,20,35);
break; 

case 26:
bombHeight= bombHeight-180;
bombcontext.drawImage(bombImg,bombLt, bombHeight,20,35);
break; 

case 31:
bombHeight= bombHeight-210;
bombcontext.drawImage(bombImg,bombLt, bombHeight,20,35);
break; 

case 36:
bombHeight= bombHeight-240;
bombcontext.drawImage(bombImg,bombLt, bombHeight,20,35);
break; 

case 41:
bombHeight= bombHeight-270;
bombcontext.drawImage(bombImg,bombLt, bombHeight,20,35);
break; 

case 46:
bombHeight= bombHeight-300;
bombcontext.drawImage(bombImg,bombLt, bombHeight,20,35);
break; 

case 51:
bombHeight= bombHeight-330;
bombcontext.drawImage(bombImg,bombLt, bombHeight,20,35);
break; 

case 56:
bombHeight= bombHeight-360;
bombcontext.drawImage(bombImg,bombLt, bombHeight,20,35);
break; 

case 61:
bombHeight= bombHeight-390;
bombcontext.drawImage(bombImg,bombLt, bombHeight,20,35);
break; 

case 66:
bombHeight= bombHeight-420;
bombcontext.drawImage(bombImg,bombLt, bombHeight,20,35);
break; 


}
bomb_sH=bombHeight-20;

  
}