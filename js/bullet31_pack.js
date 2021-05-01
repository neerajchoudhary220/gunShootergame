//=========bullet31_package===========
function bullet31_packageFun()

{
 
  bullet31_packageSrc='img/3bullet.png';

if(bullet31_packageImgCount.value=='0')
{
if(bullet31_packageLt<=139)
{
  bullet31_packageSrc='img/bulletFire.png';
  bullet31_packageImgCount.value=0;
  document.getElementById('bullet31_packageImgCount').value=0;
  //new Audio("sound/bullet31_packageExposiion.wav").play();
}

else 
{
  bullet31_packageSrc='img/3bullet.png';
}


}

else if(bullet31_packageImgCount.value=='1'){
  bullet31_packageSrc='img/bulletFire.png';
 
  if(bullet31_packageLt<=139)
{
  
  bullet31_packageImgCount.value=0;
  document.getElementById('bullet31_packageImgCount').value=0;
  
}
  
}
  
  var bullet31_package_context = canvas.getContext("2d");
  bullet31_package_img = new Image();
  
  bullet31_package_img.src=bullet31_packageSrc;
  //bullet31_packageLt=200;
  var bullet31_packageHeight =430;
  //var bullet31_packageHeight =200;

  //document.getElementById('rH').value=bullet31_package_Random;
  //bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,50,80);

  //bullet31_package_sH=bullet31_packageHeight-20;
  
  switch( bullet31_package_Random)
{
  case 0:
  bullet31_packageHeight= bullet31_packageHeight-5;
  bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
  break;
  case 5:
    bullet31_packageHeight= bullet31_packageHeight-10;
    bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
    break;

  case 10:
  bullet31_packageHeight= bullet31_packageHeight-15;
  bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
  break;
  
  case 15:
    bullet31_packageHeight= bullet31_packageHeight-20;
    bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
    break;

    case 20:
      bullet31_packageHeight= bullet31_packageHeight-25;
      bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
      break;

    case 25:
      bullet31_packageHeight= bullet31_packageHeight-30;
      bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
      break;

   case 30:
      bullet31_packageHeight= bullet31_packageHeight-35;
      bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
      break;
  
      case 35:
        bullet31_packageHeight= bullet31_packageHeight-40;
        bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
        break;
   case 40:
   bullet31_packageHeight= bullet31_packageHeight-45;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;
   
   case 45:
   bullet31_packageHeight= bullet31_packageHeight-50;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;

   case 50:
   bullet31_packageHeight= bullet31_packageHeight-55;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 55:
   bullet31_packageHeight= bullet31_packageHeight-60;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;

   case 60:
   bullet31_packageHeight= bullet31_packageHeight-65;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 65:
   bullet31_packageHeight= bullet31_packageHeight-70;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 70:
   bullet31_packageHeight= bullet31_packageHeight-75;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 75:
   bullet31_packageHeight= bullet31_packageHeight-80;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 80:
   bullet31_packageHeight= bullet31_packageHeight-85;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 85:
   bullet31_packageHeight= bullet31_packageHeight-90;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 90:
   bullet31_packageHeight= bullet31_packageHeight-95;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 95:
   bullet31_packageHeight= bullet31_packageHeight-100;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 100:
   bullet31_packageHeight= bullet31_packageHeight-105;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 105:
   bullet31_packageHeight= bullet31_packageHeight-110;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 110:
   bullet31_packageHeight= bullet31_packageHeight-115;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 115:
   bullet31_packageHeight= bullet31_packageHeight-120;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 120:
   bullet31_packageHeight= bullet31_packageHeight-125;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 125:
   bullet31_packageHeight= bullet31_packageHeight-130;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 130:
   bullet31_packageHeight= bullet31_packageHeight-135;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 135:
   bullet31_packageHeight= bullet31_packageHeight-140;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 140:
   bullet31_packageHeight= bullet31_packageHeight-145;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 145:
   bullet31_packageHeight= bullet31_packageHeight-150;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 150:
   bullet31_packageHeight= bullet31_packageHeight-155;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 155:
   bullet31_packageHeight= bullet31_packageHeight-160;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 160:
   bullet31_packageHeight= bullet31_packageHeight-165;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 165:
   bullet31_packageHeight= bullet31_packageHeight-170;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 170:
   bullet31_packageHeight= bullet31_packageHeight-175;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 175:
   bullet31_packageHeight= bullet31_packageHeight-180;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 180:
   bullet31_packageHeight= bullet31_packageHeight-185;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 185:
   bullet31_packageHeight= bullet31_packageHeight-190;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 190:
   bullet31_packageHeight= bullet31_packageHeight-195;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 195:
   bullet31_packageHeight= bullet31_packageHeight-200;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 200:
   bullet31_packageHeight= bullet31_packageHeight-205;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 205:
   bullet31_packageHeight= bullet31_packageHeight-210;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 210:
   bullet31_packageHeight= bullet31_packageHeight-215;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 215:
   bullet31_packageHeight= bullet31_packageHeight-220;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 220:
   bullet31_packageHeight= bullet31_packageHeight-225;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 225:
   bullet31_packageHeight= bullet31_packageHeight-230;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 230:
   bullet31_packageHeight= bullet31_packageHeight-235;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 235:
   bullet31_packageHeight= bullet31_packageHeight-240;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 240:
   bullet31_packageHeight= bullet31_packageHeight-245;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 245:
   bullet31_packageHeight= bullet31_packageHeight-250;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 250:
   bullet31_packageHeight= bullet31_packageHeight-255;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 255:
   bullet31_packageHeight= bullet31_packageHeight-260;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 260:
   bullet31_packageHeight= bullet31_packageHeight-265;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 265:
   bullet31_packageHeight= bullet31_packageHeight-270;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 270:
   bullet31_packageHeight= bullet31_packageHeight-275;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;


   case 275:
   bullet31_packageHeight= bullet31_packageHeight-280;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;

   case 280:
   bullet31_packageHeight= bullet31_packageHeight-285;
   bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
   break;

   case 285:
    bullet31_packageHeight= bullet31_packageHeight-290;
    bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
    break;

  case 290:
  bullet31_packageHeight= bullet31_packageHeight-295;
  bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
  break;

  case 295:
    bullet31_packageHeight= bullet31_packageHeight-300;
    bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
    break;

    case 300:
      bullet31_packageHeight= bullet31_packageHeight-305;
      bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
      break;

   case 305:
     bullet31_packageHeight= bullet31_packageHeight-310;
    bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
    break;
  
    case 310:
      bullet31_packageHeight= bullet31_packageHeight-315;
     bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
     break;

     case 315:
      bullet31_packageHeight= bullet31_packageHeight-320;
     bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
     break;

     case 320:
      bullet31_packageHeight= bullet31_packageHeight-325;
     bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
     break;

     case 325:
      bullet31_packageHeight= bullet31_packageHeight-330;
     bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
     break;

     case 330:
      bullet31_packageHeight= bullet31_packageHeight-335;
     bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
     break;

     case 335:
      bullet31_packageHeight= bullet31_packageHeight-340;
     bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
     break;

     case 340:
      bullet31_packageHeight= bullet31_packageHeight-345;
     bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
     break;

     case 345:
      bullet31_packageHeight= bullet31_packageHeight-350;
     bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
     break;

     case 350:
      bullet31_packageHeight= bullet31_packageHeight-355;
     bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
     break;

     case 355:
      bullet31_packageHeight= bullet31_packageHeight-360;
     bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
     break;

     case 360:
      bullet31_packageHeight= bullet31_packageHeight-365;
     bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
     break;

     case 365:
      bullet31_packageHeight= bullet31_packageHeight-370;
     bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
     break;

     case 370:
      bullet31_packageHeight= bullet31_packageHeight-375;
     bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
     break;

     case 375:
      bullet31_packageHeight= bullet31_packageHeight-380;
     bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
     break;

     case 380:
      bullet31_packageHeight= bullet31_packageHeight-385;
     bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
     break;

     case 385:
      bullet31_packageHeight= bullet31_packageHeight-390;
     bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
     break;

     case 390:
      bullet31_packageHeight= bullet31_packageHeight-395;
     bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
     break;

     case 395:
      bullet31_packageHeight= bullet31_packageHeight-400;
     bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
     break;

     case 400:
      bullet31_packageHeight= bullet31_packageHeight-405;
     bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
     break;

     case 405:
      bullet31_packageHeight= bullet31_packageHeight-410;
     bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
     break;

     case 410:
      bullet31_packageHeight= bullet31_packageHeight-415;
     bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
     break;

     case 415:
      bullet31_packageHeight= bullet31_packageHeight-420;
     bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
     break;

     case 420:
      bullet31_packageHeight= bullet31_packageHeight-425;
     bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
     break;

     case 425:
      bullet31_packageHeight= bullet31_packageHeight-430;
     bullet31_package_context.drawImage(bullet31_package_img,bullet31_packageLt,bullet31_packageHeight,40,80);
     break;

     

}
bullet31_package_sH=bullet31_packageHeight-20;

}
