//var map = document.getElementById('map');
//var food = new Food(map);
//food.random();
//
////测试蛇对象
//var snake = new  Snake(map);

//程序入口
(function(window){
    //执行代码
    var map = document.getElementById('map');
    var game = new Game(map);
    game.start();
})(window);