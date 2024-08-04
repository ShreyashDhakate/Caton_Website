// Generate dates for 30 days starting from July 1, 2024
const startDate = new Date('2024-07-01');
const days = Array.from({ length: 30 }, (_, i) => {
  const date = new Date(startDate);
  date.setDate(date.getDate() + i);
  return date.toISOString().split('T')[0];
});

// Generate random visit counts for each day
const generateRandomCounts = (numDays) => {
  return Array.from({ length: numDays }, () => Math.floor(Math.random() * 20) + 1);
};

// Create dailyVisits data
export const dailyVisits = days.map((date, index) => ({
  date,
  count: generateRandomCounts(1)[0]
}));

// Expanded diseaseStats data
export const diseaseStats = [
  { disease: 'Flu', count: 150 },
  { disease: 'COVID-19', count: 80 },
  { disease: 'Diabetes', count: 45 },
  { disease: 'Hypertension', count: 60 },
  { disease: 'Asthma', count: 35 },
  { disease: 'Allergy', count: 25 },
  { disease: 'Pneumonia', count: 30 },
  { disease: 'Bronchitis', count: 20 },
  { disease: 'Migraine', count: 40 },
  { disease: 'Arthritis', count: 28 }
];



export const patientList = [
  {
    name: "John Doe",
    mobile_number: "+1-555-123-4567",
    age: 45,
    gender: "Male",
    address: "123 Elm St, Springfield",
    email: "john.doe@example.com",
    condition: "Diabetes",
    blood_group: "O+",
    total_appointments: 5,
    profile_photo:"",
  },
  {
    name: "Jane Smith",
    mobile_number: "+1-555-234-5678",
    age: 34,
    gender: "Female",
    address: "456 Oak St, Springfield",
    email: "jane.smith@example.com",
    condition: "Diabetes",
    blood_group: "A+",
    total_appointments: 3
  },
  {
    name: "Robert Johnson",
    mobile_number: "+1-555-345-6789",
    age: 50,
    gender: "Male",
    address: "789 Pine St, Springfield",
    email: "robert.johnson@example.com",
    condition: "Diabetes",
    blood_group: "B+",
    total_appointments: 4
  },
  {
    name: "Emily Davis",
    mobile_number: "+1-555-456-7890",
    age: 29,
    gender: "Female",
    address: "101 Maple St, Springfield",
    email: "emily.davis@example.com",
    condition: "Diabetes",
    blood_group: "AB+",
    total_appointments: 2
  },
  {
    name: "Michael Wilson",
    mobile_number: "+1-555-567-8901",
    age: 40,
    gender: "Male",
    address: "202 Birch St, Springfield",
    email: "michael.wilson@example.com",
    condition: "Diabetes",
    blood_group: "O-",
    total_appointments: 6
  },
  {
    name: "Sarah Brown",
    mobile_number: "+1-555-678-9012",
    age: 37,
    gender: "Female",
    address: "303 Cedar St, Springfield",
    email: "sarah.brown@example.com",
    condition: "Diabetes",
    blood_group: "A-",
    total_appointments: 3
  },
  {
    name: "David Miller",
    mobile_number: "+1-555-789-0123",
    age: 52,
    gender: "Male",
    address: "404 Fir St, Springfield",
    email: "david.miller@example.com",
    condition: "Diabetes",
    blood_group: "B-",
    total_appointments: 4
  },
  {
    name: "Laura Wilson",
    mobile_number: "+1-555-890-1234",
    age: 33,
    gender: "Female",
    address: "505 Spruce St, Springfield",
    email: "laura.wilson@example.com",
    condition: "Diabetes",
    blood_group: "AB-",
    total_appointments: 2
  },
  {
    name: "James Moore",
    mobile_number: "+1-555-901-2345",
    age: 48,
    gender: "Male",
    address: "606 Willow St, Springfield",
    email: "james.moore@example.com",
    condition: "Diabetes",
    blood_group: "O+",
    total_appointments: 5
  },
  {
    name: "Maria Gonzalez",
    mobile_number: "+1-555-012-3456",
    age: 41,
    gender: "Female",
    address: "707 Aspen St, Springfield",
    email: "maria.gonzalez@example.com",
    condition: "Diabetes",
    blood_group: "A+",
    total_appointments: 3
  },
  {
    name: "William Harris",
    mobile_number: "+1-555-123-4568",
    age: 56,
    gender: "Male",
    address: "808 Cedar St, Springfield",
    email: "william.harris@example.com",
    condition: "Diabetes",
    blood_group: "B+",
    total_appointments: 4
  },
  {
    name: "Jessica Clark",
    mobile_number: "+1-555-234-5679",
    age: 32,
    gender: "Female",
    address: "909 Pine St, Springfield",
    email: "jessica.clark@example.com",
    condition: "Diabetes",
    blood_group: "AB+",
    total_appointments: 2
  },
  {
    name: "Thomas Lewis",
    mobile_number: "+1-555-345-6780",
    age: 46,
    gender: "Male",
    address: "1010 Maple St, Springfield",
    email: "thomas.lewis@example.com",
    condition: "Diabetes",
    blood_group: "O-",
    total_appointments: 6
  },
  {
    name: "Karen Walker",
    mobile_number: "+1-555-456-7891",
    age: 38,
    gender: "Female",
    address: "1111 Birch St, Springfield",
    email: "karen.walker@example.com",
    condition: "Diabetes",
    blood_group: "A-",
    total_appointments: 3
  },
  {
    name: "Steven Allen",
    mobile_number: "+1-555-567-8902",
    age: 43,
    gender: "Male",
    address: "1212 Fir St, Springfield",
    email: "steven.allen@example.com",
    condition: "Diabetes",
    blood_group: "B-",
    total_appointments: 4
  },
  {
    name: "Linda Young",
    mobile_number: "+1-555-678-9013",
    age: 29,
    gender: "Female",
    address: "1313 Cedar St, Springfield",
    email: "linda.young@example.com",
    condition: "Diabetes",
    blood_group: "AB-",
    total_appointments: 2
  },
  {
    name: "Daniel King",
    mobile_number: "+1-555-789-0124",
    age: 52,
    gender: "Male",
    address: "1414 Spruce St, Springfield",
    email: "daniel.king@example.com",
    condition: "Diabetes",
    blood_group: "O+",
    total_appointments: 5
  },
  {
    name: "Nancy Wright",
    mobile_number: "+1-555-890-1235",
    age: 35,
    gender: "Female",
    address: "1515 Willow St, Springfield",
    email: "nancy.wright@example.com",
    condition: "Diabetes",
    blood_group: "A+",
    total_appointments: 3
  },
  {
    name: "Paul Scott",
    mobile_number: "+1-555-901-2346",
    age: 48,
    gender: "Male",
    address: "1616 Elm St, Springfield",
    email: "paul.scott@example.com",
    condition: "Diabetes",
    blood_group: "B+",
    total_appointments: 4
  },
  {
    name: "Lisa Adams",
    mobile_number: "+1-555-012-3457",
    age: 44,
    gender: "Female",
    address: "1717 Oak St, Springfield",
    email: "lisa.adams@example.com",
    condition: "Diabetes",
    blood_group: "AB+",
    total_appointments: 2
  },
  {
    name: "Matthew Miller",
    mobile_number: "+1-555-123-4569",
    age: 41,
    gender: "Male",
    address: "1818 Pine St, Springfield",
    email: "matthew.miller@example.com",
    condition: "Diabetes",
    blood_group: "O-",
    total_appointments: 6
  },
  {
    name: "Samantha Taylor",
    mobile_number: "+1-555-234-5670",
    age: 38,
    gender: "Female",
    address: "1919 Maple St, Springfield",
    email: "samantha.taylor@example.com",
    condition: "Diabetes",
    blood_group: "A-",
    total_appointments: 3
  }
];

