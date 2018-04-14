// 程序的入口
(function () {
  // 执行代码
  var map = document.getElementById('map');
  var game = new Game(map);

  var start = document.getElementById('start');
  var pause = document.getElementById('pause');
  var reset = document.getElementById('reset');
  start.onclick = function () {
    game.start();
  };

  pause.onclick = function () {
    game.pause();
  };

  reset.onclick = function () {
    game.reset();
  };

})();

