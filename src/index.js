module.exports = function reverse (n) {
    n = Math.abs(n);
    let newStr = '';
    if (n % 10 === 0) {
        n /= 10;
    }
    while (n > 0) {
        newStr += n % 10;
        n = Math.floor(n / 10);
    }
    return newStr - 0;
}
