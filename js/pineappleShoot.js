
function pineappleShoot()
{
//====================shoot the pineapple===============

if(pineappleSrc!='img/fire.gif')
{
if((bx+a)>=(pineappleLt-35) && (by>=pineapple_sH && by<= (pineapple_sH+30)))
{
     bulletDefaultPosition();
    // document.getElementById('rH').value="working";
    //alert("work 1");
  new Audio('sound/pop.mp3').play()

    pineappleSrc='img/fire.gif';


 pineappleImgCount.value=1;
 document.getElementById('pineappleImgCount').value=1;
 gameScore=gameScore+1;

 if(pineappleLt<=148)
      {

pineappleLt=width-280;
pineapple_Random = Math.floor(Math.random()*420)+0;

pineappleSrc='img/apple.png';
document.getElementById('pineappleImgCount').value=0;
pineappleImgCount.value=0;  



      }
}
}
//====================shoot the pineapple1===============

if(pineapple1Src!='img/fire.gif')
{
if((bx+a)>=(pineapple1Lt-35) && (by>=pineapple1_sH && by<= (pineapple1_sH+30)))
{
     bulletDefaultPosition();
    // document.getElementById('rH').value="working";
    //alert("work 1");
  new Audio('sound/pop.mp3').play()

    pineapple1Src='img/fire.gif';


 pineapple1ImgCount.value=1;
 document.getElementById('pineapple1ImgCount').value=1;
 gameScore=gameScore+1;

 if(pineapple1Lt<=148)
      {

pineapple1Lt=width-270;
pineapple1_Random = Math.floor(Math.random()*425)+0;

pineapple1Src='img/apple.png';
document.getElementById('pineapple1ImgCount').value=0;
pineapple1ImgCount.value=0;  



      }
}
}

//====================shoot the pineapple2===============

if(pineapple2Src!='img/fire.gif')
{
if((bx+a)>=(pineapple2Lt-35) && (by>=pineapple2_sH && by<= (pineapple2_sH+30)))
{
     bulletDefaultPosition();
    // document.getElementById('rH').value="working";
    //alert("work 1");
  new Audio('sound/pop.mp3').play()

    pineapple2Src='img/fire.gif';


 pineapple2ImgCount.value=1;
 document.getElementById('pineapple2ImgCount').value=1;
 gameScore=gameScore+1;

 if(pineapple2Lt<=148)
      {

pineapple2Lt=width-270;
pineapple2_Random = Math.floor(Math.random()*430)+0;

pineapple2Src='img/apple.png';
document.getElementById('pineapple2ImgCount').value=0;
pineapple2ImgCount.value=0;  



      }
}
}


}