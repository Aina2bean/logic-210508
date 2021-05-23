// 入力フォームとボタンを取得
let form = document.getElementById('form');
let btn = document.getElementById('button');

btn.addEventListener('click', function(){

    let roopCount = form.value;　// 入力された値をroopCountに格納
    let check = /^([1-9]\d*|0)$/; // 正規表現
    let result = ""; // 結果を格納する為の箱

    // バリデーションチェック
    if(roopCount === '') {
        result = '<p class="error">※フォームが空欄です！</p>';
    } else if( !roopCount.match(check) ){
        result = '<p class="error">※半角の数字（のみ）で入力してください！</p>';
    }

    // バリデーションチェックを通過した値で結果をループし、resultに格納
    for(i = 1; i <= roopCount; i++ ){
        if(i % 3 === 0 && i % 5 === 0) {
            result += '<li class="bow3">' + 'あほ！ばうわう！' + i + '回目のループ' + '</li>'
        } else if( i % 3 === 0 ) {
            result += '<li>' + 'あほ！' + i + '回目のループ' + '</li>'
        } else if( i % 5 === 0 ) {
            result += '<li>' + 'ばうわう！' + i + '回目のループ' + '</li>'
        } else {
            result += '<li>' + i + '回目のループ' + '</li>'
        }
    }

    // フォームエリアを取得し、結果をHTMLに吐き出す
    let formBox = document.getElementById('form-box');
    formBox.innerHTML = '<ul class="result">' + result + '</ul>';

});