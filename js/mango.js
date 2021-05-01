//=========mango===========
function mangoFun()
{
 
  mangoSrc='img/mango.png';

if(mangoImgCount.value=='0')
{
if(mangoLt<=148)
{
  mangoSrc='img/fire.gif';
  mangoImgCount.value=0;
  document.getElementById('mangoImgCount').value=0;
  //new Audio("sound/mangoExposiion.wav").play();
}

else 
{
  mangoSrc='img/mango.png';
}


}

else if(mangoImgCount.value=='1'){
  mangoSrc='img/fire.gif';
 
  if(mangoLt<=148)
{
  
  mangoImgCount.value=0;
  document.getElementById('mangoImgCount').value=0;
  
}
  
}
  
  var mango_context = canvas.getContext("2d");
  mango_img = new Image();
  
  mango_img.src=mangoSrc;
  //mangoLt=200;
  var mangoHeight =430;
  //var mangoHeight =200;
  //mango_context.drawImage(mango_img,mangoLt,mangoHeight,25,50);
  //mango_sH=mangoHeight-15;
  ///document.getElementById('rH').value=mango_Random;
  
switch( mango_Random)
{
  case 0:
  mangoHeight= mangoHeight-5;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 3:
    mangoHeight= mangoHeight-10;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;

  case 5:
  mangoHeight= mangoHeight-10;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  
  case 8:
    mangoHeight= mangoHeight-15;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;

  case 10:
  mangoHeight= mangoHeight-15;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;

  case 13:
    mangoHeight= mangoHeight-20;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;

  case 15:
  mangoHeight= mangoHeight-20;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;

  case 18:
  mangoHeight= mangoHeight-25;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 20:
  mangoHeight= mangoHeight-25;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 23:
    mangoHeight= mangoHeight-30;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 25:
    mangoHeight= mangoHeight-30;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
    case 28:
      mangoHeight= mangoHeight-35;
     mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
      break;
    case 30:
   mangoHeight= mangoHeight-35;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
   break;

   case 33:
    mangoHeight= mangoHeight-40;
   mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
   case 35:
    mangoHeight= mangoHeight-40;
   mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
    case 38:
      mangoHeight= mangoHeight-45;
     mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
      break;
    case 40:
      mangoHeight= mangoHeight-45;
     mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
      break;
      case 43:
        mangoHeight= mangoHeight-50;
        mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
        break;
    
      case 45:
      mangoHeight= mangoHeight-50;
      mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
      break;
      case 50:
        mangoHeight= mangoHeight-55;
        mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
        break;
      case 50:
      mangoHeight= mangoHeight-55;
      mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
      break;
      case 53:
        mangoHeight= mangoHeight-60;
        mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
        break;
      case 55:
        mangoHeight= mangoHeight-60;
        mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
        break;
        case 58:
          mangoHeight= mangoHeight-65;
          mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
          break;   
        case 60:
          mangoHeight= mangoHeight-65;
          mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
          break;
          case 63:
            mangoHeight= mangoHeight-70;
           mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
            break;   
        case 65:
       mangoHeight= mangoHeight-70;
      mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
       break;
    
       case 68:
        mangoHeight= mangoHeight-75;
       mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
        break;  
       case 70:
        mangoHeight= mangoHeight-75;
       mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
        break;
        case 73:
          mangoHeight= mangoHeight-80;
           mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
            break;
       case 75:
        mangoHeight= mangoHeight-80;
         mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
          break;
          case 78:
     mangoHeight= mangoHeight-85;
      mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
       break;
       case 80:
     mangoHeight= mangoHeight-85;
      mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
       break;
       case 83:
        mangoHeight= mangoHeight-90;
         mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
          break;
       case 85:
     mangoHeight= mangoHeight-90;
      mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
       break;

       case 88:
        mangoHeight= mangoHeight-95;
         mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
          break;  
       case 90:
     mangoHeight= mangoHeight-95;
      mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
       break;
       case 93:
        mangoHeight= mangoHeight-100;
         mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
          break;
       case 95:
     mangoHeight= mangoHeight-100;
      mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
       break;
       case 98:
        mangoHeight= mangoHeight-105;
         mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
          break;
       case 100:
     mangoHeight= mangoHeight-105;
      mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
       break;
       case 103:
        mangoHeight= mangoHeight-110;
         mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
          break;
       case 105:
        mangoHeight= mangoHeight-110;
         mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
          break;
 
          case 108:
            mangoHeight= mangoHeight-115;
            mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
            break;
          case 110:
  mangoHeight= mangoHeight-115;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 113:
    mangoHeight= mangoHeight-120;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 115:
  mangoHeight= mangoHeight-120;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 118:
    mangoHeight= mangoHeight-125;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 120:
  mangoHeight= mangoHeight-125;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;

  case 123:
    mangoHeight= mangoHeight-130;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break; 
  case 125:
  mangoHeight= mangoHeight-130;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 128:
    mangoHeight= mangoHeight-135;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 130:
  mangoHeight= mangoHeight-135;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 133:
    mangoHeight= mangoHeight-140;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 135:
  mangoHeight= mangoHeight-140;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 138:
    mangoHeight= mangoHeight-145;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 140:
  mangoHeight= mangoHeight-145;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 143:
    mangoHeight= mangoHeight-150;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 145:
  mangoHeight= mangoHeight-150;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 148:
    mangoHeight= mangoHeight-155;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 150:
  mangoHeight= mangoHeight-155;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;

  case 155:
  mangoHeight= mangoHeight-160;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 158:
    mangoHeight= mangoHeight-165;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 160:
  mangoHeight= mangoHeight-165;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 163:
    mangoHeight= mangoHeight-170;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 165:
  mangoHeight= mangoHeight-170;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 168:
    mangoHeight= mangoHeight-175;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 170:
  mangoHeight= mangoHeight-175;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 173:
  mangoHeight= mangoHeight-180;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 175:
  mangoHeight= mangoHeight-180;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 178:
    mangoHeight= mangoHeight-185;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 180:
  mangoHeight= mangoHeight-185;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 183:
    mangoHeight= mangoHeight-190;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 185:
  mangoHeight= mangoHeight-190;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 188:
    mangoHeight= mangoHeight-195;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 190:
  mangoHeight= mangoHeight-195;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 193:
    mangoHeight= mangoHeight-200;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 195:
  mangoHeight= mangoHeight-200;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 198:
    mangoHeight= mangoHeight-205;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 200:
  mangoHeight= mangoHeight-205;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 203:
    mangoHeight= mangoHeight-210;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 205:
  mangoHeight= mangoHeight-210;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 208:
    mangoHeight= mangoHeight-215;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 210:
  mangoHeight= mangoHeight-215;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 213:
    mangoHeight= mangoHeight-220;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 215:
  mangoHeight= mangoHeight-220;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 218:
    mangoHeight= mangoHeight-225;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 220:
  mangoHeight= mangoHeight-225;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 223:
    mangoHeight= mangoHeight-230;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 225:
  mangoHeight= mangoHeight-230;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 228:
    mangoHeight= mangoHeight-235;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 230:
  mangoHeight= mangoHeight-235;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 233:
    mangoHeight= mangoHeight-240;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 235:
  mangoHeight= mangoHeight-240;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 238:
    mangoHeight= mangoHeight-245;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 240:
  mangoHeight= mangoHeight-245;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 243:
    mangoHeight= mangoHeight-250;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 245:
  mangoHeight= mangoHeight-250;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 248:
    mangoHeight= mangoHeight-255;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 250:
  mangoHeight= mangoHeight-255;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 253:
    mangoHeight= mangoHeight-260;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 255:
  mangoHeight= mangoHeight-260;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 258:
    mangoHeight= mangoHeight-265;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 260:
  mangoHeight= mangoHeight-265;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 263:
  mangoHeight= mangoHeight-270;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 265:
  mangoHeight= mangoHeight-270;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 268:
    mangoHeight= mangoHeight-275;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 270:
  mangoHeight= mangoHeight-275;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 273:
    mangoHeight= mangoHeight-280;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 275:
  mangoHeight= mangoHeight-280;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 278:
    mangoHeight= mangoHeight-285;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 280:
  mangoHeight= mangoHeight-285;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 283:
    mangoHeight= mangoHeight-290;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 285:
  mangoHeight= mangoHeight-290;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 288:
    mangoHeight= mangoHeight-295;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 290:
  mangoHeight= mangoHeight-295;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 293:
    mangoHeight= mangoHeight-300;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 295:
  mangoHeight= mangoHeight-300;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 298:
    mangoHeight= mangoHeight-305;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 300:
  mangoHeight= mangoHeight-305;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 303:
    mangoHeight= mangoHeight-310;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 305:
  mangoHeight= mangoHeight-310;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 308:
  mangoHeight= mangoHeight-315;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 310:
  mangoHeight= mangoHeight-315;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 313:
    mangoHeight= mangoHeight-320;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 315:
  mangoHeight= mangoHeight-320;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 318:
    mangoHeight= mangoHeight-325;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 320:
  mangoHeight= mangoHeight-325;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 323:
    mangoHeight= mangoHeight-330;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 325:
  mangoHeight= mangoHeight-330;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 328:
    mangoHeight= mangoHeight-335;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 330:
  mangoHeight= mangoHeight-335;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 333:
    mangoHeight= mangoHeight-340;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 335:
  mangoHeight= mangoHeight-340;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 338:
    mangoHeight= mangoHeight-345;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 340:
  mangoHeight= mangoHeight-345;
  mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
  break;
  case 343:
    mangoHeight= mangoHeight-350;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
  case 345:
    mangoHeight= mangoHeight-350;
    mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
    break;
    case 348:
      mangoHeight= mangoHeight-355;
      mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
      break;
    case 350:
      mangoHeight= mangoHeight-355;
      mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
      break;
      case 353:
        mangoHeight= mangoHeight-360;
       mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
       break;
      case 355:
  mangoHeight= mangoHeight-360;
 mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
 break;
 case 358:
  mangoHeight= mangoHeight-365;
 mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
 break;
 case 360:
  mangoHeight= mangoHeight-365;
 mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
 break;
 case 363:
  mangoHeight= mangoHeight-370;
 mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
 break;
 case 365:
  mangoHeight= mangoHeight-370;
 mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
 break;
 case 368:
  mangoHeight= mangoHeight-375;
 mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
 break;
 case 370:
  mangoHeight= mangoHeight-375;
 mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
 break;
 case 373:
  mangoHeight= mangoHeight-380;
 mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
 break;
 case 375:
  mangoHeight= mangoHeight-380;
 mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
 break;
 case 378:
  mangoHeight= mangoHeight-385;
 mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
 break;
 case 380:
  mangoHeight= mangoHeight-385;
 mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
 break;
 case 383:
  mangoHeight= mangoHeight-390;
 mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
 break;
 case 385:
  mangoHeight= mangoHeight-390;
 mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
 break;
 case 388:
  mangoHeight= mangoHeight-395;
 mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
 break;
 case 390:
  mangoHeight= mangoHeight-395;
 mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
 break;
 case 393:
  mangoHeight= mangoHeight-400;
 mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
 break;
 case 395:
  mangoHeight= mangoHeight-400;
 mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
 break;
 case 398:
  mangoHeight= mangoHeight-405;
 mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
 break;
 case 400:
  mangoHeight= mangoHeight-405;
 mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
 break;
 case 403:
  mangoHeight= mangoHeight-410;
 mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
 break;
 case 405:
  mangoHeight= mangoHeight-410;
 mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
 break;
 case 408:
  mangoHeight= mangoHeight-415;
 mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
 break;
 case 410:
  mangoHeight= mangoHeight-415;
 mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
 break;
 case 413:
  mangoHeight= mangoHeight-420;
 mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
 break;
 case 415:
  mangoHeight= mangoHeight-420;
 mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
 break;
 case 418:
  mangoHeight= mangoHeight-425;
 mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
 break;
 case 420:
  mangoHeight= mangoHeight-425;
 mango_context.drawImage(mango_img,mangoLt,mangoHeight,20,35);
 break;





}
mango_sH=mangoHeight-15;
}

