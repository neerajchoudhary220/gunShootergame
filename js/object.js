//========red balloon img=========

 

function redBalloon() {
  
    bt=bt-1;
    b=b+1;
//================== BOMB ===============================
   bombLt =bombLt-1.5;
   bomb1Lt =bomb1Lt-1.5;
   bomb2Lt =bomb2Lt-1.5;
//======================= FRUITS ======================

   appleLt = appleLt-1;
   apple1Lt = apple1Lt-1;
   apple2Lt = apple2Lt-1;

   lemonLt = lemonLt-1;
   lemon1Lt = lemon1Lt-1;
   lemon2Lt = lemon2Lt-1;

   orangeLt = orangeLt-1;
   orange1Lt = orange1Lt-1;
   orange2Lt = orange2Lt-1;

   mangoLt = mangoLt-1.2;
   mango1Lt = mango1Lt-1.2;
   mango2Lt = mango2Lt-1.2;

   pineappleLt = pineappleLt-1.3;
   pineapple1Lt = pineapple1Lt-1.3;
   pineapple2Lt = pineapple2Lt-1.3;

//============== BULLET =================================

   bullet1Lt = bullet1Lt-1.5;
   bullet2Lt = bullet2Lt-1.5;
   bullet3Lt = bullet3Lt-1.5;

   //======================= BULLET 2 PACKAGE ======================
   bullet2_packageLt = bullet2_packageLt-1.5;
   bullet21_packageLt = bullet21_packageLt-1.5;
   bullet22_packageLt = bullet22_packageLt-1.5;

   //======================= BULLET 3 PACKAGE ======================
   bullet3_packageLt = bullet3_packageLt-1.5;
   bullet31_packageLt = bullet31_packageLt-1.5;
   bullet32_packageLt = bullet32_packageLt-1.5;

//======================= BULLET 5 PACKAGE ======================
bullet5_packageLt = bullet5_packageLt-1.5;
bullet51_packageLt = bullet51_packageLt-1.5;

    tt=setTimeout(redBalloon,10);
   
    if(bt<=closeMidline)
      {
        bt=width-280;
        clearTimeout(tt);
        Random=Math.floor(Math.random()*5)+1;
        tt=setTimeout(redBalloon,10);
      }
//=========================== BOMB TIME =============================
      bombTime();
      bomb1Time();
      bomb2Time();
//=========================== FRUIS TIME ==========================
      appleTime();
      apple1Time();
      apple2Time();

      lemonTime();
      lemon1Time();
      lemon2Time();

      orangeTime();
      orange1Time();
      orange2Time();

      mangoTime();
      mango1Time();
      mango2Time();

      pineappleTime();
      pineapple1Time();
      pineapple2Time();


//==========================  SIGNLE BULLET TIME ========================
      bullet1Time();
      bullet2Time();
      bullet3Time();

//====================== BULLET 2 PACKAGE TIME================================
      bullet2_packageTime();
      bullet21_packageTime();
      bullet22_packageTime();

//====================== BULLET 3 PACKAGE TIME================================
      bullet3_packageTime();
      bullet31_packageTime();
      bullet32_packageTime();
//====================== BULLET 5 PACKAGE TIME================================
bullet5_packageTime();
bullet51_packageTime();
//====draw rect======//
   
    var r = canvas.getContext("2d");
    r.clearRect(152,0,width+200,height+100);
     r.beginPath();
    r.strokeStyle="blue";
    r.fillStyle="yellow";
  
    var rectH=415;
  
      
    
    r.fill();
    r.stroke();
    r.closePath();
   






//===================== BOMB FUNCTION CALL ============================


    bomb();
    bomb1_Fun();
    bomb2_Fun();
//===================== FRUITS FUNCTION CALL ============================
    appleFun();
    apple1Fun();
    apple2Fun();

 
 
    lemonFun();
    lemon1Fun();
    lemon2Fun();

    orangeFun();
    orange1Fun();
    orange2Fun();

    mangoFun();
    mango1Fun();
    mango2Fun();

    pineappleFun();
    pineapple1Fun();
    pineapple2Fun();
//===================== BULLET FUNCTION CALL ============================
    bullet();
    bullet1Fun();
    bullet2Fun();
    bullet3Fun();
    
bullet2_packageFun();
bullet21_packageFun();
bullet22_packageFun();

//====================== BULLET 3 PACKAGE FUNCTION CALL
bullet3_packageFun();
bullet31_packageFun();
bullet32_packageFun();

//====================== BULLET 5 PACKAGE FUNCTION CALL
bullet5_packageFun();
bullet51_packageFun();

//===================== OTHER FUNCTION CALL ============================
    
    TotalBulletFun();
    bulletTxt();
  
    
  
scoreFun();

//==================== GAME OVER ==============
if(gameOver==1 || TotalBullet == 0)
{
 
gameOverFun();
rs();
clearTimeout(tt);
}

//bullet2Fun();
//bullet3Fun();
//bullet5Fun();
    
  }


