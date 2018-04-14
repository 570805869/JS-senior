(function(window){

    function Game(map){
        this.food = new Food(map);
        this.food.random();
        this.snake = new Snake(map);
    };
    Game.prototype.start = function() {
        //������ʱ�����������ƶ��ķ���
        var timeId = setInterval(function () {
            //�ж���Ϸ�Ƿ����������isOver�����ķ���ֵ���ж�
            var isOver = this.snake.move();
            if (isOver) {
                alert('game over');
                clearInterval(timeId);
            }
            this.snake.move();             //ע��this��ָ��
        }.bind(this),200);

        document.onkeydown = function(e){
            //2.2 �жϰ��µ�  ��37��38��39��40  �ĸ���
            //console.log(e.keyCode);
            switch (e.keyCode){
                case 37:
                    //����������� Ҫ�жϵ�ǰ���ƶ��ķ�����right����ֱ��return
                    if(this.snake.direction === 'right'){                   // ����ǵ�ǰ�ķ���
                        break;
                    }
                    //��ǰthisָ����ǳ����¼��Ķ��󣬣��¼��������е�this  �Ǵ����¼��Ķ���
                    this.snake.direction = 'left';                          // ����ǰ��� �ķ���
                    break;
                case  38:
                    //������  ���ϲ�ִ��
                    if(this.snake.direction === 'down'){
                        break;
                    }
                    this.snake.direction = 'top';
                    break;
                case 39:
                    if(this.snake.direction === 'left'){
                        break;
                    }
                    this.snake.direction = 'right';
                    break;
                case 40:
                    if(this.snake.direction === 'top'){
                        break;
                    }
                    this.snake.direction = 'down';
                    break;
            }
            //�����Ժ󣬴�ʱ��this ��ָ��ǰ����Ϸ����
        }.bind(this);
    };
    window.Game = Game;
})(window);