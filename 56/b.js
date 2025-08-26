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
    const timeDifference = Math.abs(newAppointmentDate - existingDate);
    const oneHourInMs = 60 * 60 * 1000;

    // Check if the appointments are less than one hour apart and on the same day
    if (
      newAppointmentDate.toDateString() === existingDate.toDateString() &&
      timeDifference < oneHourInMs
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
