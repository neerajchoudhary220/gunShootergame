//=========orange2===========
function orange2Fun()
{
 
  orange2Src='img/orange.png';

if(orange2ImgCount.value=='0')
{
if(orange2Lt<=148)
{
  orange2Src='img/fire.gif';
  orange2ImgCount.value=0;
  document.getElementById('orange2ImgCount').value=0;
  //new Audio("sound/orange2Exposiion.wav").play();
}

else 
{
  orange2Src='img/orange.png';
}


}

else if(orange2ImgCount.value=='1'){
  orange2Src='img/fire.gif';
 
  if(orange2Lt<=148)
{
  
  orange2ImgCount.value=0;
  document.getElementById('orange2ImgCount').value=0;
  
}
  
}
  
  var orange2_context = canvas.getContext("2d");
  orange2_img = new Image();
  
  orange2_img.src=orange2Src;
  //orange2Lt=200;
  var orange2Height =430;
  //var orange2Height =200;
  //orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,25,50);
  //orange2_sH=orange2Height-20;
  //document.getElementById('rH').value=orange2_Random;
  
switch( orange2_Random)
{
  case 0:
  orange2Height= orange2Height-5;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 3:
    orange2Height= orange2Height-10;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;

  case 5:
  orange2Height= orange2Height-10;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  
  case 8:
    orange2Height= orange2Height-15;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;

  case 10:
  orange2Height= orange2Height-15;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;

  case 13:
    orange2Height= orange2Height-20;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;

  case 15:
  orange2Height= orange2Height-20;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;

  case 18:
  orange2Height= orange2Height-25;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 20:
  orange2Height= orange2Height-25;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 23:
    orange2Height= orange2Height-30;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 25:
    orange2Height= orange2Height-30;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
    case 28:
      orange2Height= orange2Height-35;
     orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
      break;
    case 30:
   orange2Height= orange2Height-35;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
   break;

   case 33:
    orange2Height= orange2Height-40;
   orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
   case 35:
    orange2Height= orange2Height-40;
   orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
    case 38:
      orange2Height= orange2Height-45;
     orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
      break;
    case 40:
      orange2Height= orange2Height-45;
     orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
      break;
      case 43:
        orange2Height= orange2Height-50;
        orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
        break;
    
      case 45:
      orange2Height= orange2Height-50;
      orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
      break;
      case 50:
        orange2Height= orange2Height-55;
        orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
        break;
      case 50:
      orange2Height= orange2Height-55;
      orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
      break;
      case 53:
        orange2Height= orange2Height-60;
        orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
        break;
      case 55:
        orange2Height= orange2Height-60;
        orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
        break;
        case 58:
          orange2Height= orange2Height-65;
          orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
          break;   
        case 60:
          orange2Height= orange2Height-65;
          orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
          break;
          case 63:
            orange2Height= orange2Height-70;
           orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
            break;   
        case 65:
       orange2Height= orange2Height-70;
      orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
       break;
    
       case 68:
        orange2Height= orange2Height-75;
       orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
        break;  
       case 70:
        orange2Height= orange2Height-75;
       orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
        break;
        case 73:
          orange2Height= orange2Height-80;
           orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
            break;
       case 75:
        orange2Height= orange2Height-80;
         orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
          break;
          case 78:
     orange2Height= orange2Height-85;
      orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
       break;
       case 80:
     orange2Height= orange2Height-85;
      orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
       break;
       case 83:
        orange2Height= orange2Height-90;
         orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
          break;
       case 85:
     orange2Height= orange2Height-90;
      orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
       break;

       case 88:
        orange2Height= orange2Height-95;
         orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
          break;  
       case 90:
     orange2Height= orange2Height-95;
      orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
       break;
       case 93:
        orange2Height= orange2Height-100;
         orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
          break;
       case 95:
     orange2Height= orange2Height-100;
      orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
       break;
       case 98:
        orange2Height= orange2Height-105;
         orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
          break;
       case 100:
     orange2Height= orange2Height-105;
      orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
       break;
       case 103:
        orange2Height= orange2Height-110;
         orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
          break;
       case 105:
        orange2Height= orange2Height-110;
         orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
          break;
 
          case 108:
            orange2Height= orange2Height-115;
            orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
            break;
          case 110:
  orange2Height= orange2Height-115;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 113:
    orange2Height= orange2Height-120;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 115:
  orange2Height= orange2Height-120;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 118:
    orange2Height= orange2Height-125;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 120:
  orange2Height= orange2Height-125;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;

  case 123:
    orange2Height= orange2Height-130;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break; 
  case 125:
  orange2Height= orange2Height-130;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 128:
    orange2Height= orange2Height-135;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 130:
  orange2Height= orange2Height-135;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 133:
    orange2Height= orange2Height-140;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 135:
  orange2Height= orange2Height-140;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 138:
    orange2Height= orange2Height-145;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 140:
  orange2Height= orange2Height-145;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 143:
    orange2Height= orange2Height-150;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 145:
  orange2Height= orange2Height-150;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 148:
    orange2Height= orange2Height-155;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 150:
  orange2Height= orange2Height-155;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;

  case 155:
  orange2Height= orange2Height-160;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 158:
    orange2Height= orange2Height-165;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 160:
  orange2Height= orange2Height-165;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 163:
    orange2Height= orange2Height-170;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 165:
  orange2Height= orange2Height-170;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 168:
    orange2Height= orange2Height-175;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 170:
  orange2Height= orange2Height-175;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 173:
  orange2Height= orange2Height-180;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 175:
  orange2Height= orange2Height-180;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 178:
    orange2Height= orange2Height-185;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 180:
  orange2Height= orange2Height-185;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 183:
    orange2Height= orange2Height-190;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 185:
  orange2Height= orange2Height-190;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 188:
    orange2Height= orange2Height-195;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 190:
  orange2Height= orange2Height-195;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 193:
    orange2Height= orange2Height-200;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 195:
  orange2Height= orange2Height-200;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 198:
    orange2Height= orange2Height-205;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 200:
  orange2Height= orange2Height-205;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 203:
    orange2Height= orange2Height-210;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 205:
  orange2Height= orange2Height-210;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 208:
    orange2Height= orange2Height-215;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 210:
  orange2Height= orange2Height-215;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 213:
    orange2Height= orange2Height-220;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 215:
  orange2Height= orange2Height-220;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 218:
    orange2Height= orange2Height-225;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 220:
  orange2Height= orange2Height-225;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 223:
    orange2Height= orange2Height-230;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 225:
  orange2Height= orange2Height-230;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 228:
    orange2Height= orange2Height-235;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 230:
  orange2Height= orange2Height-235;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 233:
    orange2Height= orange2Height-240;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 235:
  orange2Height= orange2Height-240;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 238:
    orange2Height= orange2Height-245;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 240:
  orange2Height= orange2Height-245;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 243:
    orange2Height= orange2Height-250;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 245:
  orange2Height= orange2Height-250;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 248:
    orange2Height= orange2Height-255;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 250:
  orange2Height= orange2Height-255;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 253:
    orange2Height= orange2Height-260;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 255:
  orange2Height= orange2Height-260;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 258:
    orange2Height= orange2Height-265;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 260:
  orange2Height= orange2Height-265;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 263:
  orange2Height= orange2Height-270;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 265:
  orange2Height= orange2Height-270;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 268:
    orange2Height= orange2Height-275;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 270:
  orange2Height= orange2Height-275;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 273:
    orange2Height= orange2Height-280;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 275:
  orange2Height= orange2Height-280;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 278:
    orange2Height= orange2Height-285;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 280:
  orange2Height= orange2Height-285;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 283:
    orange2Height= orange2Height-290;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 285:
  orange2Height= orange2Height-290;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 288:
    orange2Height= orange2Height-295;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 290:
  orange2Height= orange2Height-295;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 293:
    orange2Height= orange2Height-300;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 295:
  orange2Height= orange2Height-300;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 298:
    orange2Height= orange2Height-305;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 300:
  orange2Height= orange2Height-305;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 303:
    orange2Height= orange2Height-310;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 305:
  orange2Height= orange2Height-310;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 308:
  orange2Height= orange2Height-315;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 310:
  orange2Height= orange2Height-315;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 313:
    orange2Height= orange2Height-320;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 315:
  orange2Height= orange2Height-320;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 318:
    orange2Height= orange2Height-325;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 320:
  orange2Height= orange2Height-325;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 323:
    orange2Height= orange2Height-330;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 325:
  orange2Height= orange2Height-330;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 328:
    orange2Height= orange2Height-335;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 330:
  orange2Height= orange2Height-335;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 333:
    orange2Height= orange2Height-340;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 335:
  orange2Height= orange2Height-340;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 338:
    orange2Height= orange2Height-345;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 340:
  orange2Height= orange2Height-345;
  orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
  break;
  case 343:
    orange2Height= orange2Height-350;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
  case 345:
    orange2Height= orange2Height-350;
    orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
    break;
    case 348:
      orange2Height= orange2Height-355;
      orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
      break;
    case 350:
      orange2Height= orange2Height-355;
      orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
      break;
      case 353:
        orange2Height= orange2Height-360;
       orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
       break;
      case 355:
  orange2Height= orange2Height-360;
 orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
 break;
 case 358:
  orange2Height= orange2Height-365;
 orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
 break;
 case 360:
  orange2Height= orange2Height-365;
 orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
 break;
 case 363:
  orange2Height= orange2Height-370;
 orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
 break;
 case 365:
  orange2Height= orange2Height-370;
 orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
 break;
 case 368:
  orange2Height= orange2Height-375;
 orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
 break;
 case 370:
  orange2Height= orange2Height-375;
 orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
 break;
 case 373:
  orange2Height= orange2Height-380;
 orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
 break;
 case 375:
  orange2Height= orange2Height-380;
 orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
 break;
 case 378:
  orange2Height= orange2Height-385;
 orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
 break;
 case 380:
  orange2Height= orange2Height-385;
 orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
 break;
 case 383:
  orange2Height= orange2Height-390;
 orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
 break;
 case 385:
  orange2Height= orange2Height-390;
 orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
 break;
 case 388:
  orange2Height= orange2Height-395;
 orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
 break;
 case 390:
  orange2Height= orange2Height-395;
 orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
 break;
 case 393:
  orange2Height= orange2Height-400;
 orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
 break;
 case 395:
  orange2Height= orange2Height-400;
 orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
 break;
 case 398:
  orange2Height= orange2Height-405;
 orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
 break;
 case 400:
  orange2Height= orange2Height-405;
 orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
 break;
 case 403:
  orange2Height= orange2Height-410;
 orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
 break;
 case 405:
  orange2Height= orange2Height-410;
 orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
 break;
 case 408:
  orange2Height= orange2Height-415;
 orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
 break;
 case 410:
  orange2Height= orange2Height-415;
 orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
 break;
 case 413:
  orange2Height= orange2Height-420;
 orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
 break;
 case 415:
  orange2Height= orange2Height-420;
 orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
 break;
 case 418:
  orange2Height= orange2Height-425;
 orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
 break;
 case 420:
  orange2Height= orange2Height-425;
 orange2_context.drawImage(orange2_img,orange2Lt,orange2Height,20,35);
 break;





}
orange2_sH=orange2Height-20;
}

