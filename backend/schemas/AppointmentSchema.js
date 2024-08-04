const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
//   patient_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
//   doctor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
    patient_id: { type: mongoose.Schema.Types.ObjectId},
  doctor_id: { type: Number,},
  appointment_date: {type:Date},
  reason: String
});

module.exports = {AppointmentSchema};




