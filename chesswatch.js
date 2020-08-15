var list=[4]

var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");
for (var i = 0; i < queries.length; i++)
{
  list[i]=queries[i].split('=')[1]
}
var white=list[0]
var black=list[1]
var time=list[2]
var increment=[3]

var run=1
var clock_running=0
window.onload=function(){
    var white_time=document.querySelector('.player1 .time')
    var black_time=document.querySelector('.player2 .time')
    var white_name=document.querySelector('.player1 h1')
    var black_name=document.querySelector('.player2 h1')

    white_name.innerHTML="<u>"+white+"</u>"
    black_name.innerHTML='<u>'+black+'</u'
    white_time.innerHTML='<h1>'+time+':'+0+'</h1>'
    black_time.innerHTML='<h1>'+time+':'+0+'</h1>'


    var pause1=1;
    var pause2=1;
    function running1(){
        if(pause1==0){
            p=white_time
            x=p.innerHTML
            x=x.split('>')
            x=x[1]
            x=x.split(':')
            min=parseFloat(x[0])
            
            sec=x[1].split('<')
            sec=parseFloat(sec[0])
            seconds=min*60+sec-1
            p.innerHTML='<h1>'+Math.floor(seconds/60)+':'+seconds % 60+'</h1>'

            if(min==0 && sec==0){
                p.innerHTML='<h1>'+0+':'+0+'</h1>'
            }
            
        }
    }
    function running2(){
        if(pause2==0){
            p=black_time
            x=p.innerHTML
            x=x.split('>')
            x=x[1]
            x=x.split(':')
            min=parseFloat(x[0])
            
            sec=x[1].split('<')
            sec=parseFloat(sec[0])
            seconds=min*60+sec-1
            p.innerHTML='<h1>'+Math.floor(seconds/60)+':'+seconds % 60+'</h1>'

            if(min==0 && sec==0){
                p.innerHTML='<h1>'+0+':'+0+'</h1>'
            }
            
        }
    }
    
    
    /*for(var i=0;i<600;i++){
        running1(white_time)
    }*/


    var start=document.querySelector('.start')
    start.addEventListener('click',function(){
        if (start.innerHTML=='<h1>START</h1>'){
            
            start.innerHTML='<h1>STOP</h1>'
            start.style.background='red'
            pause1=1
            pause2=1
            
        }
        else{
            
            start.innerHTML='<h1>START</h1>'
            start.style.background='rgb(158, 119, 119)'
            
            if(run==1){
                pause1=0
            }
            else{
                pause2=0
            }
        }
        
    })

    var clr=setInterval(running1,1000)
    var cl=setInterval(running2,1000)


    var player1=document.querySelector('.player1')
    var player2=document.querySelector('.player2')

    player1.addEventListener('click',function(){
        if(pause1==0){
            pause1=1
            pause2=0
            run=2
        }
    })

    player2.addEventListener('click',function(){
        if(pause2==0){
            pause2=1
            pause1=0
            run=1
        }
    })

}