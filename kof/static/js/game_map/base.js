import { AcGameObject } from '/kof/static/js/ac_game_object/base.js';
import { Controller } from '/kof/static/js/controller/base.js';
export class GameMap extends AcGameObject{
    constructor(root) {
        //构造函数
        super();
        this.root = root;
        this.$canvas = $('<canvas  width="1280" height="720" tabindex=0></canvas>');//tabindex = 0聚焦
        this.ctx = this.$canvas[0].getContext('2d');//取出
        this.root.$kof.append(this.$canvas);//让div去append上这个canvas
        this.$canvas.focus();//让canvas聚焦

        this.controller = new Controller(this.$canvas);
        this.root.$kof.append($(`<div class="kof-head">
            <div class="kof-head-hp-0"><div><div></div></div></div>
            <div class="kof-head-timer">60</div>
            <div class="kof-head-hp-1"><div><div></div></div></div>
        </div>`));
        this.time_left = 60000;  // 单位：毫秒
        this.$timer = this.root.$kof.find(".kof-head-timer");//该元素在哪个元素上面就把他放到那
    }

    start() {
        //this.render();
    }
    update() {
        this.time_left -= this.timedelta;
        if (this.time_left < 0) {
            this.time_left = 0;
            //时间结束
            let [a, b] = this.root.players;
            if (a.status !== 6 && b.status !== 6) {
                a.status = b.status = 6;
                a.frame_current_cnt = b.frame_current_cnt = 0;
                a.vs = b.vs = 0;
            }
        }
        this.$timer.text(parseInt(this.time_left / 1000));
        this.render();//每一帧重新画
    }

    render() {
        //清空
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        //console.log(this.$canvas.width());
         
    }
}
