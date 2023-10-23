export class Controller {
    constructor($canvas) {
        this.$canvas = $canvas;
        //存当前摁了那个键
        //this.pressed_keys = new Set();
        this.pressed_keys = new Set();
        
        this.start();
    }

    start() {
        //用变量存下来this
        let outer = this;
        this.$canvas.keydown(function (e) {
            outer.pressed_keys.add(e.key);
        });

        this.$canvas.keyup(function (e) {
            outer.pressed_keys.delete(e.key);
        });
    }
}