const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const { patientsSchema } = require('../schemas/PatientsSchema.js');


patientsSchema.pre("save", async function (next) {
  if (!this.isModified('password')) return next(); // Only hash if the password has been modified or is new
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Create the model
const PatientsModel = mongoose.model("Patient", patientsSchema);

// Export the model
module.exports = { PatientsModel };



// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const { model } = require("mongoose");

// const {userSchema} = require('../schemas/UserSchema.js');
// const UsersModel = new model("user",userSchema);
// userSchema.pre("save", async function () {
//   this.password = await bcrypt.hash(this.password, 12);
// });

// module.exports = { UsersModelModel };