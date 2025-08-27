function calculateTotalDays(timeString) {
  // Split input string by commas and filter out empty entries
  const timeEntries = timeString
    .split(",")
    .filter((entry) => entry.trim() !== "");
  let totalSeconds = 0;

  timeEntries.forEach((time) => {
    // Trim whitespace and split the time string into hours, minutes, and seconds
    const trimmedTime = time.trim();
    const [hours, minutes, seconds] = trimmedTime.split(":").map(Number);

    // Debug logging
    console.log(
      `Processed time: ${trimmedTime} -> Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`
    );

    // Ensure valid time values before adding to totalSeconds
    if (!isNaN(hours) && !isNaN(minutes) && !isNaN(seconds)) {
      totalSeconds += hours * 3600 + minutes * 60 + seconds;
      console.log(`Total seconds so far: ${totalSeconds}`);
    } else {
      console.error(`Invalid time format encountered: ${trimmedTime}`);
    }
  });

  // Convert total seconds into days
  const totalDays = totalSeconds / (24 * 60 * 60);
  console.log(`Total Days: ${totalDays}`);

  return totalDays;
}

// Example usage:
const inputTimes = "02:30:45, 01:15:30, 03:45:20, 00:30:15, 24:00:00";
const result = calculateTotalDays(inputTimes);
console.log(`Total days: ${result}`);
