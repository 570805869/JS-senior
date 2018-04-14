//获得了那个那得地图
var map = document.getElementById('map');

//生成方块
var box = new Sbox(map);     //   这个map在这里是一个实参
box.random();


//生成定时器
var timer = setInterval(function(){
    box.random();
},1000);

//点击地图
map.onclick = function(e){
    //获取鼠标在map中的位置
    var mouseX =e.pageX - map.offsetLeft;
    var mouseY =e.pageY - map.offsetTop;


    //判断鼠标位置在小盒子里；
    if(mouseX >=  box.left && mouseX <= box.left + Sbox.size &&
        mouseY >=  box.top &&mouseY <= box.top + Sbox.size){
        alert('恭喜你')}else{
            alert('气死你')
        }
    }


