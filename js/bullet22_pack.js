//=========bullet22_package===========
function bullet22_packageFun()
{
 
  bullet22_packageSrc='img/2bullet.png';

if(bullet22_packageImgCount.value=='0')
{
if(bullet22_packageLt<=139)
{
  bullet22_packageSrc='img/bulletFire.png';
  bullet22_packageImgCount.value=0;
  document.getElementById('bullet22_packageImgCount').value=0;
  //new Audio("sound/bullet22_packageExposiion.wav").play();
}

else 
{
  bullet22_packageSrc='img/2bullet.png';
}


}

else if(bullet22_packageImgCount.value=='1'){
  bullet22_packageSrc='img/bulletFire.png';
 
  if(bullet22_packageLt<=139)
{
  
  bullet22_packageImgCount.value=0;
  document.getElementById('bullet22_packageImgCount').value=0;
  
}
  
}
  
  var bullet22_package_context = canvas.getContext("2d");
  bullet22_package_img = new Image();
  
  bullet22_package_img.src=bullet22_packageSrc;
  //bullet22_packageLt=200;
  var bullet22_packageHeight =430;

  //document.getElementById('rH').value=bullet22_package_Random;
  //bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,50,80);

  //bullet22_package_sH=bullet22_packageHeight-20;
  
  switch( bullet22_package_Random)
{
  case 0:
  bullet22_packageHeight= bullet22_packageHeight-5;
  bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
  break;
  case 5:
    bullet22_packageHeight= bullet22_packageHeight-10;
    bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
    break;

  case 10:
  bullet22_packageHeight= bullet22_packageHeight-15;
  bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
  break;
  
  case 15:
    bullet22_packageHeight= bullet22_packageHeight-20;
    bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
    break;

    case 20:
      bullet22_packageHeight= bullet22_packageHeight-25;
      bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
      break;

    case 25:
      bullet22_packageHeight= bullet22_packageHeight-30;
      bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
      break;

   case 30:
      bullet22_packageHeight= bullet22_packageHeight-35;
      bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
      break;
  
      case 35:
        bullet22_packageHeight= bullet22_packageHeight-40;
        bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
        break;
   case 40:
   bullet22_packageHeight= bullet22_packageHeight-45;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;
   
   case 45:
   bullet22_packageHeight= bullet22_packageHeight-50;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;

   case 50:
   bullet22_packageHeight= bullet22_packageHeight-55;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 55:
   bullet22_packageHeight= bullet22_packageHeight-60;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;

   case 60:
   bullet22_packageHeight= bullet22_packageHeight-65;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 65:
   bullet22_packageHeight= bullet22_packageHeight-70;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 70:
   bullet22_packageHeight= bullet22_packageHeight-75;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 75:
   bullet22_packageHeight= bullet22_packageHeight-80;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 80:
   bullet22_packageHeight= bullet22_packageHeight-85;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 85:
   bullet22_packageHeight= bullet22_packageHeight-90;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 90:
   bullet22_packageHeight= bullet22_packageHeight-95;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 95:
   bullet22_packageHeight= bullet22_packageHeight-100;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 100:
   bullet22_packageHeight= bullet22_packageHeight-105;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 105:
   bullet22_packageHeight= bullet22_packageHeight-110;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 110:
   bullet22_packageHeight= bullet22_packageHeight-115;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 115:
   bullet22_packageHeight= bullet22_packageHeight-120;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 120:
   bullet22_packageHeight= bullet22_packageHeight-125;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 125:
   bullet22_packageHeight= bullet22_packageHeight-130;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 130:
   bullet22_packageHeight= bullet22_packageHeight-135;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 135:
   bullet22_packageHeight= bullet22_packageHeight-140;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 140:
   bullet22_packageHeight= bullet22_packageHeight-145;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 145:
   bullet22_packageHeight= bullet22_packageHeight-150;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 150:
   bullet22_packageHeight= bullet22_packageHeight-155;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 155:
   bullet22_packageHeight= bullet22_packageHeight-160;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 160:
   bullet22_packageHeight= bullet22_packageHeight-165;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 165:
   bullet22_packageHeight= bullet22_packageHeight-170;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 170:
   bullet22_packageHeight= bullet22_packageHeight-175;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 175:
   bullet22_packageHeight= bullet22_packageHeight-180;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 180:
   bullet22_packageHeight= bullet22_packageHeight-185;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 185:
   bullet22_packageHeight= bullet22_packageHeight-190;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 190:
   bullet22_packageHeight= bullet22_packageHeight-195;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 195:
   bullet22_packageHeight= bullet22_packageHeight-200;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 200:
   bullet22_packageHeight= bullet22_packageHeight-205;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 205:
   bullet22_packageHeight= bullet22_packageHeight-210;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 210:
   bullet22_packageHeight= bullet22_packageHeight-215;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 215:
   bullet22_packageHeight= bullet22_packageHeight-220;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 220:
   bullet22_packageHeight= bullet22_packageHeight-225;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 225:
   bullet22_packageHeight= bullet22_packageHeight-230;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 230:
   bullet22_packageHeight= bullet22_packageHeight-235;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 235:
   bullet22_packageHeight= bullet22_packageHeight-240;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 240:
   bullet22_packageHeight= bullet22_packageHeight-245;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 245:
   bullet22_packageHeight= bullet22_packageHeight-250;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 250:
   bullet22_packageHeight= bullet22_packageHeight-255;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 255:
   bullet22_packageHeight= bullet22_packageHeight-260;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 260:
   bullet22_packageHeight= bullet22_packageHeight-265;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 265:
   bullet22_packageHeight= bullet22_packageHeight-270;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 270:
   bullet22_packageHeight= bullet22_packageHeight-275;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;


   case 275:
   bullet22_packageHeight= bullet22_packageHeight-280;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;

   case 280:
   bullet22_packageHeight= bullet22_packageHeight-285;
   bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
   break;

   case 285:
    bullet22_packageHeight= bullet22_packageHeight-290;
    bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
    break;

  case 290:
  bullet22_packageHeight= bullet22_packageHeight-295;
  bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
  break;

  case 295:
    bullet22_packageHeight= bullet22_packageHeight-300;
    bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
    break;

    case 300:
      bullet22_packageHeight= bullet22_packageHeight-305;
      bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
      break;

   case 305:
     bullet22_packageHeight= bullet22_packageHeight-310;
    bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
    break;
  
    case 310:
      bullet22_packageHeight= bullet22_packageHeight-315;
     bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
     break;

     case 315:
      bullet22_packageHeight= bullet22_packageHeight-320;
     bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
     break;

     case 320:
      bullet22_packageHeight= bullet22_packageHeight-325;
     bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
     break;

     case 325:
      bullet22_packageHeight= bullet22_packageHeight-330;
     bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
     break;

     case 330:
      bullet22_packageHeight= bullet22_packageHeight-335;
     bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
     break;

     case 335:
      bullet22_packageHeight= bullet22_packageHeight-340;
     bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
     break;

     case 340:
      bullet22_packageHeight= bullet22_packageHeight-345;
     bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
     break;

     case 345:
      bullet22_packageHeight= bullet22_packageHeight-350;
     bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
     break;

     case 350:
      bullet22_packageHeight= bullet22_packageHeight-355;
     bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
     break;

     case 355:
      bullet22_packageHeight= bullet22_packageHeight-360;
     bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
     break;

     case 360:
      bullet22_packageHeight= bullet22_packageHeight-365;
     bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
     break;

     case 365:
      bullet22_packageHeight= bullet22_packageHeight-370;
     bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
     break;

     case 370:
      bullet22_packageHeight= bullet22_packageHeight-375;
     bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
     break;

     case 375:
      bullet22_packageHeight= bullet22_packageHeight-380;
     bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
     break;

     case 380:
      bullet22_packageHeight= bullet22_packageHeight-385;
     bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
     break;

     case 385:
      bullet22_packageHeight= bullet22_packageHeight-390;
     bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
     break;

     case 390:
      bullet22_packageHeight= bullet22_packageHeight-395;
     bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
     break;

     case 395:
      bullet22_packageHeight= bullet22_packageHeight-400;
     bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
     break;

     case 400:
      bullet22_packageHeight= bullet22_packageHeight-405;
     bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
     break;

     case 405:
      bullet22_packageHeight= bullet22_packageHeight-410;
     bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
     break;

     case 410:
      bullet22_packageHeight= bullet22_packageHeight-415;
     bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
     break;

     case 415:
      bullet22_packageHeight= bullet22_packageHeight-420;
     bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
     break;

     case 420:
      bullet22_packageHeight= bullet22_packageHeight-425;
     bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
     break;

     case 425:
      bullet22_packageHeight= bullet22_packageHeight-430;
     bullet22_package_context.drawImage(bullet22_package_img,bullet22_packageLt,bullet22_packageHeight,40,80);
     break;

     

}
bullet22_package_sH=bullet22_packageHeight-20;

}
