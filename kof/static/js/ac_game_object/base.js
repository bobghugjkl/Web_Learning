let AC_GAME_OBJECTS = [];
class AcGameObject {
    constructor() {
        // 每一个都把他存下来
        AC_GAME_OBJECTS.push(this);

        this.timedelta = 0;// 当前这帧对于上一帧的时间间隔
        this.has_call_start = false;//有无执行start函数
        
    }
    start() {
        //初始化
    }
    update() {
        //每一帧执行   
    }
    destroy() {
        //删除
        for (let i in AC_GAME_OBJECTS) {
            if (AC_GAME_OBJECTS[i] === this) {
                AC_GAME_OBJECTS.splice(i, 1);
                break;
            }
        }
    }
}

let last_timestamp;

let AC_GAME_OBJECTS_FRAME = (timestamp) => {
    for (let obj of AC_GAME_OBJECTS) {
        if (!obj.has_call_start) {
            obj.start();
            obj.has_call_start = true;//没有执行过就执行
        } else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }
    last_timestamp = timestamp;
    //requestanimationscript函数是通过递归实现的，所以我们也要递归一下
    requestAnimationFrame(AC_GAME_OBJECTS_FRAME);

}
requestAnimationFrame(AC_GAME_OBJECTS_FRAME);

export {
    AcGameObject
}