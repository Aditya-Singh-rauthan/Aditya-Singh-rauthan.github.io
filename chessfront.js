var white=''
var black=''
var time=''
var increment=''
function sub(){
    var form=document.querySelector('.form')
    //alert('form was submitted')
    white=form.elements['white'].value
    black=form.elements['black'].value
    time=form.elements['timer'].value
    increment=form.elements['increment'].value

    var queryString = "?para1=" + white + "&para2=" + black + "&para3=" + time + "&para4=" + increment;
    window.location.href = "chesswatch.html" + queryString;
}