//==========BOMB TIME =============
  function bombTime()
  {
    if(bombLt<=closeMidline)
    {
      bombLt=width-280;
      bomb_Random = Math.floor(Math.random()*70)+1;
      
    }
  }

//==========bomb1 TIME =============
function bomb1Time()
{
  if(bomb1Lt<=closeMidline)
  {
    bomb1Lt=width-270;
    bomb1_Random = Math.floor(Math.random()*75)+1;
    
  }
}

//==========bomb2 TIME =============
function bomb2Time()
{
  if(bomb2Lt<=closeMidline)
  {
    bomb2Lt=width-260;
    bomb2_Random = Math.floor(Math.random()*70)+1;
    
  }
}

  //==========mango TIME =============
  function mangoTime()
  {
    if(mangoLt<=closeMidline)
    {
      mangoLt=width-280;
      mango_Random = Math.floor(Math.random()*420)+0;
      
    }
  }

   //==========mango1 TIME =============
   function mango1Time()
   {
     if(mango1Lt<=closeMidline)
     {
       mango1Lt=width-275;
       mango1_Random = Math.floor(Math.random()*425)+0;
       
     }
   }

    //==========mango2 TIME =============
  function mango2Time()
  {
    if(mango2Lt<=closeMidline)
    {
      mango2Lt=width-270;
      mango2_Random = Math.floor(Math.random()*430)+0;
      
    }
  }

  //==========apple TIME =============
  function appleTime()
  {
    if(appleLt<=closeMidline)
    {
      appleLt=width-260;
      apple_Random = Math.floor(Math.random()*420)+0;
      
    }
  }
   //==========apple1 TIME =============
   
   function apple1Time()
   {
     if(apple1Lt<=closeMidline)
     {
       apple1Lt=width-250;
       apple1_Random = Math.floor(Math.random()*425)+0;
       
     }
   }

    //==========apple2 TIME =============
    function apple2Time()
    {
      if(apple2Lt<=closeMidline)
      {
        apple2Lt=width-240;
        apple2_Random = Math.floor(Math.random()*420)+0;
        
      }
    }
 
  //==========orange TIME =============
  function orangeTime()
  {
    if(orangeLt<=closeMidline)
    {
      orangeLt=width-280;
      orange_Random = Math.floor(Math.random()*420)+0;
      
    }
  }

//==========orange1 TIME =============
function orange1Time()
{
  if(orange1Lt<=closeMidline)
  {
    orange1Lt=width-275;
    orange1_Random = Math.floor(Math.random()*425)+0;
    
  }
}

