function Box(map){
    this.size = 20;
    this.left = 0;
    this.top = 0;

    this._div = document.createElement('div');
    map.appendChild(this._div);
    this._div.className = 'box';
}

Box.prototype.random = function(){
    //首先随机位置

    //倍数
    var maxX = 800 / this.size - 1;
    var maxY = 600 / this.size - 1;
    //最大范围
    this.left = getRandom(0, maxX * this.size);
    this.top = getRandom(0, maxY * this.size);



    //随机颜色

    var r = getRandom(0, 255);
    var g = getRandom(0, 255);
    var b = getRandom(0, 255);

    this._div.style.left = this.left + 'px';                //一定要加上单位px
    this._div.style.top = this.top + 'px';
    this._div.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';


    //随机函数
    function getRandom(min,max){
        return Math.floor(Math.random()*(max - min + 1)) + min;
    }




}