// 测试食物对象
var map = document.getElementById('map');
var food = new Food(map);
food.random();

// 测试蛇对象
var snake = new Snake(map);
snake.move();
snake.move();
snake.move();

