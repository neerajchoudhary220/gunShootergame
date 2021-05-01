//========UP DOWN LEFT RIGHT ARROW KEY PRESS=======//
function pressArrowKeys(event)
{
 
  
  switch(event.keyCode)
  {
   

    case 38://up
    oy-=dy;
    
    //alert("up");
    break;

    case 40://down
    oy+=dy;
    
    //alert("up");
    break;

    case 37://left
    ox-=dx;
    
   // alert("up");
    break;

    case 39://right
    ox+=dx;
    
    //alert("up");
    break;

   
    
  }
  
}
