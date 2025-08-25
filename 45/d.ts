function prettyMilliseconds(ms: number): string {
  const isNegative = ms < 0;

  const absMs = Math.abs(ms);
  const seconds = Math.floor(absMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60; // Correct this line

  const parts: string[] = [];

  if (hours > 0) parts.push(hours + (hours === 1 ? " hour" : " hours"));
  if (remainingMinutes > 0)
    parts.push(
      remainingMinutes + (remainingMinutes === 1 ? " minute" : " minutes")
    );

  const result = parts.length > 0 ? parts.join(" and ") : "0 minutes";
  return isNegative ? "-" + result : result;
}

// Ejemplos de uso:
console.log(prettyMilliseconds(5400000)); // "1 hour and 30 minutes"
console.log(prettyMilliseconds(-3600000)); // "-1 hour"
console.log(prettyMilliseconds(120000)); // "2 minutes"
console.log(prettyMilliseconds(0)); // "0 minutes"
