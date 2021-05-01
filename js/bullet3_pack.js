//=========bullet3_package===========
function bullet3_packageFun()

{
 
  bullet3_packageSrc='img/3bullet.png';

if(bullet3_packageImgCount.value=='0')
{
if(bullet3_packageLt<=139)
{
  bullet3_packageSrc='img/bulletFire.png';
  bullet3_packageImgCount.value=0;
  document.getElementById('bullet3_packageImgCount').value=0;
  //new Audio("sound/bullet3_packageExposiion.wav").play();
}

else 
{
  bullet3_packageSrc='img/3bullet.png';
}


}

else if(bullet3_packageImgCount.value=='1'){
  bullet3_packageSrc='img/bulletFire.png';
 
  if(bullet3_packageLt<=139)
{
  
  bullet3_packageImgCount.value=0;
  document.getElementById('bullet3_packageImgCount').value=0;
  
}
  
}
  
  var bullet3_package_context = canvas.getContext("2d");
  bullet3_package_img = new Image();
  
  bullet3_package_img.src=bullet3_packageSrc;
  //bullet3_packageLt=200;
  var bullet3_packageHeight =430;
  //var bullet3_packageHeight =200;

  //document.getElementById('rH').value=bullet3_package_Random;
  //bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,50,80);

  //bullet3_package_sH=bullet3_packageHeight-20;
  
  switch( bullet3_package_Random)
{
  case 0:
  bullet3_packageHeight= bullet3_packageHeight-5;
  bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
  break;
  case 5:
    bullet3_packageHeight= bullet3_packageHeight-10;
    bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
    break;

  case 10:
  bullet3_packageHeight= bullet3_packageHeight-15;
  bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
  break;
  
  case 15:
    bullet3_packageHeight= bullet3_packageHeight-20;
    bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
    break;

    case 20:
      bullet3_packageHeight= bullet3_packageHeight-25;
      bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
      break;

    case 25:
      bullet3_packageHeight= bullet3_packageHeight-30;
      bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
      break;

   case 30:
      bullet3_packageHeight= bullet3_packageHeight-35;
      bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
      break;
  
      case 35:
        bullet3_packageHeight= bullet3_packageHeight-40;
        bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
        break;
   case 40:
   bullet3_packageHeight= bullet3_packageHeight-45;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;
   
   case 45:
   bullet3_packageHeight= bullet3_packageHeight-50;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;

   case 50:
   bullet3_packageHeight= bullet3_packageHeight-55;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 55:
   bullet3_packageHeight= bullet3_packageHeight-60;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;

   case 60:
   bullet3_packageHeight= bullet3_packageHeight-65;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 65:
   bullet3_packageHeight= bullet3_packageHeight-70;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 70:
   bullet3_packageHeight= bullet3_packageHeight-75;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 75:
   bullet3_packageHeight= bullet3_packageHeight-80;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 80:
   bullet3_packageHeight= bullet3_packageHeight-85;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 85:
   bullet3_packageHeight= bullet3_packageHeight-90;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 90:
   bullet3_packageHeight= bullet3_packageHeight-95;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 95:
   bullet3_packageHeight= bullet3_packageHeight-100;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 100:
   bullet3_packageHeight= bullet3_packageHeight-105;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 105:
   bullet3_packageHeight= bullet3_packageHeight-110;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 110:
   bullet3_packageHeight= bullet3_packageHeight-115;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 115:
   bullet3_packageHeight= bullet3_packageHeight-120;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 120:
   bullet3_packageHeight= bullet3_packageHeight-125;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 125:
   bullet3_packageHeight= bullet3_packageHeight-130;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 130:
   bullet3_packageHeight= bullet3_packageHeight-135;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 135:
   bullet3_packageHeight= bullet3_packageHeight-140;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 140:
   bullet3_packageHeight= bullet3_packageHeight-145;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 145:
   bullet3_packageHeight= bullet3_packageHeight-150;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 150:
   bullet3_packageHeight= bullet3_packageHeight-155;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 155:
   bullet3_packageHeight= bullet3_packageHeight-160;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 160:
   bullet3_packageHeight= bullet3_packageHeight-165;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 165:
   bullet3_packageHeight= bullet3_packageHeight-170;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 170:
   bullet3_packageHeight= bullet3_packageHeight-175;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 175:
   bullet3_packageHeight= bullet3_packageHeight-180;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 180:
   bullet3_packageHeight= bullet3_packageHeight-185;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 185:
   bullet3_packageHeight= bullet3_packageHeight-190;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 190:
   bullet3_packageHeight= bullet3_packageHeight-195;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 195:
   bullet3_packageHeight= bullet3_packageHeight-200;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 200:
   bullet3_packageHeight= bullet3_packageHeight-205;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 205:
   bullet3_packageHeight= bullet3_packageHeight-210;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 210:
   bullet3_packageHeight= bullet3_packageHeight-215;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 215:
   bullet3_packageHeight= bullet3_packageHeight-220;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 220:
   bullet3_packageHeight= bullet3_packageHeight-225;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 225:
   bullet3_packageHeight= bullet3_packageHeight-230;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 230:
   bullet3_packageHeight= bullet3_packageHeight-235;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 235:
   bullet3_packageHeight= bullet3_packageHeight-240;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 240:
   bullet3_packageHeight= bullet3_packageHeight-245;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 245:
   bullet3_packageHeight= bullet3_packageHeight-250;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 250:
   bullet3_packageHeight= bullet3_packageHeight-255;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 255:
   bullet3_packageHeight= bullet3_packageHeight-260;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 260:
   bullet3_packageHeight= bullet3_packageHeight-265;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 265:
   bullet3_packageHeight= bullet3_packageHeight-270;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 270:
   bullet3_packageHeight= bullet3_packageHeight-275;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;


   case 275:
   bullet3_packageHeight= bullet3_packageHeight-280;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;

   case 280:
   bullet3_packageHeight= bullet3_packageHeight-285;
   bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
   break;

   case 285:
    bullet3_packageHeight= bullet3_packageHeight-290;
    bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
    break;

  case 290:
  bullet3_packageHeight= bullet3_packageHeight-295;
  bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
  break;

  case 295:
    bullet3_packageHeight= bullet3_packageHeight-300;
    bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
    break;

    case 300:
      bullet3_packageHeight= bullet3_packageHeight-305;
      bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
      break;

   case 305:
     bullet3_packageHeight= bullet3_packageHeight-310;
    bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
    break;
  
    case 310:
      bullet3_packageHeight= bullet3_packageHeight-315;
     bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
     break;

     case 315:
      bullet3_packageHeight= bullet3_packageHeight-320;
     bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
     break;

     case 320:
      bullet3_packageHeight= bullet3_packageHeight-325;
     bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
     break;

     case 325:
      bullet3_packageHeight= bullet3_packageHeight-330;
     bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
     break;

     case 330:
      bullet3_packageHeight= bullet3_packageHeight-335;
     bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
     break;

     case 335:
      bullet3_packageHeight= bullet3_packageHeight-340;
     bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
     break;

     case 340:
      bullet3_packageHeight= bullet3_packageHeight-345;
     bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
     break;

     case 345:
      bullet3_packageHeight= bullet3_packageHeight-350;
     bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
     break;

     case 350:
      bullet3_packageHeight= bullet3_packageHeight-355;
     bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
     break;

     case 355:
      bullet3_packageHeight= bullet3_packageHeight-360;
     bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
     break;

     case 360:
      bullet3_packageHeight= bullet3_packageHeight-365;
     bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
     break;

     case 365:
      bullet3_packageHeight= bullet3_packageHeight-370;
     bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
     break;

     case 370:
      bullet3_packageHeight= bullet3_packageHeight-375;
     bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
     break;

     case 375:
      bullet3_packageHeight= bullet3_packageHeight-380;
     bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
     break;

     case 380:
      bullet3_packageHeight= bullet3_packageHeight-385;
     bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
     break;

     case 385:
      bullet3_packageHeight= bullet3_packageHeight-390;
     bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
     break;

     case 390:
      bullet3_packageHeight= bullet3_packageHeight-395;
     bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
     break;

     case 395:
      bullet3_packageHeight= bullet3_packageHeight-400;
     bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
     break;

     case 400:
      bullet3_packageHeight= bullet3_packageHeight-405;
     bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
     break;

     case 405:
      bullet3_packageHeight= bullet3_packageHeight-410;
     bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
     break;

     case 410:
      bullet3_packageHeight= bullet3_packageHeight-415;
     bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
     break;

     case 415:
      bullet3_packageHeight= bullet3_packageHeight-420;
     bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
     break;

     case 420:
      bullet3_packageHeight= bullet3_packageHeight-425;
     bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
     break;

     case 425:
      bullet3_packageHeight= bullet3_packageHeight-430;
     bullet3_package_context.drawImage(bullet3_package_img,bullet3_packageLt,bullet3_packageHeight,40,80);
     break;

     

}
bullet3_package_sH=bullet3_packageHeight-20;

}
