(function(window){

    function Game(map){
        this.food = new Food(map);
        this.food.random();
        this.snake = new Snake(map);
    };
    Game.prototype.start = function() {
        //开启定时器，调用蛇移动的方法
        var timeId = setInterval(function () {
            //判断游戏是否结束，就是isOver方法的返回值得判断
            var isOver = this.snake.move();
            if (isOver) {
                alert('game over');
                clearInterval(timeId);
            }
            this.snake.move();             //注意this的指向
        }.bind(this),200);

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