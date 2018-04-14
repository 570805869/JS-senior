(function () {
  // 游戏对象：负责管理跟游戏相关的所有对象，处理游戏逻辑
  function Game(map) {
    this.food = new Food(map);
    // 随机生成食物
    this.food.random();
    this.snake = new Snake(map);
  }

  // 开始游戏的方法
  Game.prototype.start = function () {
    // start方法中的this是游戏对象
    // 1 开启定时器，调用蛇移动的方法（蛇移动）
    var timerId = setInterval(function () {
      // 定时器的function中的this指向window
      var isOver = this.snake.move();
      if (isOver) {
        alert('游戏结束');
        clearInterval(timerId);
      }
      // 通过bind改变当前函数中this的指向，让this指向游戏对象
    }.bind(this), 100);


    // 2 键盘控制蛇移动的方向
    // 2.1 给文档注册键盘按下的事件
    // 2.2 判断按下了 上下左右键
    // 2.3 设置蛇对象的direction属性，为正确的方向
    // 蛇移动的过程中(调用move方法的时候，会先调用获取蛇头最新位置的方法，获取蛇头最新位置的方法，在计算最新位置的时候，根据direction来计算的)
    
    // 2.1 给文档注册键盘按下的事件
    document.onkeydown = function (e) {
      // 小心--事件处理函数中的this 是触发事件的对象
      // console.log(e.keyCode);
      // 37 左  38 上  39右   40下
      // 2.2 判断按下了 上下左右键
      switch (e.keyCode) {
        case 37:
          // 当蛇正在向右移动，按下键盘左，不执行
          if (this.snake.direction === 'right') {
            return;
          }
          this.snake.direction = 'left';
          break;
        case 38:
          if (this.snake.direction === 'bottom') {
            return;
          }
          this.snake.direction = 'top';
          break;
        case 39:
          if (this.snake.direction === 'left') {
            return;
          }
          this.snake.direction = 'right';
          break;
        case 40:
          if (this.snake.direction === 'top') {
            return;
          }
          this.snake.direction = 'bottom';
          break;
      }
    }.bind(this);
  };
 
  window.Game = Game;
})();