//=========pineapple1===========
function pineapple1Fun()
{
 
  pineapple1Src='img/pineapple.png';

if(pineapple1ImgCount.value=='0')
{
if(pineapple1Lt<=148)
{
  pineapple1Src='img/fire.gif';
  pineapple1ImgCount.value=0;
  document.getElementById('pineapple1ImgCount').value=0;
  //new Audio("sound/pineapple1Exposiion.wav").play();
}

else 
{
  pineapple1Src='img/pineapple.png';
}


}

else if(pineapple1ImgCount.value=='1'){
  pineapple1Src='img/fire.gif';
 
  if(pineapple1Lt<=148)
{
  
  pineapple1ImgCount.value=0;
  document.getElementById('pineapple1ImgCount').value=0;
  
}
  
}
  
  var pineapple1_context = canvas.getContext("2d");
  pineapple1_img = new Image();
  
  pineapple1_img.src=pineapple1Src;
  //pineapple1Lt=200;
  var pineapple1Height =430;
  //var pineapple1Height =200;
  //pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,25,50);
  //pineapple1_sH=pineapple1Height-20;
 // document.getElementById('rH').value=pineapple1_Random;
  
switch( pineapple1_Random)
{
  case 0:
  pineapple1Height= pineapple1Height-5;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 3:
    pineapple1Height= pineapple1Height-10;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;

  case 5:
  pineapple1Height= pineapple1Height-10;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  
  case 8:
    pineapple1Height= pineapple1Height-15;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;

  case 10:
  pineapple1Height= pineapple1Height-15;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;

  case 13:
    pineapple1Height= pineapple1Height-20;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;

  case 15:
  pineapple1Height= pineapple1Height-20;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;

  case 18:
  pineapple1Height= pineapple1Height-25;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 20:
  pineapple1Height= pineapple1Height-25;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 23:
    pineapple1Height= pineapple1Height-30;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 25:
    pineapple1Height= pineapple1Height-30;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
    case 28:
      pineapple1Height= pineapple1Height-35;
     pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
      break;
    case 30:
   pineapple1Height= pineapple1Height-35;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
   break;

   case 33:
    pineapple1Height= pineapple1Height-40;
   pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
   case 35:
    pineapple1Height= pineapple1Height-40;
   pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
    case 38:
      pineapple1Height= pineapple1Height-45;
     pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
      break;
    case 40:
      pineapple1Height= pineapple1Height-45;
     pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
      break;
      case 43:
        pineapple1Height= pineapple1Height-50;
        pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
        break;
    
      case 45:
      pineapple1Height= pineapple1Height-50;
      pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
      break;
      case 50:
        pineapple1Height= pineapple1Height-55;
        pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
        break;
      case 50:
      pineapple1Height= pineapple1Height-55;
      pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
      break;
      case 53:
        pineapple1Height= pineapple1Height-60;
        pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
        break;
      case 55:
        pineapple1Height= pineapple1Height-60;
        pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
        break;
        case 58:
          pineapple1Height= pineapple1Height-65;
          pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
          break;   
        case 60:
          pineapple1Height= pineapple1Height-65;
          pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
          break;
          case 63:
            pineapple1Height= pineapple1Height-70;
           pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
            break;   
        case 65:
       pineapple1Height= pineapple1Height-70;
      pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
       break;
    
       case 68:
        pineapple1Height= pineapple1Height-75;
       pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
        break;  
       case 70:
        pineapple1Height= pineapple1Height-75;
       pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
        break;
        case 73:
          pineapple1Height= pineapple1Height-80;
           pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
            break;
       case 75:
        pineapple1Height= pineapple1Height-80;
         pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
          break;
          case 78:
     pineapple1Height= pineapple1Height-85;
      pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
       break;
       case 80:
     pineapple1Height= pineapple1Height-85;
      pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
       break;
       case 83:
        pineapple1Height= pineapple1Height-90;
         pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
          break;
       case 85:
     pineapple1Height= pineapple1Height-90;
      pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
       break;

       case 88:
        pineapple1Height= pineapple1Height-95;
         pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
          break;  
       case 90:
     pineapple1Height= pineapple1Height-95;
      pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
       break;
       case 93:
        pineapple1Height= pineapple1Height-100;
         pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
          break;
       case 95:
     pineapple1Height= pineapple1Height-100;
      pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
       break;
       case 98:
        pineapple1Height= pineapple1Height-105;
         pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
          break;
       case 100:
     pineapple1Height= pineapple1Height-105;
      pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
       break;
       case 103:
        pineapple1Height= pineapple1Height-110;
         pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
          break;
       case 105:
        pineapple1Height= pineapple1Height-110;
         pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
          break;
 
          case 108:
            pineapple1Height= pineapple1Height-115;
            pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
            break;
          case 110:
  pineapple1Height= pineapple1Height-115;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 113:
    pineapple1Height= pineapple1Height-120;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 115:
  pineapple1Height= pineapple1Height-120;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 118:
    pineapple1Height= pineapple1Height-125;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 120:
  pineapple1Height= pineapple1Height-125;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;

  case 123:
    pineapple1Height= pineapple1Height-130;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break; 
  case 125:
  pineapple1Height= pineapple1Height-130;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 128:
    pineapple1Height= pineapple1Height-135;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 130:
  pineapple1Height= pineapple1Height-135;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 133:
    pineapple1Height= pineapple1Height-140;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 135:
  pineapple1Height= pineapple1Height-140;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 138:
    pineapple1Height= pineapple1Height-145;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 140:
  pineapple1Height= pineapple1Height-145;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 143:
    pineapple1Height= pineapple1Height-150;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 145:
  pineapple1Height= pineapple1Height-150;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 148:
    pineapple1Height= pineapple1Height-155;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 150:
  pineapple1Height= pineapple1Height-155;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;

  case 155:
  pineapple1Height= pineapple1Height-160;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 158:
    pineapple1Height= pineapple1Height-165;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 160:
  pineapple1Height= pineapple1Height-165;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 163:
    pineapple1Height= pineapple1Height-170;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 165:
  pineapple1Height= pineapple1Height-170;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 168:
    pineapple1Height= pineapple1Height-175;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 170:
  pineapple1Height= pineapple1Height-175;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 173:
  pineapple1Height= pineapple1Height-180;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 175:
  pineapple1Height= pineapple1Height-180;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 178:
    pineapple1Height= pineapple1Height-185;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 180:
  pineapple1Height= pineapple1Height-185;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 183:
    pineapple1Height= pineapple1Height-190;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 185:
  pineapple1Height= pineapple1Height-190;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 188:
    pineapple1Height= pineapple1Height-195;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 190:
  pineapple1Height= pineapple1Height-195;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 193:
    pineapple1Height= pineapple1Height-200;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 195:
  pineapple1Height= pineapple1Height-200;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 198:
    pineapple1Height= pineapple1Height-205;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 200:
  pineapple1Height= pineapple1Height-205;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 203:
    pineapple1Height= pineapple1Height-210;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 205:
  pineapple1Height= pineapple1Height-210;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 208:
    pineapple1Height= pineapple1Height-215;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 210:
  pineapple1Height= pineapple1Height-215;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 213:
    pineapple1Height= pineapple1Height-220;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 215:
  pineapple1Height= pineapple1Height-220;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 218:
    pineapple1Height= pineapple1Height-225;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 220:
  pineapple1Height= pineapple1Height-225;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 223:
    pineapple1Height= pineapple1Height-230;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 225:
  pineapple1Height= pineapple1Height-230;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 228:
    pineapple1Height= pineapple1Height-235;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 230:
  pineapple1Height= pineapple1Height-235;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 233:
    pineapple1Height= pineapple1Height-240;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 235:
  pineapple1Height= pineapple1Height-240;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 238:
    pineapple1Height= pineapple1Height-245;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 240:
  pineapple1Height= pineapple1Height-245;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 243:
    pineapple1Height= pineapple1Height-250;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 245:
  pineapple1Height= pineapple1Height-250;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 248:
    pineapple1Height= pineapple1Height-255;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 250:
  pineapple1Height= pineapple1Height-255;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 253:
    pineapple1Height= pineapple1Height-260;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 255:
  pineapple1Height= pineapple1Height-260;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 258:
    pineapple1Height= pineapple1Height-265;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 260:
  pineapple1Height= pineapple1Height-265;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 263:
  pineapple1Height= pineapple1Height-270;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 265:
  pineapple1Height= pineapple1Height-270;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 268:
    pineapple1Height= pineapple1Height-275;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 270:
  pineapple1Height= pineapple1Height-275;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 273:
    pineapple1Height= pineapple1Height-280;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 275:
  pineapple1Height= pineapple1Height-280;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 278:
    pineapple1Height= pineapple1Height-285;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 280:
  pineapple1Height= pineapple1Height-285;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 283:
    pineapple1Height= pineapple1Height-290;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 285:
  pineapple1Height= pineapple1Height-290;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 288:
    pineapple1Height= pineapple1Height-295;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 290:
  pineapple1Height= pineapple1Height-295;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 293:
    pineapple1Height= pineapple1Height-300;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 295:
  pineapple1Height= pineapple1Height-300;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 298:
    pineapple1Height= pineapple1Height-305;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 300:
  pineapple1Height= pineapple1Height-305;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 303:
    pineapple1Height= pineapple1Height-310;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 305:
  pineapple1Height= pineapple1Height-310;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 308:
  pineapple1Height= pineapple1Height-315;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 310:
  pineapple1Height= pineapple1Height-315;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 313:
    pineapple1Height= pineapple1Height-320;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 315:
  pineapple1Height= pineapple1Height-320;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 318:
    pineapple1Height= pineapple1Height-325;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 320:
  pineapple1Height= pineapple1Height-325;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 323:
    pineapple1Height= pineapple1Height-330;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 325:
  pineapple1Height= pineapple1Height-330;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 328:
    pineapple1Height= pineapple1Height-335;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 330:
  pineapple1Height= pineapple1Height-335;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 333:
    pineapple1Height= pineapple1Height-340;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 335:
  pineapple1Height= pineapple1Height-340;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 338:
    pineapple1Height= pineapple1Height-345;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 340:
  pineapple1Height= pineapple1Height-345;
  pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
  break;
  case 343:
    pineapple1Height= pineapple1Height-350;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
  case 345:
    pineapple1Height= pineapple1Height-350;
    pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
    break;
    case 348:
      pineapple1Height= pineapple1Height-355;
      pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
      break;
    case 350:
      pineapple1Height= pineapple1Height-355;
      pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
      break;
      case 353:
        pineapple1Height= pineapple1Height-360;
       pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
       break;
      case 355:
  pineapple1Height= pineapple1Height-360;
 pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
 break;
 case 358:
  pineapple1Height= pineapple1Height-365;
 pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
 break;
 case 360:
  pineapple1Height= pineapple1Height-365;
 pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
 break;
 case 363:
  pineapple1Height= pineapple1Height-370;
 pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
 break;
 case 365:
  pineapple1Height= pineapple1Height-370;
 pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
 break;
 case 368:
  pineapple1Height= pineapple1Height-375;
 pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
 break;
 case 370:
  pineapple1Height= pineapple1Height-375;
 pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
 break;
 case 373:
  pineapple1Height= pineapple1Height-380;
 pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
 break;
 case 375:
  pineapple1Height= pineapple1Height-380;
 pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
 break;
 case 378:
  pineapple1Height= pineapple1Height-385;
 pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
 break;
 case 380:
  pineapple1Height= pineapple1Height-385;
 pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
 break;
 case 383:
  pineapple1Height= pineapple1Height-390;
 pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
 break;
 case 385:
  pineapple1Height= pineapple1Height-390;
 pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
 break;
 case 388:
  pineapple1Height= pineapple1Height-395;
 pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
 break;
 case 390:
  pineapple1Height= pineapple1Height-395;
 pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
 break;
 case 393:
  pineapple1Height= pineapple1Height-400;
 pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
 break;
 case 395:
  pineapple1Height= pineapple1Height-400;
 pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
 break;
 case 398:
  pineapple1Height= pineapple1Height-405;
 pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
 break;
 case 400:
  pineapple1Height= pineapple1Height-405;
 pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
 break;
 case 403:
  pineapple1Height= pineapple1Height-410;
 pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
 break;
 case 405:
  pineapple1Height= pineapple1Height-410;
 pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
 break;
 case 408:
  pineapple1Height= pineapple1Height-415;
 pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
 break;
 case 410:
  pineapple1Height= pineapple1Height-415;
 pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
 break;
 case 413:
  pineapple1Height= pineapple1Height-420;
 pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
 break;
 case 415:
  pineapple1Height= pineapple1Height-420;
 pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
 break;
 case 418:
  pineapple1Height= pineapple1Height-425;
 pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
 break;
 case 420:
  pineapple1Height= pineapple1Height-425;
 pineapple1_context.drawImage(pineapple1_img,pineapple1Lt,pineapple1Height,20,35);
 break;





}
pineapple1_sH=pineapple1Height-20;
}

