(function (window) {
  
  // 1 食物的构造函数
  function Food(map) {
    this.left = 0;
    this.top = 0;
    // 如果此处定义var div 则random方法中访问不要
    // 所以 把div设置为Food的属性，在random中可以访问div
    this._div = document.createElement('div');
    map.appendChild(this._div);
    // 设置div的类样式
    this._div.className = 'food';
  }


  // 2 随机生成食物位置的方法
  // 2.1 随机生成位置
  // 2.2 把位置设置给div
  Food.prototype.random = function () {
    // 2.1 随机生成位置
    // 记录小方块的大小
    var step = 20;
    // 计算小方块最大的索引数
    var maxX = 800 / step - 1;
    var maxY = 600 / step - 1;

    this.left = getRandom(0, maxX) * step;
    this.top = getRandom(0, maxY) * step;

    // 2.2 把位置设置给div
    this._div.style.left = this.left + 'px';
    this._div.style.top = this.top + 'px';
  };
  // 生成随机数[min, max]
  function getRandom(min, max) {
    return parseInt(Math.random() * (max - min + 1)) + min;
  }

  // 通过window把Food 构造函数暴露给外部
  window.Food = Food;
})(window);