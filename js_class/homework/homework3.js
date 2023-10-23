let buf = "";

process.stdin.on("readable", function (x) {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});

process.stdin.on("end", function () {
    let lines = buf.split('\n');
    let [x1, y1] = lines[0].split(' ').map(x => {
        return parseInt(x);
    });
    let [x2, y2] = lines[1].split(' ').map(x => {
        return parseInt(x);
    });
    let dx = x1 - x2;
    let dy = y1 - y2;
    console.log(Math.sqrt(dx * dx + dy * dy).toFixed(4));
});