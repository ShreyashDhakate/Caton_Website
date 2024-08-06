import React from "react";

function Team() {
  return (
    <div className="container mt-5 p-5">
      <div className="row p-3 border-top">
        <h1 className="text-center fs-2 ">Team</h1>
      </div>
      <div className="row mx-5" style={{ lineHeight: "1.8rem" }}>
        <div className="col-md-6 padding p-5 text-center text-muted">
          <img
            src="media/images/Shreyash_Dhakate.png"
            style={{ borderRadius: "100%", width: "60%" }}
            alt="Shreyash Dhakate"
          />
          <h4>Shreyash Dhakate</h4>
          <h6>Co-founder, CEO</h6>
        </div>

        <div className="col-md-6 padding mt-5">
          <p>Shreyash Dhakate is the co-founder and CEO of Caton. His vision is to create a more efficient and user-friendly healthcare system by allowing patients to avoid long waiting lines in hospitals, helping people track their medical data even for small injuries throughout their lives, and organizing the medical industry.</p>

          <p>He is currently pursuing his studies at IIT Kharagpur. As a student at one of India's premier institutions, Shreyash is poised to make significant contributions both academically and professionally</p>

          <p>Connect on <a href="/">Homepage</a> / <a href="https://www.linkedin.com/in/shreyash-dhakate/">LinkedIn</a> / <a href="/">Twitter</a></p>
        </div>
      </div>
      {/* <div className="row p-3 ">
      </div>
      <div className="row mx-5" style={{ lineHeight: "1.8rem" }}>
        <div className="col-md-6 padding p-5 text-center text-muted">
          <img
            src="media/images/Shreyash_Dhakate.png"
            style={{ borderRadius: "100%", width: "60%" }}
            alt="Shreyash Dhakate"
          />
          <h4>Amit Kumar</h4>
          <h6>Co-founder, CTO</h6>
        </div>

        <div className="col-md-6 padding mt-5">
          <p>Amit Singh is the co-founder and CTO of Caton. He is on a mission to assist doctors and patients by leveraging advanced data management techniques. Patients will be able to securely track their medical data, including minor injuries, throughout their lives. This approach aims to enhance the organization and efficiency of the entire medical industry.</p>

          <p>He is currently pursuing his studies at IIT Gandhinagar.</p>

          <p>Connect on <a href="/">Homepage</a> / <a href="https://www.linkedin.com/in/ankit-singh-7049bb275/">LinkedIn</a> / <a href="/">Twitter</a></p>
        </div>
      </div>
      <div className="row p-3 ">
      </div>
      <div className="row mx-5" style={{ lineHeight: "1.8rem" }}>
        <div className="col-md-6 padding p-5 text-center text-muted">
          <img
            src="media/images/Shreyash_Dhakate.png"
            style={{ borderRadius: "100%", width: "60%" }}
            alt="Shreyash Dhakate"
          />
          <h4>Ojash Marghade</h4>
          <h6>Co-founder</h6>
        </div>

        <div className="col-md-6 padding mt-5">
          <p>Ojash Marghade is the co-founder of Caton. His vision is to create a more efficient and user-friendly healthcare system by allowing patients to avoid long waiting lines in hospitals, helping people track their medical data even for small injuries throughout their lives, and organizing the medical industry.</p>

          <p>He is currently pursuing his studies at IIT BHU. </p>

          <p>Connect on <a href="/">Homepage</a> / <a href="https://www.linkedin.com/in/ojash-marghade-2799aa246/">LinkedIn</a> / <a href="/">Twitter</a></p>
        </div>
      </div> */}
    </div>
  );
}

export default Team;
