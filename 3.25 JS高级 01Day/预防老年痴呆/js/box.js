//先创建移动的小方块
function Box(map){                                      //这个方法不能创建函数    var box = function()这样是一个匿名函数   ,   构造函数是  function Box(){}
    this.size = 20;
    //this.color = 'white';
    this.left = 0;
    this.top = 0;

    this._div = document.createElement('div');
    map.appendChild(this._div);
    //创建好小方块，要给小方块设置绝对定位，所以给它设置一个属性，然后单独给属性赋值
    this._div.className = 'box';
}

//设置随机函数


//随机生成小方块的位置
Box.prototype.numRandom = function(){                             //看清楚小方块调用随机函数时的写法   是 Box.prototype.numRandom = function(){}   不是 Box.prototype.numRandom()
    //区分好函数表达式   和  声明一个函数 有什么书写不同
    //先算出小盒子能移动的最大倍数   ，上面的代码是给Box 添加了一个方法！！！
    var maxX = 800 / this.size - 1;
    var maxY = 600 / this.size - 1;
    //现在开始算随机的位置
    this.left = calRandom(0,maxX * this.size)                            //调用方法的方式是   this.left = numRandom(0,maxX)*this.size   而不是  this.left.numRandom(0,maxX)*this.size;
    this.top = calRandom(0,maxY * this.size)


    //计算小盒子随机的颜色
    //'rgb(3,3,3)'
    var r = calRandom(0,255);
    var g = calRandom(0,255);
    var b = calRandom(0,255);
    //设置div的样式
    this._div.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    this._div.style.left = this.left + 'px';
    this._div.style.top = this.top + 'px';

    function calRandom( min, max ) {
        return Math.floor( Math.random() * (max - min + 1)) + min;
    }

}

//随机生成颜色


