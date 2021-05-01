//=========bullet32_package===========
function bullet32_packageFun()

{
 
  bullet32_packageSrc='img/3bullet.png';

if(bullet32_packageImgCount.value=='0')
{
if(bullet32_packageLt<=139)
{
  bullet32_packageSrc='img/bulletFire.png';
  bullet32_packageImgCount.value=0;
  document.getElementById('bullet32_packageImgCount').value=0;
  //new Audio("sound/bullet32_packageExposiion.wav").play();
}

else 
{
  bullet32_packageSrc='img/3bullet.png';
}


}

else if(bullet32_packageImgCount.value=='1'){
  bullet32_packageSrc='img/bulletFire.png';
 
  if(bullet32_packageLt<=139)
{
  
  bullet32_packageImgCount.value=0;
  document.getElementById('bullet32_packageImgCount').value=0;
  
}
  
}
  
  var bullet32_package_context = canvas.getContext("2d");
  bullet32_package_img = new Image();
  
  bullet32_package_img.src=bullet32_packageSrc;
  //bullet32_packageLt=200;
  var bullet32_packageHeight =430;
  //var bullet32_packageHeight =200;

  //document.getElementById('rH').value=bullet32_package_Random;
  //bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,50,80);

  //bullet32_package_sH=bullet32_packageHeight-20;
  
  switch( bullet32_package_Random)
{
  case 0:
  bullet32_packageHeight= bullet32_packageHeight-5;
  bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
  break;
  case 5:
    bullet32_packageHeight= bullet32_packageHeight-10;
    bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
    break;

  case 10:
  bullet32_packageHeight= bullet32_packageHeight-15;
  bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
  break;
  
  case 15:
    bullet32_packageHeight= bullet32_packageHeight-20;
    bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
    break;

    case 20:
      bullet32_packageHeight= bullet32_packageHeight-25;
      bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
      break;

    case 25:
      bullet32_packageHeight= bullet32_packageHeight-30;
      bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
      break;

   case 30:
      bullet32_packageHeight= bullet32_packageHeight-35;
      bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
      break;
  
      case 35:
        bullet32_packageHeight= bullet32_packageHeight-40;
        bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
        break;
   case 40:
   bullet32_packageHeight= bullet32_packageHeight-45;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;
   
   case 45:
   bullet32_packageHeight= bullet32_packageHeight-50;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;

   case 50:
   bullet32_packageHeight= bullet32_packageHeight-55;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 55:
   bullet32_packageHeight= bullet32_packageHeight-60;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;

   case 60:
   bullet32_packageHeight= bullet32_packageHeight-65;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 65:
   bullet32_packageHeight= bullet32_packageHeight-70;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 70:
   bullet32_packageHeight= bullet32_packageHeight-75;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 75:
   bullet32_packageHeight= bullet32_packageHeight-80;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 80:
   bullet32_packageHeight= bullet32_packageHeight-85;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 85:
   bullet32_packageHeight= bullet32_packageHeight-90;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 90:
   bullet32_packageHeight= bullet32_packageHeight-95;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 95:
   bullet32_packageHeight= bullet32_packageHeight-100;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 100:
   bullet32_packageHeight= bullet32_packageHeight-105;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 105:
   bullet32_packageHeight= bullet32_packageHeight-110;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 110:
   bullet32_packageHeight= bullet32_packageHeight-115;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 115:
   bullet32_packageHeight= bullet32_packageHeight-120;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 120:
   bullet32_packageHeight= bullet32_packageHeight-125;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 125:
   bullet32_packageHeight= bullet32_packageHeight-130;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 130:
   bullet32_packageHeight= bullet32_packageHeight-135;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 135:
   bullet32_packageHeight= bullet32_packageHeight-140;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 140:
   bullet32_packageHeight= bullet32_packageHeight-145;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 145:
   bullet32_packageHeight= bullet32_packageHeight-150;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 150:
   bullet32_packageHeight= bullet32_packageHeight-155;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 155:
   bullet32_packageHeight= bullet32_packageHeight-160;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 160:
   bullet32_packageHeight= bullet32_packageHeight-165;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 165:
   bullet32_packageHeight= bullet32_packageHeight-170;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 170:
   bullet32_packageHeight= bullet32_packageHeight-175;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 175:
   bullet32_packageHeight= bullet32_packageHeight-180;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 180:
   bullet32_packageHeight= bullet32_packageHeight-185;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 185:
   bullet32_packageHeight= bullet32_packageHeight-190;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 190:
   bullet32_packageHeight= bullet32_packageHeight-195;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 195:
   bullet32_packageHeight= bullet32_packageHeight-200;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 200:
   bullet32_packageHeight= bullet32_packageHeight-205;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 205:
   bullet32_packageHeight= bullet32_packageHeight-210;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 210:
   bullet32_packageHeight= bullet32_packageHeight-215;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 215:
   bullet32_packageHeight= bullet32_packageHeight-220;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 220:
   bullet32_packageHeight= bullet32_packageHeight-225;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 225:
   bullet32_packageHeight= bullet32_packageHeight-230;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 230:
   bullet32_packageHeight= bullet32_packageHeight-235;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 235:
   bullet32_packageHeight= bullet32_packageHeight-240;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 240:
   bullet32_packageHeight= bullet32_packageHeight-245;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 245:
   bullet32_packageHeight= bullet32_packageHeight-250;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 250:
   bullet32_packageHeight= bullet32_packageHeight-255;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 255:
   bullet32_packageHeight= bullet32_packageHeight-260;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 260:
   bullet32_packageHeight= bullet32_packageHeight-265;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 265:
   bullet32_packageHeight= bullet32_packageHeight-270;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 270:
   bullet32_packageHeight= bullet32_packageHeight-275;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;


   case 275:
   bullet32_packageHeight= bullet32_packageHeight-280;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;

   case 280:
   bullet32_packageHeight= bullet32_packageHeight-285;
   bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
   break;

   case 285:
    bullet32_packageHeight= bullet32_packageHeight-290;
    bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
    break;

  case 290:
  bullet32_packageHeight= bullet32_packageHeight-295;
  bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
  break;

  case 295:
    bullet32_packageHeight= bullet32_packageHeight-300;
    bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
    break;

    case 300:
      bullet32_packageHeight= bullet32_packageHeight-305;
      bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
      break;

   case 305:
     bullet32_packageHeight= bullet32_packageHeight-310;
    bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
    break;
  
    case 310:
      bullet32_packageHeight= bullet32_packageHeight-315;
     bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
     break;

     case 315:
      bullet32_packageHeight= bullet32_packageHeight-320;
     bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
     break;

     case 320:
      bullet32_packageHeight= bullet32_packageHeight-325;
     bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
     break;

     case 325:
      bullet32_packageHeight= bullet32_packageHeight-330;
     bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
     break;

     case 330:
      bullet32_packageHeight= bullet32_packageHeight-335;
     bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
     break;

     case 335:
      bullet32_packageHeight= bullet32_packageHeight-340;
     bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
     break;

     case 340:
      bullet32_packageHeight= bullet32_packageHeight-345;
     bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
     break;

     case 345:
      bullet32_packageHeight= bullet32_packageHeight-350;
     bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
     break;

     case 350:
      bullet32_packageHeight= bullet32_packageHeight-355;
     bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
     break;

     case 355:
      bullet32_packageHeight= bullet32_packageHeight-360;
     bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
     break;

     case 360:
      bullet32_packageHeight= bullet32_packageHeight-365;
     bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
     break;

     case 365:
      bullet32_packageHeight= bullet32_packageHeight-370;
     bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
     break;

     case 370:
      bullet32_packageHeight= bullet32_packageHeight-375;
     bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
     break;

     case 375:
      bullet32_packageHeight= bullet32_packageHeight-380;
     bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
     break;

     case 380:
      bullet32_packageHeight= bullet32_packageHeight-385;
     bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
     break;

     case 385:
      bullet32_packageHeight= bullet32_packageHeight-390;
     bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
     break;

     case 390:
      bullet32_packageHeight= bullet32_packageHeight-395;
     bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
     break;

     case 395:
      bullet32_packageHeight= bullet32_packageHeight-400;
     bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
     break;

     case 400:
      bullet32_packageHeight= bullet32_packageHeight-405;
     bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
     break;

     case 405:
      bullet32_packageHeight= bullet32_packageHeight-410;
     bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
     break;

     case 410:
      bullet32_packageHeight= bullet32_packageHeight-415;
     bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
     break;

     case 415:
      bullet32_packageHeight= bullet32_packageHeight-420;
     bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
     break;

     case 420:
      bullet32_packageHeight= bullet32_packageHeight-425;
     bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
     break;

     case 425:
      bullet32_packageHeight= bullet32_packageHeight-430;
     bullet32_package_context.drawImage(bullet32_package_img,bullet32_packageLt,bullet32_packageHeight,40,80);
     break;

     

}
bullet32_package_sH=bullet32_packageHeight-20;

}
