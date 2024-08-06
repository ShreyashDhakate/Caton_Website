// util/sendOTP.js
const nodemailer = require("nodemailer");
const crypto = require("crypto");

const transporter = nodemailer.createTransport({
  service: 'gmail', // or any other email service
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

const generateOTP = () => {
  return crypto.randomInt(100000, 999999).toString();
};

const sendOTPEmail = async (email, otp) => {
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { generateOTP, sendOTPEmail };
