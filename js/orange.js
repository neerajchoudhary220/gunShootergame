//=========orange===========
function orangeFun()
{
 
  orangeSrc='img/orange.png';

if(orangeImgCount.value=='0')
{
if(orangeLt<=148)
{
  orangeSrc='img/fire.gif';
  orangeImgCount.value=0;
  document.getElementById('orangeImgCount').value=0;
  //new Audio("sound/orangeExposiion.wav").play();
}

else 
{
  orangeSrc='img/orange.png';
}


}

else if(orangeImgCount.value=='1'){
  orangeSrc='img/fire.gif';
 
  if(orangeLt<=148)
{
  
  orangeImgCount.value=0;
  document.getElementById('orangeImgCount').value=0;
  
}
  
}
  
  var orange_context = canvas.getContext("2d");
  orange_img = new Image();
  
  orange_img.src=orangeSrc;
 // orangeLt=200;
 var orangeHeight =430;
  //var orangeHeight =200;
  //orange_context.drawImage(orange_img,orangeLt,orangeHeight,25,50);
  ///orange_sH=orangeHeight-20;
  //document.getElementById('rH').value=orange_Random;
  
switch( orange_Random)
{
  case 0:
  orangeHeight= orangeHeight-5;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 3:
    orangeHeight= orangeHeight-10;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;

  case 5:
  orangeHeight= orangeHeight-10;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  
  case 8:
    orangeHeight= orangeHeight-15;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;

  case 10:
  orangeHeight= orangeHeight-15;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;

  case 13:
    orangeHeight= orangeHeight-20;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;

  case 15:
  orangeHeight= orangeHeight-20;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;

  case 18:
  orangeHeight= orangeHeight-25;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 20:
  orangeHeight= orangeHeight-25;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 23:
    orangeHeight= orangeHeight-30;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 25:
    orangeHeight= orangeHeight-30;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
    case 28:
      orangeHeight= orangeHeight-35;
     orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
      break;
    case 30:
   orangeHeight= orangeHeight-35;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
   break;

   case 33:
    orangeHeight= orangeHeight-40;
   orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
   case 35:
    orangeHeight= orangeHeight-40;
   orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
    case 38:
      orangeHeight= orangeHeight-45;
     orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
      break;
    case 40:
      orangeHeight= orangeHeight-45;
     orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
      break;
      case 43:
        orangeHeight= orangeHeight-50;
        orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
        break;
    
      case 45:
      orangeHeight= orangeHeight-50;
      orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
      break;
      case 50:
        orangeHeight= orangeHeight-55;
        orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
        break;
      case 50:
      orangeHeight= orangeHeight-55;
      orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
      break;
      case 53:
        orangeHeight= orangeHeight-60;
        orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
        break;
      case 55:
        orangeHeight= orangeHeight-60;
        orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
        break;
        case 58:
          orangeHeight= orangeHeight-65;
          orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
          break;   
        case 60:
          orangeHeight= orangeHeight-65;
          orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
          break;
          case 63:
            orangeHeight= orangeHeight-70;
           orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
            break;   
        case 65:
       orangeHeight= orangeHeight-70;
      orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
       break;
    
       case 68:
        orangeHeight= orangeHeight-75;
       orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
        break;  
       case 70:
        orangeHeight= orangeHeight-75;
       orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
        break;
        case 73:
          orangeHeight= orangeHeight-80;
           orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
            break;
       case 75:
        orangeHeight= orangeHeight-80;
         orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
          break;
          case 78:
     orangeHeight= orangeHeight-85;
      orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
       break;
       case 80:
     orangeHeight= orangeHeight-85;
      orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
       break;
       case 83:
        orangeHeight= orangeHeight-90;
         orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
          break;
       case 85:
     orangeHeight= orangeHeight-90;
      orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
       break;

       case 88:
        orangeHeight= orangeHeight-95;
         orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
          break;  
       case 90:
     orangeHeight= orangeHeight-95;
      orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
       break;
       case 93:
        orangeHeight= orangeHeight-100;
         orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
          break;
       case 95:
     orangeHeight= orangeHeight-100;
      orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
       break;
       case 98:
        orangeHeight= orangeHeight-105;
         orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
          break;
       case 100:
     orangeHeight= orangeHeight-105;
      orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
       break;
       case 103:
        orangeHeight= orangeHeight-110;
         orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
          break;
       case 105:
        orangeHeight= orangeHeight-110;
         orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
          break;
 
          case 108:
            orangeHeight= orangeHeight-115;
            orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
            break;
          case 110:
  orangeHeight= orangeHeight-115;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 113:
    orangeHeight= orangeHeight-120;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 115:
  orangeHeight= orangeHeight-120;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 118:
    orangeHeight= orangeHeight-125;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 120:
  orangeHeight= orangeHeight-125;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;

  case 123:
    orangeHeight= orangeHeight-130;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break; 
  case 125:
  orangeHeight= orangeHeight-130;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 128:
    orangeHeight= orangeHeight-135;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 130:
  orangeHeight= orangeHeight-135;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 133:
    orangeHeight= orangeHeight-140;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 135:
  orangeHeight= orangeHeight-140;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 138:
    orangeHeight= orangeHeight-145;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 140:
  orangeHeight= orangeHeight-145;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 143:
    orangeHeight= orangeHeight-150;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 145:
  orangeHeight= orangeHeight-150;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 148:
    orangeHeight= orangeHeight-155;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 150:
  orangeHeight= orangeHeight-155;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;

  case 155:
  orangeHeight= orangeHeight-160;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 158:
    orangeHeight= orangeHeight-165;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 160:
  orangeHeight= orangeHeight-165;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 163:
    orangeHeight= orangeHeight-170;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 165:
  orangeHeight= orangeHeight-170;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 168:
    orangeHeight= orangeHeight-175;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 170:
  orangeHeight= orangeHeight-175;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 173:
  orangeHeight= orangeHeight-180;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 175:
  orangeHeight= orangeHeight-180;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 178:
    orangeHeight= orangeHeight-185;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 180:
  orangeHeight= orangeHeight-185;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 183:
    orangeHeight= orangeHeight-190;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 185:
  orangeHeight= orangeHeight-190;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 188:
    orangeHeight= orangeHeight-195;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 190:
  orangeHeight= orangeHeight-195;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 193:
    orangeHeight= orangeHeight-200;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 195:
  orangeHeight= orangeHeight-200;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 198:
    orangeHeight= orangeHeight-205;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 200:
  orangeHeight= orangeHeight-205;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 203:
    orangeHeight= orangeHeight-210;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 205:
  orangeHeight= orangeHeight-210;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 208:
    orangeHeight= orangeHeight-215;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 210:
  orangeHeight= orangeHeight-215;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 213:
    orangeHeight= orangeHeight-220;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 215:
  orangeHeight= orangeHeight-220;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 218:
    orangeHeight= orangeHeight-225;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 220:
  orangeHeight= orangeHeight-225;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 223:
    orangeHeight= orangeHeight-230;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 225:
  orangeHeight= orangeHeight-230;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 228:
    orangeHeight= orangeHeight-235;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 230:
  orangeHeight= orangeHeight-235;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 233:
    orangeHeight= orangeHeight-240;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 235:
  orangeHeight= orangeHeight-240;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 238:
    orangeHeight= orangeHeight-245;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 240:
  orangeHeight= orangeHeight-245;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 243:
    orangeHeight= orangeHeight-250;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 245:
  orangeHeight= orangeHeight-250;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 248:
    orangeHeight= orangeHeight-255;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 250:
  orangeHeight= orangeHeight-255;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 253:
    orangeHeight= orangeHeight-260;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 255:
  orangeHeight= orangeHeight-260;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 258:
    orangeHeight= orangeHeight-265;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 260:
  orangeHeight= orangeHeight-265;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 263:
  orangeHeight= orangeHeight-270;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 265:
  orangeHeight= orangeHeight-270;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 268:
    orangeHeight= orangeHeight-275;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 270:
  orangeHeight= orangeHeight-275;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 273:
    orangeHeight= orangeHeight-280;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 275:
  orangeHeight= orangeHeight-280;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 278:
    orangeHeight= orangeHeight-285;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 280:
  orangeHeight= orangeHeight-285;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 283:
    orangeHeight= orangeHeight-290;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 285:
  orangeHeight= orangeHeight-290;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 288:
    orangeHeight= orangeHeight-295;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 290:
  orangeHeight= orangeHeight-295;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 293:
    orangeHeight= orangeHeight-300;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 295:
  orangeHeight= orangeHeight-300;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 298:
    orangeHeight= orangeHeight-305;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 300:
  orangeHeight= orangeHeight-305;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 303:
    orangeHeight= orangeHeight-310;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 305:
  orangeHeight= orangeHeight-310;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 308:
  orangeHeight= orangeHeight-315;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 310:
  orangeHeight= orangeHeight-315;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 313:
    orangeHeight= orangeHeight-320;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 315:
  orangeHeight= orangeHeight-320;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 318:
    orangeHeight= orangeHeight-325;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 320:
  orangeHeight= orangeHeight-325;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 323:
    orangeHeight= orangeHeight-330;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 325:
  orangeHeight= orangeHeight-330;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 328:
    orangeHeight= orangeHeight-335;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 330:
  orangeHeight= orangeHeight-335;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 333:
    orangeHeight= orangeHeight-340;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 335:
  orangeHeight= orangeHeight-340;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 338:
    orangeHeight= orangeHeight-345;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 340:
  orangeHeight= orangeHeight-345;
  orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
  break;
  case 343:
    orangeHeight= orangeHeight-350;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
  case 345:
    orangeHeight= orangeHeight-350;
    orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
    break;
    case 348:
      orangeHeight= orangeHeight-355;
      orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
      break;
    case 350:
      orangeHeight= orangeHeight-355;
      orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
      break;
      case 353:
        orangeHeight= orangeHeight-360;
       orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
       break;
      case 355:
  orangeHeight= orangeHeight-360;
 orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
 break;
 case 358:
  orangeHeight= orangeHeight-365;
 orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
 break;
 case 360:
  orangeHeight= orangeHeight-365;
 orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
 break;
 case 363:
  orangeHeight= orangeHeight-370;
 orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
 break;
 case 365:
  orangeHeight= orangeHeight-370;
 orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
 break;
 case 368:
  orangeHeight= orangeHeight-375;
 orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
 break;
 case 370:
  orangeHeight= orangeHeight-375;
 orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
 break;
 case 373:
  orangeHeight= orangeHeight-380;
 orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
 break;
 case 375:
  orangeHeight= orangeHeight-380;
 orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
 break;
 case 378:
  orangeHeight= orangeHeight-385;
 orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
 break;
 case 380:
  orangeHeight= orangeHeight-385;
 orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
 break;
 case 383:
  orangeHeight= orangeHeight-390;
 orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
 break;
 case 385:
  orangeHeight= orangeHeight-390;
 orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
 break;
 case 388:
  orangeHeight= orangeHeight-395;
 orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
 break;
 case 390:
  orangeHeight= orangeHeight-395;
 orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
 break;
 case 393:
  orangeHeight= orangeHeight-400;
 orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
 break;
 case 395:
  orangeHeight= orangeHeight-400;
 orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
 break;
 case 398:
  orangeHeight= orangeHeight-405;
 orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
 break;
 case 400:
  orangeHeight= orangeHeight-405;
 orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
 break;
 case 403:
  orangeHeight= orangeHeight-410;
 orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
 break;
 case 405:
  orangeHeight= orangeHeight-410;
 orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
 break;
 case 408:
  orangeHeight= orangeHeight-415;
 orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
 break;
 case 410:
  orangeHeight= orangeHeight-415;
 orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
 break;
 case 413:
  orangeHeight= orangeHeight-420;
 orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
 break;
 case 415:
  orangeHeight= orangeHeight-420;
 orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
 break;
 case 418:
  orangeHeight= orangeHeight-425;
 orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
 break;
 case 420:
  orangeHeight= orangeHeight-425;
 orange_context.drawImage(orange_img,orangeLt,orangeHeight,20,35);
 break;





}
orange_sH=orangeHeight-20;
}

