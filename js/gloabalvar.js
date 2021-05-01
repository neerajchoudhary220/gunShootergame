var canvas; 
  //var gunImg = document.getElementById('gunImg');
var shootOn_off =document.getElementById('st');
  var x;
var y;

var dx=5;
var dy=5;
var ox=5;
var oy=5;
var a=0;
var gun;
var gameScore =0;

var TotalBullet =30;
//var height = window.innerHeight-50;
var height = window.innerHeight-20;
 //var width = window.innerWidth-100;
 var width = window.innerWidth-20;
 var gamebox_left;
 var gamebox_top;
 var bx;   //bx mean bullet x
  var by; //by mean bullet y
  bx=ox;
  by=oy;

  var closeMidline=130;
  var bt=width-280;
var clearR;


var gameOver =0;
var gunShot=0;
  
  //var bt =200;
var tt,b=0;
 var rH;
 var bullet_count_Height =3;
 var bulletCountColor="white";
 //=======BOMB VAR ==========

  var bombLt = width-280;
  var bombH;
  var bombSrc;
  var bomb_sH;
var bombImgCount = document.getElementById('bombImgCount');

 //=======bomb1 VAR ==========

 var bomb1Lt = width-270;
 var bomb1H;
 var bomb1Src;
 var bomb1_sH;
var bomb1ImgCount = document.getElementById('bomb1ImgCount');

 //=======bomb2 VAR ==========

 var bomb2Lt = width-260;
 var bomb2H;
 var bomb2Src;
 var bomb2_sH;
var bomb2ImgCount = document.getElementById('bomb2ImgCount');

var appleImgCount = document.getElementById('appleImgCount');
//============ APPLE VAR ===============

var appleLt= width-260;
var appleH;
var appleSrc;
var apple_sH;

//============ apple1 VAR ===============

var apple1Lt= width-250;
var apple1H;
var apple1Src;
var apple1_sH;

//============ apple2 VAR ===============

var apple2Lt= width-240;
var apple2H;
var apple2Src;
var apple2_sH;

//============ orange VAR ===============

var orangeLt = width-280;
var orangeH;
var orangeSrc;
var orange_sH;

//============ orange1 VAR ===============

var orange1Lt = width-275;
var orange1H;
var orange1Src;
var orange1_sH;

//============ orange2 VAR ===============

var orange2Lt = width-270;
var orange2H;
var orange2Src;
var orange2_sH;

//============ pineapple VAR ===============

var pineappleLt = width-280;
var pineappleH;
var pineappleSrc;
var pineapple_sH;

//============ pineapple1 VAR ===============

var pineapple1Lt = width-270;
var pineapple1H;
var pineapple1Src;
var pineapple1_sH;


//============ pineapple2 VAR ===============

var pineapple2Lt = width-260;
var pineapple2H;
var pineapple2Src;
var pineapple2_sH;

//============ lemon VAR ===============

var lemonLt = width-280;
var lemonH;
var lemonSrc;
var lemon_sH;

//============ lemon1 VAR ===============

var lemon1Lt = width-270;
var lemon1H;
var lemon1Src;
var lemon1_sH;

//============ lemon2 VAR ===============

var lemon2Lt = width-260;
var lemon2H;
var lemon2Src;
var lemon2_sH;

//============ mango VAR ===============

var mangoLt = width-280;
var mangoH;
var mangoSrc;
var mango_sH;

//============ mango1 VAR ===============

var mango1Lt = width-275;
var mango1H;
var mango1Src;
var mango1_sH;

//============ mango2 VAR ===============

var mango2Lt = width-270;
var mango2H;
var mango2Src;
var mango2_sH;



//============ bullet1 VAR ===============

var bullet1Lt = width-280;
var bullet1H;
var bullet1Src;
var bullet1_sH;

//============ bullet2 VAR ===============

var bullet2Lt = width-270;
var bullet2H;
var bullet2Src;
var bullet2_sH;

//============ bullet3 VAR ===============

var bullet3Lt = width-260;
var bullet3H;
var bullet3Src;
var bullet3_sH;

//============ bullet2_package VAR ===============

var bullet2_packageLt = width-280;
var bullet2_packageH;
var bullet2_packageSrc;
var bullet2_package_sH;

//============ bullet21_package VAR ===============

var bullet21_packageLt = width-270;
var bullet21_packageH;
var bullet21_packageSrc;
var bullet21_package_sH;

//============ bullet22_package VAR ===============

var bullet22_packageLt = width-260;
var bullet22_packageH;
var bullet22_packageSrc;
var bullet22_package_sH;

//=================================  BULLET 3 PACKAGE ========================
//============ bullet3_package VAR ===============

var bullet3_packageLt = width-280;
var bullet3_packageH;
var bullet3_packageSrc;
var bullet3_package_sH;

//============ bullet31_package VAR ===============

var bullet31_packageLt = width-270;
var bullet31_packageH;
var bullet31_packageSrc;
var bullet31_package_sH;

//============ bullet32_package VAR ===============

var bullet32_packageLt = width-260;
var bullet32_packageH;
var bullet32_packageSrc;
var bullet32_package_sH;


//=================================  BULLET 3 PACKAGE ========================

//============ bullet5_package VAR ===============

var bullet5_packageLt = width-280;
var bullet5_packageH;
var bullet5_packageSrc;
var bullet5_package_sH;

//============ bullet51_package VAR ===============

var bullet51_packageLt = width-270;
var bullet51_packageH;
var bullet51_packageSrc;
var bullet51_package_sH;