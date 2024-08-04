import React from "react";
import "./ProfileCard.css"; // Import your CSS file for styling

const ProfileCard = ({ profilePatient }) => {
  let imgLink= (profilePatient.gender==="Male")? "Male.svg":"Female.svg";
  return (
    <div className="container">
      <div className="profile-details">
        <div className="profile-row">
          <h1>{profilePatient.name}</h1>
        </div>
        <div className="profile-row">
          <ul>
            <li><b>Age:</b> {profilePatient.age}</li>
            <li><b>Gender:</b> {profilePatient.gender}</li>
            <li><b>Blood-Group:</b> {profilePatient.blood_group}</li>
          </ul>
          
        </div>
        
        <div className="profile-rows">
          <p>
            <svg
              className="my-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
            </svg>{" "}
            {profilePatient.mobile_number}
          </p>
        </div>
        <div className="profile-rows">
          <p>
            <svg
              className="my-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9.5L12 3l9 6.5V21H3V9.5z" />
              <path d="M9 22V12h6v10" />
            </svg>{" "}
            {profilePatient.address}
          </p>
        </div>
      </div>
      <div className="blank-box">
        
        <img src={imgLink} alt="profile_picture" className="profile-photo" />
      </div>
    </div>
  );
};

export default ProfileCard;
