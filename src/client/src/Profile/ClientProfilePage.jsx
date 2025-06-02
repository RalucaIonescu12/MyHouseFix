import React, { useState, useRef } from "react";
import profilepicture from "../images/profile.jpeg";
import UiZingAdminsNav from "../components/FeedPageComponents/FeedNavigationBar";
import "./ClientProfilePage.css";
import { Link } from 'react-router-dom';

const BookingProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "Banu",
    lastName: "Ion",
    username: "ionBanu123",
    email: "ion@example.com",
  });

  const validateProfile = () => {
    const errors = [];
    if (!profile.firstName.trim()) errors.push("First name is required.");
    if (!profile.lastName.trim()) errors.push("Last name is required.");
    if (!profile.username.trim()) errors.push("Username is required.");
    if (!profile.email.trim()) {
      errors.push("Email is required.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)) {
      errors.push("Invalid email format.");
    }

    if (errors.length > 0) {
      alert("Please fix the following errors:\n\n" + errors.join("\n"));
      return false;
    }
    return true;
  };

  const [bookings] = useState([
    {
      title: "Pipe Fix",
      user: "Andrei Popa",
      skill: "Plumber",
      location: "București, Militari",
      price: "De la 150 RON",
      bookingDate: "2025-06-01",
    },
    {
      title: "Light Check",
      user: "Maria Ionescu",
      skill: "Electrician",
      location: "București, Sector 1",
      price: "De la 100 RON",
      bookingDate: "2025-06-03",
    },
    {
      title: "Tailor Fit",
      user: "Luca Enache",
      skill: "Tailor",
      location: "București, Unirii",
      price: "De la 70 RON",
      bookingDate: "2025-06-05",
    },
    {
      title: "Plumbing",
      user: "Alex Ionescu",
      skill: "Plumber",
      location: "București, Berceni",
      price: "De la 180 RON",
      bookingDate: "2025-06-10",
    },
  ]);

  const [profilePicUrl, setProfilePicUrl] = useState(profilepicture);
  const fileInputRef = useRef(null);

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePicUrl(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handlePictureClick = () => {
    if (editMode && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleInputChange = (field, value) => {
    setProfile({ ...profile, [field]: value });
  };

  return (
    <div className="booking-profile-page">
      <div className="sidebar">
        <UiZingAdminsNav />
      </div>

      <div className="profile-main">
        <div className="profile-card">
          <div className="profile-top-section">
            <div
              className={`profile-picture-container ${editMode ? "editable" : ""}`}
              onClick={handlePictureClick}
              title={editMode ? "Click to change profile picture" : ""}
            >
              <img
                src={profilePicUrl}
                alt="Profile"
                className="profile-picture"
              />
              {editMode && (
                <div className="overlay">
                  <span className="edit-text">Edit</span>
                </div>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleProfilePicChange}
                style={{ display: "none" }}
              />
            </div>

            <div className="profile-details">
              <div className="profile-header">
                <h1>Client Profile</h1>
                <button
                  className="edit-button"
                  onClick={() => {
                    if (editMode) {
                      if (validateProfile()) {
                        setEditMode(false);
                      }
                    } else {
                      setEditMode(true);
                    }
                  }}
                >
                  {editMode ? "Save" : "Edit..."}
                </button>
              </div>

              <div className="profile-info">
                {["firstName", "lastName", "username", "email"].map((field) => (
                  <div key={field} className="info-field">
                    <label>{field.replace(/([A-Z])/g, " $1")}</label>
                    {editMode ? (
                      <input
                        type="text"
                        value={profile[field]}
                        onChange={(e) => handleInputChange(field, e.target.value)}
                      />
                    ) : (
                      <p>{profile[field]}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="booking-section">
            <h2>Past Bookings</h2>
            {bookings.length === 0 ? (
              <p className="no-bookings">No bookings yet.</p>
            ) : (
              <div className="booking-scroll-wrapper">
                <ul className="booking-list">
                  {bookings.map((booking, index) => (
                    <li key={index} className="booking-card">
                      <div className="booking-info">
                        <h3>{booking.title}</h3>
                        <p>
                          <strong>Booked with:</strong>{" "}
                          <Link to="/profile" className="booking-user-link">
                            {booking.user}
                          </Link>
                        </p>
                        <p><strong>Skill:</strong> {booking.skill}</p>
                        <p><strong>Location:</strong> {booking.location}</p>
                        <p><strong>Price:</strong> {booking.price}</p>
                        <p><strong>Date:</strong> {booking.bookingDate}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingProfilePage;
