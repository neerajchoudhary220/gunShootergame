//============gun position=======================
function my(event)
{ 
  x =event.clientX;
  y = event.clientY;
 // console.log("x "+x);
 // console.log("y "+y);
   gamebox_left = x-canvas.offsetLeft;
   gamebox_top = y-canvas.offsetTop;
   ///document.getElementById('x').value=gamebox_left;
   //document.getElementById('y').value=gamebox_top;
  //console.log("gamebox Left "+gamebox_left);
 // console.log("gamebox Top "+gamebox_top);
  //draw();
}