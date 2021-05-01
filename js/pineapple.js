//=========pineapple===========
function pineappleFun()
{
 
  pineappleSrc='img/pineapple.png';

if(pineappleImgCount.value=='0')
{
if(pineappleLt<=148)
{
  pineappleSrc='img/fire.gif';
  pineappleImgCount.value=0;
  document.getElementById('pineappleImgCount').value=0;
  //new Audio("sound/pineappleExposiion.wav").play();
}

else 
{
  pineappleSrc='img/pineapple.png';
}


}

else if(pineappleImgCount.value=='1'){
  pineappleSrc='img/fire.gif';
 
  if(pineappleLt<=148)
{
  
  pineappleImgCount.value=0;
  document.getElementById('pineappleImgCount').value=0;
  
}
  
}
  
  var pineapple_context = canvas.getContext("2d");
  pineapple_img = new Image();
  
  pineapple_img.src=pineappleSrc;
  //pineappleLt=200;
  var pineappleHeight =430;
  //var pineappleHeight =200;
  //pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,25,50);
  //pineapple_sH=pineappleHeight-20;
  //document.getElementById('rH').value=pineapple_Random;
  
switch( pineapple_Random)
{
  case 0:
  pineappleHeight= pineappleHeight-5;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 3:
    pineappleHeight= pineappleHeight-10;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;

  case 5:
  pineappleHeight= pineappleHeight-10;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  
  case 8:
    pineappleHeight= pineappleHeight-15;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;

  case 10:
  pineappleHeight= pineappleHeight-15;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;

  case 13:
    pineappleHeight= pineappleHeight-20;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;

  case 15:
  pineappleHeight= pineappleHeight-20;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;

  case 18:
  pineappleHeight= pineappleHeight-25;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 20:
  pineappleHeight= pineappleHeight-25;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 23:
    pineappleHeight= pineappleHeight-30;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 25:
    pineappleHeight= pineappleHeight-30;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
    case 28:
      pineappleHeight= pineappleHeight-35;
     pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
      break;
    case 30:
   pineappleHeight= pineappleHeight-35;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
   break;

   case 33:
    pineappleHeight= pineappleHeight-40;
   pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
   case 35:
    pineappleHeight= pineappleHeight-40;
   pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
    case 38:
      pineappleHeight= pineappleHeight-45;
     pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
      break;
    case 40:
      pineappleHeight= pineappleHeight-45;
     pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
      break;
      case 43:
        pineappleHeight= pineappleHeight-50;
        pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
        break;
    
      case 45:
      pineappleHeight= pineappleHeight-50;
      pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
      break;
      case 50:
        pineappleHeight= pineappleHeight-55;
        pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
        break;
      case 50:
      pineappleHeight= pineappleHeight-55;
      pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
      break;
      case 53:
        pineappleHeight= pineappleHeight-60;
        pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
        break;
      case 55:
        pineappleHeight= pineappleHeight-60;
        pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
        break;
        case 58:
          pineappleHeight= pineappleHeight-65;
          pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
          break;   
        case 60:
          pineappleHeight= pineappleHeight-65;
          pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
          break;
          case 63:
            pineappleHeight= pineappleHeight-70;
           pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
            break;   
        case 65:
       pineappleHeight= pineappleHeight-70;
      pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
       break;
    
       case 68:
        pineappleHeight= pineappleHeight-75;
       pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
        break;  
       case 70:
        pineappleHeight= pineappleHeight-75;
       pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
        break;
        case 73:
          pineappleHeight= pineappleHeight-80;
           pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
            break;
       case 75:
        pineappleHeight= pineappleHeight-80;
         pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
          break;
          case 78:
     pineappleHeight= pineappleHeight-85;
      pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
       break;
       case 80:
     pineappleHeight= pineappleHeight-85;
      pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
       break;
       case 83:
        pineappleHeight= pineappleHeight-90;
         pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
          break;
       case 85:
     pineappleHeight= pineappleHeight-90;
      pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
       break;

       case 88:
        pineappleHeight= pineappleHeight-95;
         pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
          break;  
       case 90:
     pineappleHeight= pineappleHeight-95;
      pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
       break;
       case 93:
        pineappleHeight= pineappleHeight-100;
         pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
          break;
       case 95:
     pineappleHeight= pineappleHeight-100;
      pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
       break;
       case 98:
        pineappleHeight= pineappleHeight-105;
         pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
          break;
       case 100:
     pineappleHeight= pineappleHeight-105;
      pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
       break;
       case 103:
        pineappleHeight= pineappleHeight-110;
         pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
          break;
       case 105:
        pineappleHeight= pineappleHeight-110;
         pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
          break;
 
          case 108:
            pineappleHeight= pineappleHeight-115;
            pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
            break;
          case 110:
  pineappleHeight= pineappleHeight-115;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 113:
    pineappleHeight= pineappleHeight-120;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 115:
  pineappleHeight= pineappleHeight-120;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 118:
    pineappleHeight= pineappleHeight-125;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 120:
  pineappleHeight= pineappleHeight-125;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;

  case 123:
    pineappleHeight= pineappleHeight-130;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break; 
  case 125:
  pineappleHeight= pineappleHeight-130;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 128:
    pineappleHeight= pineappleHeight-135;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 130:
  pineappleHeight= pineappleHeight-135;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 133:
    pineappleHeight= pineappleHeight-140;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 135:
  pineappleHeight= pineappleHeight-140;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 138:
    pineappleHeight= pineappleHeight-145;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 140:
  pineappleHeight= pineappleHeight-145;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 143:
    pineappleHeight= pineappleHeight-150;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 145:
  pineappleHeight= pineappleHeight-150;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 148:
    pineappleHeight= pineappleHeight-155;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 150:
  pineappleHeight= pineappleHeight-155;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;

  case 155:
  pineappleHeight= pineappleHeight-160;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 158:
    pineappleHeight= pineappleHeight-165;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 160:
  pineappleHeight= pineappleHeight-165;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 163:
    pineappleHeight= pineappleHeight-170;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 165:
  pineappleHeight= pineappleHeight-170;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 168:
    pineappleHeight= pineappleHeight-175;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 170:
  pineappleHeight= pineappleHeight-175;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 173:
  pineappleHeight= pineappleHeight-180;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 175:
  pineappleHeight= pineappleHeight-180;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 178:
    pineappleHeight= pineappleHeight-185;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 180:
  pineappleHeight= pineappleHeight-185;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 183:
    pineappleHeight= pineappleHeight-190;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 185:
  pineappleHeight= pineappleHeight-190;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 188:
    pineappleHeight= pineappleHeight-195;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 190:
  pineappleHeight= pineappleHeight-195;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 193:
    pineappleHeight= pineappleHeight-200;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 195:
  pineappleHeight= pineappleHeight-200;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 198:
    pineappleHeight= pineappleHeight-205;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 200:
  pineappleHeight= pineappleHeight-205;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 203:
    pineappleHeight= pineappleHeight-210;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 205:
  pineappleHeight= pineappleHeight-210;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 208:
    pineappleHeight= pineappleHeight-215;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 210:
  pineappleHeight= pineappleHeight-215;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 213:
    pineappleHeight= pineappleHeight-220;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 215:
  pineappleHeight= pineappleHeight-220;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 218:
    pineappleHeight= pineappleHeight-225;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 220:
  pineappleHeight= pineappleHeight-225;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 223:
    pineappleHeight= pineappleHeight-230;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 225:
  pineappleHeight= pineappleHeight-230;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 228:
    pineappleHeight= pineappleHeight-235;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 230:
  pineappleHeight= pineappleHeight-235;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 233:
    pineappleHeight= pineappleHeight-240;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 235:
  pineappleHeight= pineappleHeight-240;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 238:
    pineappleHeight= pineappleHeight-245;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 240:
  pineappleHeight= pineappleHeight-245;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 243:
    pineappleHeight= pineappleHeight-250;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 245:
  pineappleHeight= pineappleHeight-250;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 248:
    pineappleHeight= pineappleHeight-255;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 250:
  pineappleHeight= pineappleHeight-255;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 253:
    pineappleHeight= pineappleHeight-260;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 255:
  pineappleHeight= pineappleHeight-260;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 258:
    pineappleHeight= pineappleHeight-265;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 260:
  pineappleHeight= pineappleHeight-265;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 263:
  pineappleHeight= pineappleHeight-270;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 265:
  pineappleHeight= pineappleHeight-270;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 268:
    pineappleHeight= pineappleHeight-275;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 270:
  pineappleHeight= pineappleHeight-275;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 273:
    pineappleHeight= pineappleHeight-280;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 275:
  pineappleHeight= pineappleHeight-280;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 278:
    pineappleHeight= pineappleHeight-285;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 280:
  pineappleHeight= pineappleHeight-285;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 283:
    pineappleHeight= pineappleHeight-290;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 285:
  pineappleHeight= pineappleHeight-290;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 288:
    pineappleHeight= pineappleHeight-295;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 290:
  pineappleHeight= pineappleHeight-295;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 293:
    pineappleHeight= pineappleHeight-300;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 295:
  pineappleHeight= pineappleHeight-300;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 298:
    pineappleHeight= pineappleHeight-305;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 300:
  pineappleHeight= pineappleHeight-305;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 303:
    pineappleHeight= pineappleHeight-310;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 305:
  pineappleHeight= pineappleHeight-310;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 308:
  pineappleHeight= pineappleHeight-315;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 310:
  pineappleHeight= pineappleHeight-315;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 313:
    pineappleHeight= pineappleHeight-320;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 315:
  pineappleHeight= pineappleHeight-320;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 318:
    pineappleHeight= pineappleHeight-325;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 320:
  pineappleHeight= pineappleHeight-325;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 323:
    pineappleHeight= pineappleHeight-330;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 325:
  pineappleHeight= pineappleHeight-330;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 328:
    pineappleHeight= pineappleHeight-335;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 330:
  pineappleHeight= pineappleHeight-335;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 333:
    pineappleHeight= pineappleHeight-340;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 335:
  pineappleHeight= pineappleHeight-340;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 338:
    pineappleHeight= pineappleHeight-345;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 340:
  pineappleHeight= pineappleHeight-345;
  pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
  break;
  case 343:
    pineappleHeight= pineappleHeight-350;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
  case 345:
    pineappleHeight= pineappleHeight-350;
    pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
    break;
    case 348:
      pineappleHeight= pineappleHeight-355;
      pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
      break;
    case 350:
      pineappleHeight= pineappleHeight-355;
      pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
      break;
      case 353:
        pineappleHeight= pineappleHeight-360;
       pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
       break;
      case 355:
  pineappleHeight= pineappleHeight-360;
 pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
 break;
 case 358:
  pineappleHeight= pineappleHeight-365;
 pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
 break;
 case 360:
  pineappleHeight= pineappleHeight-365;
 pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
 break;
 case 363:
  pineappleHeight= pineappleHeight-370;
 pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
 break;
 case 365:
  pineappleHeight= pineappleHeight-370;
 pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
 break;
 case 368:
  pineappleHeight= pineappleHeight-375;
 pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
 break;
 case 370:
  pineappleHeight= pineappleHeight-375;
 pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
 break;
 case 373:
  pineappleHeight= pineappleHeight-380;
 pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
 break;
 case 375:
  pineappleHeight= pineappleHeight-380;
 pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
 break;
 case 378:
  pineappleHeight= pineappleHeight-385;
 pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
 break;
 case 380:
  pineappleHeight= pineappleHeight-385;
 pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
 break;
 case 383:
  pineappleHeight= pineappleHeight-390;
 pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
 break;
 case 385:
  pineappleHeight= pineappleHeight-390;
 pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
 break;
 case 388:
  pineappleHeight= pineappleHeight-395;
 pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
 break;
 case 390:
  pineappleHeight= pineappleHeight-395;
 pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
 break;
 case 393:
  pineappleHeight= pineappleHeight-400;
 pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
 break;
 case 395:
  pineappleHeight= pineappleHeight-400;
 pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
 break;
 case 398:
  pineappleHeight= pineappleHeight-405;
 pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
 break;
 case 400:
  pineappleHeight= pineappleHeight-405;
 pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
 break;
 case 403:
  pineappleHeight= pineappleHeight-410;
 pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
 break;
 case 405:
  pineappleHeight= pineappleHeight-410;
 pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
 break;
 case 408:
  pineappleHeight= pineappleHeight-415;
 pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
 break;
 case 410:
  pineappleHeight= pineappleHeight-415;
 pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
 break;
 case 413:
  pineappleHeight= pineappleHeight-420;
 pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
 break;
 case 415:
  pineappleHeight= pineappleHeight-420;
 pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
 break;
 case 418:
  pineappleHeight= pineappleHeight-425;
 pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
 break;
 case 420:
  pineappleHeight= pineappleHeight-425;
 pineapple_context.drawImage(pineapple_img,pineappleLt,pineappleHeight,20,35);
 break;





}
pineapple_sH=pineappleHeight-20;
}

