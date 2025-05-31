import React, { useState, useRef  } from "react"; 
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import profilepicture from "../images/mechanicwoman.jpeg";
import TimePicker from 'react-time-picker';
import UiZingAdminsNav from '../components/FeedPageComponents/FeedNavigationBar';
import "./ProfilePage.css";

const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "Banu",
    lastName: "Ion",
    username: "ionBanu123",
    email: "ion@example.com",
  });

  const handleDeleteAvailability = (date) => {
    setAvailability(prev => prev.filter(entry => entry.date !== date));
  };
  const formatDate = (date) => {
    return date.toLocaleDateString('en-CA');
  };

  const [profilePicUrl, setProfilePicUrl] = useState(profilepicture);

  const fileInputRef = useRef(null);

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handlePictureClick = () => {
    if (editMode && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const [selectedDates, setSelectedDates] = useState([]);

  const [timeRange, setTimeRange] = useState({ start: null, end: null });

  const [availability, setAvailability] = useState([
    { date: "2025-06-05", time: "14:00 - 16:00" },
    { date: "2025-06-06", time: "11:00 - 13:00" },
    { date: "2025-06-07", time: "15:00 - 17:00" },
    { date: "2025-06-09", time: "10:30 - 12:30" },
    { date: "2025-06-10", time: "13:30 - 15:30" },
    { date: "2025-06-11", time: "08:30 - 10:30" },
    { date: "2025-06-14", time: "15:30 - 17:30" },
    { date: "2025-06-15", time: "09:00 - 11:00" },
    { date: "2025-06-16", time: "10:00 - 12:00" },
    { date: "2025-06-17", time: "13:00 - 15:00" },
    { date: "2025-06-18", time: "08:00 - 10:00" },
    { date: "2025-06-20", time: "11:00 - 13:00" },
  ]);
  
  

  const handleInputChange = (field, value) => {
    setProfile({ ...profile, [field]: value });
  };

  const toggleDateSelection = (date) => {
    const formatted = formatDate(date);
    if (selectedDates.includes(formatted)) {
      setSelectedDates(selectedDates.filter(d => d !== formatted));
    } else {
      setSelectedDates([...selectedDates, formatted].sort());
    }
  };

  const isSelected = (date) => {
    const formatted =  formatDate(date);
    return selectedDates.includes(formatted);
  };

  const handleAddAvailability = () => {
    if (selectedDates.length === 0 || !timeRange.start || !timeRange.end) return;

    const newEntries = selectedDates.map(date => ({
      date,
      time: `${timeRange.start} - ${timeRange.end}`,
    }));

    const merged = [
      ...availability.filter(entry => !selectedDates.includes(entry.date)),
      ...newEntries,
    ].sort((a,b) => a.date.localeCompare(b.date));

    setAvailability(merged);
    setSelectedDates([]);
    setTimeRange({ start: null, end: null });  // reset to null
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month' && isSelected(date)) {
      return "selected-date";
    }
    if (view === 'month' && availability.find(a => a.date ===  formatDate(date))) {
      return "highlighted-date";
    }
    return null;
  };

  return (
    <div className="profile-page">
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
                <h1>Master's Profile</h1>
                <button
                  className="edit-button"
                  onClick={() => setEditMode(!editMode)}
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

          <div className="availability-section">
            <h2>Availability</h2>

            {editMode && (
              <div className="calendar-container">
              <Calendar
                onClickDay={toggleDateSelection}
                tileClassName={tileClassName}
                minDate={new Date()}
              />
            
              <div className="time-inputs">
                <label>
                  From:
                  <TimePicker
                    onChange={(val) => setTimeRange({ ...timeRange, start: val })}
                    value={timeRange.start}
                    disableClock={false}
                    clearIcon={null}
                    format="HH:mm"
                  />
                </label>
                <label>
                  To:
                  <TimePicker
                    onChange={(val) => setTimeRange({ ...timeRange, end: val })}
                    value={timeRange.end}
                    disableClock={false}
                    clearIcon={null}
                    format="HH:mm"
                  />
                </label>
                <button className="add-button" onClick={handleAddAvailability}>
                  Add Availability
                </button>
              </div>
            </div>
            
            )}
            {!editMode && (
              <div className="availability-list">
                {availability.length === 0 ? (
                  <p className="no-availability">No days selected.</p>
                ) : (
                  <ul>
                  {availability
                    .filter((entry) => new Date(entry.date) >= new Date(new Date().setHours(0, 0, 0, 0)))
                    .map((entry) => (
                      <li key={entry.date} className="availability-item">
                        <span>{entry.date}</span>
                        <span>{entry.time}</span>
                        <button
                          className="delete-button"
                          onClick={() => handleDeleteAvailability(entry.date)}
                          title="Delete availability"
                        >
                          🗑️
                        </button>
                      </li>
                    ))}
                </ul>

                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
