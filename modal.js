window.onload=function(){

var parent=document.querySelector('.modal-parent')
var button=document.getElementById('mod')
var X=document.querySelector('.X')
var section=document.querySelector('section')
var image=document.querySelector('.image')

parent.addEventListener('click',function(e){
    if(e.target.className=='modal-parent'){  
        parent.style.display='none';
        image.style.filter='';
        section.style.filter='';
    }
})


button.addEventListener("click",function(){
    parent.style.display='block';
    image.style.filter='blur(10px)';
    section.style.filter='blur(10px)';
})

X.addEventListener('click',function(){
    parent.style.display='none';
    image.style.filter='';
    section.style.filter='';
})

}

