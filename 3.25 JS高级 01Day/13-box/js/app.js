//������Ǹ��ǵõ�ͼ
var map = document.getElementById('map');

//���ɷ���
var box = new Sbox(map);     //   ���map��������һ��ʵ��
box.random();


//���ɶ�ʱ��
var timer = setInterval(function(){
    box.random();
},1000);

//�����ͼ
map.onclick = function(e){
    //��ȡ�����map�е�λ��
    var mouseX =e.pageX - map.offsetLeft;
    var mouseY =e.pageY - map.offsetTop;


    //�ж����λ����С�����
    if(mouseX >=  box.left && mouseX <= box.left + Sbox.size &&
        mouseY >=  box.top &&mouseY <= box.top + Sbox.size){
        alert('��ϲ��')}else{
            alert('������')
        }
    }


