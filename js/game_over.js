function gameOverFun()
{
    var sc = canvas.getContext("2d");
    sc.fillStyle="red";
    sc.font="50px Comic Sans MS";
    
    sc.fillText("GAME OVER",75,250);
}

function rs()
{
    var sc = canvas.getContext("2d");
    sc.fillStyle="white";
    sc.font="18px Comic Sans MS";
    
    sc.fillText("Press F5 Restart To Game",120,300);
}