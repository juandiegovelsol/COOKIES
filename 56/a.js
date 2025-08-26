const appointments = new Map();

function scheduleAppointment(patientName, appointmentTime) {
  if (!patientName || !appointmentTime) {
    return {
      success: false,
      message: "Patient name and appointment time are required.",
    };
  }

  const newAppointmentDate = new Date(appointmentTime);

  if (isNaN(newAppointmentDate.getTime())) {
    return {
      success: false,
      message: "Invalid appointment time format.",
    };
  }

  const timeDifference = 60 * 1000; // 1 hour

  for (const existing of appointments) {
    const existingDate = new Date(existing.time);
    if (
      existing.patient === patientName &&
      newAppointmentDate.getTime() >= existingDate.getTime() &&
      newAppointmentDate.getTime() < existingDate.getTime() + timeDifference
    ) {
      return {
        success: false,
        message: `Appointment slot conflicts with existing appointment for ${
          existing.patient
        } at ${existingDate.toLocaleTimeString()}. Please choose a time at least 1 hour apart.`,
      };
    }
  }

  appointments.set(appointmentTime, patientName);
  return { success: true, message: "Appointment scheduled." };
}

function getAppointments() {
  return Object.fromEntries(appointments);
}

function clearAppointments() {
  appointments.clear();
}

module.exports = { scheduleAppointment, getAppointments, clearAppointments };
