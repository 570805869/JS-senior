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
  Food.prototype.random = function () {
    
  };

  // 通过window把Food 构造函数暴露给外部
  window.Food = Food;
})(window);