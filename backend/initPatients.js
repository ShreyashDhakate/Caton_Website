

require('dotenv').config();
const mongoose = require('mongoose');
const { PatientsModel } = require('./model/PatientsModel.js'); // Adjust the path as needed


const patientList = [
  { name: "John Doe", mobile_number: "+1-555-123-4567", age: 45, gender: "Male", address: "123 Elm St, Springfield", email: "john.doe@example.com", condition: "", blood_group: "O+", total_appointments: [], profile_photo: "", password: "Pass@123", category: "patient" },
  { name: "Jane Smith", mobile_number: "+1-555-234-5678", age: 34, gender: "Female", address: "456 Oak St, Springfield", email: "jane.smith@example.com", condition: "", blood_group: "A+", total_appointments: [], password: "Pass@123", category: "patient" },
  { name: "Robert Johnson", mobile_number: "+1-555-345-6789", age: 50, gender: "Male", address: "789 Pine St, Springfield", email: "robert.johnson@example.com", condition: "", blood_group: "B+", total_appointments: [], password: "Pass@123", category: "patient" },
  { name: "Emily Davis", mobile_number: "+1-555-456-7890", age: 29, gender: "Female", address: "101 Maple St, Springfield", email: "emily.davis@example.com", condition: "", blood_group: "AB+", total_appointments: [], password: "Pass@123", category: "patient" },
  { name: "Michael Wilson", mobile_number: "+1-555-567-8901", age: 40, gender: "Male", address: "202 Birch St, Springfield", email: "michael.wilson@example.com", condition: "", blood_group: "O-", total_appointments: [], password: "Pass@123", category: "patient" },
  { name: "Sarah Brown", mobile_number: "+1-555-678-9012", age: 37, gender: "Female", address: "303 Cedar St, Springfield", email: "sarah.brown@example.com", condition: "", blood_group: "A-", total_appointments: [], password: "Pass@123", category: "patient" },
  { name: "David Miller", mobile_number: "+1-555-789-0123", age: 52, gender: "Male", address: "404 Fir St, Springfield", email: "david.miller@example.com", condition: "", blood_group: "B-", total_appointments: [], password: "Pass@123", category: "patient" },
  { name: "Laura Wilson", mobile_number: "+1-555-890-1234", age: 33, gender: "Female", address: "505 Spruce St, Springfield", email: "laura.wilson@example.com", condition: "", blood_group: "AB-", total_appointments: [], password: "Pass@123", category: "patient" },
  { name: "James Moore", mobile_number: "+1-555-901-2345", age: 48, gender: "Male", address: "606 Willow St, Springfield", email: "james.moore@example.com", condition: "", blood_group: "O+", total_appointments: [], password: "Pass@123", category: "patient" },
  { name: "Maria Gonzalez", mobile_number: "+1-555-012-3456", age: 41, gender: "Female", address: "707 Aspen St, Springfield", email: "maria.gonzalez@example.com", condition: "", blood_group: "A+", total_appointments: [], password: "Pass@123", category: "patient" },
  { name: "William Harris", mobile_number: "+1-555-123-4568", age: 56, gender: "Male", address: "808 Cedar St, Springfield", email: "william.harris@example.com", condition: "", blood_group: "B+", total_appointments: [], password: "Pass@123", category: "patient" },
  { name: "Jessica Clark", mobile_number: "+1-555-234-5679", age: 32, gender: "Female", address: "909 Pine St, Springfield", email: "jessica.clark@example.com", condition: "", blood_group: "AB+", total_appointments: [], password: "Pass@123", category: "patient" },
  { name: "Thomas Lewis", mobile_number: "+1-555-345-6780", age: 46, gender: "Male", address: "1010 Maple St, Springfield", email: "thomas.lewis@example.com", condition: "", blood_group: "O-", total_appointments: [], password: "Pass@123", category: "patient" },
  { name: "Karen Walker", mobile_number: "+1-555-456-7891", age: 38, gender: "Female", address: "1111 Birch St, Springfield", email: "karen.walker@example.com", condition: "", blood_group: "A-", total_appointments: [], password: "Pass@123", category: "patient" },
  { name: "Steven Allen", mobile_number: "+1-555-567-8902", age: 43, gender: "Male", address: "1212 Fir St, Springfield", email: "steven.allen@example.com", condition: "", blood_group: "B-", total_appointments: [], password: "Pass@123", category: "patient" },
  { name: "Linda Young", mobile_number: "+1-555-678-9013", age: 29, gender: "Female", address: "1313 Cedar St, Springfield", email: "linda.young@example.com", condition: "", blood_group: "AB-", total_appointments: [], password: "Pass@123", category: "patient" },
  { name: "Daniel King", mobile_number: "+1-555-789-0124", age: 52, gender: "Male", address: "1414 Spruce St, Springfield", email: "daniel.king@example.com", condition: "", blood_group: "O+", total_appointments: [], password: "Pass@123", category: "patient" },
  { name: "Nancy Wright", mobile_number: "+1-555-890-1235", age: 35, gender: "Female", address: "1515 Willow St, Springfield", email: "nancy.wright@example.com", condition: "", blood_group: "A+", total_appointments: [], password: "Pass@123", category: "patient" },
  { name: "Paul Scott", mobile_number: "+1-555-901-2346", age: 48, gender: "Male", address: "1616 Elm St, Springfield", email: "paul.scott@example.com", condition: "", blood_group: "B+", total_appointments: [], password: "Pass@123", category: "patient" },
  { name: "Lisa Adams", mobile_number: "+1-555-012-3457", age: 44, gender: "Female", address: "1717 Oak St, Springfield", email: "lisa.adams@example.com", condition: "", blood_group: "AB+", total_appointments: [], password: "Pass@123", category: "patient" },
  { name: "Matthew Miller", mobile_number: "+1-555-123-4569", age: 41, gender: "Male", address: "1818 Pine St, Springfield", email: "matthew.miller@example.com", condition: "", blood_group: "O-", total_appointments: [], password: "Pass@123", category: "patient" },
  { name: "Samantha Taylor", mobile_number: "+1-555-234-5670", age: 38, gender: "Female", address: "1919 Maple St, Springfield", email: "samantha.taylor@example.com", condition: "", blood_group: "A-", total_appointments: [], password: "Pass@123", category: "patient" },
];
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('Connected to MongoDB');
  // Clear the existing data
  return PatientsModel.deleteMany({});
})
.then(() => {
  console.log('Existing patients data cleared');
  // Insert new patient data
  return PatientsModel.insertMany(patientList);
})
    .then(() => {
        console.log('Patients data inserted');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error:', err);
    });

const uri = process.env.MONGO_URL;

const initPatients = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Database connected successfully!");

    // Insert patient data
    await PatientsModel.insertMany(patientList);
    console.log("Patient data inserted successfully!");

    // Close the connection
    mongoose.connection.close();
  } catch (error) {
    console.error("Error initializing data:", error.message);
    mongoose.connection.close();
  }
};

initPatients();
