import { GameMap } from '/kof/static/js/game_map/base.js';
import { Kyo } from '/kof/static/js/player/kyo.js';
class KOF {
    constructor(id) {
        //导入一个id
        this.$kof = $('#' + id);//jQuery选择器

        this.game_map = new GameMap(this);
        this.players = [
            new Kyo(this, {
                id:0,
                x: 200,
                y: 0,
                width: 150,
                height: 200,
                color: 'blue',
            }),
            new Kyo(this, {
                id:1,
                x: 800,
                y: 0,
                width: 150,
                height: 200,
                color: 'red',
            }),
        ]
    }
}


export {
    //让外界可以引用
    KOF
}