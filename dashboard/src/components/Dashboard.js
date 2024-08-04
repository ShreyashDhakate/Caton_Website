import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Apps from "./Apps";
import Orders from "./Orders";
import Summary from "./Summary";
import WatchList from "./WatchList";
import HelpAndSupport from "./HelpAndSupport";
import AppointmentForm from "./Appointment";
import PatientForm from "./PatientForm";
import Records from "./Records";


const Dashboard = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const location = useLocation();

  // Determine if the current route is /records
  const isRecordsRoute = location.pathname === "/records";

  return (
    <div className="dashboard-container">
      {!isRecordsRoute && (
        <div className="watchlist">
          <WatchList setSelectedPatient={setSelectedPatient} />
        </div>
      )}
      <div className={`content ${isRecordsRoute ? "full-width-content" : ""}`}>
        <Routes>
          <Route
            exact
            path="/"
            element={<Summary patient={selectedPatient} />}
          />
          <Route path="/patientform" element={<PatientForm />} />
          <Route path="/newAppointment/:patientId" element={<AppointmentForm />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/records" element={<Records />} />
          <Route path="/HelpAndSupport" element={<HelpAndSupport />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
