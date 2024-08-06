const mongoose = require('mongoose');

const patientsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Your name is required"],
  },
  mobile_number: {
    type: String,
    required: [true, "Your mobile number is required"],
  },
  age: {
    type: Number,
    required: [true, "Your age is required"],
  },
  gender: {
    type: String,
    required: [true, "Your gender is required"],
  },
  address: {
    type: String,
    required: [true, "Your address is required"],
  },
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  
  blood_group: {
    type: String,
    required: [true, "Your blood group is required"],
  },
  total_appointments: {
    type: [mongoose.Schema.Types.ObjectId],
    default: []
  },
  profile_photo: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  category: {
    type: String,
    required: [true, "Your category is required"],
    enum: ["doctor", "patient"], // Only allow these values
  },
});

module.exports = { patientsSchema };