export const appointmentList = [
  {
    name: "John Doe",
    appointment_id: "A001",
    appointment_date: "2024-08-05",
    time: "09:00 AM",
    doctor: "Dr. Smith",
    location: "Room 101",
    condition: "Diabetes"
  },
  {
    name: "John Doe",
    appointment_id: "A002",
    appointment_date: "2024-08-19",
    time: "10:00 AM",
    doctor: "Dr. Lee",
    location: "Room 202",
    condition: "Diabetes"
  },
  {
    name: "John Doe",
    appointment_id: "A003",
    appointment_date: "2024-09-02",
    time: "11:00 AM",
    doctor: "Dr. Brown",
    location: "Room 303",
    condition: "Diabetes"
  },
  {
    name: "John Doe",
    appointment_id: "A004",
    appointment_date: "2024-09-15",
    time: "02:00 PM",
    doctor: "Dr. Green",
    location: "Room 404",
    condition: "Diabetes"
  },
  {
    name: "John Doe",
    appointment_id: "A005",
    appointment_date: "2024-09-30",
    time: "03:00 PM",
    doctor: "Dr. White",
    location: "Room 505",
    condition: "Diabetes"
  },
  {
    name: "Jane Smith",
    appointment_id: "A006",
    appointment_date: "2024-08-07",
    time: "08:00 AM",
    doctor: "Dr. Black",
    location: "Room 101",
    condition: "Hypertension"
  },
  {
    name: "Jane Smith",
    appointment_id: "A007",
    appointment_date: "2024-08-21",
    time: "09:30 AM",
    doctor: "Dr. White",
    location: "Room 202",
    condition: "Hypertension"
  },
  {
    name: "Jane Smith",
    appointment_id: "A008",
    appointment_date: "2024-09-05",
    time: "10:30 AM",
    doctor: "Dr. Green",
    location: "Room 303",
    condition: "Hypertension"
  },
  {
    name: "Jane Smith",
    appointment_id: "A009",
    appointment_date: "2024-09-18",
    time: "01:00 PM",
    doctor: "Dr. Brown",
    location: "Room 404",
    condition: "Hypertension"
  },
  {
    name: "Jane Smith",
    appointment_id: "A010",
    appointment_date: "2024-09-27",
    time: "02:30 PM",
    doctor: "Dr. Black",
    location: "Room 505",
    condition: "Hypertension"
  },
  {
    name: "Robert Johnson",
    appointment_id: "A011",
    appointment_date: "2024-08-10",
    time: "09:30 AM",
    doctor: "Dr. Green",
    location: "Room 101",
    condition: "Heart Disease"
  },
  {
    name: "Robert Johnson",
    appointment_id: "A012",
    appointment_date: "2024-08-22",
    time: "11:00 AM",
    doctor: "Dr. White",
    location: "Room 202",
    condition: "Heart Disease"
  },
  {
    name: "Robert Johnson",
    appointment_id: "A013",
    appointment_date: "2024-09-03",
    time: "12:00 PM",
    doctor: "Dr. Black",
    location: "Room 303",
    condition: "Heart Disease"
  },
  {
    name: "Robert Johnson",
    appointment_id: "A014",
    appointment_date: "2024-09-16",
    time: "01:30 PM",
    doctor: "Dr. Brown",
    location: "Room 404",
    condition: "Heart Disease"
  },
  {
    name: "Robert Johnson",
    appointment_id: "A015",
    appointment_date: "2024-09-29",
    time: "02:00 PM",
    doctor: "Dr. Green",
    location: "Room 505",
    condition: "Heart Disease"
  },
  {
    name: "Emily Davis",
    appointment_id: "A016",
    appointment_date: "2024-08-12",
    time: "10:00 AM",
    doctor: "Dr. Brown",
    location: "Room 101",
    condition: "Back Pain"
  },
  {
    name: "Emily Davis",
    appointment_id: "A017",
    appointment_date: "2024-08-26",
    time: "11:00 AM",
    doctor: "Dr. White",
    location: "Room 202",
    condition: "Back Pain"
  },
  {
    name: "Emily Davis",
    appointment_id: "A018",
    appointment_date: "2024-09-08",
    time: "02:00 PM",
    doctor: "Dr. Black",
    location: "Room 303",
    condition: "Back Pain"
  },
  {
    name: "Emily Davis",
    appointment_id: "A019",
    appointment_date: "2024-09-20",
    time: "03:00 PM",
    doctor: "Dr. Green",
    location: "Room 404",
    condition: "Back Pain"
  },
  {
    name: "Emily Davis",
    appointment_id: "A020",
    appointment_date: "2024-09-30",
    time: "04:00 PM",
    doctor: "Dr. Brown",
    location: "Room 505",
    condition: "Back Pain"
  },
  {
    name: "Michael Wilson",
    appointment_id: "A021",
    appointment_date: "2024-08-15",
    time: "08:30 AM",
    doctor: "Dr. Green",
    location: "Room 101",
    condition: "Thyroid Disorder"
  },
  {
    name: "Michael Wilson",
    appointment_id: "A022",
    appointment_date: "2024-08-28",
    time: "09:30 AM",
    doctor: "Dr. White",
    location: "Room 202",
    condition: "Thyroid Disorder"
  },
  {
    name: "Michael Wilson",
    appointment_id: "A023",
    appointment_date: "2024-09-12",
    time: "11:00 AM",
    doctor: "Dr. Black",
    location: "Room 303",
    condition: "Thyroid Disorder"
  },
  {
    name: "Michael Wilson",
    appointment_id: "A024",
    appointment_date: "2024-09-23",
    time: "01:00 PM",
    doctor: "Dr. Brown",
    location: "Room 404",
    condition: "Thyroid Disorder"
  },
  {
    name: "Michael Wilson",
    appointment_id: "A025",
    appointment_date: "2024-10-05",
    time: "02:30 PM",
    doctor: "Dr. Green",
    location: "Room 505",
    condition: "Thyroid Disorder"
  },
  {
    name: "Sarah Brown",
    appointment_id: "A026",
    appointment_date: "2024-08-08",
    time: "09:00 AM",
    doctor: "Dr. Black",
    location: "Room 101",
    condition: "Gastroenteritis"
  },
  {
    name: "Sarah Brown",
    appointment_id: "A027",
    appointment_date: "2024-08-22",
    time: "10:30 AM",
    doctor: "Dr. Green",
    location: "Room 202",
    condition: "Gastroenteritis"
  },
  {
    name: "Sarah Brown",
    appointment_id: "A028",
    appointment_date: "2024-09-05",
    time: "11:30 AM",
    doctor: "Dr. White",
    location: "Room 303",
    condition: "Gastroenteritis"
  },
  {
    name: "Sarah Brown",
    appointment_id: "A029",
    appointment_date: "2024-09-18",
    time: "01:30 PM",
    doctor: "Dr. Black",
    location: "Room 404",
    condition: "Gastroenteritis"
  },
  {
    name: "Sarah Brown",
    appointment_id: "A030",
    appointment_date: "2024-09-29",
    time: "03:00 PM",
    doctor: "Dr. Brown",
    location: "Room 505",
    condition: "Gastroenteritis"
  },
  {
    name: "David Miller",
    appointment_id: "A031",
    appointment_date: "2024-08-09",
    time: "08:00 AM",
    doctor: "Dr. White",
    location: "Room 101",
    condition: "Seasonal Allergies"
  },
  {
    name: "David Miller",
    appointment_id: "A032",
    appointment_date: "2024-08-23",
    time: "09:30 AM",
    doctor: "Dr. Brown",
    location: "Room 202",
    condition: "Seasonal Allergies"
  },
  {
    name: "David Miller",
    appointment_id: "A033",
    appointment_date: "2024-09-10",
    time: "10:30 AM",
    doctor: "Dr. Black",
    location: "Room 303",
    condition: "Seasonal Allergies"
  },
  {
    name: "David Miller",
    appointment_id: "A034",
    appointment_date: "2024-09-22",
    time: "01:00 PM",
    doctor: "Dr. Green",
    location: "Room 404",
    condition: "Seasonal Allergies"
  },
  {
    name: "David Miller",
    appointment_id: "A035",
    appointment_date: "2024-10-01",
    time: "02:30 PM",
    doctor: "Dr. White",
    location: "Room 505",
    condition: "Seasonal Allergies"
  }
];

