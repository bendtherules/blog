var generate=function(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    
    var cW = canvas.width;
    var cH = canvas.height;
    var l=300+Math.random()*100;

    ctx.clearRect(0,0,cW,cH);
    var a_main=(90+((get0or1()-0.5)*2)*Math.random()*20)/180*Math.PI;
    console.log(a_main*180/Math.PI);
    var a_chord=(get0or1()-.5)*2*(20+Math.random()*25)/180*Math.PI;
    var start=[300,400];
    console.log(start);
    
    var l2=(l/2)/*-Math.random()*l/4);*/
    var p0,p1,p2;
    
    function getCP(start,a_main,a_chord,l,l2)
    {
        var stop=[start[0]+l*Math.cos(a_main),start[1]-l*Math.sin(a_main)]
        var p0=[start[0]+l2/2*Math.cos(a_main+a_chord),start[1]-l2*Math.sin(a_main+a_chord)];
        var p1=[stop[0]-l2*Math.cos(a_main+a_chord),stop[1]+l2*Math.sin(a_main+a_chord)];
        var p2=stop;
        return [p0,p1,p2]
    }
    function getSlope(p0,p1,p2,p3,t)
    {
        var slope_y=3*Math.pow((1-t),2)*(p1[1]-p0[1])+6*(1-t)*t*(p2[1]-p1[1]+3*Math.pow(t,2)*(p3[1]-p2[1]))
        var slope_x=3*Math.pow((1-t),2)*(p1[0]-p0[0])+6*(1-t)*t*(p2[0]-p1[0]+3*Math.pow(t,2)*(p3[0]-p2[0]))
        return -Math.atan2(slope_y,slope_x)*180/Math.PI // in deg
    }
    
    var tmp_p=getCP(start,a_main,a_chord,l,l2);
    p0=tmp_p[0]
    p1=tmp_p[1]
    p2=tmp_p[2]
    
    function getPoint(c){
        // c -> 0 to 1
        function getCubic(a0,a1,a2,a3){
            return Math.pow(1-c,3)*a0+3*Math.pow(1-c,2)*c*a1+3*Math.pow(c,2)*(1-c)*a2+Math.pow(c,3)*a3;
        }
        return [getCubic(start[0],p0[0],p1[0],p2[0]),getCubic(start[1],p0[1],p1[1],p2[1])];
    }
    
    function get0or1(){
        return Math.round(Math.random());
    }
    
    function normalize (ang) {
      if (ang>180)
      ang=-(360-ang)
      return ang;
    }
    
    function drawTestPoints(numb){
        var r_or_l;
        //var testPoints=[getPoint(1/4),getPoint(2/4),getPoint(3/4)];
        var testPoints=[]
        for(var count=0;count<numb;count++){
            testPoints.push(getPoint((count+1)/(numb+1)))
        }
        for (var count=0;count<testPoints.length;count++){
            var tp_start=[testPoints[count][0],testPoints[count][1]];
            ctx.moveTo(tp_start[0],tp_start[1]);
            var bin=get0or1();
            //var a_main=(bin*180+(-bin+.5)*2*(15+Math.random()*45))/180*Math.PI;
            var a_main=getSlope(start,p0,p1,p2,(count+1)/4)
            console.log("a_main ="+a_main)
            
            if (a_main<=90){
                
                var diff=20
                a_main-=(diff+Math.random()*(a_main-diff)/2)
                if (r_or_l==1){
                    a_main=180-a_main
                    r_or_l=2
                }
                else{
                    r_or_l=1
                }
            }
            else{
                
                if (a_main<=180){
                    var diff=20
                    a_main+=diff+Math.random()*(180-(a_main+diff))/2
                    if (r_or_l==2){
                        a_main=180-a_main
                        r_or_l=1
                    }
                    else{
                        r_or_l=2                        
                    }
                }
            }
            a_main=normalize(a_main);
            if (a_main<=0 && Math.abs(a_main)<=90){
                console.log("got right");
                a_main=-a_main;
            }
            if (a_main<=0 && Math.abs(a_main)>90){
                    console.log("got left");
                    a_main=-a_main
            }
            a_main=a_main/180*Math.PI
            
            var a_chord=(get0or1()*(30+Math.random()*15))/180*Math.PI;
            var l=80+Math.random()*50;
            var l2=l/2;
            var tmp_p=getCP(tp_start,a_main,a_chord,l,l2);
            var tp_p0=tmp_p[0];
            var tp_p1=tmp_p[1];
            var tp_p2=tmp_p[2];
            ctx.bezierCurveTo(tp_p0[0],tp_p0[1],tp_p1[0],tp_p1[1],tp_p2[0],tp_p2[1]);
        }
    }
    
    ctx.strokeStyle="green";
    /*ctx.lineWidth=70;*/
    ctx.lineCap='round';   
    ctx.beginPath();
    ctx.moveTo(start[0],start[1]);
    ctx.bezierCurveTo(p0[0],p0[1],p1[0],p1[1],p2[0],p2[1]);
    /*console.log(ctx.isPointInPath(testPoint[0],testPoint[1]));*/
    drawTestPoints(5);
    ctx.stroke();
    
}

window.onload=function(){
    generate()
    var g_button=document.getElementById("generate")
    g_button.onclick=generate
}

