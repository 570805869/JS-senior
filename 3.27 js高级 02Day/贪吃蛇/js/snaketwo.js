(function(window){
    function Snake(map){
        // ���ȼ�¼�������ԣ����ķ��� ������������������ div
        //  �ȶ������ķ���Ϊ��
        this.direction = 'right';
        //��һ����������¼������������
        this.body = [];
    }
    // ����һ�����캯�������� ��������������
    // ����дд����ͷ���ƶ��ķ���
    Snake.prototype.getHeadLocation = function(){
        //���ж�����body�Ƿ�Ϊ�գ����Ϊ�գ���������0,0
        // �����Ϊ�գ�������ͷ�����꣬Ȼ����ȷ�����ķ���

        //1.�ж����Ƿ�Ϊ��
        if(this.body[0] === 0){
            return {left : 0, top : 0}
        }
        //2.�����Ϊ�գ��ҵ���ͷ������
        var oldHead = this.body[0];
        var left = oldHead.offsetLeft;
        var top = oldHead.offsetTop;
        var step = 20;
        //3.ȷ������
        switch (this.direction) {
            case 'right':
                left -= step;
                break;
            case 'left':
                left += step;
                break;
            case 'top':
                top -= step;
                break;
            case 'down':
                top += step;
                break;
        }
        return {left: left, top: top}                       // һ��Ҫ�ǵ�д����ֵ
    }

    window.Snake = Snake;
})(window);