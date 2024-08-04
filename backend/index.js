require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoute = require("./Routes/AuthRoute");
const { AppointmentModel } = require("./model/AppointmentModel");
const { PatientsModel } = require("./model/PatientsModel");
const { DoctorsModel } = require("./model/DoctorsModel");
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// Configure CORS to allow requests from your frontend
const corsOptions = {
  origin: 'https://caton-website-dashboard.vercel.app', 
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // This is for parsing JSON data
app.use(cookieParser());

// Routes
app.get('/patients/:id', async (req, res) => {
  try {
    const patient = await PatientsModel.findById(req.params.id);
    if (!patient) return res.status(404).json({ message: 'Patient not found' });
    res.json(patient);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});
app.get('/doctor/:id', async (req, res) => {
  try {
    const doctor = await DoctorsModel.findById(req.params.id);
    if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
    res.json(doctor);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});
app.get("/allPatients", async (req, res) => {
  try {
    const allPatients = await PatientsModel.find({});
    res.json(allPatients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.get("/allDoctors", async (req, res) => {
  try {
    const allDoctors = await DoctorsModel.find({});
    res.json(allDoctors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//const patient = await PatientsModel.findById(patientId);
app.get("/allAppointments/:id", async (req, res) => {
  try {
    const patientId = req.params.id; // Extract patient ID from the URL parameters

    // Step 1: Find the patient by ID
    const patient = await PatientsModel.findById(patientId);

    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    // Step 2: Extract all appointment IDs from the `total_appointments` field
    const appointmentIds = patient.total_appointments;

    if (!appointmentIds || appointmentIds.length === 0) {
      return res.status(404).json({ message: "No appointments found for this patient" });
    }

    // Step 3: Find all appointments by these IDs
    const appointments = await AppointmentModel.find({ _id: { $in: appointmentIds } });
    
    // Step 4: Return the appointments data
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// 
app.post('/appointments', async (req, res) => {
  
  try {
    const { patient_id, doctor_id, date, reason } = req.body;
    console.log("Request body:", req.body);

    // Create a new appointment
    const newAppointment = new AppointmentModel ({
      patient_id:patient_id,
      doctor_id:doctor_id,
      appointment_date:date,
      reason:reason,
    });
    
    // Save the appointment to the database
    const savedAppointment = await newAppointment.save();
    // 
    await PatientsModel.findByIdAndUpdate(
      patient_id,
      { $push: { total_appointments: savedAppointment._id } },
      { new: true }
    );

    const updatedPatient = await PatientsModel.findById(patient_id);
    console.log("Updated patient:", updatedPatient);

    res.status(201).json({
      success: true,
      data: savedAppointment
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});
app.get("/", (req, res) => {
  res.json("working:true");
});

app.use("/", authRoute);
app.listen(PORT, async () => {
  try {
    await mongoose.connect(uri);
    console.log("Database connected successfully!");
    console.log(`Server listening on port ${PORT}`);
  } catch (err) {
    console.error("Database connection error:", err.message);
  }
});
