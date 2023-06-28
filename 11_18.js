
let e1 = document.getElementById('p1');
let e2 = document.getElementById('p2');
let e3 = document.getElementById('p3');

e1.outerHTML = '<input>変更したタグ</input>';
e2.innerHTML = 'テキスト文字列';
console.log(e3.id);
e3.id = `p5`;


//　1.<div id=”p1”></div>を、inputタグに変更する（inputタグの属性は自由）
//　2.<div id=”p2”></div>に「テキスト文字列」というテキスト文字列を埋め込む
//3.<div id=”p3”></div>のid属性の値を”p5”に変更する

