//=========bullet2===========
function bullet2Fun()
{
 
 bullet2Src='img/1bullet.png';

if(bullet2ImgCount.value=='0')
{
if(bullet2Lt<=139)
{
 bullet2Src='img/bulletFire.png';
 bullet2ImgCount.value=0;
  document.getElementById('bullet2ImgCount').value=0;
  //new Audio("sound/bullet2Exposiion.wav").play();
}

else 
{
 bullet2Src='img/1bullet.png';
}


}

else if(bullet2ImgCount.value=='1'){
 bullet2Src='img/bulletFire.png';
 
  if(bullet2Lt<=139)
{
  
 bullet2ImgCount.value=0;
  document.getElementById('bullet2ImgCount').value=0;
  
}
  
}
  
  var bullet2_context = canvas.getContext("2d");
 bullet2_img = new Image();
  
 bullet2_img.src=bullet2Src;

  var bullet2Height =430;
  //document.getElementById('rH').value=bullet2_Random;
  //bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,20,35);
switch(bullet2_Random)
{
  case 0:
 bullet2Height=bullet2Height-5;
 bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
  break;
  case 5:
   bullet2Height=bullet2Height-10;
   bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
    break;

  case 10:
 bullet2Height=bullet2Height-15;
 bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
  break;
  
  case 15:
   bullet2Height=bullet2Height-20;
   bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
    break;

    case 20:
     bullet2Height=bullet2Height-25;
     bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
      break;

    case 25:
     bullet2Height=bullet2Height-30;
     bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
      break;

   case 30:
     bullet2Height=bullet2Height-35;
     bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
      break;
  
      case 35:
       bullet2Height=bullet2Height-40;
       bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
        break;
   case 40:
  bullet2Height=bullet2Height-45;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;
   
   case 45:
  bullet2Height=bullet2Height-50;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;

   case 50:
  bullet2Height=bullet2Height-55;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 55:
  bullet2Height=bullet2Height-60;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;

   case 60:
  bullet2Height=bullet2Height-65;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 65:
  bullet2Height=bullet2Height-70;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 70:
  bullet2Height=bullet2Height-75;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 75:
  bullet2Height=bullet2Height-80;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 80:
  bullet2Height=bullet2Height-85;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 85:
  bullet2Height=bullet2Height-90;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 90:
  bullet2Height=bullet2Height-95;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 95:
  bullet2Height=bullet2Height-100;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 100:
  bullet2Height=bullet2Height-105;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 105:
  bullet2Height=bullet2Height-110;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 110:
  bullet2Height=bullet2Height-115;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 115:
  bullet2Height=bullet2Height-120;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 120:
  bullet2Height=bullet2Height-125;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 125:
  bullet2Height=bullet2Height-130;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 130:
  bullet2Height=bullet2Height-135;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 135:
  bullet2Height=bullet2Height-140;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 140:
  bullet2Height=bullet2Height-145;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 145:
  bullet2Height=bullet2Height-150;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 150:
  bullet2Height=bullet2Height-155;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 155:
  bullet2Height=bullet2Height-160;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 160:
  bullet2Height=bullet2Height-165;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 165:
  bullet2Height=bullet2Height-170;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 170:
  bullet2Height=bullet2Height-175;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 175:
  bullet2Height=bullet2Height-180;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 180:
  bullet2Height=bullet2Height-185;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 185:
  bullet2Height=bullet2Height-190;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 190:
  bullet2Height=bullet2Height-195;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 195:
  bullet2Height=bullet2Height-200;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 200:
  bullet2Height=bullet2Height-205;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 205:
  bullet2Height=bullet2Height-210;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 210:
  bullet2Height=bullet2Height-215;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 215:
  bullet2Height=bullet2Height-220;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 220:
  bullet2Height=bullet2Height-225;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 225:
  bullet2Height=bullet2Height-230;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 230:
  bullet2Height=bullet2Height-235;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 235:
  bullet2Height=bullet2Height-240;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 240:
  bullet2Height=bullet2Height-245;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 245:
  bullet2Height=bullet2Height-250;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 250:
  bullet2Height=bullet2Height-255;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 255:
  bullet2Height=bullet2Height-260;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 260:
  bullet2Height=bullet2Height-265;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 265:
  bullet2Height=bullet2Height-270;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 270:
  bullet2Height=bullet2Height-275;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;


   case 275:
  bullet2Height=bullet2Height-280;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;

   case 280:
  bullet2Height=bullet2Height-285;
  bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
   break;

   case 285:
   bullet2Height=bullet2Height-290;
   bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
    break;

  case 290:
 bullet2Height=bullet2Height-295;
 bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
  break;

  case 295:
   bullet2Height=bullet2Height-300;
   bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
    break;

    case 300:
     bullet2Height=bullet2Height-305;
     bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
      break;

   case 305:
    bullet2Height=bullet2Height-310;
   bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
    break;
  
    case 310:
     bullet2Height=bullet2Height-315;
    bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
     break;

     case 315:
     bullet2Height=bullet2Height-320;
    bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
     break;

     case 320:
     bullet2Height=bullet2Height-325;
    bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
     break;

     case 325:
     bullet2Height=bullet2Height-330;
    bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
     break;

     case 330:
     bullet2Height=bullet2Height-335;
    bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
     break;

     case 335:
     bullet2Height=bullet2Height-340;
    bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
     break;

     case 340:
     bullet2Height=bullet2Height-345;
    bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
     break;

     case 345:
     bullet2Height=bullet2Height-350;
    bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
     break;

     case 350:
     bullet2Height=bullet2Height-355;
    bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
     break;

     case 355:
     bullet2Height=bullet2Height-360;
    bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
     break;

     case 360:
     bullet2Height=bullet2Height-365;
    bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
     break;

     case 365:
     bullet2Height=bullet2Height-370;
    bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
     break;

     case 370:
     bullet2Height=bullet2Height-375;
    bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
     break;

     case 375:
     bullet2Height=bullet2Height-380;
    bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
     break;

     case 380:
     bullet2Height=bullet2Height-385;
    bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
     break;

     case 385:
     bullet2Height=bullet2Height-390;
    bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
     break;

     case 390:
     bullet2Height=bullet2Height-395;
    bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
     break;

     case 395:
     bullet2Height=bullet2Height-400;
    bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
     break;

     case 400:
     bullet2Height=bullet2Height-405;
    bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
     break;

     case 405:
     bullet2Height=bullet2Height-410;
    bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
     break;

     case 410:
     bullet2Height=bullet2Height-415;
    bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
     break;

     case 415:
     bullet2Height=bullet2Height-420;
    bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
     break;

     case 420:
     bullet2Height=bullet2Height-425;
    bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
     break;

     case 425:
     bullet2Height=bullet2Height-430;
    bullet2_context.drawImage(bullet2_img,bullet2Lt,bullet2Height,40,80);
     break;

     

}
bullet2_sH=bullet2Height-20;
}