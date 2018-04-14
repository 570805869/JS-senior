var map = document.querySelector('#map');

var box = new Box(map);
box.random();

//定时器
var timer = setInterval(function () {
    box.random();
},1000);

//点击桌面

        map.onclick = function(e){

            var mouseX = e.pageX - map.offsetLeft;
            var mouseY = e.pageY - map.offsetTop;

             if(mouseX >= box.left && mouseX <= box.left + box.size &&
                 mouseY >= box.top && mouseY <= box.top + box.size){
                 alert(1);
             }else{
                 alert(2);
             }
}