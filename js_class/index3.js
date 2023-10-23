//取页面里面的标签 document,获取和css选择器一样
let input = document.querySelector("textarea");//只获取第一个
//let input2 = document.querySelectorAll("textarea");//获取全部的
//let input3 = document.querySelector(".input");
//选择第一个button
let run = document.querySelector("button");
let output = document.querySelector("pre");
function main() {
    //绑定时间可以绑定函数,括号里：绑定的哪种事件+触发事件执行的函数
    run.addEventListener("click", function () {
        let s = input.value;
        output.innerHTML = s;
    })
    let name = "yxc", age = 18;
    let s = `   my name is ${name}. I'm ${age / 2} years old. `;
    console.log(s);
    //保留几位
    let x = 1.234567;
    let y = x.toFixed(4);
    console.log(y);
    //上取整，下取整,取整
    console.log(Math.ceil);
    console.log(Math.floor);
    console.log(Math.round);
    
    //practice
    run.addEventListener("click", function () {
        //split：按照里面的东西划分字符串
        let [a, b] = input.value.split(" ");
        a = parseInt(a), b = parseInt(b);
        output.innerHTML = a + b;
        let x = parseFloat(input.value);
        //向0取整
        output.innerHTML = parseInt(x);
        let [c, d, e] = input.value.split(' ');
        a = parseFloat(a), b = parseFloat(b), c = parseFloat(c);
        output.innerHTML = (a + b) * c;
        let m = parseInt(input.value);
        let n = m % 10;
        m = parseInt(m / 10);
        let o = m / 10;
        m = parseInt(m / 10);
        let p = m % 10;
        let s = `${n}${o}${p}`;
        output.innerHTML = s;
    })
}
export {
    main,
}