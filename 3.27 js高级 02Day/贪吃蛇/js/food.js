
//开始一个自调用函数
(function(window){
    //实物的构造函数
    function Food(map){
        this.left = 0;
        this.top = 0;
      //如果此处定义var div  ，则randonm方法中访问不要
      //  所以，把div设置为food的属性，zairandonm中可以访问div
        this._div = document.createElement('div');
        map.appendChild(this._div);
        this._div.className = 'food';
    }
    //2.随机生成位置的方法
    // 随机生成位置
    // 把位置设置给div
    Food.prototype.random = function(){
        var step = 20;
        // 计算小方块最大的索引数
        var maxX = 800 / step - 1;
        var maxY = 600 / step - 1;

        this.left = getRandom(0, maxX) * step;
        this.top = getRandom(0, maxY) * step;

        this._div.style.left = this.left + 'px';
        this._div.style.top = this.top + 'px';
    }
     // 生成随机数（min,max）
    function getRandom(min,max){
        return Math.floor(Math.random()*(max - min + 1)) + min;
    }
    //通过window把Food构造函数暴露给外部
    window.Food = Food;
})(window);                    //这里有一个参数window ，必须要写



//第二遍
//(function(window){
//    function Food(map){
//        this.left = 0;
//        this.top = 0;
//
//        this._div = document.createElement('div');
//        map.appendChild(this._div)
//    }
//    Food.prototype.random = function(){
//        var step = 20;
//        var maxX = 800 / step - 1;
//        var maxY = 600 / step -1;
//
//        this.left = random(0, maxX * step);
//        this.top = random(0 , maxY * step);
//
//        this._div.style.left = this.left + 'px';
//        this._div.style.top = this.top + 'px';
//    }
//
//
//    function random(min, max){
//        return Math.floor(Math.random()*(max - min + 1)) + min;
//    }
//    window.Food = Food;
//})(window);

//第三遍
//食物自己调用自己的函数，自调用函数
//(function(window){
//    function Food(map){
//        //首先设置他的属性，最重要的是位置，颜色和大小都在样式表里设置了
//        this.left = 0;
//        this.top = 0;
//        this.size = 20;
//
//        this._div = document.createElement('div');
//        map.appendChild(this._div);
//        this._div.className = 'box';
//    }
//    Food.prototype.random = function(){
//
//        //随机生成他的位置
//        //先获得食物的索引.其实就是移动的最大倍数
//        var steo = 20;
//        var maxX = 800 / step - 1 ;
//        var maxY = 600 / steo - 1;
//        //这时候改变的是此时的位置
//        this.left = getRandom(0, maxX * step);
//        this.top = getRandom(0, maxY * steo);
//
//        this._div.style.left = this.left + 'px';
//        this._div.style.top = this.top + 'px';
//    };
//    function getRandom(min,max){
//        return Math.floor(Math.random()*(max - min + 1)) + min;
//    }
//    window.Food = Food;
//})(window);