//==========orange2 TIME =============
function orange2Time()
{
  if(orange2Lt<=closeMidline)
  {
    orange2Lt=width-270;
    orange2_Random = Math.floor(Math.random()*430)+0;
    
  }
}

  //==========lemon TIME =============
  function lemonTime()
  {
    if(lemonLt<=closeMidline)
    {
      lemonLt=width-280;
      lemon_Random = Math.floor(Math.random()*420)+0;
      
    }
  }

  //==========lemon1 TIME =============
  function lemon1Time()
  {
    if(lemon1Lt<=closeMidline)
    {
      lemon1Lt=width-270;
      lemon1_Random = Math.floor(Math.random()*425)+0;
      
    }
  }

  //==========lemon2 TIME =============
  function lemon2Time()
  {
    if(lemon2Lt<=closeMidline)
    {
      lemon2Lt=width-260;
      lemon2_Random = Math.floor(Math.random()*430)+0;
      
    }
  }
  //==========pineapple TIME =============
  function pineappleTime()
  {
    if(pineappleLt<=closeMidline)
    {
      pineappleLt=width-280;
      pineapple_Random = Math.floor(Math.random()*420)+0;
      
    }
  }

   //==========pineapple1 TIME =============
   function pineapple1Time()
   {
     if(pineapple1Lt<=closeMidline)
     {
       pineapple1Lt=width-270;
       pineapple1_Random = Math.floor(Math.random()*425)+0;
       
     }
   }

 //==========pineapple2 TIME =============
 function pineapple2Time()
 {
   if(pineapple2Lt<=closeMidline)
   {
     pineapple2Lt=width-260;
     pineapple2_Random = Math.floor(Math.random()*430)+0;
     
   }
 }

//================================ ONE BULLET PACKAGE =============================
  //==========bullet1 TIME =============
  function bullet1Time()
  {
    if(bullet1Lt<=closeMidline)
    {
      bullet1Lt=width-280;
      bullet1_Random = Math.floor(Math.random()*430)+0;
      
    }
    
}

//==========bullet2 TIME =============
function bullet2Time()
{
  if(bullet2Lt<=closeMidline)
  {
    bullet2Lt=width-270;
    bullet2_Random = Math.floor(Math.random()*435)+0;
    
  }
  
}
//==========bullet3 TIME =============
function bullet3Time()
{
  if(bullet3Lt<=closeMidline)
  {
    bullet3Lt=width-260;
    bullet3_Random = Math.floor(Math.random()*440)+0;
    
  }
  
}
//==================================================================================
//==========bullet2_package TIME =============
function bullet2_packageTime()
{
  if(bullet2_packageLt<=closeMidline)
  {
    bullet2_packageLt=width-280;
    bullet2_package_Random = Math.floor(Math.random()*430)+0;
    
  }
  
}

//==========bullet21_package TIME =============
function bullet21_packageTime()
{
  if(bullet21_packageLt<=closeMidline)
  {
    bullet21_packageLt=width-270;
    bullet21_package_Random = Math.floor(Math.random()*435)+0;
    
  }
  
}

//==========bullet22_package TIME =============
function bullet22_packageTime()
{
  if(bullet22_packageLt<=closeMidline)
  {
    bullet22_packageLt=width-260;
    bullet22_package_Random = Math.floor(Math.random()*440)+0;
    
  }
  
}

//======================================== BULLET 3 PACKAGE =============

//==========bullet3_package TIME =============
function bullet3_packageTime()
{
  if(bullet3_packageLt<=closeMidline)
  {
    bullet3_packageLt=width-280;
    bullet3_package_Random = Math.floor(Math.random()*430)+0;
    
  }
  
}

//==========bullet31_package TIME =============
function bullet31_packageTime()
{
  if(bullet31_packageLt<=closeMidline)
  {
    bullet31_packageLt=width-270;
    bullet31_package_Random = Math.floor(Math.random()*435)+0;
    
  }
  
}

//==========bullet32_package TIME =============
function bullet32_packageTime()
{
  if(bullet32_packageLt<=closeMidline)
  {
    bullet32_packageLt=width-260;
    bullet32_package_Random = Math.floor(Math.random()*440)+0;
    
  }
  
}

//======================================== BULLET 5 PACKAGE =============
//==========bullet5_package TIME =============
function bullet5_packageTime()
{
  if(bullet5_packageLt<=closeMidline)
  {
    bullet5_packageLt=width-280;
    bullet5_package_Random = Math.floor(Math.random()*430)+0;
    
  }
  
}

//==========bullet51_package TIME =============
function bullet51_packageTime()
{
  if(bullet51_packageLt<=closeMidline)
  {
    bullet51_packageLt=width-270;
    bullet51_package_Random = Math.floor(Math.random()*435)+0;
    
  }
  
}


