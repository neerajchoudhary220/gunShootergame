//=========mango2===========
function mango2Fun()
{
 
  mango2Src='img/mango.png';

if(mango2ImgCount.value=='0')
{
if(mango2Lt<=148)
{
  mango2Src='img/fire.gif';
  mango2ImgCount.value=0;
  document.getElementById('mango2ImgCount').value=0;
  //new Audio("sound/mango2Exposiion.wav").play();
}

else 
{
  mango2Src='img/mango.png';
}


}

else if(mango2ImgCount.value=='1'){
  mango2Src='img/fire.gif';
 
  if(mango2Lt<=148)
{
  
  mango2ImgCount.value=0;
  document.getElementById('mango2ImgCount').value=0;
  
}
  
}
  
  var mango2_context = canvas.getContext("2d");
  mango2_img = new Image();
  
  mango2_img.src=mango2Src;
  //mango2Lt=200;
  var mango2Height =430;
  //var mango2Height =200;
  //mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,25,50);
  //mango2_sH=mango2Height-15;
  //document.getElementById('rH').value=mango2_Random;
  
switch( mango2_Random)
{
  case 0:
  mango2Height= mango2Height-5;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 3:
    mango2Height= mango2Height-10;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;

  case 5:
  mango2Height= mango2Height-10;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  
  case 8:
    mango2Height= mango2Height-15;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;

  case 10:
  mango2Height= mango2Height-15;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;

  case 13:
    mango2Height= mango2Height-20;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;

  case 15:
  mango2Height= mango2Height-20;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;

  case 18:
  mango2Height= mango2Height-25;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 20:
  mango2Height= mango2Height-25;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 23:
    mango2Height= mango2Height-30;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 25:
    mango2Height= mango2Height-30;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
    case 28:
      mango2Height= mango2Height-35;
     mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
      break;
    case 30:
   mango2Height= mango2Height-35;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
   break;

   case 33:
    mango2Height= mango2Height-40;
   mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
   case 35:
    mango2Height= mango2Height-40;
   mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
    case 38:
      mango2Height= mango2Height-45;
     mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
      break;
    case 40:
      mango2Height= mango2Height-45;
     mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
      break;
      case 43:
        mango2Height= mango2Height-50;
        mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
        break;
    
      case 45:
      mango2Height= mango2Height-50;
      mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
      break;
      case 50:
        mango2Height= mango2Height-55;
        mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
        break;
      case 50:
      mango2Height= mango2Height-55;
      mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
      break;
      case 53:
        mango2Height= mango2Height-60;
        mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
        break;
      case 55:
        mango2Height= mango2Height-60;
        mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
        break;
        case 58:
          mango2Height= mango2Height-65;
          mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
          break;   
        case 60:
          mango2Height= mango2Height-65;
          mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
          break;
          case 63:
            mango2Height= mango2Height-70;
           mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
            break;   
        case 65:
       mango2Height= mango2Height-70;
      mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
       break;
    
       case 68:
        mango2Height= mango2Height-75;
       mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
        break;  
       case 70:
        mango2Height= mango2Height-75;
       mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
        break;
        case 73:
          mango2Height= mango2Height-80;
           mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
            break;
       case 75:
        mango2Height= mango2Height-80;
         mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
          break;
          case 78:
     mango2Height= mango2Height-85;
      mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
       break;
       case 80:
     mango2Height= mango2Height-85;
      mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
       break;
       case 83:
        mango2Height= mango2Height-90;
         mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
          break;
       case 85:
     mango2Height= mango2Height-90;
      mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
       break;

       case 88:
        mango2Height= mango2Height-95;
         mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
          break;  
       case 90:
     mango2Height= mango2Height-95;
      mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
       break;
       case 93:
        mango2Height= mango2Height-100;
         mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
          break;
       case 95:
     mango2Height= mango2Height-100;
      mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
       break;
       case 98:
        mango2Height= mango2Height-105;
         mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
          break;
       case 100:
     mango2Height= mango2Height-105;
      mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
       break;
       case 103:
        mango2Height= mango2Height-110;
         mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
          break;
       case 105:
        mango2Height= mango2Height-110;
         mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
          break;
 
          case 108:
            mango2Height= mango2Height-115;
            mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
            break;
          case 110:
  mango2Height= mango2Height-115;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 113:
    mango2Height= mango2Height-120;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 115:
  mango2Height= mango2Height-120;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 118:
    mango2Height= mango2Height-125;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 120:
  mango2Height= mango2Height-125;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;

  case 123:
    mango2Height= mango2Height-130;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break; 
  case 125:
  mango2Height= mango2Height-130;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 128:
    mango2Height= mango2Height-135;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 130:
  mango2Height= mango2Height-135;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 133:
    mango2Height= mango2Height-140;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 135:
  mango2Height= mango2Height-140;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 138:
    mango2Height= mango2Height-145;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 140:
  mango2Height= mango2Height-145;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 143:
    mango2Height= mango2Height-150;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 145:
  mango2Height= mango2Height-150;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 148:
    mango2Height= mango2Height-155;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 150:
  mango2Height= mango2Height-155;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;

  case 155:
  mango2Height= mango2Height-160;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 158:
    mango2Height= mango2Height-165;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 160:
  mango2Height= mango2Height-165;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 163:
    mango2Height= mango2Height-170;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 165:
  mango2Height= mango2Height-170;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 168:
    mango2Height= mango2Height-175;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 170:
  mango2Height= mango2Height-175;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 173:
  mango2Height= mango2Height-180;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 175:
  mango2Height= mango2Height-180;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 178:
    mango2Height= mango2Height-185;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 180:
  mango2Height= mango2Height-185;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 183:
    mango2Height= mango2Height-190;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 185:
  mango2Height= mango2Height-190;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 188:
    mango2Height= mango2Height-195;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 190:
  mango2Height= mango2Height-195;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 193:
    mango2Height= mango2Height-200;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 195:
  mango2Height= mango2Height-200;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 198:
    mango2Height= mango2Height-205;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 200:
  mango2Height= mango2Height-205;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 203:
    mango2Height= mango2Height-210;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 205:
  mango2Height= mango2Height-210;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 208:
    mango2Height= mango2Height-215;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 210:
  mango2Height= mango2Height-215;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 213:
    mango2Height= mango2Height-220;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 215:
  mango2Height= mango2Height-220;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 218:
    mango2Height= mango2Height-225;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 220:
  mango2Height= mango2Height-225;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 223:
    mango2Height= mango2Height-230;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 225:
  mango2Height= mango2Height-230;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 228:
    mango2Height= mango2Height-235;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 230:
  mango2Height= mango2Height-235;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 233:
    mango2Height= mango2Height-240;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 235:
  mango2Height= mango2Height-240;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 238:
    mango2Height= mango2Height-245;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 240:
  mango2Height= mango2Height-245;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 243:
    mango2Height= mango2Height-250;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 245:
  mango2Height= mango2Height-250;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 248:
    mango2Height= mango2Height-255;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 250:
  mango2Height= mango2Height-255;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 253:
    mango2Height= mango2Height-260;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 255:
  mango2Height= mango2Height-260;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 258:
    mango2Height= mango2Height-265;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 260:
  mango2Height= mango2Height-265;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 263:
  mango2Height= mango2Height-270;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 265:
  mango2Height= mango2Height-270;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 268:
    mango2Height= mango2Height-275;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 270:
  mango2Height= mango2Height-275;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 273:
    mango2Height= mango2Height-280;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 275:
  mango2Height= mango2Height-280;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 278:
    mango2Height= mango2Height-285;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 280:
  mango2Height= mango2Height-285;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 283:
    mango2Height= mango2Height-290;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 285:
  mango2Height= mango2Height-290;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 288:
    mango2Height= mango2Height-295;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 290:
  mango2Height= mango2Height-295;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 293:
    mango2Height= mango2Height-300;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 295:
  mango2Height= mango2Height-300;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 298:
    mango2Height= mango2Height-305;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 300:
  mango2Height= mango2Height-305;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 303:
    mango2Height= mango2Height-310;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 305:
  mango2Height= mango2Height-310;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 308:
  mango2Height= mango2Height-315;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 310:
  mango2Height= mango2Height-315;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 313:
    mango2Height= mango2Height-320;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 315:
  mango2Height= mango2Height-320;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 318:
    mango2Height= mango2Height-325;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 320:
  mango2Height= mango2Height-325;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 323:
    mango2Height= mango2Height-330;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 325:
  mango2Height= mango2Height-330;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 328:
    mango2Height= mango2Height-335;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 330:
  mango2Height= mango2Height-335;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 333:
    mango2Height= mango2Height-340;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 335:
  mango2Height= mango2Height-340;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 338:
    mango2Height= mango2Height-345;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 340:
  mango2Height= mango2Height-345;
  mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
  break;
  case 343:
    mango2Height= mango2Height-350;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
  case 345:
    mango2Height= mango2Height-350;
    mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
    break;
    case 348:
      mango2Height= mango2Height-355;
      mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
      break;
    case 350:
      mango2Height= mango2Height-355;
      mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
      break;
      case 353:
        mango2Height= mango2Height-360;
       mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
       break;
      case 355:
  mango2Height= mango2Height-360;
 mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
 break;
 case 358:
  mango2Height= mango2Height-365;
 mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
 break;
 case 360:
  mango2Height= mango2Height-365;
 mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
 break;
 case 363:
  mango2Height= mango2Height-370;
 mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
 break;
 case 365:
  mango2Height= mango2Height-370;
 mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
 break;
 case 368:
  mango2Height= mango2Height-375;
 mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
 break;
 case 370:
  mango2Height= mango2Height-375;
 mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
 break;
 case 373:
  mango2Height= mango2Height-380;
 mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
 break;
 case 375:
  mango2Height= mango2Height-380;
 mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
 break;
 case 378:
  mango2Height= mango2Height-385;
 mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
 break;
 case 380:
  mango2Height= mango2Height-385;
 mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
 break;
 case 383:
  mango2Height= mango2Height-390;
 mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
 break;
 case 385:
  mango2Height= mango2Height-390;
 mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
 break;
 case 388:
  mango2Height= mango2Height-395;
 mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
 break;
 case 390:
  mango2Height= mango2Height-395;
 mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
 break;
 case 393:
  mango2Height= mango2Height-400;
 mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
 break;
 case 395:
  mango2Height= mango2Height-400;
 mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
 break;
 case 398:
  mango2Height= mango2Height-405;
 mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
 break;
 case 400:
  mango2Height= mango2Height-405;
 mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
 break;
 case 403:
  mango2Height= mango2Height-410;
 mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
 break;
 case 405:
  mango2Height= mango2Height-410;
 mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
 break;
 case 408:
  mango2Height= mango2Height-415;
 mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
 break;
 case 410:
  mango2Height= mango2Height-415;
 mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
 break;
 case 413:
  mango2Height= mango2Height-420;
 mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
 break;
 case 415:
  mango2Height= mango2Height-420;
 mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
 break;
 case 418:
  mango2Height= mango2Height-425;
 mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
 break;
 case 420:
  mango2Height= mango2Height-425;
 mango2_context.drawImage(mango2_img,mango2Lt,mango2Height,20,35);
 break;





}
mango2_sH=mango2Height-15;
}

