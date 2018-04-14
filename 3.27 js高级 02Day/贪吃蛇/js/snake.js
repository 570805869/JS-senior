
(function(window){
    function Snake(map){
        // 定义方向
        this.direction = 'right';
        // 定义一个数组来放蛇的div
        this.body = [];
        this._map = map;
        // 显示蛇
        for(var i = 0; i < 5 ;i++){
            //每次循环获得一个蛇头最新的位置
            var location = this.getHeadLocation();
            this.insertHead(location);
        }
    }

    // 1.根据蛇运动的方向  计算下一个蛇头的位置
    Snake.prototype.getHeadLocation = function(){
      // 返回 蛇头的位置（坐标）返回的结果的样式{left: 0; top ; 0}
      //     1判断  body是否为空，如果为空，返回0 ，0 坐标
      //     2.如果body不为空，就代表有蛇头
      //       2.1 需要把原来的蛇头取出，通过类样式，获取原来蛇头的坐标
      //       2.2 根据运动方向计算新蛇头的坐标
      //  1.判断  body是否为空，如果为空，返回0 ，0 坐标
            if(this.body.length === 0){
                return{left: 0,top: 0};
            }
        //2.如果body不为空，就代表有蛇头
        //2.1 需要把原来的蛇头取出，通过类样式，获取原来蛇头的坐标
        //oldHead是蛇头，本质是  dom对象 -div
            var oldHead = this.body[0];
           var left =oldHead.offsetLeft;
           var top = oldHead.offsetTop;
        var step = 20;
        //2.2 根据运动方向计算新蛇头的坐标
        switch (this.direction){
            case 'right':
                left += step;
                break;
            case  'left':
                left -= step;
                break;
            case 'top':
                top -= step;
                break;
            case 'down':
                top += step;
                break;
        }
        return{left: left, top: top}
    };
    // 动态的创建一个新的蛇头  ，并放到map中

    // 为什么在inserHead里面可以使用this._map
    // 思考，在外部调用
    // var snake = new Snake(map);
    // snake.insertHead()
    //   2.1 给insertHead 通过参数传递，给新蛇头传递位置
    //   2.2 如果body中现在有舌头，设置当前蛇头为身体
    //   2.3创建一个新的蛇头，通过类样式，标记为蛇头，并设置位置，追加到map中
    //   2.4 把新蛇头放到body中，第一个元素之前
    Snake.prototype.insertHead = function(location){
     //参数里的location从最上方for循环里面获得的
        //   2.2 如果body中现在有舌头，设置当前蛇头为身体
                               //如果是空，返回一个大括号
        var currentHead = this.body[0] || {} ;
        currentHead.className = 'snake-body';
        //2.3创建一个新的蛇头，通过类样式，标记为蛇头，并设置位置，追加到map中
        var newHead = document.createElement('div');
        newHead.className = 'snake-head';
        newHead.style.left = location.left + 'px';
        newHead.style.top = location.top + 'px';
        this._map.appendChild(newHead);
        //2.4 把新蛇头放到body中，第一个元素之前
        this.body.unshift(newHead);
    };

    // 4. 判断蛇是否死亡
    Snake.prototype.isDead = function(location){
        return (location.left < 0 ||
                location.left >= 800 ||
               location.top < 0 ||
             location.top >= 600
        );
    };
    //3.蛇移动的方法
    Snake.prototype.move = function (food){
        //move方法需要返回一个不二类型 true 表示游戏结束，falese表示游戏继续
        //0.获取蛇头的最新位置
        //1.获取当前蛇头，并且通过类样式，标记为蛇的身体
        //2.取出body中最后一个元素  pop，通过类样式标记为蛇头
        //3.设置新的蛇头的位置
        //4.把新的蛇头，放到body数组的第一个元素之前 unshift

        //0.获取蛇头的最新位置，并判断他是否撞墙
        var location = this.getHeadLocation();
        if(this.isDead(location)){
            //游戏结束 蛇死亡
            return true;
        }
        //判断蛇是否吃到食物
        //如果吃到食物要重新随机食物的位置。蛇要加一节
        if(location.left === food.left &&
            location.top === food.top){

            food.random();
            this.insertHead(location);
            return false;
        }
        //1.获取当前蛇头，并且通过类样式，标记为蛇的身体
        var currentHead =this.body[0];
        currentHead.className = 'snake-body';
        //2.取出body中最后一个元素  pop，通过类样式标记为蛇头
        var newHead = this.body.pop();
        newHead.className = 'snake-head';
        //3.设置新的蛇头的位置
        newHead.style.left = location.left + 'px';
        newHead.style.top = location.top + 'px';
        //4.把新的蛇头，放到body数组的第一个元素之前 unshift
        this.body.unshift(newHead);
        //返回false，表示游戏没有结束
        return false;
    };

    // 通过window把snake 暴露出来   一定要写！！不然外部访问不到
    window.Snake = Snake;
})(window);