//=========lemon1===========
function lemon1Fun()
{
 
  lemon1Src='img/lemon.png';

if(lemon1ImgCount.value=='0')
{
if(lemon1Lt<=148)
{
  lemon1Src='img/fire.gif';
  lemon1ImgCount.value=0;
  document.getElementById('lemon1ImgCount').value=0;
  //new Audio("sound/lemon1Exposiion.wav").play();
}

else 
{
  lemon1Src='img/lemon.png';
}


}

else if(lemon1ImgCount.value=='1'){
  lemon1Src='img/fire.gif';
 
  if(lemon1Lt<=148)
{
  
  lemon1ImgCount.value=0;
  document.getElementById('lemon1ImgCount').value=0;
  
}
  
}
  
  var lemon1_context = canvas.getContext("2d");
  lemon1_img = new Image();
  
  lemon1_img.src=lemon1Src;
  //lemon1Lt=200;
  var lemon1Height =430;
  //var lemon1Height =200;
  //lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,25,50);
  //lemon1_sH=lemon1Height-20;
  //document.getElementById('rH').value=lemon1_Random;
switch( lemon1_Random)
{
  case 0:
  lemon1Height= lemon1Height-5;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 3:
    lemon1Height= lemon1Height-10;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;

  case 5:
  lemon1Height= lemon1Height-10;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  
  case 8:
    lemon1Height= lemon1Height-15;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;

  case 10:
  lemon1Height= lemon1Height-15;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;

  case 13:
    lemon1Height= lemon1Height-20;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;

  case 15:
  lemon1Height= lemon1Height-20;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;

  case 18:
  lemon1Height= lemon1Height-25;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 20:
  lemon1Height= lemon1Height-25;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 23:
    lemon1Height= lemon1Height-30;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 25:
    lemon1Height= lemon1Height-30;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
    case 28:
      lemon1Height= lemon1Height-35;
     lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
      break;
    case 30:
   lemon1Height= lemon1Height-35;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
   break;

   case 33:
    lemon1Height= lemon1Height-40;
   lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
   case 35:
    lemon1Height= lemon1Height-40;
   lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
    case 38:
      lemon1Height= lemon1Height-45;
     lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
      break;
    case 40:
      lemon1Height= lemon1Height-45;
     lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
      break;
      case 43:
        lemon1Height= lemon1Height-50;
        lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
        break;
    
      case 45:
      lemon1Height= lemon1Height-50;
      lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
      break;
      case 50:
        lemon1Height= lemon1Height-55;
        lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
        break;
      case 50:
      lemon1Height= lemon1Height-55;
      lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
      break;
      case 53:
        lemon1Height= lemon1Height-60;
        lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
        break;
      case 55:
        lemon1Height= lemon1Height-60;
        lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
        break;
        case 58:
          lemon1Height= lemon1Height-65;
          lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
          break;   
        case 60:
          lemon1Height= lemon1Height-65;
          lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
          break;
          case 63:
            lemon1Height= lemon1Height-70;
           lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
            break;   
        case 65:
       lemon1Height= lemon1Height-70;
      lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
       break;
    
       case 68:
        lemon1Height= lemon1Height-75;
       lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
        break;  
       case 70:
        lemon1Height= lemon1Height-75;
       lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
        break;
        case 73:
          lemon1Height= lemon1Height-80;
           lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
            break;
       case 75:
        lemon1Height= lemon1Height-80;
         lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
          break;
          case 78:
     lemon1Height= lemon1Height-85;
      lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
       break;
       case 80:
     lemon1Height= lemon1Height-85;
      lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
       break;
       case 83:
        lemon1Height= lemon1Height-90;
         lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
          break;
       case 85:
     lemon1Height= lemon1Height-90;
      lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
       break;

       case 88:
        lemon1Height= lemon1Height-95;
         lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
          break;  
       case 90:
     lemon1Height= lemon1Height-95;
      lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
       break;
       case 93:
        lemon1Height= lemon1Height-100;
         lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
          break;
       case 95:
     lemon1Height= lemon1Height-100;
      lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
       break;
       case 98:
        lemon1Height= lemon1Height-105;
         lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
          break;
       case 100:
     lemon1Height= lemon1Height-105;
      lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
       break;
       case 103:
        lemon1Height= lemon1Height-110;
         lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
          break;
       case 105:
        lemon1Height= lemon1Height-110;
         lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
          break;
 
          case 108:
            lemon1Height= lemon1Height-115;
            lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
            break;
          case 110:
  lemon1Height= lemon1Height-115;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 113:
    lemon1Height= lemon1Height-120;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 115:
  lemon1Height= lemon1Height-120;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 118:
    lemon1Height= lemon1Height-125;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 120:
  lemon1Height= lemon1Height-125;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;

  case 123:
    lemon1Height= lemon1Height-130;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break; 
  case 125:
  lemon1Height= lemon1Height-130;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 128:
    lemon1Height= lemon1Height-135;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 130:
  lemon1Height= lemon1Height-135;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 133:
    lemon1Height= lemon1Height-140;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 135:
  lemon1Height= lemon1Height-140;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 138:
    lemon1Height= lemon1Height-145;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 140:
  lemon1Height= lemon1Height-145;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 143:
    lemon1Height= lemon1Height-150;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 145:
  lemon1Height= lemon1Height-150;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 148:
    lemon1Height= lemon1Height-155;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 150:
  lemon1Height= lemon1Height-155;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;

  case 155:
  lemon1Height= lemon1Height-160;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 158:
    lemon1Height= lemon1Height-165;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 160:
  lemon1Height= lemon1Height-165;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 163:
    lemon1Height= lemon1Height-170;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 165:
  lemon1Height= lemon1Height-170;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 168:
    lemon1Height= lemon1Height-175;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 170:
  lemon1Height= lemon1Height-175;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 173:
  lemon1Height= lemon1Height-180;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 175:
  lemon1Height= lemon1Height-180;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 178:
    lemon1Height= lemon1Height-185;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 180:
  lemon1Height= lemon1Height-185;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 183:
    lemon1Height= lemon1Height-190;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 185:
  lemon1Height= lemon1Height-190;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 188:
    lemon1Height= lemon1Height-195;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 190:
  lemon1Height= lemon1Height-195;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 193:
    lemon1Height= lemon1Height-200;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 195:
  lemon1Height= lemon1Height-200;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 198:
    lemon1Height= lemon1Height-205;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 200:
  lemon1Height= lemon1Height-205;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 203:
    lemon1Height= lemon1Height-210;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 205:
  lemon1Height= lemon1Height-210;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 208:
    lemon1Height= lemon1Height-215;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 210:
  lemon1Height= lemon1Height-215;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 213:
    lemon1Height= lemon1Height-220;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 215:
  lemon1Height= lemon1Height-220;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 218:
    lemon1Height= lemon1Height-225;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 220:
  lemon1Height= lemon1Height-225;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 223:
    lemon1Height= lemon1Height-230;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 225:
  lemon1Height= lemon1Height-230;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 228:
    lemon1Height= lemon1Height-235;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 230:
  lemon1Height= lemon1Height-235;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 233:
    lemon1Height= lemon1Height-240;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 235:
  lemon1Height= lemon1Height-240;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 238:
    lemon1Height= lemon1Height-245;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 240:
  lemon1Height= lemon1Height-245;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 243:
    lemon1Height= lemon1Height-250;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 245:
  lemon1Height= lemon1Height-250;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 248:
    lemon1Height= lemon1Height-255;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 250:
  lemon1Height= lemon1Height-255;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 253:
    lemon1Height= lemon1Height-260;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 255:
  lemon1Height= lemon1Height-260;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 258:
    lemon1Height= lemon1Height-265;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 260:
  lemon1Height= lemon1Height-265;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 263:
  lemon1Height= lemon1Height-270;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 265:
  lemon1Height= lemon1Height-270;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 268:
    lemon1Height= lemon1Height-275;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 270:
  lemon1Height= lemon1Height-275;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 273:
    lemon1Height= lemon1Height-280;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 275:
  lemon1Height= lemon1Height-280;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 278:
    lemon1Height= lemon1Height-285;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 280:
  lemon1Height= lemon1Height-285;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 283:
    lemon1Height= lemon1Height-290;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 285:
  lemon1Height= lemon1Height-290;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 288:
    lemon1Height= lemon1Height-295;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 290:
  lemon1Height= lemon1Height-295;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 293:
    lemon1Height= lemon1Height-300;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 295:
  lemon1Height= lemon1Height-300;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 298:
    lemon1Height= lemon1Height-305;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 300:
  lemon1Height= lemon1Height-305;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 303:
    lemon1Height= lemon1Height-310;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 305:
  lemon1Height= lemon1Height-310;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 308:
  lemon1Height= lemon1Height-315;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 310:
  lemon1Height= lemon1Height-315;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 313:
    lemon1Height= lemon1Height-320;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 315:
  lemon1Height= lemon1Height-320;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 318:
    lemon1Height= lemon1Height-325;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 320:
  lemon1Height= lemon1Height-325;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 323:
    lemon1Height= lemon1Height-330;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 325:
  lemon1Height= lemon1Height-330;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 328:
    lemon1Height= lemon1Height-335;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 330:
  lemon1Height= lemon1Height-335;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 333:
    lemon1Height= lemon1Height-340;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 335:
  lemon1Height= lemon1Height-340;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 338:
    lemon1Height= lemon1Height-345;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 340:
  lemon1Height= lemon1Height-345;
  lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
  break;
  case 343:
    lemon1Height= lemon1Height-350;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
  case 345:
    lemon1Height= lemon1Height-350;
    lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
    break;
    case 348:
      lemon1Height= lemon1Height-355;
      lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
      break;
    case 350:
      lemon1Height= lemon1Height-355;
      lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
      break;
      case 353:
        lemon1Height= lemon1Height-360;
       lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
       break;
      case 355:
  lemon1Height= lemon1Height-360;
 lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
 break;
 case 358:
  lemon1Height= lemon1Height-365;
 lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
 break;
 case 360:
  lemon1Height= lemon1Height-365;
 lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
 break;
 case 363:
  lemon1Height= lemon1Height-370;
 lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
 break;
 case 365:
  lemon1Height= lemon1Height-370;
 lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
 break;
 case 368:
  lemon1Height= lemon1Height-375;
 lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
 break;
 case 370:
  lemon1Height= lemon1Height-375;
 lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
 break;
 case 373:
  lemon1Height= lemon1Height-380;
 lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
 break;
 case 375:
  lemon1Height= lemon1Height-380;
 lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
 break;
 case 378:
  lemon1Height= lemon1Height-385;
 lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
 break;
 case 380:
  lemon1Height= lemon1Height-385;
 lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
 break;
 case 383:
  lemon1Height= lemon1Height-390;
 lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
 break;
 case 385:
  lemon1Height= lemon1Height-390;
 lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
 break;
 case 388:
  lemon1Height= lemon1Height-395;
 lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
 break;
 case 390:
  lemon1Height= lemon1Height-395;
 lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
 break;
 case 393:
  lemon1Height= lemon1Height-400;
 lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
 break;
 case 395:
  lemon1Height= lemon1Height-400;
 lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
 break;
 case 398:
  lemon1Height= lemon1Height-405;
 lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
 break;
 case 400:
  lemon1Height= lemon1Height-405;
 lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
 break;
 case 403:
  lemon1Height= lemon1Height-410;
 lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
 break;
 case 405:
  lemon1Height= lemon1Height-410;
 lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
 break;
 case 408:
  lemon1Height= lemon1Height-415;
 lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
 break;
 case 410:
  lemon1Height= lemon1Height-415;
 lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
 break;
 case 413:
  lemon1Height= lemon1Height-420;
 lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
 break;
 case 415:
  lemon1Height= lemon1Height-420;
 lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
 break;
 case 418:
  lemon1Height= lemon1Height-425;
 lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
 break;
 case 420:
  lemon1Height= lemon1Height-425;
 lemon1_context.drawImage(lemon1_img,lemon1Lt,lemon1Height,20,35);
 break;





}
lemon1_sH=lemon1Height-20;
}

