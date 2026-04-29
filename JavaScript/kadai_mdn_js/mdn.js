const nowday = new Date();
const year = nowday.getFullYear();
const month = nowday.getMonth() +1;
const date = nowday.getDate();

console.log(`${year}年${month}月${date}日`);