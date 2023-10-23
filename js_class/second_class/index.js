class Ponit{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    init() {
        this.sum = this.x + this.y;
    }
    toString() {
        return `(${this.x},${this.y})`;
    }
}

class ColorPoint extends Ponit{
    constructor(x,y,color) {
        super(x, y);
        this.color = color;
    }
    toString() {
        return `${this.color} ${super.toString()}`;
    }
}

let person = {
    name: "yxc",
    age: 18,
    money: 0,
    friends: ['Bob', 'Alice', 'Lucy'],
    clothes: {
        color: "red",
        price:20,
    },
    add_money: function (x) {
        this.money += x;
    }
}
let main = function () {
    b[0] = function () {
        console.log("hahaha");
    }
    b[0]();
    let p = new Ponit(3, 4);
    console.log(p.x, p.y);
    console.log(p.toString());
}

export {
    main
}