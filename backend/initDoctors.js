

require('dotenv').config();
const mongoose = require('mongoose');
const { DoctorsModel } = require('./model/DoctorsModel.js'); // Adjust the path as needed

const DoctorList = [
  {
    name: "Dr. Alice Green",
    specialty: "Cardiology",
    mobile_number: "+1-555-123-4567",
    email: "alice.green@example.com",
    qualification: "MD, Cardiology",
    years_of_experience: 10,
    address: "123 Health St, Metropolis",
    profile_photo: "https://example.com/photos/alice-green.jpg"
  },
  {
    name: "Dr. Bob White",
    specialty: "Neurology",
    mobile_number: "+1-555-234-5678",
    email: "bob.white@example.com",
    qualification: "MD, Neurology",
    years_of_experience: 8,
    address: "456 Wellness Ave, Metropolis",
    profile_photo: "https://example.com/photos/bob-white.jpg"
  },
  {
    name: "Dr. Carol Black",
    specialty: "Orthopedics",
    mobile_number: "+1-555-345-6789",
    email: "carol.black@example.com",
    qualification: "MD, Orthopedics",
    years_of_experience: 12,
    address: "789 Care Blvd, Metropolis",
    profile_photo: "https://example.com/photos/carol-black.jpg"
  },
  {
    name: "Dr. David Brown",
    specialty: "Pediatrics",
    mobile_number: "+1-555-456-7890",
    email: "david.brown@example.com",
    qualification: "MD, Pediatrics",
    years_of_experience: 15,
    address: "101 Healthy Rd, Metropolis",
    profile_photo: "https://example.com/photos/david-brown.jpg"
  },
  {
    name: "Dr. Emma Blue",
    specialty: "Dermatology",
    mobile_number: "+1-555-567-8901",
    email: "emma.blue@example.com",
    qualification: "MD, Dermatology",
    years_of_experience: 9,
    address: "202 Medical St, Metropolis",
    profile_photo: "https://example.com/photos/emma-blue.jpg"
  },
  {
    name: "Dr. Frank Gold",
    specialty: "Oncology",
    mobile_number: "+1-555-678-9012",
    email: "frank.gold@example.com",
    qualification: "MD, Oncology",
    years_of_experience: 14,
    address: "303 Health Ave, Metropolis",
    profile_photo: "https://example.com/photos/frank-gold.jpg"
  },
  {
    name: "Dr. Grace Red",
    specialty: "Internal Medicine",
    mobile_number: "+1-555-789-0123",
    email: "grace.red@example.com",
    qualification: "MD, Internal Medicine",
    years_of_experience: 11,
    address: "404 Wellness Blvd, Metropolis",
    profile_photo: "https://example.com/photos/grace-red.jpg"
  },
  {
    name: "Dr. Henry Silver",
    specialty: "Gastroenterology",
    mobile_number: "+1-555-890-1234",
    email: "henry.silver@example.com",
    qualification: "MD, Gastroenterology",
    years_of_experience: 7,
    address: "505 Care St, Metropolis",
    profile_photo: "https://example.com/photos/henry-silver.jpg"
  },
  {
    name: "Dr. Ivy Purple",
    specialty: "Rheumatology",
    mobile_number: "+1-555-901-2345",
    email: "ivy.purple@example.com",
    qualification: "MD, Rheumatology",
    years_of_experience: 6,
    address: "606 Medical Ave, Metropolis",
    profile_photo: "https://example.com/photos/ivy-purple.jpg"
  },
  {
    name: "Dr. Jack Grey",
    specialty: "Endocrinology",
    mobile_number: "+1-555-012-3456",
    email: "jack.grey@example.com",
    qualification: "MD, Endocrinology",
    years_of_experience: 13,
    address: "707 Health Blvd, Metropolis",
    profile_photo: "https://example.com/photos/jack-grey.jpg"
  },
  {
    name: "Dr. Karen White",
    specialty: "Nephrology",
    mobile_number: "+1-555-123-4568",
    email: "karen.white@example.com",
    qualification: "MD, Nephrology",
    years_of_experience: 5,
    address: "808 Wellness Ave, Metropolis",
    profile_photo: "https://example.com/photos/karen-white.jpg"
  },
  {
    name: "Dr. Leo Black",
    specialty: "Pulmonology",
    mobile_number: "+1-555-234-5679",
    email: "leo.black@example.com",
    qualification: "MD, Pulmonology",
    years_of_experience: 8,
    address: "909 Care Blvd, Metropolis",
    profile_photo: "https://example.com/photos/leo-black.jpg"
  },
  {
    name: "Dr. Maria Gold",
    specialty: "Hematology",
    mobile_number: "+1-555-345-6780",
    email: "maria.gold@example.com",
    qualification: "MD, Hematology",
    years_of_experience: 10,
    address: "1010 Healthy Rd, Metropolis",
    profile_photo: "https://example.com/photos/maria-gold.jpg"
  },
  {
    name: "Dr. Noah Green",
    specialty: "Psychiatry",
    mobile_number: "+1-555-456-7891",
    email: "noah.green@example.com",
    qualification: "MD, Psychiatry",
    years_of_experience: 7,
    address: "1111 Medical St, Metropolis",
    profile_photo: "https://example.com/photos/noah-green.jpg"
  },
  {
    name: "Dr. Olivia White",
    specialty: "Ophthalmology",
    mobile_number: "+1-555-567-8902",
    email: "olivia.white@example.com",
    qualification: "MD, Ophthalmology",
    years_of_experience: 9,
    address: "1212 Wellness Blvd, Metropolis",
    profile_photo: "https://example.com/photos/olivia-white.jpg"
  }
];

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('Connected to MongoDB');
  // Clear the existing data
  return DoctorsModel.deleteMany({});
})
.then(() => {
  console.log('Existing doctors data cleared');
  // Insert new patient data
  return DoctorsModel.insertMany(DoctorList);
})
    .then(() => {
        console.log('Doctors data inserted');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error:', err);
    });

