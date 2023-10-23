import { Player } from '/kof/static/js/player/base.js';
import { GIF } from '/kof/static/js/utils/gif.js'

export class Kyo extends Player {
    constructor(root, info) {
        super(root, info);

        this.init_animations();
    }

    init_animations() {
        let outer = this;
        let offsets = [0, -22, -22, -140, 0, 0, 0];
        for (let i = 0; i < 7; i++) {
            let gif = GIF();
            gif.load(`/kof/static/images/player/kyo/${i}.gif`);//取出动作的基本操作
            this.animations.set(i, {//结构体
                gif: gif,
                frame_cnt: 0,  // 总图片数
                frame_rate: 5,  // 每5帧过度一次
                offset_y: offsets[i],  // y方向偏移量
                loaded: false,  // 是否加载完整
                scale: 2,  // 放大多少倍
            });

            gif.onload = function () {
                let obj = outer.animations.get(i);
                obj.frame_cnt = gif.frames.length;
                obj.loaded = true;

                if (i === 3) {//因为跳跃的时候时间不一致所以改一下速率
                    obj.frame_rate = 7;
                }
            }
        }
    }
}