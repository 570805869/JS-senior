// 1. Box的构造函数
function Box(map) {
  this.left = 0;
  this.top = 0;
  this.size = 20;
  this.color = 'red';

  this.div = document.createElement('div');
  this.div.className = 'box';
  map.appendChild(this.div);
  
  this.random();
}

Box.prototype.random = function () {
  // 1. 随机生成坐标
  var maxX = 800 / this.size - 1;
  var maxY = 600 / this.size - 1;
  this.left = getRandom(0, maxX) * 20;
  this.top = getRandom(0, maxY) * 20;

  // 2. 随机生成颜色
  var r = getRandom(0, 255);
  var g = getRandom(0, 255);
  var b = getRandom(0, 255);
  this.color = 'rgb('+ r +', '+ g +', '+ b +')';
  
  // 3. 设置div的样式属性
  this.div.style.left = this.left + 'px';
  this.div.style.top = this.top + 'px';
  this.div.style.width = this.size + 'px';
  this.div.style.height = this.size + 'px';  
  this.div.style.backgroundColor = this.color;
}

function getRandom(min, max) {
  return parseInt(Math.random() * (max - min + 1)) + min;
}