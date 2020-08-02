window.onload=function(){
function slider(){
let burger=document.querySelector('.burger')
let nav=document.querySelector('.navlinks')
//let b=document.querySelectorAll('.b');
const links=document.querySelectorAll('.navlinks ul li');
burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active')
})
}

slider();
}