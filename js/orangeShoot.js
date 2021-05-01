function orangeShoot()
{

//====================shoot the orange===============
if(orangeSrc!='img/fire.gif')
{
if((bx+a)>=(orangeLt-32) && (by>=orange_sH && by<= (orange_sH+25)))
{
     bulletDefaultPosition();
     //document.getElementById('rH').value="working";
   
    
    new Audio('sound/pop.mp3').play()

    orangeSrc='img/fire.gif';


 orangeImgCount.value=1;
 document.getElementById('orangeImgCount').value=1;
 gameScore=gameScore+1;

 if(orangeLt<=148)
      {

orangeLt=width-280;
orange_Random = Math.floor(Math.random()*420)+0;

orangeSrc='img/apple.png';
document.getElementById('orangeImgCount').value=0;
orangeImgCount.value=0;  



      }
}

}


//====================shoot the orange1===============
if(orange1Src!='img/fire.gif')
{
if((bx+a)>=(orange1Lt-32) && (by>=orange1_sH && by<= (orange1_sH+25)))
{
     bulletDefaultPosition();
     //document.getElementById('rH').value="working";
   
    
    new Audio('sound/pop.mp3').play()

    orange1Src='img/fire.gif';


 orange1ImgCount.value=1;
 document.getElementById('orange1ImgCount').value=1;
 gameScore=gameScore+1;

 if(orange1Lt<=148)
      {

orange1Lt=width-275;
orange1_Random = Math.floor(Math.random()*425)+0;

orange1Src='img/apple.png';
document.getElementById('orange1ImgCount').value=0;
orange1ImgCount.value=0;  



      }
}

}

//====================shoot the orange2===============
if(orange2Src!='img/fire.gif')
{
if((bx+a)>=(orange2Lt-32) && (by>=orange2_sH && by<= (orange2_sH+25)))
{
     bulletDefaultPosition();
     //document.getElementById('rH').value="working";
   
    
    new Audio('sound/pop.mp3').play()

    orange2Src='img/fire.gif';


 orange2ImgCount.value=1;
 document.getElementById('orange2ImgCount').value=1;
 gameScore=gameScore+1;

 if(orange2Lt<=148)
      {

orange2Lt=width-270;
orange2_Random = Math.floor(Math.random()*430)+0;

orange2Src='img/apple.png';
document.getElementById('orange2ImgCount').value=0;
orange2ImgCount.value=0;  



      }
}

}


}