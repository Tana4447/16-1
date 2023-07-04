let target = document.getElementById('p1');

target.addEventListener('blur', function(){

    let span = document.getElementById('msg');
    
    span.textContent = target.value;

});



