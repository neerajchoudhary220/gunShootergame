//=========mango1===========
function mango1Fun()
{
 
  mango1Src='img/mango.png';

if(mango1ImgCount.value=='0')
{
if(mango1Lt<=148)
{
  mango1Src='img/fire.gif';
  mango1ImgCount.value=0;
  document.getElementById('mango1ImgCount').value=0;
  //new Audio("sound/mango1Exposiion.wav").play();
}

else 
{
  mango1Src='img/mango.png';
}


}

else if(mango1ImgCount.value=='1'){
  mango1Src='img/fire.gif';
 
  if(mango1Lt<=148)
{
  
  mango1ImgCount.value=0;
  document.getElementById('mango1ImgCount').value=0;
  
}
  
}
  
  var mango1_context = canvas.getContext("2d");
  mango1_img = new Image();
  
  mango1_img.src=mango1Src;
  //mango1Lt=200;
  var mango1Height =430;
  //var mango1Height =200;
  //mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,25,50);
  //mango1_sH=mango1Height-15;
  //document.getElementById('rH').value=mango1_Random;
  
switch( mango1_Random)
{
  case 0:
  mango1Height= mango1Height-5;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 3:
    mango1Height= mango1Height-10;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;

  case 5:
  mango1Height= mango1Height-10;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  
  case 8:
    mango1Height= mango1Height-15;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;

  case 10:
  mango1Height= mango1Height-15;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;

  case 13:
    mango1Height= mango1Height-20;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;

  case 15:
  mango1Height= mango1Height-20;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;

  case 18:
  mango1Height= mango1Height-25;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 20:
  mango1Height= mango1Height-25;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 23:
    mango1Height= mango1Height-30;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 25:
    mango1Height= mango1Height-30;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
    case 28:
      mango1Height= mango1Height-35;
     mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
      break;
    case 30:
   mango1Height= mango1Height-35;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
   break;

   case 33:
    mango1Height= mango1Height-40;
   mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
   case 35:
    mango1Height= mango1Height-40;
   mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
    case 38:
      mango1Height= mango1Height-45;
     mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
      break;
    case 40:
      mango1Height= mango1Height-45;
     mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
      break;
      case 43:
        mango1Height= mango1Height-50;
        mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
        break;
    
      case 45:
      mango1Height= mango1Height-50;
      mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
      break;
      case 50:
        mango1Height= mango1Height-55;
        mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
        break;
      case 50:
      mango1Height= mango1Height-55;
      mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
      break;
      case 53:
        mango1Height= mango1Height-60;
        mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
        break;
      case 55:
        mango1Height= mango1Height-60;
        mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
        break;
        case 58:
          mango1Height= mango1Height-65;
          mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
          break;   
        case 60:
          mango1Height= mango1Height-65;
          mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
          break;
          case 63:
            mango1Height= mango1Height-70;
           mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
            break;   
        case 65:
       mango1Height= mango1Height-70;
      mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
       break;
    
       case 68:
        mango1Height= mango1Height-75;
       mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
        break;  
       case 70:
        mango1Height= mango1Height-75;
       mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
        break;
        case 73:
          mango1Height= mango1Height-80;
           mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
            break;
       case 75:
        mango1Height= mango1Height-80;
         mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
          break;
          case 78:
     mango1Height= mango1Height-85;
      mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
       break;
       case 80:
     mango1Height= mango1Height-85;
      mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
       break;
       case 83:
        mango1Height= mango1Height-90;
         mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
          break;
       case 85:
     mango1Height= mango1Height-90;
      mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
       break;

       case 88:
        mango1Height= mango1Height-95;
         mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
          break;  
       case 90:
     mango1Height= mango1Height-95;
      mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
       break;
       case 93:
        mango1Height= mango1Height-100;
         mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
          break;
       case 95:
     mango1Height= mango1Height-100;
      mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
       break;
       case 98:
        mango1Height= mango1Height-105;
         mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
          break;
       case 100:
     mango1Height= mango1Height-105;
      mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
       break;
       case 103:
        mango1Height= mango1Height-110;
         mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
          break;
       case 105:
        mango1Height= mango1Height-110;
         mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
          break;
 
          case 108:
            mango1Height= mango1Height-115;
            mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
            break;
          case 110:
  mango1Height= mango1Height-115;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 113:
    mango1Height= mango1Height-120;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 115:
  mango1Height= mango1Height-120;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 118:
    mango1Height= mango1Height-125;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 120:
  mango1Height= mango1Height-125;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;

  case 123:
    mango1Height= mango1Height-130;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break; 
  case 125:
  mango1Height= mango1Height-130;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 128:
    mango1Height= mango1Height-135;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 130:
  mango1Height= mango1Height-135;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 133:
    mango1Height= mango1Height-140;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 135:
  mango1Height= mango1Height-140;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 138:
    mango1Height= mango1Height-145;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 140:
  mango1Height= mango1Height-145;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 143:
    mango1Height= mango1Height-150;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 145:
  mango1Height= mango1Height-150;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 148:
    mango1Height= mango1Height-155;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 150:
  mango1Height= mango1Height-155;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;

  case 155:
  mango1Height= mango1Height-160;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 158:
    mango1Height= mango1Height-165;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 160:
  mango1Height= mango1Height-165;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 163:
    mango1Height= mango1Height-170;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 165:
  mango1Height= mango1Height-170;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 168:
    mango1Height= mango1Height-175;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 170:
  mango1Height= mango1Height-175;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 173:
  mango1Height= mango1Height-180;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 175:
  mango1Height= mango1Height-180;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 178:
    mango1Height= mango1Height-185;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 180:
  mango1Height= mango1Height-185;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 183:
    mango1Height= mango1Height-190;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 185:
  mango1Height= mango1Height-190;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 188:
    mango1Height= mango1Height-195;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 190:
  mango1Height= mango1Height-195;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 193:
    mango1Height= mango1Height-200;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 195:
  mango1Height= mango1Height-200;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 198:
    mango1Height= mango1Height-205;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 200:
  mango1Height= mango1Height-205;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 203:
    mango1Height= mango1Height-210;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 205:
  mango1Height= mango1Height-210;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 208:
    mango1Height= mango1Height-215;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 210:
  mango1Height= mango1Height-215;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 213:
    mango1Height= mango1Height-220;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 215:
  mango1Height= mango1Height-220;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 218:
    mango1Height= mango1Height-225;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 220:
  mango1Height= mango1Height-225;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 223:
    mango1Height= mango1Height-230;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 225:
  mango1Height= mango1Height-230;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 228:
    mango1Height= mango1Height-235;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 230:
  mango1Height= mango1Height-235;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 233:
    mango1Height= mango1Height-240;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 235:
  mango1Height= mango1Height-240;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 238:
    mango1Height= mango1Height-245;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 240:
  mango1Height= mango1Height-245;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 243:
    mango1Height= mango1Height-250;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 245:
  mango1Height= mango1Height-250;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 248:
    mango1Height= mango1Height-255;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 250:
  mango1Height= mango1Height-255;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 253:
    mango1Height= mango1Height-260;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 255:
  mango1Height= mango1Height-260;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 258:
    mango1Height= mango1Height-265;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 260:
  mango1Height= mango1Height-265;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 263:
  mango1Height= mango1Height-270;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 265:
  mango1Height= mango1Height-270;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 268:
    mango1Height= mango1Height-275;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 270:
  mango1Height= mango1Height-275;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 273:
    mango1Height= mango1Height-280;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 275:
  mango1Height= mango1Height-280;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 278:
    mango1Height= mango1Height-285;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 280:
  mango1Height= mango1Height-285;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 283:
    mango1Height= mango1Height-290;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 285:
  mango1Height= mango1Height-290;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 288:
    mango1Height= mango1Height-295;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 290:
  mango1Height= mango1Height-295;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 293:
    mango1Height= mango1Height-300;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 295:
  mango1Height= mango1Height-300;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 298:
    mango1Height= mango1Height-305;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 300:
  mango1Height= mango1Height-305;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 303:
    mango1Height= mango1Height-310;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 305:
  mango1Height= mango1Height-310;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 308:
  mango1Height= mango1Height-315;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 310:
  mango1Height= mango1Height-315;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 313:
    mango1Height= mango1Height-320;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 315:
  mango1Height= mango1Height-320;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 318:
    mango1Height= mango1Height-325;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 320:
  mango1Height= mango1Height-325;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 323:
    mango1Height= mango1Height-330;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 325:
  mango1Height= mango1Height-330;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 328:
    mango1Height= mango1Height-335;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 330:
  mango1Height= mango1Height-335;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 333:
    mango1Height= mango1Height-340;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 335:
  mango1Height= mango1Height-340;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 338:
    mango1Height= mango1Height-345;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 340:
  mango1Height= mango1Height-345;
  mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
  break;
  case 343:
    mango1Height= mango1Height-350;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
  case 345:
    mango1Height= mango1Height-350;
    mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
    break;
    case 348:
      mango1Height= mango1Height-355;
      mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
      break;
    case 350:
      mango1Height= mango1Height-355;
      mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
      break;
      case 353:
        mango1Height= mango1Height-360;
       mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
       break;
      case 355:
  mango1Height= mango1Height-360;
 mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
 break;
 case 358:
  mango1Height= mango1Height-365;
 mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
 break;
 case 360:
  mango1Height= mango1Height-365;
 mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
 break;
 case 363:
  mango1Height= mango1Height-370;
 mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
 break;
 case 365:
  mango1Height= mango1Height-370;
 mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
 break;
 case 368:
  mango1Height= mango1Height-375;
 mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
 break;
 case 370:
  mango1Height= mango1Height-375;
 mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
 break;
 case 373:
  mango1Height= mango1Height-380;
 mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
 break;
 case 375:
  mango1Height= mango1Height-380;
 mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
 break;
 case 378:
  mango1Height= mango1Height-385;
 mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
 break;
 case 380:
  mango1Height= mango1Height-385;
 mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
 break;
 case 383:
  mango1Height= mango1Height-390;
 mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
 break;
 case 385:
  mango1Height= mango1Height-390;
 mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
 break;
 case 388:
  mango1Height= mango1Height-395;
 mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
 break;
 case 390:
  mango1Height= mango1Height-395;
 mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
 break;
 case 393:
  mango1Height= mango1Height-400;
 mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
 break;
 case 395:
  mango1Height= mango1Height-400;
 mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
 break;
 case 398:
  mango1Height= mango1Height-405;
 mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
 break;
 case 400:
  mango1Height= mango1Height-405;
 mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
 break;
 case 403:
  mango1Height= mango1Height-410;
 mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
 break;
 case 405:
  mango1Height= mango1Height-410;
 mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
 break;
 case 408:
  mango1Height= mango1Height-415;
 mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
 break;
 case 410:
  mango1Height= mango1Height-415;
 mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
 break;
 case 413:
  mango1Height= mango1Height-420;
 mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
 break;
 case 415:
  mango1Height= mango1Height-420;
 mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
 break;
 case 418:
  mango1Height= mango1Height-425;
 mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
 break;
 case 420:
  mango1Height= mango1Height-425;
 mango1_context.drawImage(mango1_img,mango1Lt,mango1Height,20,35);
 break;





}
mango1_sH=mango1Height-15;
}

