//获得那个大的地图
var map = document.querySelector('#map');
//生成一个小方块
var box = new Box(map)
box.numRandom();

//生成定时器
var timer = setInterval(function(){
    box.numRandom();
},400);

//点击地图
map.onclick = function(e){
    var mouseX = e.pageX - map.offsetLeft;
    var mouseY = e.pageY - map.offsetTop;

    if( mouseX >= box.left && mouseX <= box.left + box.size &&
        mouseY >= box.top && mouseY <= box.top + box.size){
        alert('点到啦，你真聪明，你没傻')
    }else{
        alert('蠢猪，蠢猪');
    }
}