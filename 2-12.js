let target = document.getElementById('p1');

target.addEventListener('blur', function(){

    let span = document.getElementById('msg');
    
    span.textContent = target.value;

});



//最終ステップは、newSpan.appendで差し込む？
//cleateElementを使う
