var 바디 = document.body;
var 단어 = document.createElement('div');
단어.textContent = '에릭';
document.body.append(단어);
var 입력창 = document.createElement('input');
document.body.append(입력창);
var 버튼 = document.createElement('button');
document.body.append(버튼);
var 결과창 = document.createElement('div');
document.body.append(결과창);
var word = '에릭';

버튼.addEventListener('click', function(){
    if (단어.textContent[단어.textContent.length-1] === 입력창.value[0]) {
        word = 단어.textContent;
        단어.textContent = '';
    } else {
        
    }
});

