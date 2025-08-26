const { scheduleAppointment, clearAppointments } = require("./d.js");

clearAppointments();

// Test 1
console.log("Test 1:", scheduleAppointment("John Doe", "2026-01-15 10:00"));

// Test 2
console.log("Test 2:", scheduleAppointment("Jane Smith", "2026-01-15 11:00"));

// Test 3
console.log("Test 3:", scheduleAppointment("Jane Smith", "2026-01-15 11:59"));
