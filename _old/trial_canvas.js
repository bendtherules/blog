window.onload=function(){
    score=0;
    var canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    
    var cW = canvas.width;
    var cH = canvas.height;
    objList=[];
    var canvasRect=canvas.getBoundingClientRect();
    //ctx.globalCompositeOperation ='copy';
    
    
    ball=function (startX,startY,radius,hspeed,vspeed,color)
    {
        this.x=startX;
        this.y=startY;
        this.radius=radius;
        this.hspeed=hspeed;
        this.vspeed=vspeed;
        this.color=color;
        objList.push(this);
    }
    ball.prototype.check_click=function(mouse_x,mouse_y)
    {
        console.log(mouse_x,this.x,mouse_y,this.y);
        if (Math.pow(mouse_x-canvasRect.left-this.x,2)+Math.pow(mouse_y-canvasRect.top-this.y,2)<Math.pow(this.radius,2))
        {
            this.self_clear();
            objList.splice(objList.indexOf(this),1);
            score++;
        }
    }
    ball.prototype.check_collision=function()
    {
        if ((this.x-this.radius<0)||(this.x+this.radius>cW))
        {
            this.hspeed=-this.hspeed;
        }
        if ((this.y-this.radius<0)||(this.y+this.radius>cH))
        {
            this.vspeed=-this.vspeed;
        }
    }
    ball.prototype.self_clear=function(){
        ctx.clearRect(this.draw_x-this.draw_radius,this.draw_y-this.draw_radius,this.draw_radius*2,this.draw_radius*2);
    }
    ball.prototype.self_draw=function(){
        ctx.fillStyle=this.color;
        ctx.beginPath();
        ctx.moveTo(this.draw_x,this.draw_y);
        ctx.arc(this.draw_x, this.draw_y, this.draw_radius, 0, 2*Math.PI, true);
        ctx.fill();
    }
    ball.prototype.update=function()
    {
        this.x+=this.hspeed;
        this.y+=this.vspeed;
        
        var round=Math.round;
        this.draw_x=round(this.x)
        this.draw_y=round(this.y)
        this.draw_radius=round(this.radius)
        
        this.check_collision();
        this.self_draw();
    }

    ball.prototype.preUpdate=function()
    {
        
        
        this.self_clear();
    }

    callClick=function(ele,ev){
        //console.log(ev);
        ele.check_click(ev.clientX,ev.clientY);
    }
    
    totalClick=function(ev){
        console.log("Clicked");
        /*objList.forEach.call(this,callClick);*/
       for (var i=0,l=objList.length;i<l;i++)
       {
           callClick(objList[i],ev);
       }
       
    }
    

    
    callUpdate=function(ele){
        ele.update();
    }
    callPreUpdate=function(ele){
        ele.preUpdate();
    }
        
    totalUpdate=function(){
        //ctx.clearRect(0,0,cW,cH);
        objList.forEach(callPreUpdate);
        objList.forEach(callUpdate);
    }
    
    gameLoop=function(){
        window.requestAnimationFrame(gameLoop, 16);
        totalUpdate();
    }
   
   canvas.onmousedown=totalClick
    
    createBall(10);
    window.requestAnimationFrame(gameLoop, 16);
}

function createBall(n){
    for(var c=0;c<n;c++)
    {
        a=new ball(100+Math.random()*200,100+Math.random()*200,25,Math.random()*4,Math.random()*4,"green");
    }
}