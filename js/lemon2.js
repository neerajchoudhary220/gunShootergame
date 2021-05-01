//=========lemon2===========
function lemon2Fun()
{
 
  lemon2Src='img/lemon.png';

if(lemon2ImgCount.value=='0')
{
if(lemon2Lt<=148)
{
  lemon2Src='img/fire.gif';
  lemon2ImgCount.value=0;
  document.getElementById('lemon2ImgCount').value=0;
  //new Audio("sound/lemon2Exposiion.wav").play();
}

else 
{
  lemon2Src='img/lemon.png';
}


}

else if(lemon2ImgCount.value=='1'){
  lemon2Src='img/fire.gif';
 
  if(lemon2Lt<=148)
{
  
  lemon2ImgCount.value=0;
  document.getElementById('lemon2ImgCount').value=0;
  
}
  
}
  
  var lemon2_context = canvas.getContext("2d");
  lemon2_img = new Image();
  
  lemon2_img.src=lemon2Src;
  //lemon2Lt=200;
  var lemon2Height =430;
  //var lemon2Height =200;
  //lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,25,50);
  //lemon2_sH=lemon2Height-20;
  //document.getElementById('rH').value=lemon2_Random;
switch( lemon2_Random)
{
  case 0:
  lemon2Height= lemon2Height-5;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 3:
    lemon2Height= lemon2Height-10;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;

  case 5:
  lemon2Height= lemon2Height-10;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  
  case 8:
    lemon2Height= lemon2Height-15;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;

  case 10:
  lemon2Height= lemon2Height-15;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;

  case 13:
    lemon2Height= lemon2Height-20;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;

  case 15:
  lemon2Height= lemon2Height-20;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;

  case 18:
  lemon2Height= lemon2Height-25;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 20:
  lemon2Height= lemon2Height-25;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 23:
    lemon2Height= lemon2Height-30;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 25:
    lemon2Height= lemon2Height-30;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
    case 28:
      lemon2Height= lemon2Height-35;
     lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
      break;
    case 30:
   lemon2Height= lemon2Height-35;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
   break;

   case 33:
    lemon2Height= lemon2Height-40;
   lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
   case 35:
    lemon2Height= lemon2Height-40;
   lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
    case 38:
      lemon2Height= lemon2Height-45;
     lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
      break;
    case 40:
      lemon2Height= lemon2Height-45;
     lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
      break;
      case 43:
        lemon2Height= lemon2Height-50;
        lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
        break;
    
      case 45:
      lemon2Height= lemon2Height-50;
      lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
      break;
      case 50:
        lemon2Height= lemon2Height-55;
        lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
        break;
      case 50:
      lemon2Height= lemon2Height-55;
      lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
      break;
      case 53:
        lemon2Height= lemon2Height-60;
        lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
        break;
      case 55:
        lemon2Height= lemon2Height-60;
        lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
        break;
        case 58:
          lemon2Height= lemon2Height-65;
          lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
          break;   
        case 60:
          lemon2Height= lemon2Height-65;
          lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
          break;
          case 63:
            lemon2Height= lemon2Height-70;
           lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
            break;   
        case 65:
       lemon2Height= lemon2Height-70;
      lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
       break;
    
       case 68:
        lemon2Height= lemon2Height-75;
       lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
        break;  
       case 70:
        lemon2Height= lemon2Height-75;
       lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
        break;
        case 73:
          lemon2Height= lemon2Height-80;
           lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
            break;
       case 75:
        lemon2Height= lemon2Height-80;
         lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
          break;
          case 78:
     lemon2Height= lemon2Height-85;
      lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
       break;
       case 80:
     lemon2Height= lemon2Height-85;
      lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
       break;
       case 83:
        lemon2Height= lemon2Height-90;
         lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
          break;
       case 85:
     lemon2Height= lemon2Height-90;
      lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
       break;

       case 88:
        lemon2Height= lemon2Height-95;
         lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
          break;  
       case 90:
     lemon2Height= lemon2Height-95;
      lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
       break;
       case 93:
        lemon2Height= lemon2Height-100;
         lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
          break;
       case 95:
     lemon2Height= lemon2Height-100;
      lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
       break;
       case 98:
        lemon2Height= lemon2Height-105;
         lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
          break;
       case 100:
     lemon2Height= lemon2Height-105;
      lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
       break;
       case 103:
        lemon2Height= lemon2Height-110;
         lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
          break;
       case 105:
        lemon2Height= lemon2Height-110;
         lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
          break;
 
          case 108:
            lemon2Height= lemon2Height-115;
            lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
            break;
          case 110:
  lemon2Height= lemon2Height-115;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 113:
    lemon2Height= lemon2Height-120;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 115:
  lemon2Height= lemon2Height-120;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 118:
    lemon2Height= lemon2Height-125;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 120:
  lemon2Height= lemon2Height-125;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;

  case 123:
    lemon2Height= lemon2Height-130;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break; 
  case 125:
  lemon2Height= lemon2Height-130;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 128:
    lemon2Height= lemon2Height-135;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 130:
  lemon2Height= lemon2Height-135;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 133:
    lemon2Height= lemon2Height-140;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 135:
  lemon2Height= lemon2Height-140;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 138:
    lemon2Height= lemon2Height-145;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 140:
  lemon2Height= lemon2Height-145;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 143:
    lemon2Height= lemon2Height-150;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 145:
  lemon2Height= lemon2Height-150;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 148:
    lemon2Height= lemon2Height-155;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 150:
  lemon2Height= lemon2Height-155;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;

  case 155:
  lemon2Height= lemon2Height-160;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 158:
    lemon2Height= lemon2Height-165;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 160:
  lemon2Height= lemon2Height-165;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 163:
    lemon2Height= lemon2Height-170;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 165:
  lemon2Height= lemon2Height-170;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 168:
    lemon2Height= lemon2Height-175;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 170:
  lemon2Height= lemon2Height-175;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 173:
  lemon2Height= lemon2Height-180;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 175:
  lemon2Height= lemon2Height-180;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 178:
    lemon2Height= lemon2Height-185;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 180:
  lemon2Height= lemon2Height-185;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 183:
    lemon2Height= lemon2Height-190;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 185:
  lemon2Height= lemon2Height-190;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 188:
    lemon2Height= lemon2Height-195;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 190:
  lemon2Height= lemon2Height-195;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 193:
    lemon2Height= lemon2Height-200;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 195:
  lemon2Height= lemon2Height-200;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 198:
    lemon2Height= lemon2Height-205;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 200:
  lemon2Height= lemon2Height-205;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 203:
    lemon2Height= lemon2Height-210;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 205:
  lemon2Height= lemon2Height-210;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 208:
    lemon2Height= lemon2Height-215;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 210:
  lemon2Height= lemon2Height-215;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 213:
    lemon2Height= lemon2Height-220;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 215:
  lemon2Height= lemon2Height-220;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 218:
    lemon2Height= lemon2Height-225;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 220:
  lemon2Height= lemon2Height-225;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 223:
    lemon2Height= lemon2Height-230;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 225:
  lemon2Height= lemon2Height-230;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 228:
    lemon2Height= lemon2Height-235;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 230:
  lemon2Height= lemon2Height-235;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 233:
    lemon2Height= lemon2Height-240;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 235:
  lemon2Height= lemon2Height-240;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 238:
    lemon2Height= lemon2Height-245;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 240:
  lemon2Height= lemon2Height-245;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 243:
    lemon2Height= lemon2Height-250;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 245:
  lemon2Height= lemon2Height-250;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 248:
    lemon2Height= lemon2Height-255;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 250:
  lemon2Height= lemon2Height-255;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 253:
    lemon2Height= lemon2Height-260;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 255:
  lemon2Height= lemon2Height-260;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 258:
    lemon2Height= lemon2Height-265;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 260:
  lemon2Height= lemon2Height-265;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 263:
  lemon2Height= lemon2Height-270;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 265:
  lemon2Height= lemon2Height-270;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 268:
    lemon2Height= lemon2Height-275;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 270:
  lemon2Height= lemon2Height-275;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 273:
    lemon2Height= lemon2Height-280;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 275:
  lemon2Height= lemon2Height-280;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 278:
    lemon2Height= lemon2Height-285;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 280:
  lemon2Height= lemon2Height-285;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 283:
    lemon2Height= lemon2Height-290;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 285:
  lemon2Height= lemon2Height-290;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 288:
    lemon2Height= lemon2Height-295;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 290:
  lemon2Height= lemon2Height-295;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 293:
    lemon2Height= lemon2Height-300;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 295:
  lemon2Height= lemon2Height-300;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 298:
    lemon2Height= lemon2Height-305;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 300:
  lemon2Height= lemon2Height-305;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 303:
    lemon2Height= lemon2Height-310;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 305:
  lemon2Height= lemon2Height-310;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 308:
  lemon2Height= lemon2Height-315;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 310:
  lemon2Height= lemon2Height-315;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 313:
    lemon2Height= lemon2Height-320;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 315:
  lemon2Height= lemon2Height-320;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 318:
    lemon2Height= lemon2Height-325;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 320:
  lemon2Height= lemon2Height-325;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 323:
    lemon2Height= lemon2Height-330;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 325:
  lemon2Height= lemon2Height-330;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 328:
    lemon2Height= lemon2Height-335;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 330:
  lemon2Height= lemon2Height-335;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 333:
    lemon2Height= lemon2Height-340;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 335:
  lemon2Height= lemon2Height-340;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 338:
    lemon2Height= lemon2Height-345;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 340:
  lemon2Height= lemon2Height-345;
  lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
  break;
  case 343:
    lemon2Height= lemon2Height-350;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
  case 345:
    lemon2Height= lemon2Height-350;
    lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
    break;
    case 348:
      lemon2Height= lemon2Height-355;
      lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
      break;
    case 350:
      lemon2Height= lemon2Height-355;
      lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
      break;
      case 353:
        lemon2Height= lemon2Height-360;
       lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
       break;
      case 355:
  lemon2Height= lemon2Height-360;
 lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
 break;
 case 358:
  lemon2Height= lemon2Height-365;
 lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
 break;
 case 360:
  lemon2Height= lemon2Height-365;
 lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
 break;
 case 363:
  lemon2Height= lemon2Height-370;
 lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
 break;
 case 365:
  lemon2Height= lemon2Height-370;
 lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
 break;
 case 368:
  lemon2Height= lemon2Height-375;
 lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
 break;
 case 370:
  lemon2Height= lemon2Height-375;
 lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
 break;
 case 373:
  lemon2Height= lemon2Height-380;
 lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
 break;
 case 375:
  lemon2Height= lemon2Height-380;
 lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
 break;
 case 378:
  lemon2Height= lemon2Height-385;
 lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
 break;
 case 380:
  lemon2Height= lemon2Height-385;
 lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
 break;
 case 383:
  lemon2Height= lemon2Height-390;
 lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
 break;
 case 385:
  lemon2Height= lemon2Height-390;
 lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
 break;
 case 388:
  lemon2Height= lemon2Height-395;
 lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
 break;
 case 390:
  lemon2Height= lemon2Height-395;
 lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
 break;
 case 393:
  lemon2Height= lemon2Height-400;
 lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
 break;
 case 395:
  lemon2Height= lemon2Height-400;
 lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
 break;
 case 398:
  lemon2Height= lemon2Height-405;
 lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
 break;
 case 400:
  lemon2Height= lemon2Height-405;
 lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
 break;
 case 403:
  lemon2Height= lemon2Height-410;
 lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
 break;
 case 405:
  lemon2Height= lemon2Height-410;
 lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
 break;
 case 408:
  lemon2Height= lemon2Height-415;
 lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
 break;
 case 410:
  lemon2Height= lemon2Height-415;
 lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
 break;
 case 413:
  lemon2Height= lemon2Height-420;
 lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
 break;
 case 415:
  lemon2Height= lemon2Height-420;
 lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
 break;
 case 418:
  lemon2Height= lemon2Height-425;
 lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
 break;
 case 420:
  lemon2Height= lemon2Height-425;
 lemon2_context.drawImage(lemon2_img,lemon2Lt,lemon2Height,20,35);
 break;





}
lemon2_sH=lemon2Height-20;
}

