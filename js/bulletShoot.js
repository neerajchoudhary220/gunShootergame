function BulletPckageShoot()
{
//====================shoot the bullet1===============
if(bullet1Src!='img/bulletFire.png')
{
if((bx+a)>=(bullet1Lt-22) && (by>=bullet1_sH && by<= (bullet1_sH+45)))
{
      bulletDefaultPosition();
     

      var theme = new Audio('sound/collectBullet.mp3').play()
      bulletCountColor = "orange";
      bullet1Src='img/bulletFire.png';
setInterval(function(){
      bulletCountColor = "white";
},2000);
     
 bullet1ImgCount.value=1;
 document.getElementById('bullet1ImgCount').value=1;
 TotalBullet=TotalBullet+1;

 if(bullet1Lt<=139)
      {

bullet1Lt=width-280;
bullet1_Random = Math.floor(Math.random()*430)+0;

bullet1Src='img/1bullet.png';
document.getElementById('bullet1ImgCount').value=0;
bullet1ImgCount.value=0;  



      }
}

}


//====================shoot the bullet2===============
if(bullet2Src!='img/bulletFire.png')
{
if((bx+a)>=(bullet2Lt-22) && (by>=bullet2_sH && by<= (bullet2_sH+45)))
{
      bulletDefaultPosition();
    

      var theme = new Audio('sound/collectBullet.mp3').play()
      bulletCountColor = "orange";
      
      bullet2Src='img/bulletFire.png';
setInterval(function(){
      bulletCountColor = "white";
},2000);
     
 bullet2ImgCount.value=1;
 document.getElementById('bullet2ImgCount').value=1;
 TotalBullet=TotalBullet+1;

 if(bullet2Lt<=139)
      {

bullet2Lt=width-270;
bullet2_Random = Math.floor(Math.random()*435)+0;

bullet2Src='img/1bullet.png';
document.getElementById('bullet2ImgCount').value=0;
bullet2ImgCount.value=0;  



      }
}

}



//====================shoot the bullet3===============
if(bullet3Src!='img/bulletFire.png')
{
if((bx+a)>=(bullet3Lt-22) && (by>=bullet3_sH && by<= (bullet3_sH+45)))
{
      bulletDefaultPosition();
      

      var theme = new Audio('sound/collectBullet.mp3').play()
      bulletCountColor = "orange";
      bullet3Src='img/bulletFire.png';
setInterval(function(){
      bulletCountColor = "white";
},2000);
     
 bullet3ImgCount.value=1;
 document.getElementById('bullet3ImgCount').value=1;
 TotalBullet=TotalBullet+1;

 if(bullet3Lt<=139)
      {

bullet3Lt=width-260;
bullet3_Random = Math.floor(Math.random()*440)+0;

bullet3Src='img/1bullet.png';
document.getElementById('bullet3ImgCount').value=0;
bullet3ImgCount.value=0;  



      }
}

}



//====================shoot the bullet2_package===============
if(bullet2_packageSrc!='img/bulletFire.png')
{
if((bx+a)>=(bullet2_packageLt-23) && (by>=bullet2_package_sH && by<= (bullet2_package_sH+45)))
{
      bulletDefaultPosition();
     
     

      var theme = new Audio('sound/collectBullet.mp3').play()
      bulletCountColor = "orange";
      bullet2_packageSrc='img/bulletFire.png';
setInterval(function(){
      bulletCountColor = "white";
},2000);
     
 bullet2_packageImgCount.value=1;
 document.getElementById('bullet2_packageImgCount').value=1;
 TotalBullet=TotalBullet+2;

 if(bullet2_packageLt<=139)
      {

bullet2_packageLt=width-280;
bullet2_package_Random = Math.floor(Math.random()*430)+0;

bullet2_packageSrc='img/1bullet.png';
document.getElementById('bullet2_packageImgCount').value=0;
bullet2_packageImgCount.value=0;  



      }
}

}


//====================shoot the bullet21_package===============
if(bullet21_packageSrc!='img/bulletFire.png')
{
      if((bx+a)>=(bullet21_packageLt-23) && (by>=bullet21_package_sH && by<= (bullet21_package_sH+45)))
      {
            bulletDefaultPosition();
            
           
      
            var theme = new Audio('sound/collectBullet.mp3').play()
            bulletCountColor = "orange";
            bullet21_packageSrc='img/bulletFire.png';
      setInterval(function(){
            bulletCountColor = "white";
      },2000);
           
       bullet21_packageImgCount.value=1;
       document.getElementById('bullet21_packageImgCount').value=1;
       TotalBullet=TotalBullet+2;
      
       if(bullet21_packageLt<=139)
            {
      
      bullet21_packageLt=width-270;
      bullet21_package_Random = Math.floor(Math.random()*435)+0;
      
      bullet21_packageSrc='img/1bullet.png';
      document.getElementById('bullet21_packageImgCount').value=0;
      bullet21_packageImgCount.value=0;  
      
      
      
            }
      }
      
      }
      
      //====================shoot the bullet22_package===============
if(bullet22_packageSrc!='img/bulletFire.png')
{
      if((bx+a)>=(bullet22_packageLt-23) && (by>=bullet22_package_sH && by<= (bullet22_package_sH+45)))
      {
            bulletDefaultPosition();
            
           
      
            var theme = new Audio('sound/collectBullet.mp3').play()
            bulletCountColor = "orange";
            bullet22_packageSrc='img/bulletFire.png';
      setInterval(function(){
            bulletCountColor = "white";
      },2000);
           
       bullet22_packageImgCount.value=1;
       document.getElementById('bullet22_packageImgCount').value=1;
       TotalBullet=TotalBullet+2;
      
       if(bullet22_packageLt<=139)
            {
      
      bullet22_packageLt=width-260;
      bullet22_package_Random = Math.floor(Math.random()*440)+0;
      
      bullet22_packageSrc='img/1bullet.png';
      document.getElementById('bullet22_packageImgCount').value=0;
      bullet22_packageImgCount.value=0;  
      
      
      
            }
      }
      
      }
      
      
      
//======================= BULLET 3 PACKAGE SHOOT ================

      //====================shoot the bullet3_package===============
      if(bullet3_packageSrc!='img/bulletFire.png')
      {
            if((bx+a)>=(bullet3_packageLt-25) && (by>=bullet3_package_sH && by<= (bullet3_package_sH+45)))
            {
                  bulletDefaultPosition();
                  //document.getElementById('rH').value="working";
                 
            
                  var theme = new Audio('sound/collectBullet.mp3').play()
                  bulletCountColor = "orange";
                  bullet3_packageSrc='img/bulletFire.png';
            setInterval(function(){
                  bulletCountColor = "white";
            },2000);
                 
             bullet3_packageImgCount.value=1;
             document.getElementById('bullet3_packageImgCount').value=1;
             TotalBullet=TotalBullet+3;
            
             if(bullet3_packageLt<=139)
                  {
            
            bullet3_packageLt=width-260;
            bullet3_package_Random = Math.floor(Math.random()*440)+0;
            
            bullet3_packageSrc='img/1bullet.png';
            document.getElementById('bullet3_packageImgCount').value=0;
            bullet3_packageImgCount.value=0;  
            
            
            
                  }
            }
            
            }
           
//====================shoot the bullet31_package===============
if(bullet31_packageSrc!='img/bulletFire.png')
{
      if((bx+a)>=(bullet31_packageLt-25) && (by>=bullet31_package_sH && by<= (bullet31_package_sH+45)))
      {
            bulletDefaultPosition();
            //document.getElementById('rH').value="working";
           
      
            var theme = new Audio('sound/collectBullet.mp3').play()
            bulletCountColor = "orange";
            bullet31_packageSrc='img/bulletFire.png';
      setInterval(function(){
            bulletCountColor = "white";
      },2000);
           
       bullet31_packageImgCount.value=1;
       document.getElementById('bullet31_packageImgCount').value=1;
       TotalBullet=TotalBullet+3;
      
       if(bullet31_packageLt<=139)
            {
      
      bullet31_packageLt=width-270;
      bullet31_package_Random = Math.floor(Math.random()*435)+0;
      
      bullet31_packageSrc='img/1bullet.png';
      document.getElementById('bullet31_packageImgCount').value=0;
      bullet31_packageImgCount.value=0;  
      
      
      
            }
      }
      
      }
     
      //====================shoot the bullet32_package===============
      if(bullet32_packageSrc!='img/bulletFire.png')
      {
            if((bx+a)>=(bullet32_packageLt-25) && (by>=bullet32_package_sH && by<= (bullet32_package_sH+45)))
            {
                  bulletDefaultPosition();
                  //document.getElementById('rH').value="working";
                 
            
                  var theme = new Audio('sound/collectBullet.mp3').play()
                  bulletCountColor = "orange";
                  bullet32_packageSrc='img/bulletFire.png';
            setInterval(function(){
                  bulletCountColor = "white";
            },2000);
                 
             bullet32_packageImgCount.value=1;
             document.getElementById('bullet32_packageImgCount').value=1;
             TotalBullet=TotalBullet+3;
            
             if(bullet32_packageLt<=139)
                  {
            
            bullet32_packageLt=width-260;
            bullet32_package_Random = Math.floor(Math.random()*440)+0;
            
            bullet32_packageSrc='img/1bullet.png';
            document.getElementById('bullet32_packageImgCount').value=0;
            bullet32_packageImgCount.value=0;  
            
            
            
                  }
            }
            
            }
           //======================= BULLET 3 PACKAGE SHOOT ================
      //====================shoot the bullet5_package===============
      if(bullet5_packageSrc!='img/bulletFire.png')
      {
            if((bx+a)>=(bullet5_packageLt-25) && (by>=bullet5_package_sH && by<= (bullet5_package_sH+45)))
            {
                  bulletDefaultPosition();
                  //document.getElementById('rH').value="working";
                 
            
                  var theme = new Audio('sound/collectBullet.mp3').play()
                  bulletCountColor = "orange";
                  bullet5_packageSrc='img/bulletFire.png';
            setInterval(function(){
                  bulletCountColor = "white";
            },2000);
                 
             bullet5_packageImgCount.value=1;
             document.getElementById('bullet5_packageImgCount').value=1;
             TotalBullet=TotalBullet+5;
            
             if(bullet5_packageLt<=139)
                  {
            
            bullet5_packageLt=width-280;
            bullet5_package_Random = Math.floor(Math.random()*430)+0;
            
            bullet5_packageSrc='img/1bullet.png';
            document.getElementById('bullet5_packageImgCount').value=0;
            bullet5_packageImgCount.value=0;  
            
            
            
                  }
            }
            
            }
            
          //====================shoot the bullet51_package===============
      if(bullet51_packageSrc!='img/bulletFire.png')
      {
            if((bx+a)>=(bullet51_packageLt-25) && (by>=bullet51_package_sH && by<= (bullet51_package_sH+45)))
            {
                  bulletDefaultPosition();
                  //document.getElementById('rH').value="working";
                 
            
                  var theme = new Audio('sound/collectBullet.mp3').play()
                  bulletCountColor = "orange";
                  bullet51_packageSrc='img/bulletFire.png';
            setInterval(function(){
                  bulletCountColor = "white";
            },2000);
                 
             bullet51_packageImgCount.value=1;
             document.getElementById('bullet51_packageImgCount').value=1;
             TotalBullet=TotalBullet+5;
            
             if(bullet51_packageLt<=139)
                  {
            
            bullet51_packageLt=width-270;
            bullet51_package_Random = Math.floor(Math.random()*435)+0;
            
            bullet51_packageSrc='img/1bullet.png';
            document.getElementById('bullet51_packageImgCount').value=0;
            bullet51_packageImgCount.value=0;  
            
            
            
                  }
            }
            
            }
}
            