const uri = process.env.MONGO_URL;

const initDoctors = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Database connected successfully!");

    // Insert patient data
    await DoctorsModel.insertMany(DoctorList);
    console.log("Doctor data inserted successfully!");

    // Close the connection
    mongoose.connection.close();
  } catch (error) {
    console.error("Error initializing data:", error.message);
    mongoose.connection.close();
  }
};

initDoctors();

// require('dotenv').config();
// const mongoose = require('mongoose');
// const { DoctorModel } = require('./model/DoctorsModel.js'); // Adjust the path as needed

// const doctorList = [
//   { name: "Dr. Alice Green", specialty: "Cardiology", email: "alice.green@example.com", phone_number: "+1-555-123-4567", address: "123 Health St, Metropolis", available_times: ["9:00 AM - 12:00 PM", "2:00 PM - 5:00 PM"] },
//   { name: "Dr. Bob White", specialty: "Neurology", email: "bob.white@example.com", phone_number: "+1-555-234-5678", address: "456 Wellness Ave, Metropolis", available_times: ["10:00 AM - 1:00 PM", "3:00 PM - 6:00 PM"] },
//   { name: "Dr. Carol Black", specialty: "Orthopedics", email: "carol.black@example.com", phone_number: "+1-555-345-6789", address: "789 Care Blvd, Metropolis", available_times: ["8:00 AM - 12:00 PM", "1:00 PM - 4:00 PM"] },
//   { name: "Dr. David Brown", specialty: "Pediatrics", email: "david.brown@example.com", phone_number: "+1-555-456-7890", address: "101 Healthy Rd, Metropolis", available_times: ["9:00 AM - 12:00 PM", "2:00 PM - 5:00 PM"] },
//   { name: "Dr. Emma Blue", specialty: "Dermatology", email: "emma.blue@example.com", phone_number: "+1-555-567-8901", address: "202 Medical St, Metropolis", available_times: ["10:00 AM - 1:00 PM", "3:00 PM - 6:00 PM"] },
//   { name: "Dr. Frank Gold", specialty: "Oncology", email: "frank.gold@example.com", phone_number: "+1-555-678-9012", address: "303 Health Ave, Metropolis", available_times: ["8:00 AM - 12:00 PM", "1:00 PM - 4:00 PM"] },
//   { name: "Dr. Grace Red", specialty: "Internal Medicine", email: "grace.red@example.com", phone_number: "+1-555-789-0123", address: "404 Wellness Blvd, Metropolis", available_times: ["9:00 AM - 12:00 PM", "2:00 PM - 5:00 PM"] },
//   { name: "Dr. Henry Silver", specialty: "Gastroenterology", email: "henry.silver@example.com", phone_number: "+1-555-890-1234", address: "505 Care St, Metropolis", available_times: ["10:00 AM - 1:00 PM", "3:00 PM - 6:00 PM"] },
//   { name: "Dr. Ivy Purple", specialty: "Rheumatology", email: "ivy.purple@example.com", phone_number: "+1-555-901-2345", address: "606 Medical Ave, Metropolis", available_times: ["8:00 AM - 12:00 PM", "1:00 PM - 4:00 PM"] },
//   { name: "Dr. Jack Grey", specialty: "Endocrinology", email: "jack.grey@example.com", phone_number: "+1-555-012-3456", address: "707 Health Blvd, Metropolis", available_times: ["9:00 AM - 12:00 PM", "2:00 PM - 5:00 PM"] }
// ];

// const uri = process.env.MONGO_URL;

// const initDoctors = async () => {
//   try {
//     // Connect to MongoDB
//     await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//     console.log("Database connected successfully!");

//     // Clear existing data
//     await DoctorModel.deleteMany({});
//     console.log("Existing doctors data cleared");

//     // Insert new doctor data
//     await DoctorModel.insertMany(doctorList);
//     console.log("Doctor data inserted successfully!");

//     // Close the connection
//     mongoose.connection.close();
//   } catch (error) {
//     console.error("Error initializing data:", error.message);
//     mongoose.connection.close();
//   }
// };

// initDoctors();
