//=========orange1===========
function orange1Fun()
{
 
  orange1Src='img/orange.png';

if(orange1ImgCount.value=='0')
{
if(orange1Lt<=148)
{
  orange1Src='img/fire.gif';
  orange1ImgCount.value=0;
  document.getElementById('orange1ImgCount').value=0;
  //new Audio("sound/orange1Exposiion.wav").play();
}

else 
{
  orange1Src='img/orange.png';
}


}

else if(orange1ImgCount.value=='1'){
  orange1Src='img/fire.gif';
 
  if(orange1Lt<=148)
{
  
  orange1ImgCount.value=0;
  document.getElementById('orange1ImgCount').value=0;
  
}
  
}
  
  var orange1_context = canvas.getContext("2d");
  orange1_img = new Image();
  
  orange1_img.src=orange1Src;
  //orange1Lt=200;
  var orange1Height =430;
  //var orange1Height =200;
  //orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,25,50);
  //orange1_sH=orange1Height-20;
  //document.getElementById('rH').value=orange1_Random;
  
switch( orange1_Random)
{
  case 0:
  orange1Height= orange1Height-5;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 3:
    orange1Height= orange1Height-10;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;

  case 5:
  orange1Height= orange1Height-10;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  
  case 8:
    orange1Height= orange1Height-15;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;

  case 10:
  orange1Height= orange1Height-15;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;

  case 13:
    orange1Height= orange1Height-20;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;

  case 15:
  orange1Height= orange1Height-20;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;

  case 18:
  orange1Height= orange1Height-25;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 20:
  orange1Height= orange1Height-25;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 23:
    orange1Height= orange1Height-30;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 25:
    orange1Height= orange1Height-30;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
    case 28:
      orange1Height= orange1Height-35;
     orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
      break;
    case 30:
   orange1Height= orange1Height-35;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
   break;

   case 33:
    orange1Height= orange1Height-40;
   orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
   case 35:
    orange1Height= orange1Height-40;
   orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
    case 38:
      orange1Height= orange1Height-45;
     orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
      break;
    case 40:
      orange1Height= orange1Height-45;
     orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
      break;
      case 43:
        orange1Height= orange1Height-50;
        orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
        break;
    
      case 45:
      orange1Height= orange1Height-50;
      orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
      break;
      case 50:
        orange1Height= orange1Height-55;
        orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
        break;
      case 50:
      orange1Height= orange1Height-55;
      orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
      break;
      case 53:
        orange1Height= orange1Height-60;
        orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
        break;
      case 55:
        orange1Height= orange1Height-60;
        orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
        break;
        case 58:
          orange1Height= orange1Height-65;
          orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
          break;   
        case 60:
          orange1Height= orange1Height-65;
          orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
          break;
          case 63:
            orange1Height= orange1Height-70;
           orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
            break;   
        case 65:
       orange1Height= orange1Height-70;
      orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
       break;
    
       case 68:
        orange1Height= orange1Height-75;
       orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
        break;  
       case 70:
        orange1Height= orange1Height-75;
       orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
        break;
        case 73:
          orange1Height= orange1Height-80;
           orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
            break;
       case 75:
        orange1Height= orange1Height-80;
         orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
          break;
          case 78:
     orange1Height= orange1Height-85;
      orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
       break;
       case 80:
     orange1Height= orange1Height-85;
      orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
       break;
       case 83:
        orange1Height= orange1Height-90;
         orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
          break;
       case 85:
     orange1Height= orange1Height-90;
      orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
       break;

       case 88:
        orange1Height= orange1Height-95;
         orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
          break;  
       case 90:
     orange1Height= orange1Height-95;
      orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
       break;
       case 93:
        orange1Height= orange1Height-100;
         orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
          break;
       case 95:
     orange1Height= orange1Height-100;
      orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
       break;
       case 98:
        orange1Height= orange1Height-105;
         orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
          break;
       case 100:
     orange1Height= orange1Height-105;
      orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
       break;
       case 103:
        orange1Height= orange1Height-110;
         orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
          break;
       case 105:
        orange1Height= orange1Height-110;
         orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
          break;
 
          case 108:
            orange1Height= orange1Height-115;
            orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
            break;
          case 110:
  orange1Height= orange1Height-115;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 113:
    orange1Height= orange1Height-120;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 115:
  orange1Height= orange1Height-120;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 118:
    orange1Height= orange1Height-125;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 120:
  orange1Height= orange1Height-125;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;

  case 123:
    orange1Height= orange1Height-130;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break; 
  case 125:
  orange1Height= orange1Height-130;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 128:
    orange1Height= orange1Height-135;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 130:
  orange1Height= orange1Height-135;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 133:
    orange1Height= orange1Height-140;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 135:
  orange1Height= orange1Height-140;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 138:
    orange1Height= orange1Height-145;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 140:
  orange1Height= orange1Height-145;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 143:
    orange1Height= orange1Height-150;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 145:
  orange1Height= orange1Height-150;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 148:
    orange1Height= orange1Height-155;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 150:
  orange1Height= orange1Height-155;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;

  case 155:
  orange1Height= orange1Height-160;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 158:
    orange1Height= orange1Height-165;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 160:
  orange1Height= orange1Height-165;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 163:
    orange1Height= orange1Height-170;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 165:
  orange1Height= orange1Height-170;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 168:
    orange1Height= orange1Height-175;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 170:
  orange1Height= orange1Height-175;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 173:
  orange1Height= orange1Height-180;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 175:
  orange1Height= orange1Height-180;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 178:
    orange1Height= orange1Height-185;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 180:
  orange1Height= orange1Height-185;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 183:
    orange1Height= orange1Height-190;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 185:
  orange1Height= orange1Height-190;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 188:
    orange1Height= orange1Height-195;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 190:
  orange1Height= orange1Height-195;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 193:
    orange1Height= orange1Height-200;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 195:
  orange1Height= orange1Height-200;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 198:
    orange1Height= orange1Height-205;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 200:
  orange1Height= orange1Height-205;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 203:
    orange1Height= orange1Height-210;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 205:
  orange1Height= orange1Height-210;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 208:
    orange1Height= orange1Height-215;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 210:
  orange1Height= orange1Height-215;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 213:
    orange1Height= orange1Height-220;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 215:
  orange1Height= orange1Height-220;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 218:
    orange1Height= orange1Height-225;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 220:
  orange1Height= orange1Height-225;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 223:
    orange1Height= orange1Height-230;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 225:
  orange1Height= orange1Height-230;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 228:
    orange1Height= orange1Height-235;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 230:
  orange1Height= orange1Height-235;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 233:
    orange1Height= orange1Height-240;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 235:
  orange1Height= orange1Height-240;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 238:
    orange1Height= orange1Height-245;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 240:
  orange1Height= orange1Height-245;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 243:
    orange1Height= orange1Height-250;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 245:
  orange1Height= orange1Height-250;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 248:
    orange1Height= orange1Height-255;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 250:
  orange1Height= orange1Height-255;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 253:
    orange1Height= orange1Height-260;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 255:
  orange1Height= orange1Height-260;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 258:
    orange1Height= orange1Height-265;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 260:
  orange1Height= orange1Height-265;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 263:
  orange1Height= orange1Height-270;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 265:
  orange1Height= orange1Height-270;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 268:
    orange1Height= orange1Height-275;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 270:
  orange1Height= orange1Height-275;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 273:
    orange1Height= orange1Height-280;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 275:
  orange1Height= orange1Height-280;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 278:
    orange1Height= orange1Height-285;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 280:
  orange1Height= orange1Height-285;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 283:
    orange1Height= orange1Height-290;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 285:
  orange1Height= orange1Height-290;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 288:
    orange1Height= orange1Height-295;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 290:
  orange1Height= orange1Height-295;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 293:
    orange1Height= orange1Height-300;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 295:
  orange1Height= orange1Height-300;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 298:
    orange1Height= orange1Height-305;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 300:
  orange1Height= orange1Height-305;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 303:
    orange1Height= orange1Height-310;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 305:
  orange1Height= orange1Height-310;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 308:
  orange1Height= orange1Height-315;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 310:
  orange1Height= orange1Height-315;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 313:
    orange1Height= orange1Height-320;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 315:
  orange1Height= orange1Height-320;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 318:
    orange1Height= orange1Height-325;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 320:
  orange1Height= orange1Height-325;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 323:
    orange1Height= orange1Height-330;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 325:
  orange1Height= orange1Height-330;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 328:
    orange1Height= orange1Height-335;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 330:
  orange1Height= orange1Height-335;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 333:
    orange1Height= orange1Height-340;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 335:
  orange1Height= orange1Height-340;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 338:
    orange1Height= orange1Height-345;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 340:
  orange1Height= orange1Height-345;
  orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
  break;
  case 343:
    orange1Height= orange1Height-350;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
  case 345:
    orange1Height= orange1Height-350;
    orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
    break;
    case 348:
      orange1Height= orange1Height-355;
      orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
      break;
    case 350:
      orange1Height= orange1Height-355;
      orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
      break;
      case 353:
        orange1Height= orange1Height-360;
       orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
       break;
      case 355:
  orange1Height= orange1Height-360;
 orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
 break;
 case 358:
  orange1Height= orange1Height-365;
 orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
 break;
 case 360:
  orange1Height= orange1Height-365;
 orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
 break;
 case 363:
  orange1Height= orange1Height-370;
 orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
 break;
 case 365:
  orange1Height= orange1Height-370;
 orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
 break;
 case 368:
  orange1Height= orange1Height-375;
 orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
 break;
 case 370:
  orange1Height= orange1Height-375;
 orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
 break;
 case 373:
  orange1Height= orange1Height-380;
 orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
 break;
 case 375:
  orange1Height= orange1Height-380;
 orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
 break;
 case 378:
  orange1Height= orange1Height-385;
 orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
 break;
 case 380:
  orange1Height= orange1Height-385;
 orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
 break;
 case 383:
  orange1Height= orange1Height-390;
 orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
 break;
 case 385:
  orange1Height= orange1Height-390;
 orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
 break;
 case 388:
  orange1Height= orange1Height-395;
 orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
 break;
 case 390:
  orange1Height= orange1Height-395;
 orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
 break;
 case 393:
  orange1Height= orange1Height-400;
 orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
 break;
 case 395:
  orange1Height= orange1Height-400;
 orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
 break;
 case 398:
  orange1Height= orange1Height-405;
 orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
 break;
 case 400:
  orange1Height= orange1Height-405;
 orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
 break;
 case 403:
  orange1Height= orange1Height-410;
 orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
 break;
 case 405:
  orange1Height= orange1Height-410;
 orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
 break;
 case 408:
  orange1Height= orange1Height-415;
 orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
 break;
 case 410:
  orange1Height= orange1Height-415;
 orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
 break;
 case 413:
  orange1Height= orange1Height-420;
 orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
 break;
 case 415:
  orange1Height= orange1Height-420;
 orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
 break;
 case 418:
  orange1Height= orange1Height-425;
 orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
 break;
 case 420:
  orange1Height= orange1Height-425;
 orange1_context.drawImage(orange1_img,orange1Lt,orange1Height,20,35);
 break;





}
orange1_sH=orange1Height-20;
}

