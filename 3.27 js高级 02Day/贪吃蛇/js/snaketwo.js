(function(window){
    function Snake(map){
        // 首先记录他的属性，他的方向 ，还有他新增的身体 div
        //  先定义它的方向为右
        this.direction = 'right';
        //用一个数组来记录它新增的身体
        this.body = [];
    }
    // 创建一个构造函数，给蛇 添加它自身的属性
    // 首先写写出它头部移动的方向
    Snake.prototype.getHeadLocation = function(){
        //先判断他的body是否为空，如果为空，返回坐标0,0
        // 如果不为空，先找蛇头的坐标，然后再确定他的方向

        //1.判断他是否为空
        if(this.body[0] === 0){
            return {left : 0, top : 0}
        }
        //2.如果不为空，找到蛇头的坐标
        var oldHead = this.body[0];
        var left = oldHead.offsetLeft;
        var top = oldHead.offsetTop;
        var step = 20;
        //3.确定方向
        switch (this.direction) {
            case 'right':
                left -= step;
                break;
            case 'left':
                left += step;
                break;
            case 'top':
                top -= step;
                break;
            case 'down':
                top += step;
                break;
        }
        return {left: left, top: top}                       // 一定要记得写返回值
    }

    window.Snake = Snake;
})(window);