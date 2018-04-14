(function(window){
    // 先定义食物的基本属性属性
    function Food(map){
        this.left = 0;
        this.top = 0;

        this._div = document.createElement('div');
        map.appendChild(this._div);
        this._div.className = 'food';
    }
    Food.prototype.random = function(){
        //先获得事物的索引号
        var step = 20;
        var maxX = 800 / step - 1;
        var maxY = 600 / step - 1;
        //计算移动出现的范围
        this.left = getRandom(0,maxX * step) ;     //这里还在计算this.left 所以不用加px
        this.top = getRandom(0, maxY * step);

        this._div.style.left = this.left + 'px';     //  这里已经是在属性赋值了，所以要加px
        this._div.style.top = this.top + 'px';
    };

    function getRandom(min,max){
        return Math.floor(Math.random()*(max - min + 1)) + min;
    };
    window.Food = Food;
})(window);