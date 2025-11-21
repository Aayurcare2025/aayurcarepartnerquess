import React, { useEffect, useState } from "react";

import "../App.css"; // optional

function Profile() {
  const [data, setData] = useState(null);

  const applicantId = localStorage.getItem("applicant_id");
  const contactNo = localStorage.getItem("phone");

   useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await axios.get(
          `http://localhost:8000/dash/applicant?applicant_id=${applicantId}&contact_no=${contactNo}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching applicant details:", error);
      }
    }

    fetchProfile();
  }, []);
  if (!data) {
    return <h3 style={{ textAlign: "center" }}>Loading Profile...</h3>;
  }

  // Calculate expiry date = DOJ + 1 year
  const start = data.DOJ;
  const end = new Date(new Date(start).setFullYear(new Date(start).getFullYear() + 1))
    .toISOString()
    .slice(0, 10);

  return (
    <div className="profile-container">

      {/* Personal Details */}
      <h2>Personal Details</h2>
      <div className="card">
        <p><strong>Full Name:</strong> {data.first_name} {data.last_name}</p>
        <p><strong>Employee ID:</strong> {data.applicant_id}</p>
        <p><strong>Contact No:</strong> {data.contact_no}</p>
        <p><strong>Email:</strong> {data.email_id}</p>
        <p><strong>Date of Birth:</strong> {data.DOB}</p>
        <p><strong>Gender:</strong> {data.gender}</p>
        <p><strong>City:</strong> {data.City}</p>
        <p><strong>State:</strong> {data.State}</p>
        <p><strong>Marital Status:</strong> {data.marital_status}</p>
      </div>

      {/* Membership Details */}
      <h2>Membership Details</h2>
      <div className="card">
        <p><strong>Plan Type:</strong> {data.user_type}</p>

        <p><strong>Plan Amount:</strong> 
          {data.user_type === "LVE Pass" ? "₹200" : "₹400"}
        </p>

        <p><strong>Plan Status:</strong> Active</p>

        <p><strong>Start Date:</strong> {data.DOJ}</p>
        <p><strong>End Date:</strong> {end}</p>

        <p><strong>Membership ID:</strong> {data.applicant_id}</p>

        <p><strong>Premium Category:</strong> {data.designation}</p>

        <p><strong>Total Coverage:</strong> 
          {data.user_type === "LVE Pass" ? "₹2000" : "₹4100"}
        </p>
      </div>

    </div>
  );
}

export default Profile;
