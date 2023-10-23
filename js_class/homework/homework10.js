let buf = "";

process.stdin.on("readable", function () {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
})

process.stdin.on("end", function () {
    let x = buf.split('\n').map(x => { return parseInt(x) });

    for (let i = 0; i < 10; i++){
        if (x[i] <= 0) {
            x[i] = 1;
        }
        console.log('X[${i}]=${x[i]}');
    }
})