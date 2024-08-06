const mongoose = require('mongoose');

// Define the Doctor Schema
const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  specialty: {
    type: String,
    required: true,
    trim: true
  },
  mobile_number: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function(v) {
        // Basic validation for mobile number
        return /^\+?\d{1,4}[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(v);
      },
      message: props => `${props.value} is not a valid mobile number!`
    }
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function(v) {
        // Basic email validation
        return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
  qualification: {
    type: String,
    trim: true
  },
  years_of_experience: {
    type: Number,
    min: 0
  },
  address: {
    type: String,
    trim: true
  },
  profile_photo: {
    type: String,
    trim: true
  }
}, {
  timestamps: true // Automatically add createdAt and updatedAt fields
});

module.exports = doctorSchema;
