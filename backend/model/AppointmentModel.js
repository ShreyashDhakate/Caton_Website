const mongoose = require('mongoose');
const appointmentSchema = require('../schemas/AppointmentSchema');

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
