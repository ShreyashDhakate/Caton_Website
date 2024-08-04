import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't sheduled any appointments today</p>

        <Link to={"/patientform"} className="btn" style={{backgroundColor:'#057A85'}}>
          Add Appointment
        </Link>
      </div>
    </div>
  );
};

export default Orders;
