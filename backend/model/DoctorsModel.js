const mongoose = require('mongoose');
const doctorSchema = require('../schemas/DoctorsSchema');

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
