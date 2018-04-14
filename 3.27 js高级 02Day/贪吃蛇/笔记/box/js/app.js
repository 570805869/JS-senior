// 1. 创建方块
var map = document.getElementById('map');
var box = new Box(map);

// 2. 定时随机方块的位置
var timerId = setInterval(function () {
  box.random();
}, 1000);

// 3. 点击map，判断鼠标的位置是否在方块上
var gameover = false;
map.onclick = function (e) {
  if (gameover) {
    return;
  } 
  // 3.1 获取鼠标在map中的坐标
  var mouseX = e.pageX - map.offsetLeft;
  var mouseY = e.pageY - map.offsetTop;
  // 3.2 判断鼠标的位置是否在方块上，如果赢了，停止定时器
  if (mouseX >= box.left && mouseY <= box.left + 20 &&
    mouseY >= box.top && mouseY <= box.top + 20) {
      alert('恭喜你，你赢了');
      gameover = true;
      clearInterval(timerId);
    } else {
      console.log('气死，点不着');
    }
}
