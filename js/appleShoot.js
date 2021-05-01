//====================shoot the apple===============
function appleShoot()
{
if(appleSrc!='img/fire.gif')
{
if((bx+a)>=(appleLt-37) && (by>=apple_sH && by<= (apple_sH+25)))
{
      bulletDefaultPosition();
    
      new Audio('sound/pop.mp3').play()

      appleSrc='img/fire.gif';


 appleImgCount.value=1;
 document.getElementById('appleImgCount').value=1;
 gameScore=gameScore+1;

 if(appleLt<=148)
      {

appleLt=width-260;
apple_Random = Math.floor(Math.random()*420)+0;

appleSrc='img/apple.png';
document.getElementById('appleImgCount').value=0;
appleImgCount.value=0;  



      }
}

}





//document.getElementById('rH').value=by;

//====================shoot the apple2===============
if(apple2Src!='img/fire.gif')
{
if((bx+a)>=(apple2Lt-36) && (by>=apple2_sH && by<= (apple2_sH+25)))
{
      bulletDefaultPosition();
     // document.getElementById('rH').value="working";
     new Audio('sound/pop.mp3').play()


      apple2Src='img/fire.gif';


 apple2ImgCount.value=1;
 document.getElementById('apple2ImgCount').value=1;
 gameScore=gameScore+1;

 if(apple2Lt<=148)
      {

apple2Lt=width-240;
apple2_Random = Math.floor(Math.random()*425)+0;

apple2Src='img/apple.png';
document.getElementById('apple2ImgCount').value=0;
apple2ImgCount.value=0;  



      }
}

}

//=--------------------------------------------------------------------






//====================shoot the apple1===============
if(apple1Src!='img/fire.gif')
{
if((bx+a)>=(apple1Lt-36) && (by>=apple1_sH && by<= (apple1_sH+15)))
{
     bulletDefaultPosition();
 
     new Audio('sound/pop.mp3').play()

    apple1Src='img/fire.gif';


 apple1ImgCount.value=1;
 document.getElementById('apple1ImgCount').value=1;
 gameScore=gameScore+1;

 if(apple1Lt<=148)
      {

apple1Lt=width-240;
apple1_Random = Math.floor(Math.random()*425)+0;

apple1Src='img/apple.png';
document.getElementById('apple1ImgCount').value=0;
apple1ImgCount.value=0;  



      }
}

}

}