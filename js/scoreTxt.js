function scoreFun()
{
    var sc = canvas.getContext("2d");
    sc.fillStyle="white";
    sc.font="18px Comic Sans MS";
    
    sc.fillText("SCORE : "+gameScore,350,25);
}
