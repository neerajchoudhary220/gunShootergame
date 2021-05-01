//=========apple===========
function appleFun()
{
 
  appleSrc='img/apple.png';

if(appleImgCount.value=='0')
{
if(appleLt<=148)
{
  appleSrc='img/fire.gif';
  appleImgCount.value=0;
  document.getElementById('appleImgCount').value=0;
  //new Audio("sound/appleExposiion.wav").play();
}

else 
{
  appleSrc='img/apple.png';
}


}

else if(appleImgCount.value=='1'){
  appleSrc='img/fire.gif';
 
  if(appleLt<=148)
{
  
  appleImgCount.value=0;
  document.getElementById('appleImgCount').value=0;
  
}
  
}
  
  var apple_context = canvas.getContext("2d");
  apple_img = new Image();
  
  apple_img.src=appleSrc;

  var appleHeight =430;
  //apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
switch( apple_Random)
{
  case 0:
  appleHeight= appleHeight-5;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 3:
    appleHeight= appleHeight-10;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;

  case 5:
  appleHeight= appleHeight-10;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  
  case 8:
    appleHeight= appleHeight-15;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;

  case 10:
  appleHeight= appleHeight-15;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;

  case 13:
    appleHeight= appleHeight-20;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;

  case 15:
  appleHeight= appleHeight-20;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;

  case 18:
  appleHeight= appleHeight-25;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 20:
  appleHeight= appleHeight-25;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 23:
    appleHeight= appleHeight-30;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 25:
    appleHeight= appleHeight-30;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
    case 28:
      appleHeight= appleHeight-35;
     apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
      break;
    case 30:
   appleHeight= appleHeight-35;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
   break;

   case 33:
    appleHeight= appleHeight-40;
   apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
   case 35:
    appleHeight= appleHeight-40;
   apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
    case 38:
      appleHeight= appleHeight-45;
     apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
      break;
    case 40:
      appleHeight= appleHeight-45;
     apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
      break;
      case 43:
        appleHeight= appleHeight-50;
        apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
        break;
    
      case 45:
      appleHeight= appleHeight-50;
      apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
      break;
      case 50:
        appleHeight= appleHeight-55;
        apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
        break;
      case 50:
      appleHeight= appleHeight-55;
      apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
      break;
      case 53:
        appleHeight= appleHeight-60;
        apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
        break;
      case 55:
        appleHeight= appleHeight-60;
        apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
        break;
        case 58:
          appleHeight= appleHeight-65;
          apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
          break;   
        case 60:
          appleHeight= appleHeight-65;
          apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
          break;
          case 63:
            appleHeight= appleHeight-70;
           apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
            break;   
        case 65:
       appleHeight= appleHeight-70;
      apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
       break;
    
       case 68:
        appleHeight= appleHeight-75;
       apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
        break;  
       case 70:
        appleHeight= appleHeight-75;
       apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
        break;
        case 73:
          appleHeight= appleHeight-80;
           apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
            break;
       case 75:
        appleHeight= appleHeight-80;
         apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
          break;
          case 78:
     appleHeight= appleHeight-85;
      apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
       break;
       case 80:
     appleHeight= appleHeight-85;
      apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
       break;
       case 83:
        appleHeight= appleHeight-90;
         apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
          break;
       case 85:
     appleHeight= appleHeight-90;
      apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
       break;

       case 88:
        appleHeight= appleHeight-95;
         apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
          break;  
       case 90:
     appleHeight= appleHeight-95;
      apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
       break;
       case 93:
        appleHeight= appleHeight-100;
         apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
          break;
       case 95:
     appleHeight= appleHeight-100;
      apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
       break;
       case 98:
        appleHeight= appleHeight-105;
         apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
          break;
       case 100:
     appleHeight= appleHeight-105;
      apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
       break;
       case 103:
        appleHeight= appleHeight-110;
         apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
          break;
       case 105:
        appleHeight= appleHeight-110;
         apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
          break;
 
          case 108:
            appleHeight= appleHeight-115;
            apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
            break;
          case 110:
  appleHeight= appleHeight-115;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 113:
    appleHeight= appleHeight-120;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 115:
  appleHeight= appleHeight-120;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 118:
    appleHeight= appleHeight-125;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 120:
  appleHeight= appleHeight-125;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;

  case 123:
    appleHeight= appleHeight-130;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break; 
  case 125:
  appleHeight= appleHeight-130;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 128:
    appleHeight= appleHeight-135;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 130:
  appleHeight= appleHeight-135;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 133:
    appleHeight= appleHeight-140;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 135:
  appleHeight= appleHeight-140;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 138:
    appleHeight= appleHeight-145;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 140:
  appleHeight= appleHeight-145;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 143:
    appleHeight= appleHeight-150;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 145:
  appleHeight= appleHeight-150;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 148:
    appleHeight= appleHeight-155;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 150:
  appleHeight= appleHeight-155;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;

  case 155:
  appleHeight= appleHeight-160;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 158:
    appleHeight= appleHeight-165;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 160:
  appleHeight= appleHeight-165;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 163:
    appleHeight= appleHeight-170;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 165:
  appleHeight= appleHeight-170;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 168:
    appleHeight= appleHeight-175;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 170:
  appleHeight= appleHeight-175;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 173:
  appleHeight= appleHeight-180;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 175:
  appleHeight= appleHeight-180;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 178:
    appleHeight= appleHeight-185;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 180:
  appleHeight= appleHeight-185;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 183:
    appleHeight= appleHeight-190;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 185:
  appleHeight= appleHeight-190;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 188:
    appleHeight= appleHeight-195;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 190:
  appleHeight= appleHeight-195;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 193:
    appleHeight= appleHeight-200;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 195:
  appleHeight= appleHeight-200;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 198:
    appleHeight= appleHeight-205;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 200:
  appleHeight= appleHeight-205;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 203:
    appleHeight= appleHeight-210;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 205:
  appleHeight= appleHeight-210;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 208:
    appleHeight= appleHeight-215;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 210:
  appleHeight= appleHeight-215;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 213:
    appleHeight= appleHeight-220;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 215:
  appleHeight= appleHeight-220;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 218:
    appleHeight= appleHeight-225;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 220:
  appleHeight= appleHeight-225;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 223:
    appleHeight= appleHeight-230;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 225:
  appleHeight= appleHeight-230;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 228:
    appleHeight= appleHeight-235;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 230:
  appleHeight= appleHeight-235;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 233:
    appleHeight= appleHeight-240;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 235:
  appleHeight= appleHeight-240;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 238:
    appleHeight= appleHeight-245;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 240:
  appleHeight= appleHeight-245;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 243:
    appleHeight= appleHeight-250;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 245:
  appleHeight= appleHeight-250;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 248:
    appleHeight= appleHeight-255;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 250:
  appleHeight= appleHeight-255;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 253:
    appleHeight= appleHeight-260;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 255:
  appleHeight= appleHeight-260;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 258:
    appleHeight= appleHeight-265;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 260:
  appleHeight= appleHeight-265;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 263:
  appleHeight= appleHeight-270;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 265:
  appleHeight= appleHeight-270;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 268:
    appleHeight= appleHeight-275;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 270:
  appleHeight= appleHeight-275;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 273:
    appleHeight= appleHeight-280;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 275:
  appleHeight= appleHeight-280;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 278:
    appleHeight= appleHeight-285;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 280:
  appleHeight= appleHeight-285;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 283:
    appleHeight= appleHeight-290;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 285:
  appleHeight= appleHeight-290;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 288:
    appleHeight= appleHeight-295;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 290:
  appleHeight= appleHeight-295;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 293:
    appleHeight= appleHeight-300;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 295:
  appleHeight= appleHeight-300;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 298:
    appleHeight= appleHeight-305;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 300:
  appleHeight= appleHeight-305;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 303:
    appleHeight= appleHeight-310;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 305:
  appleHeight= appleHeight-310;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 308:
  appleHeight= appleHeight-315;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 310:
  appleHeight= appleHeight-315;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 313:
    appleHeight= appleHeight-320;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 315:
  appleHeight= appleHeight-320;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 318:
    appleHeight= appleHeight-325;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 320:
  appleHeight= appleHeight-325;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 323:
    appleHeight= appleHeight-330;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 325:
  appleHeight= appleHeight-330;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 328:
    appleHeight= appleHeight-335;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 330:
  appleHeight= appleHeight-335;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 333:
    appleHeight= appleHeight-340;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 335:
  appleHeight= appleHeight-340;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 338:
    appleHeight= appleHeight-345;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 340:
  appleHeight= appleHeight-345;
  apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
  break;
  case 343:
    appleHeight= appleHeight-350;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
  case 345:
    appleHeight= appleHeight-350;
    apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
    break;
    case 348:
      appleHeight= appleHeight-355;
      apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
      break;
    case 350:
      appleHeight= appleHeight-355;
      apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
      break;
      case 353:
        appleHeight= appleHeight-360;
       apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
       break;
      case 355:
  appleHeight= appleHeight-360;
 apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
 break;
 case 358:
  appleHeight= appleHeight-365;
 apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
 break;
 case 360:
  appleHeight= appleHeight-365;
 apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
 break;
 case 363:
  appleHeight= appleHeight-370;
 apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
 break;
 case 365:
  appleHeight= appleHeight-370;
 apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
 break;
 case 368:
  appleHeight= appleHeight-375;
 apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
 break;
 case 370:
  appleHeight= appleHeight-375;
 apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
 break;
 case 373:
  appleHeight= appleHeight-380;
 apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
 break;
 case 375:
  appleHeight= appleHeight-380;
 apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
 break;
 case 378:
  appleHeight= appleHeight-385;
 apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
 break;
 case 380:
  appleHeight= appleHeight-385;
 apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
 break;
 case 383:
  appleHeight= appleHeight-390;
 apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
 break;
 case 385:
  appleHeight= appleHeight-390;
 apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
 break;
 case 388:
  appleHeight= appleHeight-395;
 apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
 break;
 case 390:
  appleHeight= appleHeight-395;
 apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
 break;
 case 393:
  appleHeight= appleHeight-400;
 apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
 break;
 case 395:
  appleHeight= appleHeight-400;
 apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
 break;
 case 398:
  appleHeight= appleHeight-405;
 apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
 break;
 case 400:
  appleHeight= appleHeight-405;
 apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
 break;
 case 403:
  appleHeight= appleHeight-410;
 apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
 break;
 case 405:
  appleHeight= appleHeight-410;
 apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
 break;
 case 408:
  appleHeight= appleHeight-415;
 apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
 break;
 case 410:
  appleHeight= appleHeight-415;
 apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
 break;
 case 413:
  appleHeight= appleHeight-420;
 apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
 break;
 case 415:
  appleHeight= appleHeight-420;
 apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
 break;
 case 418:
  appleHeight= appleHeight-425;
 apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
 break;
 case 420:
  appleHeight= appleHeight-425;
 apple_context.drawImage(apple_img,appleLt,appleHeight,20,35);
 break;





}
apple_sH=appleHeight-20;
}