//=========bullet1===========
function bullet1Fun()
{
 
  bullet1Src='img/1bullet.png';

if(bullet1ImgCount.value=='0')
{
if(bullet1Lt<=139)
{
  bullet1Src='img/bulletFire.png';
  bullet1ImgCount.value=0;
  document.getElementById('bullet1ImgCount').value=0;
  //new Audio("sound/bullet1Exposiion.wav").play();
}

else 
{
  bullet1Src='img/1bullet.png';
}


}

else if(bullet1ImgCount.value=='1'){
  bullet1Src='img/bulletFire.png';
 
  if(bullet1Lt<=139)
{
  
  bullet1ImgCount.value=0;
  document.getElementById('bullet1ImgCount').value=0;
  
}
  
}
  
  var bullet1_context = canvas.getContext("2d");
  bullet1_img = new Image();
  
  bullet1_img.src=bullet1Src;

  var bullet1Height =430;
  //document.getElementById('rH').value=bullet1_Random;
  //bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,20,35);
switch( bullet1_Random)
{
  case 0:
  bullet1Height= bullet1Height-5;
  bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
  break;
  case 5:
    bullet1Height= bullet1Height-10;
    bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
    break;

  case 10:
  bullet1Height= bullet1Height-15;
  bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
  break;
  
  case 15:
    bullet1Height= bullet1Height-20;
    bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
    break;

    case 20:
      bullet1Height= bullet1Height-25;
      bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
      break;

    case 25:
      bullet1Height= bullet1Height-30;
      bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
      break;

   case 30:
      bullet1Height= bullet1Height-35;
      bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
      break;
  
      case 35:
        bullet1Height= bullet1Height-40;
        bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
        break;
   case 40:
   bullet1Height= bullet1Height-45;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;
   
   case 45:
   bullet1Height= bullet1Height-50;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;

   case 50:
   bullet1Height= bullet1Height-55;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 55:
   bullet1Height= bullet1Height-60;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;

   case 60:
   bullet1Height= bullet1Height-65;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 65:
   bullet1Height= bullet1Height-70;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 70:
   bullet1Height= bullet1Height-75;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 75:
   bullet1Height= bullet1Height-80;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 80:
   bullet1Height= bullet1Height-85;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 85:
   bullet1Height= bullet1Height-90;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 90:
   bullet1Height= bullet1Height-95;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 95:
   bullet1Height= bullet1Height-100;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 100:
   bullet1Height= bullet1Height-105;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 105:
   bullet1Height= bullet1Height-110;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 110:
   bullet1Height= bullet1Height-115;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 115:
   bullet1Height= bullet1Height-120;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 120:
   bullet1Height= bullet1Height-125;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 125:
   bullet1Height= bullet1Height-130;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 130:
   bullet1Height= bullet1Height-135;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 135:
   bullet1Height= bullet1Height-140;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 140:
   bullet1Height= bullet1Height-145;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 145:
   bullet1Height= bullet1Height-150;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 150:
   bullet1Height= bullet1Height-155;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 155:
   bullet1Height= bullet1Height-160;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 160:
   bullet1Height= bullet1Height-165;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 165:
   bullet1Height= bullet1Height-170;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 170:
   bullet1Height= bullet1Height-175;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 175:
   bullet1Height= bullet1Height-180;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 180:
   bullet1Height= bullet1Height-185;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 185:
   bullet1Height= bullet1Height-190;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 190:
   bullet1Height= bullet1Height-195;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 195:
   bullet1Height= bullet1Height-200;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 200:
   bullet1Height= bullet1Height-205;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 205:
   bullet1Height= bullet1Height-210;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 210:
   bullet1Height= bullet1Height-215;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 215:
   bullet1Height= bullet1Height-220;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 220:
   bullet1Height= bullet1Height-225;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 225:
   bullet1Height= bullet1Height-230;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 230:
   bullet1Height= bullet1Height-235;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 235:
   bullet1Height= bullet1Height-240;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 240:
   bullet1Height= bullet1Height-245;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 245:
   bullet1Height= bullet1Height-250;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 250:
   bullet1Height= bullet1Height-255;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 255:
   bullet1Height= bullet1Height-260;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 260:
   bullet1Height= bullet1Height-265;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 265:
   bullet1Height= bullet1Height-270;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 270:
   bullet1Height= bullet1Height-275;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;


   case 275:
   bullet1Height= bullet1Height-280;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;

   case 280:
   bullet1Height= bullet1Height-285;
   bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
   break;

   case 285:
    bullet1Height= bullet1Height-290;
    bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
    break;

  case 290:
  bullet1Height= bullet1Height-295;
  bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
  break;

  case 295:
    bullet1Height= bullet1Height-300;
    bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
    break;

    case 300:
      bullet1Height= bullet1Height-305;
      bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
      break;

   case 305:
     bullet1Height= bullet1Height-310;
    bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
    break;
  
    case 310:
      bullet1Height= bullet1Height-315;
     bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
     break;

     case 315:
      bullet1Height= bullet1Height-320;
     bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
     break;

     case 320:
      bullet1Height= bullet1Height-325;
     bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
     break;

     case 325:
      bullet1Height= bullet1Height-330;
     bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
     break;

     case 330:
      bullet1Height= bullet1Height-335;
     bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
     break;

     case 335:
      bullet1Height= bullet1Height-340;
     bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
     break;

     case 340:
      bullet1Height= bullet1Height-345;
     bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
     break;

     case 345:
      bullet1Height= bullet1Height-350;
     bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
     break;

     case 350:
      bullet1Height= bullet1Height-355;
     bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
     break;

     case 355:
      bullet1Height= bullet1Height-360;
     bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
     break;

     case 360:
      bullet1Height= bullet1Height-365;
     bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
     break;

     case 365:
      bullet1Height= bullet1Height-370;
     bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
     break;

     case 370:
      bullet1Height= bullet1Height-375;
     bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
     break;

     case 375:
      bullet1Height= bullet1Height-380;
     bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
     break;

     case 380:
      bullet1Height= bullet1Height-385;
     bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
     break;

     case 385:
      bullet1Height= bullet1Height-390;
     bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
     break;

     case 390:
      bullet1Height= bullet1Height-395;
     bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
     break;

     case 395:
      bullet1Height= bullet1Height-400;
     bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
     break;

     case 400:
      bullet1Height= bullet1Height-405;
     bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
     break;

     case 405:
      bullet1Height= bullet1Height-410;
     bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
     break;

     case 410:
      bullet1Height= bullet1Height-415;
     bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
     break;

     case 415:
      bullet1Height= bullet1Height-420;
     bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
     break;

     case 420:
      bullet1Height= bullet1Height-425;
     bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
     break;

     case 425:
      bullet1Height= bullet1Height-430;
     bullet1_context.drawImage(bullet1_img,bullet1Lt,bullet1Height,40,80);
     break;

     

}
bullet1_sH=bullet1Height-20;
}