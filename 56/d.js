const appointments = new Map();

function scheduleAppointment(patientName, appointmentTime) {
  if (!patientName || !appointmentTime) {
    return {
      success: false,
      message: "Patient name and appointment time are required",
    };
  }

  const newAppointmentDate = new Date(appointmentTime);
  if (isNaN(newAppointmentDate.getTime())) {
    return {
      success: false,
      message: "Invalid appointment time format",
    };
  }

  for (const [existingTime, existingPatient] of appointments) {
    const existingDate = new Date(existingTime);
    const existingStartTime = existingDate;
    const existingEndTime = new Date(existingDate.getTime() + oneHourInMs);

    if (
      newAppointmentDate >= existingStartTime &&
      newAppointmentDate < existingEndTime
    ) {
      return {
        success: false,
        message: `Appointment slot conflicts with existing appointment for ${existingPatient} at ${existingTime}. Please choose a time at least 1 hour apart.`,
      };
    }
  }

  appointments.set(appointmentTime, patientName);
  return {
    success: true,
    message: `Appointment scheduled for ${patientName} at ${appointmentTime}`,
  };
}

function getAppointments() {
  return Object.fromEntries(appointments);
}

function clearAppointments() {
  appointments.clear();
}

module.exports = { scheduleAppointment, getAppointments, clearAppointments };
