//=========bullet3===========
function bullet3Fun()
{
 
 bullet3Src='img/1bullet.png';

if(bullet3ImgCount.value=='0')
{
if(bullet3Lt<=139)
{
 bullet3Src='img/bulletFire.png';
 bullet3ImgCount.value=0;
  document.getElementById('bullet3ImgCount').value=0;
  //new Audio("sound/bullet3Exposiion.wav").play();
}

else 
{
 bullet3Src='img/1bullet.png';
}


}

else if(bullet3ImgCount.value=='1'){
 bullet3Src='img/bulletFire.png';
 
  if(bullet3Lt<=139)
{
  
 bullet3ImgCount.value=0;
  document.getElementById('bullet3ImgCount').value=0;
  
}
  
}
  
  var bullet3_context = canvas.getContext("2d");
 bullet3_img = new Image();
  
 bullet3_img.src=bullet3Src;

  var bullet3Height =430;
 // document.getElementById('rH').value=bullet3_Random;
  //bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,20,35);
switch(bullet3_Random)
{
  case 0:
 bullet3Height=bullet3Height-5;
 bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
  break;
  case 5:
   bullet3Height=bullet3Height-10;
   bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
    break;

  case 10:
 bullet3Height=bullet3Height-15;
 bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
  break;
  
  case 15:
   bullet3Height=bullet3Height-20;
   bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
    break;

    case 20:
     bullet3Height=bullet3Height-25;
     bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
      break;

    case 25:
     bullet3Height=bullet3Height-30;
     bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
      break;

   case 30:
     bullet3Height=bullet3Height-35;
     bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
      break;
  
      case 35:
       bullet3Height=bullet3Height-40;
       bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
        break;
   case 40:
  bullet3Height=bullet3Height-45;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;
   
   case 45:
  bullet3Height=bullet3Height-50;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;

   case 50:
  bullet3Height=bullet3Height-55;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 55:
  bullet3Height=bullet3Height-60;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;

   case 60:
  bullet3Height=bullet3Height-65;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 65:
  bullet3Height=bullet3Height-70;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 70:
  bullet3Height=bullet3Height-75;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 75:
  bullet3Height=bullet3Height-80;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 80:
  bullet3Height=bullet3Height-85;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 85:
  bullet3Height=bullet3Height-90;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 90:
  bullet3Height=bullet3Height-95;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 95:
  bullet3Height=bullet3Height-100;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 100:
  bullet3Height=bullet3Height-105;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 105:
  bullet3Height=bullet3Height-110;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 110:
  bullet3Height=bullet3Height-115;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 115:
  bullet3Height=bullet3Height-120;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 120:
  bullet3Height=bullet3Height-125;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 125:
  bullet3Height=bullet3Height-130;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 130:
  bullet3Height=bullet3Height-135;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 135:
  bullet3Height=bullet3Height-140;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 140:
  bullet3Height=bullet3Height-145;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 145:
  bullet3Height=bullet3Height-150;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 150:
  bullet3Height=bullet3Height-155;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 155:
  bullet3Height=bullet3Height-160;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 160:
  bullet3Height=bullet3Height-165;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 165:
  bullet3Height=bullet3Height-170;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 170:
  bullet3Height=bullet3Height-175;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 175:
  bullet3Height=bullet3Height-180;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 180:
  bullet3Height=bullet3Height-185;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 185:
  bullet3Height=bullet3Height-190;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 190:
  bullet3Height=bullet3Height-195;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 195:
  bullet3Height=bullet3Height-200;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 200:
  bullet3Height=bullet3Height-205;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 205:
  bullet3Height=bullet3Height-210;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 210:
  bullet3Height=bullet3Height-215;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 215:
  bullet3Height=bullet3Height-220;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 220:
  bullet3Height=bullet3Height-225;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 225:
  bullet3Height=bullet3Height-230;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 230:
  bullet3Height=bullet3Height-235;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 235:
  bullet3Height=bullet3Height-240;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 240:
  bullet3Height=bullet3Height-245;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 245:
  bullet3Height=bullet3Height-250;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 250:
  bullet3Height=bullet3Height-255;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 255:
  bullet3Height=bullet3Height-260;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 260:
  bullet3Height=bullet3Height-265;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 265:
  bullet3Height=bullet3Height-270;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 270:
  bullet3Height=bullet3Height-275;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;


   case 275:
  bullet3Height=bullet3Height-280;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;

   case 280:
  bullet3Height=bullet3Height-285;
  bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
   break;

   case 285:
   bullet3Height=bullet3Height-290;
   bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
    break;

  case 290:
 bullet3Height=bullet3Height-295;
 bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
  break;

  case 295:
   bullet3Height=bullet3Height-300;
   bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
    break;

    case 300:
     bullet3Height=bullet3Height-305;
     bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
      break;

   case 305:
    bullet3Height=bullet3Height-310;
   bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
    break;
  
    case 310:
     bullet3Height=bullet3Height-315;
    bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
     break;

     case 315:
     bullet3Height=bullet3Height-320;
    bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
     break;

     case 320:
     bullet3Height=bullet3Height-325;
    bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
     break;

     case 325:
     bullet3Height=bullet3Height-330;
    bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
     break;

     case 330:
     bullet3Height=bullet3Height-335;
    bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
     break;

     case 335:
     bullet3Height=bullet3Height-340;
    bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
     break;

     case 340:
     bullet3Height=bullet3Height-345;
    bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
     break;

     case 345:
     bullet3Height=bullet3Height-350;
    bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
     break;

     case 350:
     bullet3Height=bullet3Height-355;
    bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
     break;

     case 355:
     bullet3Height=bullet3Height-360;
    bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
     break;

     case 360:
     bullet3Height=bullet3Height-365;
    bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
     break;

     case 365:
     bullet3Height=bullet3Height-370;
    bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
     break;

     case 370:
     bullet3Height=bullet3Height-375;
    bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
     break;

     case 375:
     bullet3Height=bullet3Height-380;
    bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
     break;

     case 380:
     bullet3Height=bullet3Height-385;
    bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
     break;

     case 385:
     bullet3Height=bullet3Height-390;
    bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
     break;

     case 390:
     bullet3Height=bullet3Height-395;
    bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
     break;

     case 395:
     bullet3Height=bullet3Height-400;
    bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
     break;

     case 400:
     bullet3Height=bullet3Height-405;
    bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
     break;

     case 405:
     bullet3Height=bullet3Height-410;
    bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
     break;

     case 410:
     bullet3Height=bullet3Height-415;
    bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
     break;

     case 415:
     bullet3Height=bullet3Height-420;
    bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
     break;

     case 420:
     bullet3Height=bullet3Height-425;
    bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
     break;

     case 425:
     bullet3Height=bullet3Height-430;
    bullet3_context.drawImage(bullet3_img,bullet3Lt,bullet3Height,40,80);
     break;

     

}
bullet3_sH=bullet3Height-20;
}