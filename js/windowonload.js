window.onload=function()
{
  window.addEventListener('keydown',pressArrowKeys,true);
  

  canvas= document.getElementById('game_box');
  gun = canvas.getContext("2d");



  //bomb();
 // alert("its' work");
 TotalBulletFun();
 redBalloon();
 Game_theme();
 //pineappleRandom();
 //appleFun();
  return (setInterval(draw,10));
  //setInterval(cealrrightSide,10));
  

  

}
