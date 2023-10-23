let buf = "";

process.stdin.on("readable", function () {
    let chunk = process.stdin.read()
    if (chunk) buf += chunk.toString();
})

process.stdin.on("end", function () {
    let str = buf.split('\n');
    let cnt = {};

    for (let c of str)
    {
        if (c in cnt)
        {
            cnt[c]++;
        } else {
            cnt[c] = 1;
        }
    }
    for (let c in str) {
        if (cnt[c] === 1) {
            console.log(c);
            return;
        }
    }
    console.log("No");
})