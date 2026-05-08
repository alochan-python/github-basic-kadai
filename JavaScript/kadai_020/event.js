/*ボタン情報取得*/
const btn = document.getElementById('btn');
/*テキスト情報取得*/
const text = document.getElementById('text');
/*ボタンクリック*/
btn.addEventListener('click', () => {
/*画面に表示*/
  text.textContent = 'ボタンをクリックしました';
});
