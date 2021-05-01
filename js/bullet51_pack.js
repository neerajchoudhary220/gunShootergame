//=========bullet51_package===========
function bullet51_packageFun()


{
 
  bullet51_packageSrc='img/5bullet.png';

if(bullet51_packageImgCount.value=='0')
{
if(bullet51_packageLt<=139)
{
  bullet51_packageSrc='img/bulletFire.png';
  bullet51_packageImgCount.value=0;
  document.getElementById('bullet51_packageImgCount').value=0;
  //new Audio("sound/bullet51_packageExposiion.wav").play();
}

else 
{
  bullet51_packageSrc='img/5bullet.png';
}


}

else if(bullet51_packageImgCount.value=='1'){
  bullet51_packageSrc='img/bulletFire.png';
 
  if(bullet51_packageLt<=139)
{
  
  bullet51_packageImgCount.value=0;
  document.getElementById('bullet51_packageImgCount').value=0;
  
}
  
}
  
  var bullet51_package_context = canvas.getContext("2d");
  bullet51_package_img = new Image();
  
  bullet51_package_img.src=bullet51_packageSrc;
  //bullet51_packageLt=200;
  var bullet51_packageHeight =430;
  //var bullet51_packageHeight =200;

  //document.getElementById('rH').value=bullet51_package_Random;
  //bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,50,80);

  //bullet51_package_sH=bullet51_packageHeight-20;
  
  switch( bullet51_package_Random)
{
  case 0:
  bullet51_packageHeight= bullet51_packageHeight-5;
  bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
  break;
  case 5:
    bullet51_packageHeight= bullet51_packageHeight-10;
    bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
    break;

  case 10:
  bullet51_packageHeight= bullet51_packageHeight-15;
  bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
  break;
  
  case 15:
    bullet51_packageHeight= bullet51_packageHeight-20;
    bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
    break;

    case 20:
      bullet51_packageHeight= bullet51_packageHeight-25;
      bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
      break;

    case 25:
      bullet51_packageHeight= bullet51_packageHeight-30;
      bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
      break;

   case 30:
      bullet51_packageHeight= bullet51_packageHeight-35;
      bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
      break;
  
      case 35:
        bullet51_packageHeight= bullet51_packageHeight-40;
        bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
        break;
   case 40:
   bullet51_packageHeight= bullet51_packageHeight-45;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;
   
   case 45:
   bullet51_packageHeight= bullet51_packageHeight-50;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;

   case 50:
   bullet51_packageHeight= bullet51_packageHeight-55;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 55:
   bullet51_packageHeight= bullet51_packageHeight-60;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;

   case 60:
   bullet51_packageHeight= bullet51_packageHeight-65;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 65:
   bullet51_packageHeight= bullet51_packageHeight-70;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 70:
   bullet51_packageHeight= bullet51_packageHeight-75;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 75:
   bullet51_packageHeight= bullet51_packageHeight-80;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 80:
   bullet51_packageHeight= bullet51_packageHeight-85;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 85:
   bullet51_packageHeight= bullet51_packageHeight-90;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 90:
   bullet51_packageHeight= bullet51_packageHeight-95;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 95:
   bullet51_packageHeight= bullet51_packageHeight-100;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 100:
   bullet51_packageHeight= bullet51_packageHeight-105;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 105:
   bullet51_packageHeight= bullet51_packageHeight-110;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 110:
   bullet51_packageHeight= bullet51_packageHeight-115;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 115:
   bullet51_packageHeight= bullet51_packageHeight-120;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 120:
   bullet51_packageHeight= bullet51_packageHeight-125;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 125:
   bullet51_packageHeight= bullet51_packageHeight-130;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 130:
   bullet51_packageHeight= bullet51_packageHeight-135;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 135:
   bullet51_packageHeight= bullet51_packageHeight-140;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 140:
   bullet51_packageHeight= bullet51_packageHeight-145;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 145:
   bullet51_packageHeight= bullet51_packageHeight-150;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 150:
   bullet51_packageHeight= bullet51_packageHeight-155;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 155:
   bullet51_packageHeight= bullet51_packageHeight-160;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 160:
   bullet51_packageHeight= bullet51_packageHeight-165;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 165:
   bullet51_packageHeight= bullet51_packageHeight-170;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 170:
   bullet51_packageHeight= bullet51_packageHeight-175;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 175:
   bullet51_packageHeight= bullet51_packageHeight-180;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 180:
   bullet51_packageHeight= bullet51_packageHeight-185;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 185:
   bullet51_packageHeight= bullet51_packageHeight-190;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 190:
   bullet51_packageHeight= bullet51_packageHeight-195;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 195:
   bullet51_packageHeight= bullet51_packageHeight-200;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 200:
   bullet51_packageHeight= bullet51_packageHeight-205;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 205:
   bullet51_packageHeight= bullet51_packageHeight-210;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 210:
   bullet51_packageHeight= bullet51_packageHeight-215;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 215:
   bullet51_packageHeight= bullet51_packageHeight-220;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 220:
   bullet51_packageHeight= bullet51_packageHeight-225;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 225:
   bullet51_packageHeight= bullet51_packageHeight-230;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 230:
   bullet51_packageHeight= bullet51_packageHeight-235;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 235:
   bullet51_packageHeight= bullet51_packageHeight-240;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 240:
   bullet51_packageHeight= bullet51_packageHeight-245;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 245:
   bullet51_packageHeight= bullet51_packageHeight-250;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 250:
   bullet51_packageHeight= bullet51_packageHeight-255;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 255:
   bullet51_packageHeight= bullet51_packageHeight-260;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 260:
   bullet51_packageHeight= bullet51_packageHeight-265;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 265:
   bullet51_packageHeight= bullet51_packageHeight-270;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 270:
   bullet51_packageHeight= bullet51_packageHeight-275;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;


   case 275:
   bullet51_packageHeight= bullet51_packageHeight-280;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;

   case 280:
   bullet51_packageHeight= bullet51_packageHeight-285;
   bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
   break;

   case 285:
    bullet51_packageHeight= bullet51_packageHeight-290;
    bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
    break;

  case 290:
  bullet51_packageHeight= bullet51_packageHeight-295;
  bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
  break;

  case 295:
    bullet51_packageHeight= bullet51_packageHeight-300;
    bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
    break;

    case 300:
      bullet51_packageHeight= bullet51_packageHeight-305;
      bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
      break;

   case 305:
     bullet51_packageHeight= bullet51_packageHeight-310;
    bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
    break;
  
    case 310:
      bullet51_packageHeight= bullet51_packageHeight-315;
     bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
     break;

     case 315:
      bullet51_packageHeight= bullet51_packageHeight-320;
     bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
     break;

     case 320:
      bullet51_packageHeight= bullet51_packageHeight-325;
     bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
     break;

     case 325:
      bullet51_packageHeight= bullet51_packageHeight-330;
     bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
     break;

     case 330:
      bullet51_packageHeight= bullet51_packageHeight-335;
     bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
     break;

     case 335:
      bullet51_packageHeight= bullet51_packageHeight-340;
     bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
     break;

     case 340:
      bullet51_packageHeight= bullet51_packageHeight-345;
     bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
     break;

     case 345:
      bullet51_packageHeight= bullet51_packageHeight-350;
     bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
     break;

     case 350:
      bullet51_packageHeight= bullet51_packageHeight-355;
     bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
     break;

     case 355:
      bullet51_packageHeight= bullet51_packageHeight-360;
     bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
     break;

     case 360:
      bullet51_packageHeight= bullet51_packageHeight-365;
     bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
     break;

     case 365:
      bullet51_packageHeight= bullet51_packageHeight-370;
     bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
     break;

     case 370:
      bullet51_packageHeight= bullet51_packageHeight-375;
     bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
     break;

     case 375:
      bullet51_packageHeight= bullet51_packageHeight-380;
     bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
     break;

     case 380:
      bullet51_packageHeight= bullet51_packageHeight-385;
     bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
     break;

     case 385:
      bullet51_packageHeight= bullet51_packageHeight-390;
     bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
     break;

     case 390:
      bullet51_packageHeight= bullet51_packageHeight-395;
     bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
     break;

     case 395:
      bullet51_packageHeight= bullet51_packageHeight-400;
     bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
     break;

     case 400:
      bullet51_packageHeight= bullet51_packageHeight-405;
     bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
     break;

     case 405:
      bullet51_packageHeight= bullet51_packageHeight-410;
     bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
     break;

     case 410:
      bullet51_packageHeight= bullet51_packageHeight-415;
     bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
     break;

     case 415:
      bullet51_packageHeight= bullet51_packageHeight-420;
     bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
     break;

     case 420:
      bullet51_packageHeight= bullet51_packageHeight-425;
     bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
     break;

     case 425:
      bullet51_packageHeight= bullet51_packageHeight-430;
     bullet51_package_context.drawImage(bullet51_package_img,bullet51_packageLt,bullet51_packageHeight,40,80);
     break;

     

}
bullet51_package_sH=bullet51_packageHeight-20;


}
