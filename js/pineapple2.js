//=========pineapple2===========
function pineapple2Fun()
{
 
  pineapple2Src='img/pineapple.png';

if(pineapple2ImgCount.value=='0')
{
if(pineapple2Lt<=148)
{
  pineapple2Src='img/fire.gif';
  pineapple2ImgCount.value=0;
  document.getElementById('pineapple2ImgCount').value=0;
  //new Audio("sound/pineapple2Exposiion.wav").play();
}

else 
{
  pineapple2Src='img/pineapple.png';
}


}

else if(pineapple2ImgCount.value=='1'){
  pineapple2Src='img/fire.gif';
 
  if(pineapple2Lt<=148)
{
  
  pineapple2ImgCount.value=0;
  document.getElementById('pineapple2ImgCount').value=0;
  
}
  
}
  
  var pineapple2_context = canvas.getContext("2d");
  pineapple2_img = new Image();
  
  pineapple2_img.src=pineapple2Src;
  //pineapple2Lt=200;
  var pineapple2Height =430;
  //var pineapple2Height =200;
  //pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,25,50);
  //pineapple2_sH=pineapple2Height-20;
  //document.getElementById('rH').value=pineapple2_Random;
  
switch( pineapple2_Random)
{
  case 0:
  pineapple2Height= pineapple2Height-5;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 3:
    pineapple2Height= pineapple2Height-10;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;

  case 5:
  pineapple2Height= pineapple2Height-10;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  
  case 8:
    pineapple2Height= pineapple2Height-15;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;

  case 10:
  pineapple2Height= pineapple2Height-15;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;

  case 13:
    pineapple2Height= pineapple2Height-20;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;

  case 15:
  pineapple2Height= pineapple2Height-20;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;

  case 18:
  pineapple2Height= pineapple2Height-25;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 20:
  pineapple2Height= pineapple2Height-25;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 23:
    pineapple2Height= pineapple2Height-30;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 25:
    pineapple2Height= pineapple2Height-30;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
    case 28:
      pineapple2Height= pineapple2Height-35;
     pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
      break;
    case 30:
   pineapple2Height= pineapple2Height-35;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
   break;

   case 33:
    pineapple2Height= pineapple2Height-40;
   pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
   case 35:
    pineapple2Height= pineapple2Height-40;
   pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
    case 38:
      pineapple2Height= pineapple2Height-45;
     pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
      break;
    case 40:
      pineapple2Height= pineapple2Height-45;
     pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
      break;
      case 43:
        pineapple2Height= pineapple2Height-50;
        pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
        break;
    
      case 45:
      pineapple2Height= pineapple2Height-50;
      pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
      break;
      case 50:
        pineapple2Height= pineapple2Height-55;
        pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
        break;
      case 50:
      pineapple2Height= pineapple2Height-55;
      pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
      break;
      case 53:
        pineapple2Height= pineapple2Height-60;
        pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
        break;
      case 55:
        pineapple2Height= pineapple2Height-60;
        pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
        break;
        case 58:
          pineapple2Height= pineapple2Height-65;
          pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
          break;   
        case 60:
          pineapple2Height= pineapple2Height-65;
          pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
          break;
          case 63:
            pineapple2Height= pineapple2Height-70;
           pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
            break;   
        case 65:
       pineapple2Height= pineapple2Height-70;
      pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
       break;
    
       case 68:
        pineapple2Height= pineapple2Height-75;
       pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
        break;  
       case 70:
        pineapple2Height= pineapple2Height-75;
       pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
        break;
        case 73:
          pineapple2Height= pineapple2Height-80;
           pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
            break;
       case 75:
        pineapple2Height= pineapple2Height-80;
         pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
          break;
          case 78:
     pineapple2Height= pineapple2Height-85;
      pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
       break;
       case 80:
     pineapple2Height= pineapple2Height-85;
      pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
       break;
       case 83:
        pineapple2Height= pineapple2Height-90;
         pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
          break;
       case 85:
     pineapple2Height= pineapple2Height-90;
      pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
       break;

       case 88:
        pineapple2Height= pineapple2Height-95;
         pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
          break;  
       case 90:
     pineapple2Height= pineapple2Height-95;
      pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
       break;
       case 93:
        pineapple2Height= pineapple2Height-100;
         pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
          break;
       case 95:
     pineapple2Height= pineapple2Height-100;
      pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
       break;
       case 98:
        pineapple2Height= pineapple2Height-105;
         pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
          break;
       case 100:
     pineapple2Height= pineapple2Height-105;
      pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
       break;
       case 103:
        pineapple2Height= pineapple2Height-110;
         pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
          break;
       case 105:
        pineapple2Height= pineapple2Height-110;
         pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
          break;
 
          case 108:
            pineapple2Height= pineapple2Height-115;
            pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
            break;
          case 110:
  pineapple2Height= pineapple2Height-115;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 113:
    pineapple2Height= pineapple2Height-120;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 115:
  pineapple2Height= pineapple2Height-120;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 118:
    pineapple2Height= pineapple2Height-125;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 120:
  pineapple2Height= pineapple2Height-125;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;

  case 123:
    pineapple2Height= pineapple2Height-130;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break; 
  case 125:
  pineapple2Height= pineapple2Height-130;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 128:
    pineapple2Height= pineapple2Height-135;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 130:
  pineapple2Height= pineapple2Height-135;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 133:
    pineapple2Height= pineapple2Height-140;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 135:
  pineapple2Height= pineapple2Height-140;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 138:
    pineapple2Height= pineapple2Height-145;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 140:
  pineapple2Height= pineapple2Height-145;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 143:
    pineapple2Height= pineapple2Height-150;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 145:
  pineapple2Height= pineapple2Height-150;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 148:
    pineapple2Height= pineapple2Height-155;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 150:
  pineapple2Height= pineapple2Height-155;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;

  case 155:
  pineapple2Height= pineapple2Height-160;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 158:
    pineapple2Height= pineapple2Height-165;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 160:
  pineapple2Height= pineapple2Height-165;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 163:
    pineapple2Height= pineapple2Height-170;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 165:
  pineapple2Height= pineapple2Height-170;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 168:
    pineapple2Height= pineapple2Height-175;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 170:
  pineapple2Height= pineapple2Height-175;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 173:
  pineapple2Height= pineapple2Height-180;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 175:
  pineapple2Height= pineapple2Height-180;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 178:
    pineapple2Height= pineapple2Height-185;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 180:
  pineapple2Height= pineapple2Height-185;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 183:
    pineapple2Height= pineapple2Height-190;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 185:
  pineapple2Height= pineapple2Height-190;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 188:
    pineapple2Height= pineapple2Height-195;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 190:
  pineapple2Height= pineapple2Height-195;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 193:
    pineapple2Height= pineapple2Height-200;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 195:
  pineapple2Height= pineapple2Height-200;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 198:
    pineapple2Height= pineapple2Height-205;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 200:
  pineapple2Height= pineapple2Height-205;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 203:
    pineapple2Height= pineapple2Height-210;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 205:
  pineapple2Height= pineapple2Height-210;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 208:
    pineapple2Height= pineapple2Height-215;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 210:
  pineapple2Height= pineapple2Height-215;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 213:
    pineapple2Height= pineapple2Height-220;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 215:
  pineapple2Height= pineapple2Height-220;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 218:
    pineapple2Height= pineapple2Height-225;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 220:
  pineapple2Height= pineapple2Height-225;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 223:
    pineapple2Height= pineapple2Height-230;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 225:
  pineapple2Height= pineapple2Height-230;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 228:
    pineapple2Height= pineapple2Height-235;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 230:
  pineapple2Height= pineapple2Height-235;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 233:
    pineapple2Height= pineapple2Height-240;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 235:
  pineapple2Height= pineapple2Height-240;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 238:
    pineapple2Height= pineapple2Height-245;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 240:
  pineapple2Height= pineapple2Height-245;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 243:
    pineapple2Height= pineapple2Height-250;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 245:
  pineapple2Height= pineapple2Height-250;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 248:
    pineapple2Height= pineapple2Height-255;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 250:
  pineapple2Height= pineapple2Height-255;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 253:
    pineapple2Height= pineapple2Height-260;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 255:
  pineapple2Height= pineapple2Height-260;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 258:
    pineapple2Height= pineapple2Height-265;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 260:
  pineapple2Height= pineapple2Height-265;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 263:
  pineapple2Height= pineapple2Height-270;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 265:
  pineapple2Height= pineapple2Height-270;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 268:
    pineapple2Height= pineapple2Height-275;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 270:
  pineapple2Height= pineapple2Height-275;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 273:
    pineapple2Height= pineapple2Height-280;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 275:
  pineapple2Height= pineapple2Height-280;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 278:
    pineapple2Height= pineapple2Height-285;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 280:
  pineapple2Height= pineapple2Height-285;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 283:
    pineapple2Height= pineapple2Height-290;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 285:
  pineapple2Height= pineapple2Height-290;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 288:
    pineapple2Height= pineapple2Height-295;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 290:
  pineapple2Height= pineapple2Height-295;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 293:
    pineapple2Height= pineapple2Height-300;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 295:
  pineapple2Height= pineapple2Height-300;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 298:
    pineapple2Height= pineapple2Height-305;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 300:
  pineapple2Height= pineapple2Height-305;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 303:
    pineapple2Height= pineapple2Height-310;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 305:
  pineapple2Height= pineapple2Height-310;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 308:
  pineapple2Height= pineapple2Height-315;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 310:
  pineapple2Height= pineapple2Height-315;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 313:
    pineapple2Height= pineapple2Height-320;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 315:
  pineapple2Height= pineapple2Height-320;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 318:
    pineapple2Height= pineapple2Height-325;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 320:
  pineapple2Height= pineapple2Height-325;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 323:
    pineapple2Height= pineapple2Height-330;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 325:
  pineapple2Height= pineapple2Height-330;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 328:
    pineapple2Height= pineapple2Height-335;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 330:
  pineapple2Height= pineapple2Height-335;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 333:
    pineapple2Height= pineapple2Height-340;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 335:
  pineapple2Height= pineapple2Height-340;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 338:
    pineapple2Height= pineapple2Height-345;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 340:
  pineapple2Height= pineapple2Height-345;
  pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
  break;
  case 343:
    pineapple2Height= pineapple2Height-350;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
  case 345:
    pineapple2Height= pineapple2Height-350;
    pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
    break;
    case 348:
      pineapple2Height= pineapple2Height-355;
      pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
      break;
    case 350:
      pineapple2Height= pineapple2Height-355;
      pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
      break;
      case 353:
        pineapple2Height= pineapple2Height-360;
       pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
       break;
      case 355:
  pineapple2Height= pineapple2Height-360;
 pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
 break;
 case 358:
  pineapple2Height= pineapple2Height-365;
 pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
 break;
 case 360:
  pineapple2Height= pineapple2Height-365;
 pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
 break;
 case 363:
  pineapple2Height= pineapple2Height-370;
 pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
 break;
 case 365:
  pineapple2Height= pineapple2Height-370;
 pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
 break;
 case 368:
  pineapple2Height= pineapple2Height-375;
 pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
 break;
 case 370:
  pineapple2Height= pineapple2Height-375;
 pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
 break;
 case 373:
  pineapple2Height= pineapple2Height-380;
 pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
 break;
 case 375:
  pineapple2Height= pineapple2Height-380;
 pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
 break;
 case 378:
  pineapple2Height= pineapple2Height-385;
 pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
 break;
 case 380:
  pineapple2Height= pineapple2Height-385;
 pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
 break;
 case 383:
  pineapple2Height= pineapple2Height-390;
 pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
 break;
 case 385:
  pineapple2Height= pineapple2Height-390;
 pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
 break;
 case 388:
  pineapple2Height= pineapple2Height-395;
 pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
 break;
 case 390:
  pineapple2Height= pineapple2Height-395;
 pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
 break;
 case 393:
  pineapple2Height= pineapple2Height-400;
 pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
 break;
 case 395:
  pineapple2Height= pineapple2Height-400;
 pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
 break;
 case 398:
  pineapple2Height= pineapple2Height-405;
 pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
 break;
 case 400:
  pineapple2Height= pineapple2Height-405;
 pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
 break;
 case 403:
  pineapple2Height= pineapple2Height-410;
 pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
 break;
 case 405:
  pineapple2Height= pineapple2Height-410;
 pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
 break;
 case 408:
  pineapple2Height= pineapple2Height-415;
 pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
 break;
 case 410:
  pineapple2Height= pineapple2Height-415;
 pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
 break;
 case 413:
  pineapple2Height= pineapple2Height-420;
 pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
 break;
 case 415:
  pineapple2Height= pineapple2Height-420;
 pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
 break;
 case 418:
  pineapple2Height= pineapple2Height-425;
 pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
 break;
 case 420:
  pineapple2Height= pineapple2Height-425;
 pineapple2_context.drawImage(pineapple2_img,pineapple2Lt,pineapple2Height,20,35);
 break;


}
pineapple2_sH=pineapple2Height-20;
}

