function TotalBulletFun()
  {
    var bullet_context = canvas.getContext("2d");
    bullet_img = new Image();
    bullet_img.src="img/bl.png";
    bullet_context.drawImage(bullet_img,280,bullet_count_Height,25,35);
  }
  function bulletTxt()
  {
    bulletTx = canvas.getContext("2d");
    bulletTx.font ="18px Comic Sans MS";
    
   
    bulletTx.fillStyle=bulletCountColor;
    bulletTx.fillText(": "+TotalBullet,300,25);
  }