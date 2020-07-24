function myFunction(click) { 
    var x = click.target;
    const screen=document.querySelector('.screen input');
    if(x.innerHTML=='='){
        screen.value=eval(screen.value)
    }
    else if(x.innerHTML=='Delete'){
        screen.value='';
    }
    else if(x.innerHTML=='B'){
        screen.value=screen.value.slice(0,-1);
    }
    else{
        screen.value=screen.value+x.innerHTML;
    }
}
myFunction();
function slider(click){
    const burger=document.querySelector('.burger');
    const nav=document.querySelector('.nav-links');
    const links=document.querySelectorAll('.nav-links li');
    const b=document.querySelectorAll('.burger .b');

    for(let i=0;i<b.length;i++){
        if(b[i].style.width=='6px'){
            b[i].style.height='4px';
            b[i].style.width='20px';
        }
        else{
            b[i].style.height='6px';
            b[i].style.width='6px';
        }
    }

    nav.classList.toggle('nav-active');

    for(let i=0;i<links.length;i++) {
        if (links[i].style.animation){
            links[i].style.animation='';
        }
        else{
            links[i].style.animation=`slider 0.5s ease forwards ${i/7+0.5}s`;
        }
    }
};
slider();
