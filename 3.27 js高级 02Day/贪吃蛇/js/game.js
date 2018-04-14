(function(window){
    //游戏对象：负责管理跟游戏相关的素有对象，处理游戏逻辑
    function Game(map){
        this.food = new Food(map);
        this.food.random();
        this.snake = new Snake(map);
    }
    // 开始游戏的方法
    Game.prototype.start = function(){
      //1.开启定时器，调用蛇移动的方法
        var timeId = setInterval(function(){
            // 判断游戏是否结束  这个isOver 是  蛇行动函数执行之后返回的 true 或 false，
            var isOver = this.snake.move(this.food);
            if(isOver){
                alert('game over');
                clearInterval(timeId);
            }
            // 定时器里的this指的是window，要用bind改成游戏对象
            this.snake.move();
            //通过bind改变当前函数中this的指向，让this指向游戏对象
        }.bind(this),200);

        //2.键盘控制蛇的移动的方向
        //2.1 给文档注册键盘事件
        //2.2 判断按下的  上下左右  哪个键
        //2.3 设置蛇对象的direction
        //蛇移动的过程中（调用move方法的时候，会先调用蛇头最新位置的方法，获取蛇头最新位置的方法，在计算最新位置的时候，根据direction来计算）

        document.onkeydown = function(e){
            //2.2 判断按下的  左37上38右39下40  哪个键
            //console.log(e.keyCode);
            switch (e.keyCode){
                case 37:
                    //当按下了左键 要判断当前蛇移动的方向是right，就直接return
                    if(this.snake.direction === 'right'){                   // 这个是当前的方向
                        break;
                    }
                    //当前this指向的是出发事件的对象，（事件处理函数中的this  是触发事件的对象）
                    this.snake.direction = 'left';                          // 这个是按键 的方向
                    break;
                case  38:
                    //往下走  按上不执行
                    if(this.snake.direction === 'down'){
                        break;
                    }
                    this.snake.direction = 'top';
                    break;
                case 39:
                    if(this.snake.direction === 'left'){
                        break;
                    }
                    this.snake.direction = 'right';
                    break;
                case 40:
                    if(this.snake.direction === 'top'){
                        break;
                    }
                    this.snake.direction = 'down';
                    break;
            }
            //设置以后，此时的this 才指向当前的游戏对象
        }.bind(this);

    };
    window.Game = Game;
})(window);


//(function(window){
//    function Game(map){
//        this.food = new Food(map);
//        this.food.random();
//        this.snake = new Snake(map);
//    }
//    Game.prototype.start = function(){
//        var timeId = setInterval(function(){
//            this.snake.move();
//        }.bind(this),200);
//    };
//    window.Game = Game;
//})(window);