import React from "react";
import './HelpAndSupport.css'; // Optional: Add your CSS file for styling

const HelpAndSupport = () => {
  return (
    <div className="help-support-container">
      <h1>Welcome to Caton Help and Support</h1>
      <p>
        At Caton, we are dedicated to ensuring that your experience with our platform is seamless and efficient. Whether you are a patient booking an appointment or a doctor managing patient data, we are here to assist you every step of the way.
      </p>

      <h2>Frequently Asked Questions (FAQs)</h2>

      <h3>For Patients</h3>
      <div className="faq">
        <strong>1. How do I sign up for Caton?</strong>
        <p>Signing up for Caton is simple! Click on the "Sign Up" button on the homepage, fill in your details, and follow the on-screen instructions to complete the registration process.</p>

        <strong>2. How do I book an appointment?</strong>
        <p>After logging in, go to the "Book Appointment" section, select your doctor and preferred date, and confirm your booking. You will receive a confirmation email with your appointment details.</p>

        <strong>3. How can I view my medical history?</strong>
        <p>Navigate to the "My Medical History" section in your account to view your past appointments, medical records, and prescriptions.</p>

        <strong>4. What should I do if I forget my password?</strong>
        <p>Click on the "Forgot Password" link on the login page, enter your registered email address, and follow the instructions to reset your password.</p>

        <strong>5. How can I contact my doctor?</strong>
        <p>You can message your doctor through the "Contact Doctor" feature in your account. Please allow some time for the doctor to respond.</p>
      </div>

      <h3>For Doctors</h3>
      <div className="faq">
        <strong>1. How do I register as a doctor on Caton?</strong>
        <p>Visit the "Doctor Registration" page, fill in your professional details, and submit the required documents. Our team will review and approve your registration within 24-48 hours.</p>

        <strong>2. How can I manage my appointments?</strong>
        <p>Log in to your account and go to the "Manage Appointments" section to view, reschedule, or cancel appointments with your patients.</p>

        <strong>3. How do I access my patient’s medical records?</strong>
        <p>Access patient records through the "Patient Records" section in your dashboard. You can view, update, and manage patient information securely.</p>

        <strong>4. What should I do if I encounter technical issues?</strong>
        <p>If you face any technical problems, please contact our support team using the "Contact Support" form, and we will assist you promptly.</p>
      </div>

      <h2>Contact Support</h2>
      <p>If you have any questions or need further assistance, our support team is here to help. You can reach us through the following methods:</p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:ShreyashDhakate20@gmail.com">ShreyashDhakate20@gmail.com</a></li>
        <li><strong>Phone:</strong> [Your contact number here]</li>
        <li><strong>Live Chat:</strong> Click on the chat icon at the bottom right of the screen to chat with a support representative.</li>
      </ul>

      <h2>User Guides and Tutorials</h2>
      <p>Visit our <a href="#">Help Center</a> for detailed user guides and video tutorials on how to use Caton’s features effectively. Whether you are a new user or need help with advanced features, our Help Center has got you covered.</p>

      <h2>Feedback</h2>
      <p>We value your feedback and suggestions. Please let us know how we can improve our services by filling out the <a href="#">Feedback Form</a>. Your input helps us make Caton better for everyone.</p>
    </div>
  );
};

export default HelpAndSupport;
