//=========apple1===========
function apple1Fun()
{
 
  apple1Src='img/apple.png';

if(apple1ImgCount.value=='0')
{
if(apple1Lt<=148)
{
  apple1Src='img/fire.gif';
  apple1ImgCount.value=0;
  document.getElementById('apple1ImgCount').value=0;
  //new Audio("sound/apple1Exposiion.wav").play();
}

else 
{
  apple1Src='img/apple.png';
}


}

else if(apple1ImgCount.value=='1'){
  apple1Src='img/fire.gif';
 
  if(apple1Lt<=148)
{
  
  apple1ImgCount.value=0;
  document.getElementById('apple1ImgCount').value=0;
  
}
  
}
  
  var apple1_context = canvas.getContext("2d");
  apple1_img = new Image();
  
  apple1_img.src=apple1Src;
  //apple1Lt =200;
  var apple1Height =430;
  //var apple1Height =300;
 //apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
 //apple1_sH=apple1Height-15;

  
switch( apple1_Random)
{
  case 0:
  apple1Height= apple1Height-5;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 3:
    apple1Height= apple1Height-10;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;

  case 5:
  apple1Height= apple1Height-10;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  
  case 8:
    apple1Height= apple1Height-15;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;

  case 10:
  apple1Height= apple1Height-15;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;

  case 13:
    apple1Height= apple1Height-20;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;

  case 15:
  apple1Height= apple1Height-20;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;

  case 18:
  apple1Height= apple1Height-25;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 20:
  apple1Height= apple1Height-25;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 23:
    apple1Height= apple1Height-30;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 25:
    apple1Height= apple1Height-30;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
    case 28:
      apple1Height= apple1Height-35;
     apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
      break;
    case 30:
   apple1Height= apple1Height-35;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
   break;

   case 33:
    apple1Height= apple1Height-40;
   apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
   case 35:
    apple1Height= apple1Height-40;
   apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
    case 38:
      apple1Height= apple1Height-45;
     apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
      break;
    case 40:
      apple1Height= apple1Height-45;
     apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
      break;
      case 43:
        apple1Height= apple1Height-50;
        apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
        break;
    
      case 45:
      apple1Height= apple1Height-50;
      apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
      break;
      case 50:
        apple1Height= apple1Height-55;
        apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
        break;
      case 50:
      apple1Height= apple1Height-55;
      apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
      break;
      case 53:
        apple1Height= apple1Height-60;
        apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
        break;
      case 55:
        apple1Height= apple1Height-60;
        apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
        break;
        case 58:
          apple1Height= apple1Height-65;
          apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
          break;   
        case 60:
          apple1Height= apple1Height-65;
          apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
          break;
          case 63:
            apple1Height= apple1Height-70;
           apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
            break;   
        case 65:
       apple1Height= apple1Height-70;
      apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
       break;
    
       case 68:
        apple1Height= apple1Height-75;
       apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
        break;  
       case 70:
        apple1Height= apple1Height-75;
       apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
        break;
        case 73:
          apple1Height= apple1Height-80;
           apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
            break;
       case 75:
        apple1Height= apple1Height-80;
         apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
          break;
          case 78:
     apple1Height= apple1Height-85;
      apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
       break;
       case 80:
     apple1Height= apple1Height-85;
      apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
       break;
       case 83:
        apple1Height= apple1Height-90;
         apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
          break;
       case 85:
     apple1Height= apple1Height-90;
      apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
       break;

       case 88:
        apple1Height= apple1Height-95;
         apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
          break;  
       case 90:
     apple1Height= apple1Height-95;
      apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
       break;
       case 93:
        apple1Height= apple1Height-100;
         apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
          break;
       case 95:
     apple1Height= apple1Height-100;
      apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
       break;
       case 98:
        apple1Height= apple1Height-105;
         apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
          break;
       case 100:
     apple1Height= apple1Height-105;
      apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
       break;
       case 103:
        apple1Height= apple1Height-110;
         apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
          break;
       case 105:
        apple1Height= apple1Height-110;
         apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
          break;
 
          case 108:
            apple1Height= apple1Height-115;
            apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
            break;
          case 110:
  apple1Height= apple1Height-115;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 113:
    apple1Height= apple1Height-120;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 115:
  apple1Height= apple1Height-120;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 118:
    apple1Height= apple1Height-125;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 120:
  apple1Height= apple1Height-125;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;

  case 123:
    apple1Height= apple1Height-130;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break; 
  case 125:
  apple1Height= apple1Height-130;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 128:
    apple1Height= apple1Height-135;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 130:
  apple1Height= apple1Height-135;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 133:
    apple1Height= apple1Height-140;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 135:
  apple1Height= apple1Height-140;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 138:
    apple1Height= apple1Height-145;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 140:
  apple1Height= apple1Height-145;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 143:
    apple1Height= apple1Height-150;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 145:
  apple1Height= apple1Height-150;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 148:
    apple1Height= apple1Height-155;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 150:
  apple1Height= apple1Height-155;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;

  case 155:
  apple1Height= apple1Height-160;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 158:
    apple1Height= apple1Height-165;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 160:
  apple1Height= apple1Height-165;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 163:
    apple1Height= apple1Height-170;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 165:
  apple1Height= apple1Height-170;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 168:
    apple1Height= apple1Height-175;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 170:
  apple1Height= apple1Height-175;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 173:
  apple1Height= apple1Height-180;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 175:
  apple1Height= apple1Height-180;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 178:
    apple1Height= apple1Height-185;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 180:
  apple1Height= apple1Height-185;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 183:
    apple1Height= apple1Height-190;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 185:
  apple1Height= apple1Height-190;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 188:
    apple1Height= apple1Height-195;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 190:
  apple1Height= apple1Height-195;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 193:
    apple1Height= apple1Height-200;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 195:
  apple1Height= apple1Height-200;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 198:
    apple1Height= apple1Height-205;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 200:
  apple1Height= apple1Height-205;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 203:
    apple1Height= apple1Height-210;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 205:
  apple1Height= apple1Height-210;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 208:
    apple1Height= apple1Height-215;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 210:
  apple1Height= apple1Height-215;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 213:
    apple1Height= apple1Height-220;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 215:
  apple1Height= apple1Height-220;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 218:
    apple1Height= apple1Height-225;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 220:
  apple1Height= apple1Height-225;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 223:
    apple1Height= apple1Height-230;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 225:
  apple1Height= apple1Height-230;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 228:
    apple1Height= apple1Height-235;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 230:
  apple1Height= apple1Height-235;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 233:
    apple1Height= apple1Height-240;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 235:
  apple1Height= apple1Height-240;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 238:
    apple1Height= apple1Height-245;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 240:
  apple1Height= apple1Height-245;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 243:
    apple1Height= apple1Height-250;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 245:
  apple1Height= apple1Height-250;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 248:
    apple1Height= apple1Height-255;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 250:
  apple1Height= apple1Height-255;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 253:
    apple1Height= apple1Height-260;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 255:
  apple1Height= apple1Height-260;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 258:
    apple1Height= apple1Height-265;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 260:
  apple1Height= apple1Height-265;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 263:
  apple1Height= apple1Height-270;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 265:
  apple1Height= apple1Height-270;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 268:
    apple1Height= apple1Height-275;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 270:
  apple1Height= apple1Height-275;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 273:
    apple1Height= apple1Height-280;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 275:
  apple1Height= apple1Height-280;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 278:
    apple1Height= apple1Height-285;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 280:
  apple1Height= apple1Height-285;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 283:
    apple1Height= apple1Height-290;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 285:
  apple1Height= apple1Height-290;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 288:
    apple1Height= apple1Height-295;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 290:
  apple1Height= apple1Height-295;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 293:
    apple1Height= apple1Height-300;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 295:
  apple1Height= apple1Height-300;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 298:
    apple1Height= apple1Height-305;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 300:
  apple1Height= apple1Height-305;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 303:
    apple1Height= apple1Height-310;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 305:
  apple1Height= apple1Height-310;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 308:
  apple1Height= apple1Height-315;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 310:
  apple1Height= apple1Height-315;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 313:
    apple1Height= apple1Height-320;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 315:
  apple1Height= apple1Height-320;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 318:
    apple1Height= apple1Height-325;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 320:
  apple1Height= apple1Height-325;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 323:
    apple1Height= apple1Height-330;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 325:
  apple1Height= apple1Height-330;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 328:
    apple1Height= apple1Height-335;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 330:
  apple1Height= apple1Height-335;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 333:
    apple1Height= apple1Height-340;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 335:
  apple1Height= apple1Height-340;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 338:
    apple1Height= apple1Height-345;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 340:
  apple1Height= apple1Height-345;
  apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
  break;
  case 343:
    apple1Height= apple1Height-350;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
  case 345:
    apple1Height= apple1Height-350;
    apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
    break;
    case 348:
      apple1Height= apple1Height-355;
      apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
      break;
    case 350:
      apple1Height= apple1Height-355;
      apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
      break;
      case 353:
        apple1Height= apple1Height-360;
       apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
       break;
      case 355:
  apple1Height= apple1Height-360;
 apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
 break;
 case 358:
  apple1Height= apple1Height-365;
 apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
 break;
 case 360:
  apple1Height= apple1Height-365;
 apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
 break;
 case 363:
  apple1Height= apple1Height-370;
 apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
 break;
 case 365:
  apple1Height= apple1Height-370;
 apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
 break;
 case 368:
  apple1Height= apple1Height-375;
 apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
 break;
 case 370:
  apple1Height= apple1Height-375;
 apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
 break;
 case 373:
  apple1Height= apple1Height-380;
 apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
 break;
 case 375:
  apple1Height= apple1Height-380;
 apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
 break;
 case 378:
  apple1Height= apple1Height-385;
 apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
 break;
 case 380:
  apple1Height= apple1Height-385;
 apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
 break;
 case 383:
  apple1Height= apple1Height-390;
 apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
 break;
 case 385:
  apple1Height= apple1Height-390;
 apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
 break;
 case 388:
  apple1Height= apple1Height-395;
 apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
 break;
 case 390:
  apple1Height= apple1Height-395;
 apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
 break;
 case 393:
  apple1Height= apple1Height-400;
 apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
 break;
 case 395:
  apple1Height= apple1Height-400;
 apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
 break;
 case 398:
  apple1Height= apple1Height-405;
 apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
 break;
 case 400:
  apple1Height= apple1Height-405;
 apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
 break;
 case 403:
  apple1Height= apple1Height-410;
 apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
 break;
 case 405:
  apple1Height= apple1Height-410;
 apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
 break;
 case 408:
  apple1Height= apple1Height-415;
 apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
 break;
 case 410:
  apple1Height= apple1Height-415;
 apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
 break;
 case 413:
  apple1Height= apple1Height-420;
 apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
 break;
 case 415:
  apple1Height= apple1Height-420;
 apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
 break;
 case 418:
  apple1Height= apple1Height-425;
 apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
 break;
 case 420:
  apple1Height= apple1Height-425;
 apple1_context.drawImage(apple1_img,apple1Lt,apple1Height,20,35);
 break;





}
apple1_sH=apple1Height-15;
}