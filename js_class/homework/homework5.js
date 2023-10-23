let buf = "";

process.stdin.on("readable", function () {
    let chunk = process.stdin.read();
    if (chunk) buf += chunk.toString();
});
process.stdin.on("end", function () {
    let n = parseInt(buf);
    let hours = parseInt(n / 3600);
    let minites = parseInt((n % 3600) / 60);
    let second = n % 60;
    console.log(`${hours}:${minutes}:${seconds}`);
})