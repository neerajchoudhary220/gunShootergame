//=========bullet5_package===========
function bullet5_packageFun()

{
 
  bullet5_packageSrc='img/5bullet.png';

if(bullet5_packageImgCount.value=='0')
{
if(bullet5_packageLt<=139)
{
  bullet5_packageSrc='img/bulletFire.png';
  bullet5_packageImgCount.value=0;
  document.getElementById('bullet5_packageImgCount').value=0;
  //new Audio("sound/bullet5_packageExposiion.wav").play();
}

else 
{
  bullet5_packageSrc='img/5bullet.png';
}


}

else if(bullet5_packageImgCount.value=='1'){
  bullet5_packageSrc='img/bulletFire.png';
 
  if(bullet5_packageLt<=139)
{
  
  bullet5_packageImgCount.value=0;
  document.getElementById('bullet5_packageImgCount').value=0;
  
}
  
}
  
  var bullet5_package_context = canvas.getContext("2d");
  bullet5_package_img = new Image();
  
  bullet5_package_img.src=bullet5_packageSrc;
  //bullet5_packageLt=200;
  var bullet5_packageHeight =430;
  //var bullet5_packageHeight =200;

  //document.getElementById('rH').value=bullet5_package_Random;
  //bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,50,80);

  //bullet5_package_sH=bullet5_packageHeight-20;
  
  switch( bullet5_package_Random)
{
  case 0:
  bullet5_packageHeight= bullet5_packageHeight-5;
  bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
  break;
  case 5:
    bullet5_packageHeight= bullet5_packageHeight-10;
    bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
    break;

  case 10:
  bullet5_packageHeight= bullet5_packageHeight-15;
  bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
  break;
  
  case 15:
    bullet5_packageHeight= bullet5_packageHeight-20;
    bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
    break;

    case 20:
      bullet5_packageHeight= bullet5_packageHeight-25;
      bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
      break;

    case 25:
      bullet5_packageHeight= bullet5_packageHeight-30;
      bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
      break;

   case 30:
      bullet5_packageHeight= bullet5_packageHeight-35;
      bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
      break;
  
      case 35:
        bullet5_packageHeight= bullet5_packageHeight-40;
        bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
        break;
   case 40:
   bullet5_packageHeight= bullet5_packageHeight-45;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;
   
   case 45:
   bullet5_packageHeight= bullet5_packageHeight-50;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;

   case 50:
   bullet5_packageHeight= bullet5_packageHeight-55;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 55:
   bullet5_packageHeight= bullet5_packageHeight-60;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;

   case 60:
   bullet5_packageHeight= bullet5_packageHeight-65;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 65:
   bullet5_packageHeight= bullet5_packageHeight-70;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 70:
   bullet5_packageHeight= bullet5_packageHeight-75;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 75:
   bullet5_packageHeight= bullet5_packageHeight-80;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 80:
   bullet5_packageHeight= bullet5_packageHeight-85;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 85:
   bullet5_packageHeight= bullet5_packageHeight-90;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 90:
   bullet5_packageHeight= bullet5_packageHeight-95;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 95:
   bullet5_packageHeight= bullet5_packageHeight-100;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 100:
   bullet5_packageHeight= bullet5_packageHeight-105;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 105:
   bullet5_packageHeight= bullet5_packageHeight-110;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 110:
   bullet5_packageHeight= bullet5_packageHeight-115;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 115:
   bullet5_packageHeight= bullet5_packageHeight-120;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 120:
   bullet5_packageHeight= bullet5_packageHeight-125;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 125:
   bullet5_packageHeight= bullet5_packageHeight-130;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 130:
   bullet5_packageHeight= bullet5_packageHeight-135;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 135:
   bullet5_packageHeight= bullet5_packageHeight-140;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 140:
   bullet5_packageHeight= bullet5_packageHeight-145;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 145:
   bullet5_packageHeight= bullet5_packageHeight-150;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 150:
   bullet5_packageHeight= bullet5_packageHeight-155;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 155:
   bullet5_packageHeight= bullet5_packageHeight-160;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 160:
   bullet5_packageHeight= bullet5_packageHeight-165;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 165:
   bullet5_packageHeight= bullet5_packageHeight-170;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 170:
   bullet5_packageHeight= bullet5_packageHeight-175;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 175:
   bullet5_packageHeight= bullet5_packageHeight-180;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 180:
   bullet5_packageHeight= bullet5_packageHeight-185;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 185:
   bullet5_packageHeight= bullet5_packageHeight-190;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 190:
   bullet5_packageHeight= bullet5_packageHeight-195;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 195:
   bullet5_packageHeight= bullet5_packageHeight-200;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 200:
   bullet5_packageHeight= bullet5_packageHeight-205;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 205:
   bullet5_packageHeight= bullet5_packageHeight-210;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 210:
   bullet5_packageHeight= bullet5_packageHeight-215;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 215:
   bullet5_packageHeight= bullet5_packageHeight-220;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 220:
   bullet5_packageHeight= bullet5_packageHeight-225;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 225:
   bullet5_packageHeight= bullet5_packageHeight-230;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 230:
   bullet5_packageHeight= bullet5_packageHeight-235;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 235:
   bullet5_packageHeight= bullet5_packageHeight-240;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 240:
   bullet5_packageHeight= bullet5_packageHeight-245;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 245:
   bullet5_packageHeight= bullet5_packageHeight-250;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 250:
   bullet5_packageHeight= bullet5_packageHeight-255;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 255:
   bullet5_packageHeight= bullet5_packageHeight-260;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 260:
   bullet5_packageHeight= bullet5_packageHeight-265;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 265:
   bullet5_packageHeight= bullet5_packageHeight-270;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 270:
   bullet5_packageHeight= bullet5_packageHeight-275;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;


   case 275:
   bullet5_packageHeight= bullet5_packageHeight-280;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;

   case 280:
   bullet5_packageHeight= bullet5_packageHeight-285;
   bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
   break;

   case 285:
    bullet5_packageHeight= bullet5_packageHeight-290;
    bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
    break;

  case 290:
  bullet5_packageHeight= bullet5_packageHeight-295;
  bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
  break;

  case 295:
    bullet5_packageHeight= bullet5_packageHeight-300;
    bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
    break;

    case 300:
      bullet5_packageHeight= bullet5_packageHeight-305;
      bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
      break;

   case 305:
     bullet5_packageHeight= bullet5_packageHeight-310;
    bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
    break;
  
    case 310:
      bullet5_packageHeight= bullet5_packageHeight-315;
     bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
     break;

     case 315:
      bullet5_packageHeight= bullet5_packageHeight-320;
     bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
     break;

     case 320:
      bullet5_packageHeight= bullet5_packageHeight-325;
     bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
     break;

     case 325:
      bullet5_packageHeight= bullet5_packageHeight-330;
     bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
     break;

     case 330:
      bullet5_packageHeight= bullet5_packageHeight-335;
     bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
     break;

     case 335:
      bullet5_packageHeight= bullet5_packageHeight-340;
     bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
     break;

     case 340:
      bullet5_packageHeight= bullet5_packageHeight-345;
     bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
     break;

     case 345:
      bullet5_packageHeight= bullet5_packageHeight-350;
     bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
     break;

     case 350:
      bullet5_packageHeight= bullet5_packageHeight-355;
     bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
     break;

     case 355:
      bullet5_packageHeight= bullet5_packageHeight-360;
     bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
     break;

     case 360:
      bullet5_packageHeight= bullet5_packageHeight-365;
     bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
     break;

     case 365:
      bullet5_packageHeight= bullet5_packageHeight-370;
     bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
     break;

     case 370:
      bullet5_packageHeight= bullet5_packageHeight-375;
     bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
     break;

     case 375:
      bullet5_packageHeight= bullet5_packageHeight-380;
     bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
     break;

     case 380:
      bullet5_packageHeight= bullet5_packageHeight-385;
     bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
     break;

     case 385:
      bullet5_packageHeight= bullet5_packageHeight-390;
     bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
     break;

     case 390:
      bullet5_packageHeight= bullet5_packageHeight-395;
     bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
     break;

     case 395:
      bullet5_packageHeight= bullet5_packageHeight-400;
     bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
     break;

     case 400:
      bullet5_packageHeight= bullet5_packageHeight-405;
     bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
     break;

     case 405:
      bullet5_packageHeight= bullet5_packageHeight-410;
     bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
     break;

     case 410:
      bullet5_packageHeight= bullet5_packageHeight-415;
     bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
     break;

     case 415:
      bullet5_packageHeight= bullet5_packageHeight-420;
     bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
     break;

     case 420:
      bullet5_packageHeight= bullet5_packageHeight-425;
     bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
     break;

     case 425:
      bullet5_packageHeight= bullet5_packageHeight-430;
     bullet5_package_context.drawImage(bullet5_package_img,bullet5_packageLt,bullet5_packageHeight,40,80);
     break;

     

}
bullet5_package_sH=bullet5_packageHeight-20;


}
