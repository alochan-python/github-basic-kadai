const nowday = new Date();
const year = nowday.getFullYear()
const month = nowday.getMonth()
const date = nowday.getDate();

console.log(nowday);
console.log(`${year}年${month}月${date}日`);