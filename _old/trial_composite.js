window.onload=function(){
    var canvas = document.getElementById("canvas");
    x_drawn=0
    ctx = canvas.getContext("2d");
    cW = canvas.width;
    cH = canvas.height;
    ctx.fillStyle="violet";
    ctx.font="60px lato light";
    ctx.fillText("hello world",50,150);
    ctx.fillStyle="blue";
    ctx.globalCompositeOperation="source-atop";
    ctx.save()
    var step=1
    var x_middle=50+ctx.measureText("hello").width
    var w_last=ctx.measureText(" world").width
    var y_height=1;
    function drawUpdate(){
        if (step==1){
            ctx.fillRect(x_middle+x_drawn,0,1,200);
            x_drawn-=1;
        }
        else{

            ctx.fillRect(x_middle+1,150,w_last,-y_height);
            y_height+=1;
        }


        if (x_middle+x_drawn<50){
            step=2
        }
    }

    window.setInterval(drawUpdate, 8);
}
