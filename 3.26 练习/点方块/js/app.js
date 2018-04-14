var map = document.querySelector('.map');

var box = new Box(map);
box.random();

var timer = setInterval(function(){
    box.random();
},1000);

map.onclick = function(e){
    var mouseX = e.pageX - map.offsetLeft;
    var mouseY = e.pageY - map.offsetTop;

    if(mouseX >= box.left && mouseX <= box.left + box.size &&
        mouseY >= box.top && mouseY <= box.top + box.size){
        alert('1')
        clearInterval(timer)
    }else{
        alert('2')
    }
}
