var container = document.getElementById('container');
window.onmousemove = function(e){
    var x = - e.clientX/5;
    var y = - e.clientY/5;
    container.style.backgroundPositionX = x + 'px';
    container.style.backgroundPositionX = y + 'px';
}