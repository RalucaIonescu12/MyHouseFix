import React, { useState } from "react";
import "../../FeedPage/FeedPageStyle.css";
import profileImage from "../../images/profile.jpeg";
import { MapPin, User, Clock, Calendar, CheckCircle, XCircle } from "lucide-react";

const defaultAppointments = [
  { title: "Pipe Fix - Andrei Popa", date: "Today", status: "Pending" },
  { title: "Light Check - Maria Ionescu", date: "Yesterday", status: "Accepted" },
  { title: "Tailor Fit - Luca Enache", date: "2 days ago", status: "Declined" },
  { title: "Tailor Fit - Luca Enache", date: "2 days ago", status: "Declined" },
  { title: "Tailor Fit - Luca Enache", date: "2 days ago", status: "Pending" },
  { title: "Tailor Fit - Luca Enache", date: "2 days ago", status: "Accepted" },
  { title: "Electric service - Mihai", date: "Today", status: "Accepted" },
  { title: "Electric service - Mihai", date: "Today", status: "Accepted" },
];

export const FeedPicture = ({ user }) => {
  const {
    name,
    location,
    role,
    profileImg = profileImage,
  } = user || {};

  const [appointments, setAppointments] = useState(
    user?.appointments || defaultAppointments
  );

  const pendingRequests = appointments.filter(a => a.status === "Pending").length;
  const acceptedCount = appointments.filter(a => a.status === "Accepted").length;

  const handleStatus = (idx, status) => {
    setAppointments(apps =>
      apps.map((a, i) =>
        i === idx ? { ...a, status } : a
      )
    );
  };

  return (
    <div className="feedpicture">
      <img className="feed-avatar" src={profileImg} alt={name} />

      <div className="feed-user-info">
        <h2 className="feed-username">{name}</h2>
        <p className="feed-user-location">
          <MapPin size={14} /> {location}
        </p>
        <p className="feed-user-role">
          <User size={14} /> {role === "client" ? "Client" : "Handyman"}
        </p>
      </div>

      <div className="feed-stats">
        <div className="stat-item"><Clock size={16} /> Pending: <strong>{pendingRequests}</strong></div>
        <div className="stat-item"><Calendar size={16} /> Accepted: <strong>{acceptedCount}</strong></div>
      </div>

      <div className="feed-appointments">
        {appointments.map((app, idx) => (
          <div key={idx} className="appointment-item">
            <span className="appointment-title">{app.title}</span>
            <span className="appointment-date">{app.date}</span>


            {role !== "client" && app.status === "Pending" ? (
              <span className="appointment-actions">
                <CheckCircle
                  size={20}
                  className="accept-btn"
                  color="green"
                  onClick={() => handleStatus(idx, "Accept")}
                  title="Accept"
                  style={{ cursor: "pointer", marginRight: 6 }}
                />
                <XCircle
                  size={20}
                  className="decline-btn"
                  color="red"
                  onClick={() => handleStatus(idx, "Decline")}
                  title="Decline"
                  style={{ cursor: "pointer" }}
                />
              </span>
            ) : (

              <span
                className={`appointment-status status-${app.status.replace(/\s+/g, "").toLowerCase()}`}
              >
                {app.status === "Accepted" && <CheckCircle size={18} color="green" />}
                {app.status === "Declined" && <XCircle size={18} color="red" />}
                <span style={{ marginLeft: 6 }}>{app.status}</span>
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedPicture;