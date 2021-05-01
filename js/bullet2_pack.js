//=========bullet2_package===========
function bullet2_packageFun()
{
 
  bullet2_packageSrc='img/2bullet.png';

if(bullet2_packageImgCount.value=='0')
{
if(bullet2_packageLt<=139)
{
  bullet2_packageSrc='img/bulletFire.png';
  bullet2_packageImgCount.value=0;
  document.getElementById('bullet2_packageImgCount').value=0;
  //new Audio("sound/bullet2_packageExposiion.wav").play();
}

else 
{
  bullet2_packageSrc='img/2bullet.png';
}


}

else if(bullet2_packageImgCount.value=='1'){
  bullet2_packageSrc='img/bulletFire.png';
 
  if(bullet2_packageLt<=139)
{
  
  bullet2_packageImgCount.value=0;
  document.getElementById('bullet2_packageImgCount').value=0;
  
}
  
}
  
  var bullet2_package_context = canvas.getContext("2d");
  bullet2_package_img = new Image();
  
  bullet2_package_img.src=bullet2_packageSrc;
  //bullet2_packageLt=200;
  var bullet2_packageHeight =430;

  //document.getElementById('rH').value=bullet2_package_Random;
  //bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,50,80);

  //bullet2_package_sH=bullet2_packageHeight-20;
  
  switch( bullet2_package_Random)
{
  case 0:
  bullet2_packageHeight= bullet2_packageHeight-5;
  bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
  break;
  case 5:
    bullet2_packageHeight= bullet2_packageHeight-10;
    bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
    break;

  case 10:
  bullet2_packageHeight= bullet2_packageHeight-15;
  bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
  break;
  
  case 15:
    bullet2_packageHeight= bullet2_packageHeight-20;
    bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
    break;

    case 20:
      bullet2_packageHeight= bullet2_packageHeight-25;
      bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
      break;

    case 25:
      bullet2_packageHeight= bullet2_packageHeight-30;
      bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
      break;

   case 30:
      bullet2_packageHeight= bullet2_packageHeight-35;
      bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
      break;
  
      case 35:
        bullet2_packageHeight= bullet2_packageHeight-40;
        bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
        break;
   case 40:
   bullet2_packageHeight= bullet2_packageHeight-45;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;
   
   case 45:
   bullet2_packageHeight= bullet2_packageHeight-50;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;

   case 50:
   bullet2_packageHeight= bullet2_packageHeight-55;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 55:
   bullet2_packageHeight= bullet2_packageHeight-60;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;

   case 60:
   bullet2_packageHeight= bullet2_packageHeight-65;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 65:
   bullet2_packageHeight= bullet2_packageHeight-70;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 70:
   bullet2_packageHeight= bullet2_packageHeight-75;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 75:
   bullet2_packageHeight= bullet2_packageHeight-80;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 80:
   bullet2_packageHeight= bullet2_packageHeight-85;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 85:
   bullet2_packageHeight= bullet2_packageHeight-90;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 90:
   bullet2_packageHeight= bullet2_packageHeight-95;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 95:
   bullet2_packageHeight= bullet2_packageHeight-100;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 100:
   bullet2_packageHeight= bullet2_packageHeight-105;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 105:
   bullet2_packageHeight= bullet2_packageHeight-110;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 110:
   bullet2_packageHeight= bullet2_packageHeight-115;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 115:
   bullet2_packageHeight= bullet2_packageHeight-120;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 120:
   bullet2_packageHeight= bullet2_packageHeight-125;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 125:
   bullet2_packageHeight= bullet2_packageHeight-130;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 130:
   bullet2_packageHeight= bullet2_packageHeight-135;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 135:
   bullet2_packageHeight= bullet2_packageHeight-140;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 140:
   bullet2_packageHeight= bullet2_packageHeight-145;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 145:
   bullet2_packageHeight= bullet2_packageHeight-150;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 150:
   bullet2_packageHeight= bullet2_packageHeight-155;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 155:
   bullet2_packageHeight= bullet2_packageHeight-160;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 160:
   bullet2_packageHeight= bullet2_packageHeight-165;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 165:
   bullet2_packageHeight= bullet2_packageHeight-170;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 170:
   bullet2_packageHeight= bullet2_packageHeight-175;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 175:
   bullet2_packageHeight= bullet2_packageHeight-180;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 180:
   bullet2_packageHeight= bullet2_packageHeight-185;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 185:
   bullet2_packageHeight= bullet2_packageHeight-190;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 190:
   bullet2_packageHeight= bullet2_packageHeight-195;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 195:
   bullet2_packageHeight= bullet2_packageHeight-200;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 200:
   bullet2_packageHeight= bullet2_packageHeight-205;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 205:
   bullet2_packageHeight= bullet2_packageHeight-210;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 210:
   bullet2_packageHeight= bullet2_packageHeight-215;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 215:
   bullet2_packageHeight= bullet2_packageHeight-220;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 220:
   bullet2_packageHeight= bullet2_packageHeight-225;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 225:
   bullet2_packageHeight= bullet2_packageHeight-230;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 230:
   bullet2_packageHeight= bullet2_packageHeight-235;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 235:
   bullet2_packageHeight= bullet2_packageHeight-240;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 240:
   bullet2_packageHeight= bullet2_packageHeight-245;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 245:
   bullet2_packageHeight= bullet2_packageHeight-250;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 250:
   bullet2_packageHeight= bullet2_packageHeight-255;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 255:
   bullet2_packageHeight= bullet2_packageHeight-260;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 260:
   bullet2_packageHeight= bullet2_packageHeight-265;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 265:
   bullet2_packageHeight= bullet2_packageHeight-270;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 270:
   bullet2_packageHeight= bullet2_packageHeight-275;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;


   case 275:
   bullet2_packageHeight= bullet2_packageHeight-280;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;

   case 280:
   bullet2_packageHeight= bullet2_packageHeight-285;
   bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
   break;

   case 285:
    bullet2_packageHeight= bullet2_packageHeight-290;
    bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
    break;

  case 290:
  bullet2_packageHeight= bullet2_packageHeight-295;
  bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
  break;

  case 295:
    bullet2_packageHeight= bullet2_packageHeight-300;
    bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
    break;

    case 300:
      bullet2_packageHeight= bullet2_packageHeight-305;
      bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
      break;

   case 305:
     bullet2_packageHeight= bullet2_packageHeight-310;
    bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
    break;
  
    case 310:
      bullet2_packageHeight= bullet2_packageHeight-315;
     bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
     break;

     case 315:
      bullet2_packageHeight= bullet2_packageHeight-320;
     bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
     break;

     case 320:
      bullet2_packageHeight= bullet2_packageHeight-325;
     bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
     break;

     case 325:
      bullet2_packageHeight= bullet2_packageHeight-330;
     bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
     break;

     case 330:
      bullet2_packageHeight= bullet2_packageHeight-335;
     bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
     break;

     case 335:
      bullet2_packageHeight= bullet2_packageHeight-340;
     bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
     break;

     case 340:
      bullet2_packageHeight= bullet2_packageHeight-345;
     bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
     break;

     case 345:
      bullet2_packageHeight= bullet2_packageHeight-350;
     bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
     break;

     case 350:
      bullet2_packageHeight= bullet2_packageHeight-355;
     bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
     break;

     case 355:
      bullet2_packageHeight= bullet2_packageHeight-360;
     bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
     break;

     case 360:
      bullet2_packageHeight= bullet2_packageHeight-365;
     bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
     break;

     case 365:
      bullet2_packageHeight= bullet2_packageHeight-370;
     bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
     break;

     case 370:
      bullet2_packageHeight= bullet2_packageHeight-375;
     bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
     break;

     case 375:
      bullet2_packageHeight= bullet2_packageHeight-380;
     bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
     break;

     case 380:
      bullet2_packageHeight= bullet2_packageHeight-385;
     bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
     break;

     case 385:
      bullet2_packageHeight= bullet2_packageHeight-390;
     bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
     break;

     case 390:
      bullet2_packageHeight= bullet2_packageHeight-395;
     bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
     break;

     case 395:
      bullet2_packageHeight= bullet2_packageHeight-400;
     bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
     break;

     case 400:
      bullet2_packageHeight= bullet2_packageHeight-405;
     bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
     break;

     case 405:
      bullet2_packageHeight= bullet2_packageHeight-410;
     bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
     break;

     case 410:
      bullet2_packageHeight= bullet2_packageHeight-415;
     bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
     break;

     case 415:
      bullet2_packageHeight= bullet2_packageHeight-420;
     bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
     break;

     case 420:
      bullet2_packageHeight= bullet2_packageHeight-425;
     bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
     break;

     case 425:
      bullet2_packageHeight= bullet2_packageHeight-430;
     bullet2_package_context.drawImage(bullet2_package_img,bullet2_packageLt,bullet2_packageHeight,40,80);
     break;

     

}
bullet2_package_sH=bullet2_packageHeight-20;

}
