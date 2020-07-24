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

   