// holdings
export const holdings = [
  {
    name: "BHARTIARTL",
    qty: 2,
    avg: 538.05,
    price: 541.15,
    net: "+0.58%",
    day: "+2.99%",
  },
  {
    name: "HDFCBANK",
    qty: 2,
    avg: 1383.4,
    price: 1522.35,
    net: "+10.04%",
    day: "+0.11%",
  },
  {
    name: "HINDUNILVR",
    qty: 1,
    avg: 2335.85,
    price: 2417.4,
    net: "+3.49%",
    day: "+0.21%",
  },
  {
    name: "INFY",
    qty: 1,
    avg: 1350.5,
    price: 1555.45,
    net: "+15.18%",
    day: "-1.60%",
    isLoss: true,
  },
  {
    name: "ITC",
    qty: 5,
    avg: 202.0,
    price: 207.9,
    net: "+2.92%",
    day: "+0.80%",
  },
  {
    name: "KPITTECH",
    qty: 5,
    avg: 250.3,
    price: 266.45,
    net: "+6.45%",
    day: "+3.54%",
  },
  {
    name: "M&M",
    qty: 2,
    avg: 809.9,
    price: 779.8,
    net: "-3.72%",
    day: "-0.01%",
    isLoss: true,
  },
  {
    name: "RELIANCE",
    qty: 1,
    avg: 2193.7,
    price: 2112.4,
    net: "-3.71%",
    day: "+1.44%",
  },
  {
    name: "SBIN",
    qty: 4,
    avg: 324.35,
    price: 430.2,
    net: "+32.63%",
    day: "-0.34%",
    isLoss: true,
  },
  {
    name: "SGBMAY29",
    qty: 2,
    avg: 4727.0,
    price: 4719.0,
    net: "-0.17%",
    day: "+0.15%",
  },
  {
    name: "TATAPOWER",
    qty: 5,
    avg: 104.2,
    price: 124.15,
    net: "+19.15%",
    day: "-0.24%",
    isLoss: true,
  },
  {
    name: "TCS",
    qty: 1,
    avg: 3041.7,
    price: 3194.8,
    net: "+5.03%",
    day: "-0.25%",
    isLoss: true,
  },
  {
    name: "WIPRO",
    qty: 4,
    avg: 489.3,
    price: 577.75,
    net: "+18.08%",
    day: "+0.32%",
  },
];

// positions
export const positions = [
  {
    product: "CNC",
    name: "EVEREADY",
    qty: 2,
    avg: 316.27,
    price: 312.35,
    net: "+0.58%",
    day: "-1.24%",
    isLoss: true,
  },
  {
    product: "CNC",
    name: "JUBLFOOD",
    qty: 1,
    avg: 3124.75,
    price: 3082.65,
    net: "+10.04%",
    day: "-1.35%",
    isLoss: true,
  },
];
