const mongoose = require('mongoose');
const { patientsSchema } = require('../schemas/PatientsSchema');

const Patient = mongoose.model('Patient', patientsSchema);

module.exports = Patient;
