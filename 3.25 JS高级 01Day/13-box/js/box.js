//    描述的是小方块
function Sbox(map){   //形参不写也可以吗？？？    是的 ，可以不写！！！
    this.size = 20;
    this.color = 'red';      //  这里要写字符串的形式  要加‘’
    this.left = 0;
    this.top = 0;

    this._div = document.createElement('div');
//     把div追加到map中
    map.appendChild(this._div);      //appendChild( )  里面不用加引号！！
    this._div.className = 'box';
}

//    随机方块位置的方法

Sbox.prototype.random= function(){
//      1.随机生成位置
    var maxX = 800 / this.size - 1;      //也可以 不是这this.size,  如果不除以size，很有可能是移动1px的随机
//                                                    位置，这样的话，移动距离太小，没有意义
    var maxY = 600 / this.size - 1;
    this.left = getRandom(0,maxX) * this.size;
    this.top = getRandom(0,maxY) * this.size;

//       2、随机生成颜色
//      'rgb(2,5,6)'

    var r = getRandom(0,255);
    var g = getRandom(0,255);
    var b = getRandom(0,255);
//      this.color = getRandom(0,255)*this.color    这么写是根本不行的！！

//        3.设置div的样式
    this._div.style.left = this.left + 'px';
    this._div.style.top = this.top + 'px';
    this._div.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'

//      生成随机数
    function getRandom(min,max){
        return Math.floor(Math.random()*(max - min + 1 )) + min;
    }
}