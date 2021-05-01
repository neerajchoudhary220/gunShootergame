




// DRAW MIDLINE
function midline()
{
  var midline = canvas.getContext("2d");
  midline.strokeStyle="red";
  midline.width=5;
  var cH = height/10;
var cW = width/10;
  //midline.moveTo(cW,0);
 // midline.lineTo(cw,cH);
 midline.moveTo(150,0);
 midline.lineTo(150,500);
  
  midline.stroke();
}