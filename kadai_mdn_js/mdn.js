// 今日の日付を取得
const today = new Date();

// 年を取得
const year = today.getFullYear();

// 月を取得
const month = today.getMonth() + 1;

// 日を取得
const day = today.getDate();

// 今日の日付を年月日で出力
console.log(year + '年' + month + '月' + day + '日');