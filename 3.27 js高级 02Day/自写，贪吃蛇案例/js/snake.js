(function (window) {
    //设置snake自身的属性
    function Snake(map) {
        //方向
        this.direction = 'right';
        //存放蛇肉div
        this.body = [];
        this.map = map;
        for(var i = 0; i < 5; i++){
            //每次循环的刀一个蛇头最新的位置
            var location = this.getHeadLocation();
            this.insertHead(location);
        }
    };
    //根据蛇的运动方向，计算下一次蛇头的位置
    Snake.prototype.getHeadLocation = function () {
        //判断body是否为空，为空返回0,0
        if (this.body.length === 0) {
            return {left: 0, top: 0}
        }
        //判断body不为空，就代表有蛇头
        // 首先，把蛇头取出来，通过类样式，获得原来蛇头的坐标
        var oldHead = this.body[0];
        var left = oldHead.offsetLeft;
        var top = oldHead.offsetTop;
        var step = 20;
        // 其次获得蛇头移动的方向,行动的规则
        switch (this.direction) {
            case  'right':                         //case 和条件中间不用加.
                left += step;
                break;
            case 'left':
                left -= step;
                break;
            case 'top':
                top -= step;
                break;
            case 'down':
                top += step;
                break
        }
        return{left: left, top: top};
    };
    //动态创建一个新的蛇头  ，  放到map当中
    Snake.prototype.insertHead = function(location){
        //判断当前是否有蛇头，设置当前的蛇头为身体
        var currentHead = this.body[0] || {};
        currentHead.className = 'snake-body';
        //创建一个新的蛇头，通过类样式，标记为蛇头，并设置坐标，并追加到map中
        var newHead = document.createElement('div');
        newHead.className = 'snake-head';
        newHead.style.left = location.left + 'px';
        newHead.style.top = location.top + 'px';
        this.map.appendChild(newHead);
        //把新蛇头放到元素最前面
        this.body.unshift(newHead);
    };
    //判断蛇是否死亡
    Snake.prototype.isDead = function(location){
        //这是死亡的情况
        return location.left < 0 ||
                location.left >= 800 ||
                location.top < 0 ||
                location.top >= 600;
    };
    //蛇的移动方法
    Snake.prototype.move = function(){
        //1.获取蛇头的最新位置,判断是否撞墙
        var location = this.getHeadLocation();
        if(this.isDead(location)){
            return true;
        };

        //判断蛇是否吃到了食物
        //如果吃到食物要重新随机食物的位置，蛇要加一节
        if(location.left === food.left &&
            location.top === food.top){
            food.random();
            this.insertHead(location);
            return false;
        }


        //2.获取当前蛇头，并且通过类样式，标记为蛇的身体
        var currentHead = this.body[0];
        currentHead.className = 'snake-body';
        //3.取出body中最后一个元素，pop 通过类样式标记为蛇头
        var newHead = this.body.pop();
        newHead.className = 'snake-head';
        //4.设置新的蛇头的位置
        newHead.style.left = location.left + 'px';
        newHead.style.top = location.top + 'px';
        //5.把新的蛇头放到body数组的第一个元素之前  unshift
        this.body.unshift(newHead);
        return false
    };
    window.Snake = Snake;
})(window);