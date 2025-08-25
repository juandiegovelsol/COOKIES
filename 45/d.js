function prettyMilliseconds(ms) {
    var isNegative = ms < 0;
    var absMs = Math.abs(ms);
    var seconds = Math.floor(absMs / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var remainingMinutes = minutes % 60; // Correct this line
    var parts = [];
    if (hours > 0)
        parts.push(hours + (hours === 1 ? " hour" : " hours"));
    if (remainingMinutes > 0)
        parts.push(remainingMinutes + (remainingMinutes === 1 ? " minute" : " minutes"));
    var result = parts.length > 0 ? parts.join(" and ") : "0 minutes";
    return isNegative ? "-" + result : result;
}
// Ejemplos de uso:
console.log(prettyMilliseconds(5400000)); // "1 hour and 30 minutes"
console.log(prettyMilliseconds(-3600000)); // "-1 hour"
console.log(prettyMilliseconds(120000)); // "2 minutes"
console.log(prettyMilliseconds(0)); // "0 minutes"
