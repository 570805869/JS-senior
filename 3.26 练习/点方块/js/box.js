function Box(map){
    this.size = 20;
    this.left = 0;
    this.top = 0;

    this._div = document.createElement('div');
    map.appendChild(this._div);
    this._div.className = 'box';

}
//随机方式：
Box.prototype.random = function(){

    //小盒子的随机

    //先算它最大能移动的范围，这个范围是它自身的倍数算出来的，因为，如果真的随机，有可能是1px，那样就没意义了
    //  减一是因为，它的四十倍的话，计算机计数从0开始  0-39  就是 1-40
    var maxX = 800 / this.size -1;
    var maxY = 600 / this.size -1;
    //随机位置的算法
    this.left = getRandom(0,maxX * this.size);
    this.top = getRandom(0,maxY * this.size);


    //颜色的随机
    var r = getRandom(0,255);
    var g = getRandom(0,255);
    var b = getRandom(0,255);
    //设置div的样式
    this._div.style.left = this.left + 'px';
    this._div.style.top = this.top +'px';
    this._div.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

    //随机方法

    function getRandom(min,max){
        return Math.floor(Math.random()*(max - min + 1 )) + min;
    }
}