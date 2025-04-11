import React, { useState } from "react";
import "./Update.css";
import { useNavigate } from "react-router-dom";

const UpdateAccount = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    teir: 2
  });

  const [message, setMessage] = useState(""); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("authToken"); 

      const response = await fetch("http://localhost:9000/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Account updated successfully!");
        navigate('/Home')
      } else {
        setMessage("Error updating account: " + data.error);
      }
    } catch (error) {
      setMessage("Server error. Please try again later.");
    }
  };

  return (
    <div className="mainn">
<div className="update-container">
      <h2>Update Your Account</h2>
      {message && <p className="message">{message}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Middlename:</label>
          <input
            type="text"
            name="middlename" 
            value={formData.middlename}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <button className="bot" type="submit">Update account</button>
      </form>
    </div>        
    </div>
    
  );
};

export default UpdateAccount;
