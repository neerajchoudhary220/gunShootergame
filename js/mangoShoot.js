function mangoShoot()
{
//====================shoot the mango===============
if(mangoSrc!='img/fire.gif')
{
if((bx+a)>=(mangoLt-35) && (by>=mango_sH && by<= (mango_sH+25)))
{
     bulletDefaultPosition();
     //document.getElementById('rH').value="working";
    //alert("work 1");
  new Audio('sound/pop.mp3').play()

    mangoSrc='img/fire.gif';


 mangoImgCount.value=1;
 document.getElementById('mangoImgCount').value=1;
 gameScore=gameScore+1;

 if(mangoLt<=148)
      {

mangoLt=width-280;
mango_Random = Math.floor(Math.random()*420)+0;

mangoSrc='img/apple.png';
document.getElementById('mangoImgCount').value=0;
mangoImgCount.value=0;  



      }
}

}

//====================shoot the mango1===============
if(mango1Src!='img/fire.gif')
{
if((bx+a)>=(mango1Lt-35) && (by>=mango1_sH && by<= (mango1_sH+25)))
{
     bulletDefaultPosition();
     //document.getElementById('rH').value="working";
    //alert("work 1");
  new Audio('sound/pop.mp3').play()

    mango1Src='img/fire.gif';


 mango1ImgCount.value=1;
 document.getElementById('mango1ImgCount').value=1;
 gameScore=gameScore+1;

 if(mango1Lt<=148)
      {

mango1Lt=width-275;
mango1_Random = Math.floor(Math.random()*425)+0;

mango1Src='img/apple.png';
document.getElementById('mango1ImgCount').value=0;
mango1ImgCount.value=0;  



      }
}

}

//====================shoot the mango2===============
if(mango2Src!='img/fire.gif')
{
if((bx+a)>=(mango2Lt-35) && (by>=mango2_sH && by<= (mango2_sH+25)))
{
     bulletDefaultPosition();
     //document.getElementById('rH').value="working";
    //alert("work 1");
  new Audio('sound/pop.mp3').play()

    mango2Src='img/fire.gif';


 mango2ImgCount.value=1;
 document.getElementById('mango2ImgCount').value=1;
 gameScore=gameScore+1;

 if(mango2Lt<=148)
      {

mango2Lt=width-270;
mango2_Random = Math.floor(Math.random()*430)+0;

mango2Src='img/apple.png';
document.getElementById('mango2ImgCount').value=0;
mango2ImgCount.value=0;  



      }
}

}

}