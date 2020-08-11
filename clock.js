window.onload=function(){

x={
        '0':'Sunday',
        '1':'Monday',
        '2':'Tuesday',
        '3':'Wednesday',
        '4':'Thursday',
        '5':'Friday',
        '6':'Saturday',

    }
    var time=new Date();
    var hour_start=time.getHours()
    var minute_start=time.getMinutes()
    var second_start=time.getSeconds()
    document.querySelector('.second').style.transform='rotateZ('+eval(second_start*6)+'deg) translateY(-50%)';
    document.querySelector('.minute').style.transform='rotateZ('+eval(minute_start*6+0.1*second_start)+'deg) translateY(-50%)';
    document.querySelector('.hour').style.transform='rotateZ('+eval(hour_start%12*30+0.5*minute_start+(0.05/6)*second_start)+'deg) translateY(-50%)';
    //document.querySelector('.display').innerHTML=hour_start%12+':'+minute_start+':'+second_start;
    document.querySelector('.display').innerHTML=x[time.getDay()]+',    '+time.toLocaleString('default', { month: 'long' })+'   '+time.getDate()+',    '+time.getFullYear();

    function sixDeg(){
        const second=document.querySelector('.second');
        var rotate=second.style.transform;
        var n=parseFloat(rotate.split('(')[1].split(')')[0]);
        second.style.transform='rotateZ('+eval(n+6)+'deg) translateY(-50%)';
        var time=new Date();
        let hour_start=time.getHours()
        let minute_start=time.getMinutes()
        let second_start=time.getSeconds()
       // document.querySelector('.display').innerHTML=hour_start%12+':'+minute_start+':'+second_start;

    }

    function sixDegMin(){
        const minute=document.querySelector('.minute');
        var rotate=minute.style.transform;
        var n=parseFloat(rotate.split('(')[1].split(')')[0]);
        minute.style.transform='rotateZ('+eval(n+0.1)+'deg) translateY(-50%)';
    }

    function sixDegFiveMin(){
        const hour=document.querySelector('.hour');
        var rotate=hour.style.transform;
        var n=parseFloat(rotate.split('(')[1].split(')')[0]);
        hour.style.transform='rotateZ('+eval(n+0.5)+'deg) translateY(-50%)';
    }

    var sec=setInterval(sixDeg,1000);

    var min=setInterval(sixDegMin,1000);
   
    var min=setInterval(sixDegFiveMin,60000);

}