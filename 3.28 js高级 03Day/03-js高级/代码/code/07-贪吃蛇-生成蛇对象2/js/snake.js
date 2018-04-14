(function (window) {
  // 1 蛇的构造函数
  function Snake(map) {
    // 属性  记录运动的方向   记录蛇(身体和头)
    // 记录运动的方向  默认 right  其它值 left top bottom
    this.direction = 'right';
    // 记录蛇身上的每一个div
    // 数组里面记录的是 div元素  第一个元素是蛇头，其它是蛇身
    this.body = [];

    this._map = map;

    // 显示蛇
    for (var i = 0; i < 4; i++) {
      var location = this.getHeadLocation();
      this.insertHead(location);
    }
  }

  // 1 根据蛇运动的方向 计算下一个蛇头的位置
  Snake.prototype.getHeadLocation = function () {
    // 返回 蛇头的位置(坐标) 返回的结果的样式{left: 0, top: 0}
    // 1 判断body是否为空，如果body为空，返回 0,0坐标
    // 2 如果body不为空
    //   2.1 取出原来的蛇头，获取原来蛇头的坐标
    //   2.2 根据运动的方向计算新蛇头的坐标

    // 1 判断body是否为空，如果body为空，返回 0,0坐标
    if (this.body.length === 0) {
      return {left: 0, top: 0};
    }
    // 2 如果body不为空
    //   2.1 取出原来的蛇头，获取原来蛇头的坐标
    // oldHead是蛇头，本质 是dom对象 - div
    var oldHead = this.body[0];
    var left = oldHead.offsetLeft;
    var top = oldHead.offsetTop;
    var step = 20;
    //   2.2 根据运动的方向计算新蛇头的坐标
    switch (this.direction) {
      case 'right':
        left += step;
        break;
      case 'left':
        left -= step;
        break;
      case 'top':
        top -= step;
        break;
      case 'bottom':
        top += step;
        break;
    }
    return {left: left, top: top};
  };


  // 为什么 在insertHead 里面可以使用this._map
  // 思考，在外部调用  
  // var snake = new Snake(map);
  // snake.insertHead();

  // 2 动态的创建一个新的蛇头，并放到map中
  // 2.1 给insertHead 通过参数传递 新蛇头的位置
  // 2.2 如果body中现在有蛇头，设置当前蛇头为身体
  // 2.3 创建一个新的蛇头，通过类样式标记为蛇头，并设置位置, 追加到map中
  // 2.4 把新蛇头放到body中，第一个元素之前
  Snake.prototype.insertHead = function (location) {
    // 2.1 给insertHead 通过参数传递 新蛇头的位置
    // 2.2 如果body中现在有蛇头，设置当前蛇头为身体
    var currentHead = this.body[0] || {};
    currentHead.className = 'snake-body';
    // 2.3 创建一个新的蛇头，通过类样式标记为蛇头，并设置位置, 追加到map中
    var newHead = document.createElement('div');
    newHead.className = 'snake-head';
    newHead.style.left = location.left + 'px';
    newHead.style.top = location.top + 'px';
    this._map.appendChild(newHead);
    // 2.4 把新蛇头放到body中，第一个元素之前
    // unshift 把元素放到数组中的第一个元素之前
    this.body.unshift(newHead);
  };

  // 通过window把Snake构造函数 暴露出去
  window.Snake = Snake;
})(window);
