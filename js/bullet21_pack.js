//=========bullet21_package===========
function bullet21_packageFun()
{
 
  bullet21_packageSrc='img/2bullet.png';

if(bullet21_packageImgCount.value=='0')
{
if(bullet21_packageLt<=139)
{
  bullet21_packageSrc='img/bulletFire.png';
  bullet21_packageImgCount.value=0;
  document.getElementById('bullet21_packageImgCount').value=0;
  //new Audio("sound/bullet21_packageExposiion.wav").play();
}

else 
{
  bullet21_packageSrc='img/2bullet.png';
}


}

else if(bullet21_packageImgCount.value=='1'){
  bullet21_packageSrc='img/bulletFire.png';
 
  if(bullet21_packageLt<=139)
{
  
  bullet21_packageImgCount.value=0;
  document.getElementById('bullet21_packageImgCount').value=0;
  
}
  
}
  
  var bullet21_package_context = canvas.getContext("2d");
  bullet21_package_img = new Image();
  
  bullet21_package_img.src=bullet21_packageSrc;
  //bullet21_packageLt=200;
  var bullet21_packageHeight =430;

  //document.getElementById('rH').value=bullet21_package_Random;
  //bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,50,80);

  //bullet21_package_sH=bullet21_packageHeight-20;
  
  switch( bullet21_package_Random)
{
  case 0:
  bullet21_packageHeight= bullet21_packageHeight-5;
  bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
  break;
  case 5:
    bullet21_packageHeight= bullet21_packageHeight-10;
    bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
    break;

  case 10:
  bullet21_packageHeight= bullet21_packageHeight-15;
  bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
  break;
  
  case 15:
    bullet21_packageHeight= bullet21_packageHeight-20;
    bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
    break;

    case 20:
      bullet21_packageHeight= bullet21_packageHeight-25;
      bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
      break;

    case 25:
      bullet21_packageHeight= bullet21_packageHeight-30;
      bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
      break;

   case 30:
      bullet21_packageHeight= bullet21_packageHeight-35;
      bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
      break;
  
      case 35:
        bullet21_packageHeight= bullet21_packageHeight-40;
        bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
        break;
   case 40:
   bullet21_packageHeight= bullet21_packageHeight-45;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;
   
   case 45:
   bullet21_packageHeight= bullet21_packageHeight-50;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;

   case 50:
   bullet21_packageHeight= bullet21_packageHeight-55;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 55:
   bullet21_packageHeight= bullet21_packageHeight-60;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;

   case 60:
   bullet21_packageHeight= bullet21_packageHeight-65;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 65:
   bullet21_packageHeight= bullet21_packageHeight-70;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 70:
   bullet21_packageHeight= bullet21_packageHeight-75;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 75:
   bullet21_packageHeight= bullet21_packageHeight-80;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 80:
   bullet21_packageHeight= bullet21_packageHeight-85;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 85:
   bullet21_packageHeight= bullet21_packageHeight-90;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 90:
   bullet21_packageHeight= bullet21_packageHeight-95;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 95:
   bullet21_packageHeight= bullet21_packageHeight-100;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 100:
   bullet21_packageHeight= bullet21_packageHeight-105;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 105:
   bullet21_packageHeight= bullet21_packageHeight-110;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 110:
   bullet21_packageHeight= bullet21_packageHeight-115;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 115:
   bullet21_packageHeight= bullet21_packageHeight-120;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 120:
   bullet21_packageHeight= bullet21_packageHeight-125;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 125:
   bullet21_packageHeight= bullet21_packageHeight-130;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 130:
   bullet21_packageHeight= bullet21_packageHeight-135;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 135:
   bullet21_packageHeight= bullet21_packageHeight-140;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 140:
   bullet21_packageHeight= bullet21_packageHeight-145;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 145:
   bullet21_packageHeight= bullet21_packageHeight-150;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 150:
   bullet21_packageHeight= bullet21_packageHeight-155;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 155:
   bullet21_packageHeight= bullet21_packageHeight-160;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 160:
   bullet21_packageHeight= bullet21_packageHeight-165;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 165:
   bullet21_packageHeight= bullet21_packageHeight-170;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 170:
   bullet21_packageHeight= bullet21_packageHeight-175;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 175:
   bullet21_packageHeight= bullet21_packageHeight-180;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 180:
   bullet21_packageHeight= bullet21_packageHeight-185;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 185:
   bullet21_packageHeight= bullet21_packageHeight-190;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 190:
   bullet21_packageHeight= bullet21_packageHeight-195;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 195:
   bullet21_packageHeight= bullet21_packageHeight-200;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 200:
   bullet21_packageHeight= bullet21_packageHeight-205;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 205:
   bullet21_packageHeight= bullet21_packageHeight-210;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 210:
   bullet21_packageHeight= bullet21_packageHeight-215;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 215:
   bullet21_packageHeight= bullet21_packageHeight-220;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 220:
   bullet21_packageHeight= bullet21_packageHeight-225;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 225:
   bullet21_packageHeight= bullet21_packageHeight-230;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 230:
   bullet21_packageHeight= bullet21_packageHeight-235;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 235:
   bullet21_packageHeight= bullet21_packageHeight-240;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 240:
   bullet21_packageHeight= bullet21_packageHeight-245;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 245:
   bullet21_packageHeight= bullet21_packageHeight-250;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 250:
   bullet21_packageHeight= bullet21_packageHeight-255;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 255:
   bullet21_packageHeight= bullet21_packageHeight-260;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 260:
   bullet21_packageHeight= bullet21_packageHeight-265;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 265:
   bullet21_packageHeight= bullet21_packageHeight-270;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 270:
   bullet21_packageHeight= bullet21_packageHeight-275;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;


   case 275:
   bullet21_packageHeight= bullet21_packageHeight-280;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;

   case 280:
   bullet21_packageHeight= bullet21_packageHeight-285;
   bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
   break;

   case 285:
    bullet21_packageHeight= bullet21_packageHeight-290;
    bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
    break;

  case 290:
  bullet21_packageHeight= bullet21_packageHeight-295;
  bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
  break;

  case 295:
    bullet21_packageHeight= bullet21_packageHeight-300;
    bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
    break;

    case 300:
      bullet21_packageHeight= bullet21_packageHeight-305;
      bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
      break;

   case 305:
     bullet21_packageHeight= bullet21_packageHeight-310;
    bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
    break;
  
    case 310:
      bullet21_packageHeight= bullet21_packageHeight-315;
     bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
     break;

     case 315:
      bullet21_packageHeight= bullet21_packageHeight-320;
     bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
     break;

     case 320:
      bullet21_packageHeight= bullet21_packageHeight-325;
     bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
     break;

     case 325:
      bullet21_packageHeight= bullet21_packageHeight-330;
     bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
     break;

     case 330:
      bullet21_packageHeight= bullet21_packageHeight-335;
     bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
     break;

     case 335:
      bullet21_packageHeight= bullet21_packageHeight-340;
     bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
     break;

     case 340:
      bullet21_packageHeight= bullet21_packageHeight-345;
     bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
     break;

     case 345:
      bullet21_packageHeight= bullet21_packageHeight-350;
     bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
     break;

     case 350:
      bullet21_packageHeight= bullet21_packageHeight-355;
     bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
     break;

     case 355:
      bullet21_packageHeight= bullet21_packageHeight-360;
     bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
     break;

     case 360:
      bullet21_packageHeight= bullet21_packageHeight-365;
     bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
     break;

     case 365:
      bullet21_packageHeight= bullet21_packageHeight-370;
     bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
     break;

     case 370:
      bullet21_packageHeight= bullet21_packageHeight-375;
     bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
     break;

     case 375:
      bullet21_packageHeight= bullet21_packageHeight-380;
     bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
     break;

     case 380:
      bullet21_packageHeight= bullet21_packageHeight-385;
     bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
     break;

     case 385:
      bullet21_packageHeight= bullet21_packageHeight-390;
     bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
     break;

     case 390:
      bullet21_packageHeight= bullet21_packageHeight-395;
     bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
     break;

     case 395:
      bullet21_packageHeight= bullet21_packageHeight-400;
     bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
     break;

     case 400:
      bullet21_packageHeight= bullet21_packageHeight-405;
     bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
     break;

     case 405:
      bullet21_packageHeight= bullet21_packageHeight-410;
     bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
     break;

     case 410:
      bullet21_packageHeight= bullet21_packageHeight-415;
     bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
     break;

     case 415:
      bullet21_packageHeight= bullet21_packageHeight-420;
     bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
     break;

     case 420:
      bullet21_packageHeight= bullet21_packageHeight-425;
     bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
     break;

     case 425:
      bullet21_packageHeight= bullet21_packageHeight-430;
     bullet21_package_context.drawImage(bullet21_package_img,bullet21_packageLt,bullet21_packageHeight,40,80);
     break;

     

}
bullet21_package_sH=bullet21_packageHeight-20;

}
