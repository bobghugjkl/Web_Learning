console.log("Hello World");
let name = "yxc";
let age = 18;
function print() {
    console.log("My name is" + name);
}

// 希望文件引用的东西,类似全局变量
export {
    name,
    print
}