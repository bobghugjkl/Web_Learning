let main = function () {
    // //原生获取div
    // let div = document.querySelector('div');
    // console.log(div);


    // //jQuery选择器与css语法类似
    // //可以选择多个标签
    // let $div = $('div');
    // console.log($div);
    // //事件绑定和解绑,点后面是名字，可以分层解绑,可以有参数执行不向上传递或者是其他功能
    // $div.on("click.name1", function (e) {
    //     console.log("click div");

    //     $div.off("click.name2");
    // })
    // $('a').on("click", function (e) {
    //     //事件不向上传递，不会引起上层标签的函数
    //     //e.stopPropagation();
    //     //阻止当前的操作，但是会向上传递
    //     e.preventDefault();
    //     //如果最后写return false的话等同于写了那两句话
    // })
    // // $div.on("click.name2", function () {
    // //     console.log("click div");
    // // })

    // let $btn_hide = $('#hide-btn');
    // let $btn_show = $('#show-btn');
    // $btn_hide.click(function () {
    //     //消失API
    //     $div.hide(1000);
    // })
    // $btn_show.click(function () {
    //     $div.show(1000);
    //     // 动态添加一个类
    //     $div.addClass('my-div');
    // })
    // let $a = $(`
    //     <a href="http://www.acwing.com">
    //     Acwing
    //     <span>!!!</span>
    //     </a>`);
    // $div.click(function () {
    //     //构造标签
    //     // let $a = $(`
    //     // <a href="http://www.acwing.com">
    //     // Acwing
    //     // <span>!!!</span>
    //     // </a>`);
    //     $div.append($a);
    // });
    // $div.dblclick(function () {
    //     $a.remove();
    // })

    // let $div3 = $('.div-3');
    // console.log($div3.parent('.div-2'));
    //延迟执行
    //let $div = $('div')
    // $div.click(function () {
    //     setTimeout(function () {
    //         console.log("hhh");
    //     },2000)
    // })
    //延迟循环执行
    // let func_id;
    // $div.click(function () {
    //     if (func_id) return false;
    //     func_id = setInterval(function () {
    //         console.log("hhh");
    //     },2000)
    // })
    // //停止执行
    // $div.dblclick(function () {
    //     //通过唯一id关掉
    //     clearInterval(func_id);
    // })
    //刷新一般采用递归写法
    let step = (timestamp) => {
        let last_timestep = 0;
        console.log(timestamp);
        $('div').width($('div').width() + 1);
        requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

export {
    main
}