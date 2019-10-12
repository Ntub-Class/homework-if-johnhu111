// 請介紹兩個字串方法跟數字方法
let a: string = '安安';
let b: string = '你好';
console.log(a.concat(b)); //字串連接
let c: string = 'abc';
console.log(c.toUpperCase()); //字串小寫轉大寫

let d =100;
console.log(d.toFixed(3)); //顯示小數點幾位數
console.log(d.toExponential()); //科學記號表示


console.log('乾爹~~~');


// 錢錢大於一個值，叫乾爹
let money = 4000000000;
let limit = 500000; // 限制值

if (money > limit) {
    console.log('乾爹')
} else {
    console.log('笑你')
}
