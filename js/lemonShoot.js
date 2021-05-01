function lemonShoot()
{
//====================shoot the lemon===============
if(lemonSrc!='img/fire.gif')
{
if((bx+a)>=(lemonLt-34) && (by>=lemon_sH && by<= (lemon_sH+30)))
{
     bulletDefaultPosition();
     //document.getElementById('rH').value="working";
    //alert("work 1");
    new Audio('sound/pop.mp3').play()

    lemonSrc='img/fire.gif';


 lemonImgCount.value=1;
 document.getElementById('lemonImgCount').value=1;
 gameScore=gameScore+1;

 if(lemonLt<=148)
      {

lemonLt=width-280;
lemon_Random = Math.floor(Math.random()*420)+0;

lemonSrc='img/apple.png';
document.getElementById('lemonImgCount').value=0;
lemonImgCount.value=0;  



      }
}

}
//====================shoot the lemon1===============
if(lemon1Src!='img/fire.gif')
{
if((bx+a)>=(lemon1Lt-34) && (by>=lemon1_sH && by<= (lemon1_sH+30)))
{
     bulletDefaultPosition();
     //document.getElementById('rH').value="working";
    //alert("work 1");
    new Audio('sound/pop.mp3').play()

    lemon1Src='img/fire.gif';


 lemon1ImgCount.value=1;
 document.getElementById('lemon1ImgCount').value=1;
 gameScore=gameScore+1;

 if(lemon1Lt<=148)
      {

lemon1Lt=width-270;
lemon1_Random = Math.floor(Math.random()*425)+0;

lemon1Src='img/apple.png';
document.getElementById('lemon1ImgCount').value=0;
lemon1ImgCount.value=0;  



      }
}

}

//====================shoot the lemon2===============
if(lemon2Src!='img/fire.gif')
{
if((bx+a)>=(lemon2Lt-34) && (by>=lemon2_sH && by<= (lemon2_sH+30)))
{
     bulletDefaultPosition();
     //document.getElementById('rH').value="working";
    //alert("work 1");
    new Audio('sound/pop.mp3').play()

    lemon2Src='img/fire.gif';


 lemon2ImgCount.value=1;
 document.getElementById('lemon2ImgCount').value=1;
 gameScore=gameScore+1;

 if(lemon2Lt<=148)
      {

lemon2Lt=width-260;
lemon2_Random = Math.floor(Math.random()*430)+0;

lemon2Src='img/apple.png';
document.getElementById('lemon2ImgCount').value=0;
lemon2ImgCount.value=0;  



      }
}

}




}
