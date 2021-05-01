//=========apple2===========
function apple2Fun()
{
 
  apple2Src='img/apple.png';

if(apple2ImgCount.value=='0')
{
if(apple2Lt<=148)
{
  apple2Src='img/fire.gif';
  apple2ImgCount.value=0;
  document.getElementById('apple2ImgCount').value=0;
  //new Audio("sound/apple2Exposiion.wav").play();
}

else 
{
  apple2Src='img/apple.png';
}


}

else if(apple2ImgCount.value=='1'){
  apple2Src='img/fire.gif';
 
  if(apple2Lt<=148)
{
  
  apple2ImgCount.value=0;
  document.getElementById('apple2ImgCount').value=0;
  
}
  
}
  
  var apple2_context = canvas.getContext("2d");
  apple2_img = new Image();
  
  apple2_img.src=apple2Src;
  //apple2Lt =200;
  var apple2Height =430;
 // apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  
switch( apple2_Random)
{
  case 0:
  apple2Height= apple2Height-5;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 3:
    apple2Height= apple2Height-10;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;

  case 5:
  apple2Height= apple2Height-10;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  
  case 8:
    apple2Height= apple2Height-15;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;

  case 10:
  apple2Height= apple2Height-15;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;

  case 13:
    apple2Height= apple2Height-20;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;

  case 15:
  apple2Height= apple2Height-20;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;

  case 18:
  apple2Height= apple2Height-25;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 20:
  apple2Height= apple2Height-25;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 23:
    apple2Height= apple2Height-30;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 25:
    apple2Height= apple2Height-30;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
    case 28:
      apple2Height= apple2Height-35;
     apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
      break;
    case 30:
   apple2Height= apple2Height-35;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
   break;

   case 33:
    apple2Height= apple2Height-40;
   apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
   case 35:
    apple2Height= apple2Height-40;
   apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
    case 38:
      apple2Height= apple2Height-45;
     apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
      break;
    case 40:
      apple2Height= apple2Height-45;
     apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
      break;
      case 43:
        apple2Height= apple2Height-50;
        apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
        break;
    
      case 45:
      apple2Height= apple2Height-50;
      apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
      break;
      case 50:
        apple2Height= apple2Height-55;
        apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
        break;
      case 50:
      apple2Height= apple2Height-55;
      apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
      break;
      case 53:
        apple2Height= apple2Height-60;
        apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
        break;
      case 55:
        apple2Height= apple2Height-60;
        apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
        break;
        case 58:
          apple2Height= apple2Height-65;
          apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
          break;   
        case 60:
          apple2Height= apple2Height-65;
          apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
          break;
          case 63:
            apple2Height= apple2Height-70;
           apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
            break;   
        case 65:
       apple2Height= apple2Height-70;
      apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
       break;
    
       case 68:
        apple2Height= apple2Height-75;
       apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
        break;  
       case 70:
        apple2Height= apple2Height-75;
       apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
        break;
        case 73:
          apple2Height= apple2Height-80;
           apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
            break;
       case 75:
        apple2Height= apple2Height-80;
         apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
          break;
          case 78:
     apple2Height= apple2Height-85;
      apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
       break;
       case 80:
     apple2Height= apple2Height-85;
      apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
       break;
       case 83:
        apple2Height= apple2Height-90;
         apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
          break;
       case 85:
     apple2Height= apple2Height-90;
      apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
       break;

       case 88:
        apple2Height= apple2Height-95;
         apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
          break;  
       case 90:
     apple2Height= apple2Height-95;
      apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
       break;
       case 93:
        apple2Height= apple2Height-100;
         apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
          break;
       case 95:
     apple2Height= apple2Height-100;
      apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
       break;
       case 98:
        apple2Height= apple2Height-105;
         apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
          break;
       case 100:
     apple2Height= apple2Height-105;
      apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
       break;
       case 103:
        apple2Height= apple2Height-110;
         apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
          break;
       case 105:
        apple2Height= apple2Height-110;
         apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
          break;
 
          case 108:
            apple2Height= apple2Height-115;
            apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
            break;
          case 110:
  apple2Height= apple2Height-115;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 113:
    apple2Height= apple2Height-120;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 115:
  apple2Height= apple2Height-120;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 118:
    apple2Height= apple2Height-125;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 120:
  apple2Height= apple2Height-125;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;

  case 123:
    apple2Height= apple2Height-130;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break; 
  case 125:
  apple2Height= apple2Height-130;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 128:
    apple2Height= apple2Height-135;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 130:
  apple2Height= apple2Height-135;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 133:
    apple2Height= apple2Height-140;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 135:
  apple2Height= apple2Height-140;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 138:
    apple2Height= apple2Height-145;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 140:
  apple2Height= apple2Height-145;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 143:
    apple2Height= apple2Height-150;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 145:
  apple2Height= apple2Height-150;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 148:
    apple2Height= apple2Height-155;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 150:
  apple2Height= apple2Height-155;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;

  case 155:
  apple2Height= apple2Height-160;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 158:
    apple2Height= apple2Height-165;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 160:
  apple2Height= apple2Height-165;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 163:
    apple2Height= apple2Height-170;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 165:
  apple2Height= apple2Height-170;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 168:
    apple2Height= apple2Height-175;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 170:
  apple2Height= apple2Height-175;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 173:
  apple2Height= apple2Height-180;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 175:
  apple2Height= apple2Height-180;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 178:
    apple2Height= apple2Height-185;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 180:
  apple2Height= apple2Height-185;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 183:
    apple2Height= apple2Height-190;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 185:
  apple2Height= apple2Height-190;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 188:
    apple2Height= apple2Height-195;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 190:
  apple2Height= apple2Height-195;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 193:
    apple2Height= apple2Height-200;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 195:
  apple2Height= apple2Height-200;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 198:
    apple2Height= apple2Height-205;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 200:
  apple2Height= apple2Height-205;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 203:
    apple2Height= apple2Height-210;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 205:
  apple2Height= apple2Height-210;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 208:
    apple2Height= apple2Height-215;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 210:
  apple2Height= apple2Height-215;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 213:
    apple2Height= apple2Height-220;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 215:
  apple2Height= apple2Height-220;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 218:
    apple2Height= apple2Height-225;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 220:
  apple2Height= apple2Height-225;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 223:
    apple2Height= apple2Height-230;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 225:
  apple2Height= apple2Height-230;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 228:
    apple2Height= apple2Height-235;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 230:
  apple2Height= apple2Height-235;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 233:
    apple2Height= apple2Height-240;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 235:
  apple2Height= apple2Height-240;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 238:
    apple2Height= apple2Height-245;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 240:
  apple2Height= apple2Height-245;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 243:
    apple2Height= apple2Height-250;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 245:
  apple2Height= apple2Height-250;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 248:
    apple2Height= apple2Height-255;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 250:
  apple2Height= apple2Height-255;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 253:
    apple2Height= apple2Height-260;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 255:
  apple2Height= apple2Height-260;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 258:
    apple2Height= apple2Height-265;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 260:
  apple2Height= apple2Height-265;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 263:
  apple2Height= apple2Height-270;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 265:
  apple2Height= apple2Height-270;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 268:
    apple2Height= apple2Height-275;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 270:
  apple2Height= apple2Height-275;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 273:
    apple2Height= apple2Height-280;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 275:
  apple2Height= apple2Height-280;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 278:
    apple2Height= apple2Height-285;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 280:
  apple2Height= apple2Height-285;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 283:
    apple2Height= apple2Height-290;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 285:
  apple2Height= apple2Height-290;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 288:
    apple2Height= apple2Height-295;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 290:
  apple2Height= apple2Height-295;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 293:
    apple2Height= apple2Height-300;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 295:
  apple2Height= apple2Height-300;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 298:
    apple2Height= apple2Height-305;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 300:
  apple2Height= apple2Height-305;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 303:
    apple2Height= apple2Height-310;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 305:
  apple2Height= apple2Height-310;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 308:
  apple2Height= apple2Height-315;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 310:
  apple2Height= apple2Height-315;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 313:
    apple2Height= apple2Height-320;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 315:
  apple2Height= apple2Height-320;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 318:
    apple2Height= apple2Height-325;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 320:
  apple2Height= apple2Height-325;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 323:
    apple2Height= apple2Height-330;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 325:
  apple2Height= apple2Height-330;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 328:
    apple2Height= apple2Height-335;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 330:
  apple2Height= apple2Height-335;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 333:
    apple2Height= apple2Height-340;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 335:
  apple2Height= apple2Height-340;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 338:
    apple2Height= apple2Height-345;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 340:
  apple2Height= apple2Height-345;
  apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
  break;
  case 343:
    apple2Height= apple2Height-350;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
  case 345:
    apple2Height= apple2Height-350;
    apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
    break;
    case 348:
      apple2Height= apple2Height-355;
      apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
      break;
    case 350:
      apple2Height= apple2Height-355;
      apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
      break;
      case 353:
        apple2Height= apple2Height-360;
       apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
       break;
      case 355:
  apple2Height= apple2Height-360;
 apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
 break;
 case 358:
  apple2Height= apple2Height-365;
 apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
 break;
 case 360:
  apple2Height= apple2Height-365;
 apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
 break;
 case 363:
  apple2Height= apple2Height-370;
 apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
 break;
 case 365:
  apple2Height= apple2Height-370;
 apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
 break;
 case 368:
  apple2Height= apple2Height-375;
 apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
 break;
 case 370:
  apple2Height= apple2Height-375;
 apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
 break;
 case 373:
  apple2Height= apple2Height-380;
 apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
 break;
 case 375:
  apple2Height= apple2Height-380;
 apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
 break;
 case 378:
  apple2Height= apple2Height-385;
 apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
 break;
 case 380:
  apple2Height= apple2Height-385;
 apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
 break;
 case 383:
  apple2Height= apple2Height-390;
 apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
 break;
 case 385:
  apple2Height= apple2Height-390;
 apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
 break;
 case 388:
  apple2Height= apple2Height-395;
 apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
 break;
 case 390:
  apple2Height= apple2Height-395;
 apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
 break;
 case 393:
  apple2Height= apple2Height-400;
 apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
 break;
 case 395:
  apple2Height= apple2Height-400;
 apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
 break;
 case 398:
  apple2Height= apple2Height-405;
 apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
 break;
 case 400:
  apple2Height= apple2Height-405;
 apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
 break;
 case 403:
  apple2Height= apple2Height-410;
 apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
 break;
 case 405:
  apple2Height= apple2Height-410;
 apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
 break;
 case 408:
  apple2Height= apple2Height-415;
 apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
 break;
 case 410:
  apple2Height= apple2Height-415;
 apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
 break;
 case 413:
  apple2Height= apple2Height-420;
 apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
 break;
 case 415:
  apple2Height= apple2Height-420;
 apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
 break;
 case 418:
  apple2Height= apple2Height-425;
 apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
 break;
 case 420:
  apple2Height= apple2Height-425;
 apple2_context.drawImage(apple2_img,apple2Lt,apple2Height,20,35);
 break;





}
apple2_sH=apple2Height-20;
}