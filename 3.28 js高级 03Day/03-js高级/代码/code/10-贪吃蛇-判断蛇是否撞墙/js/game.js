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
  };
  window.Game = Game;
})();