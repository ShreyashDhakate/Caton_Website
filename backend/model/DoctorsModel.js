const mongoose = require('mongoose');
const doctorSchema = require('../schemas/DoctorsSchema');

// Create and export the Doctor model
const DoctorsModel = mongoose.model('Doctor', doctorSchema);

module.exports = { DoctorsModel };
