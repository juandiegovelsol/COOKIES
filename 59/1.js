function calculateTotalDays(timeString) {
  const timeEntries = timeString.split(",");
  let totalSeconds = 0;

  timeEntries.forEach((time) => {
    const trimmedTime = time.trim();
    const [hours, minutes, seconds] = trimmedTime.split(":").map(Number);
    totalSeconds += hours * 3600 + minutes * 60 + seconds;
  });

  const totalDays = totalSeconds / (24 * 60 * 60);
  return totalDays;
}

const timeData = "02:30:45, 01:15:30, 03:45:20, 00:30:15, 24:00:00";
const result = calculateTotalDays(timeData);
console.log(`Total days: ${Math.round(result * 100) / 100}`);
