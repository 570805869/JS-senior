//    ��������С����
function Sbox(map){   //�ββ�дҲ�����𣿣���    �ǵ� �����Բ�д������
    this.size = 20;
    this.color = 'red';      //  ����Ҫд�ַ�������ʽ  Ҫ�ӡ���
    this.left = 0;
    this.top = 0;

    this._div = document.createElement('div');
//     ��div׷�ӵ�map��
    map.appendChild(this._div);      //appendChild( )  ���治�ü����ţ���
    this._div.className = 'box';
}

//    �������λ�õķ���

Sbox.prototype.random= function(){
//      1.�������λ��
    var maxX = 800 / this.size - 1;      //Ҳ���� ������this.size,  ���������size�����п������ƶ�1px�����
//                                                    λ�ã������Ļ����ƶ�����̫С��û������
    var maxY = 600 / this.size - 1;
    this.left = getRandom(0,maxX) * this.size;
    this.top = getRandom(0,maxY) * this.size;

//       2�����������ɫ
//      'rgb(2,5,6)'

    var r = getRandom(0,255);
    var g = getRandom(0,255);
    var b = getRandom(0,255);
//      this.color = getRandom(0,255)*this.color    ��ôд�Ǹ������еģ���

//        3.����div����ʽ
    this._div.style.left = this.left + 'px';
    this._div.style.top = this.top + 'px';
    this._div.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'

//      ���������
    function getRandom(min,max){
        return Math.floor(Math.random()*(max - min + 1 )) + min;
    }
}