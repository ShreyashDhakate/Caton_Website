
const mongoose = require('mongoose');
const {AppointmentSchema} = require('../schemas/AppointmentSchema'); 

const AppointmentModel = mongoose.model('Appointment', AppointmentSchema);

module.exports = {AppointmentModel};


