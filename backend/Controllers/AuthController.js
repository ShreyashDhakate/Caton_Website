// controllers/authController.js
const PatientsModel = require("../model/PatientsModel");
const { generateOTP, sendOTPEmail } = require("../util/sendOTP");
const bcrypt = require("bcryptjs");

let otpStore = {}; // Temporary store for OTPs, consider using a database in production

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, username } = req.body;
    if (!email || !username) {
      return res.json({ message: 'All fields are required' });
    }

    const existingUser = await PatientsModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const otp = generateOTP();
    otpStore[email] = otp; // Store OTP in memory, use a database for production

    await sendOTPEmail(email, otp);

    res.status(200).json({ message: "OTP sent to your email", success: true });
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.verifyOTP = async (req, res, next) => {
  try {
    const { email, otp, password } = req.body;
    if (!email || !otp || !password) {
      return res.json({ message: 'All fields are required' });
    }

    if (otpStore[email] !== otp) {
      return res.json({ message: 'Invalid OTP' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await PatientsModel.create({ email, username, password: hashedPassword });

    res.status(201).json({ message: "User signed up successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: 'All fields are required' });
    }
    const user = await PatientsModel.findOne({ email });
    if (!user) {
      return res.json({ message: 'Incorrect password or email' });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: 'Incorrect password or email' });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    
    res.status(200).json({ message: "User logged in successfully", success: true });
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
