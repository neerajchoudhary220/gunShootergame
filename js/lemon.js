//=========lemon===========
function lemonFun()
{
 
  lemonSrc='img/lemon.png';

if(lemonImgCount.value=='0')
{
if(lemonLt<=148)
{
  lemonSrc='img/fire.gif';
  lemonImgCount.value=0;
  document.getElementById('lemonImgCount').value=0;
  //new Audio("sound/lemonExposiion.wav").play();
}

else 
{
  lemonSrc='img/lemon.png';
}


}

else if(lemonImgCount.value=='1'){
  lemonSrc='img/fire.gif';
 
  if(lemonLt<=148)
{
  
  lemonImgCount.value=0;
  document.getElementById('lemonImgCount').value=0;
  
}
  
}
  
  var lemon_context = canvas.getContext("2d");
  lemon_img = new Image();
  
  lemon_img.src=lemonSrc;
  //lemonLt=200;
  var lemonHeight =430;
  //var lemonHeight =200;
  //lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,25,50);
  //lemon_sH=lemonHeight-20;
  //document.getElementById('rH').value=lemon_Random;
switch( lemon_Random)
{
  case 0:
  lemonHeight= lemonHeight-5;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 3:
    lemonHeight= lemonHeight-10;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;

  case 5:
  lemonHeight= lemonHeight-10;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  
  case 8:
    lemonHeight= lemonHeight-15;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;

  case 10:
  lemonHeight= lemonHeight-15;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;

  case 13:
    lemonHeight= lemonHeight-20;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;

  case 15:
  lemonHeight= lemonHeight-20;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;

  case 18:
  lemonHeight= lemonHeight-25;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 20:
  lemonHeight= lemonHeight-25;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 23:
    lemonHeight= lemonHeight-30;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 25:
    lemonHeight= lemonHeight-30;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
    case 28:
      lemonHeight= lemonHeight-35;
     lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
      break;
    case 30:
   lemonHeight= lemonHeight-35;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
   break;

   case 33:
    lemonHeight= lemonHeight-40;
   lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
   case 35:
    lemonHeight= lemonHeight-40;
   lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
    case 38:
      lemonHeight= lemonHeight-45;
     lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
      break;
    case 40:
      lemonHeight= lemonHeight-45;
     lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
      break;
      case 43:
        lemonHeight= lemonHeight-50;
        lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
        break;
    
      case 45:
      lemonHeight= lemonHeight-50;
      lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
      break;
      case 50:
        lemonHeight= lemonHeight-55;
        lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
        break;
      case 50:
      lemonHeight= lemonHeight-55;
      lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
      break;
      case 53:
        lemonHeight= lemonHeight-60;
        lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
        break;
      case 55:
        lemonHeight= lemonHeight-60;
        lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
        break;
        case 58:
          lemonHeight= lemonHeight-65;
          lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
          break;   
        case 60:
          lemonHeight= lemonHeight-65;
          lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
          break;
          case 63:
            lemonHeight= lemonHeight-70;
           lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
            break;   
        case 65:
       lemonHeight= lemonHeight-70;
      lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
       break;
    
       case 68:
        lemonHeight= lemonHeight-75;
       lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
        break;  
       case 70:
        lemonHeight= lemonHeight-75;
       lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
        break;
        case 73:
          lemonHeight= lemonHeight-80;
           lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
            break;
       case 75:
        lemonHeight= lemonHeight-80;
         lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
          break;
          case 78:
     lemonHeight= lemonHeight-85;
      lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
       break;
       case 80:
     lemonHeight= lemonHeight-85;
      lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
       break;
       case 83:
        lemonHeight= lemonHeight-90;
         lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
          break;
       case 85:
     lemonHeight= lemonHeight-90;
      lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
       break;

       case 88:
        lemonHeight= lemonHeight-95;
         lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
          break;  
       case 90:
     lemonHeight= lemonHeight-95;
      lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
       break;
       case 93:
        lemonHeight= lemonHeight-100;
         lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
          break;
       case 95:
     lemonHeight= lemonHeight-100;
      lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
       break;
       case 98:
        lemonHeight= lemonHeight-105;
         lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
          break;
       case 100:
     lemonHeight= lemonHeight-105;
      lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
       break;
       case 103:
        lemonHeight= lemonHeight-110;
         lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
          break;
       case 105:
        lemonHeight= lemonHeight-110;
         lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
          break;
 
          case 108:
            lemonHeight= lemonHeight-115;
            lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
            break;
          case 110:
  lemonHeight= lemonHeight-115;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 113:
    lemonHeight= lemonHeight-120;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 115:
  lemonHeight= lemonHeight-120;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 118:
    lemonHeight= lemonHeight-125;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 120:
  lemonHeight= lemonHeight-125;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;

  case 123:
    lemonHeight= lemonHeight-130;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break; 
  case 125:
  lemonHeight= lemonHeight-130;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 128:
    lemonHeight= lemonHeight-135;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 130:
  lemonHeight= lemonHeight-135;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 133:
    lemonHeight= lemonHeight-140;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 135:
  lemonHeight= lemonHeight-140;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 138:
    lemonHeight= lemonHeight-145;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 140:
  lemonHeight= lemonHeight-145;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 143:
    lemonHeight= lemonHeight-150;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 145:
  lemonHeight= lemonHeight-150;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 148:
    lemonHeight= lemonHeight-155;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 150:
  lemonHeight= lemonHeight-155;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;

  case 155:
  lemonHeight= lemonHeight-160;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 158:
    lemonHeight= lemonHeight-165;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 160:
  lemonHeight= lemonHeight-165;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 163:
    lemonHeight= lemonHeight-170;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 165:
  lemonHeight= lemonHeight-170;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 168:
    lemonHeight= lemonHeight-175;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 170:
  lemonHeight= lemonHeight-175;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 173:
  lemonHeight= lemonHeight-180;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 175:
  lemonHeight= lemonHeight-180;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 178:
    lemonHeight= lemonHeight-185;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 180:
  lemonHeight= lemonHeight-185;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 183:
    lemonHeight= lemonHeight-190;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 185:
  lemonHeight= lemonHeight-190;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 188:
    lemonHeight= lemonHeight-195;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 190:
  lemonHeight= lemonHeight-195;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 193:
    lemonHeight= lemonHeight-200;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 195:
  lemonHeight= lemonHeight-200;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 198:
    lemonHeight= lemonHeight-205;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 200:
  lemonHeight= lemonHeight-205;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 203:
    lemonHeight= lemonHeight-210;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 205:
  lemonHeight= lemonHeight-210;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 208:
    lemonHeight= lemonHeight-215;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 210:
  lemonHeight= lemonHeight-215;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 213:
    lemonHeight= lemonHeight-220;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 215:
  lemonHeight= lemonHeight-220;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 218:
    lemonHeight= lemonHeight-225;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 220:
  lemonHeight= lemonHeight-225;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 223:
    lemonHeight= lemonHeight-230;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 225:
  lemonHeight= lemonHeight-230;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 228:
    lemonHeight= lemonHeight-235;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 230:
  lemonHeight= lemonHeight-235;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 233:
    lemonHeight= lemonHeight-240;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 235:
  lemonHeight= lemonHeight-240;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 238:
    lemonHeight= lemonHeight-245;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 240:
  lemonHeight= lemonHeight-245;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 243:
    lemonHeight= lemonHeight-250;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 245:
  lemonHeight= lemonHeight-250;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 248:
    lemonHeight= lemonHeight-255;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 250:
  lemonHeight= lemonHeight-255;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 253:
    lemonHeight= lemonHeight-260;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 255:
  lemonHeight= lemonHeight-260;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 258:
    lemonHeight= lemonHeight-265;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 260:
  lemonHeight= lemonHeight-265;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 263:
  lemonHeight= lemonHeight-270;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 265:
  lemonHeight= lemonHeight-270;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 268:
    lemonHeight= lemonHeight-275;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 270:
  lemonHeight= lemonHeight-275;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 273:
    lemonHeight= lemonHeight-280;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 275:
  lemonHeight= lemonHeight-280;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 278:
    lemonHeight= lemonHeight-285;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 280:
  lemonHeight= lemonHeight-285;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 283:
    lemonHeight= lemonHeight-290;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 285:
  lemonHeight= lemonHeight-290;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 288:
    lemonHeight= lemonHeight-295;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 290:
  lemonHeight= lemonHeight-295;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 293:
    lemonHeight= lemonHeight-300;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 295:
  lemonHeight= lemonHeight-300;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 298:
    lemonHeight= lemonHeight-305;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 300:
  lemonHeight= lemonHeight-305;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 303:
    lemonHeight= lemonHeight-310;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 305:
  lemonHeight= lemonHeight-310;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 308:
  lemonHeight= lemonHeight-315;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 310:
  lemonHeight= lemonHeight-315;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 313:
    lemonHeight= lemonHeight-320;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 315:
  lemonHeight= lemonHeight-320;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 318:
    lemonHeight= lemonHeight-325;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 320:
  lemonHeight= lemonHeight-325;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 323:
    lemonHeight= lemonHeight-330;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 325:
  lemonHeight= lemonHeight-330;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 328:
    lemonHeight= lemonHeight-335;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 330:
  lemonHeight= lemonHeight-335;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 333:
    lemonHeight= lemonHeight-340;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 335:
  lemonHeight= lemonHeight-340;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 338:
    lemonHeight= lemonHeight-345;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 340:
  lemonHeight= lemonHeight-345;
  lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
  break;
  case 343:
    lemonHeight= lemonHeight-350;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
  case 345:
    lemonHeight= lemonHeight-350;
    lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
    break;
    case 348:
      lemonHeight= lemonHeight-355;
      lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
      break;
    case 350:
      lemonHeight= lemonHeight-355;
      lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
      break;
      case 353:
        lemonHeight= lemonHeight-360;
       lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
       break;
      case 355:
  lemonHeight= lemonHeight-360;
 lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
 break;
 case 358:
  lemonHeight= lemonHeight-365;
 lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
 break;
 case 360:
  lemonHeight= lemonHeight-365;
 lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
 break;
 case 363:
  lemonHeight= lemonHeight-370;
 lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
 break;
 case 365:
  lemonHeight= lemonHeight-370;
 lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
 break;
 case 368:
  lemonHeight= lemonHeight-375;
 lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
 break;
 case 370:
  lemonHeight= lemonHeight-375;
 lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
 break;
 case 373:
  lemonHeight= lemonHeight-380;
 lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
 break;
 case 375:
  lemonHeight= lemonHeight-380;
 lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
 break;
 case 378:
  lemonHeight= lemonHeight-385;
 lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
 break;
 case 380:
  lemonHeight= lemonHeight-385;
 lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
 break;
 case 383:
  lemonHeight= lemonHeight-390;
 lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
 break;
 case 385:
  lemonHeight= lemonHeight-390;
 lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
 break;
 case 388:
  lemonHeight= lemonHeight-395;
 lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
 break;
 case 390:
  lemonHeight= lemonHeight-395;
 lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
 break;
 case 393:
  lemonHeight= lemonHeight-400;
 lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
 break;
 case 395:
  lemonHeight= lemonHeight-400;
 lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
 break;
 case 398:
  lemonHeight= lemonHeight-405;
 lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
 break;
 case 400:
  lemonHeight= lemonHeight-405;
 lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
 break;
 case 403:
  lemonHeight= lemonHeight-410;
 lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
 break;
 case 405:
  lemonHeight= lemonHeight-410;
 lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
 break;
 case 408:
  lemonHeight= lemonHeight-415;
 lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
 break;
 case 410:
  lemonHeight= lemonHeight-415;
 lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
 break;
 case 413:
  lemonHeight= lemonHeight-420;
 lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
 break;
 case 415:
  lemonHeight= lemonHeight-420;
 lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
 break;
 case 418:
  lemonHeight= lemonHeight-425;
 lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
 break;
 case 420:
  lemonHeight= lemonHeight-425;
 lemon_context.drawImage(lemon_img,lemonLt,lemonHeight,20,35);
 break;





}
lemon_sH=lemonHeight-20;
}

