import React from "react";
import "../../FeedPage/FeedPageStyle.css";
import profileImage from "../../images/profile.jpeg";
import { MapPin, User, Clock, Calendar  } from "lucide-react";

const defaultAppointments = [
  { title: "Pipe Fix - Andrei Popa", date: "Astăzi", status: "În așteptare" },
  { title: "Light Check - Maria Ionescu", date: "Ieri", status: "Acceptat" },
  { title: "Tailor Fit - Luca Enache", date: "Acum 2 zile", status: "Refuzat" },
  { title: "Tailor Fit - Luca Enache", date: "Acum 2 zile", status: "Refuzat" },
  { title: "Tailor Fit - Luca Enache", date: "Acum 2 zile", status: "În așteptare" },
  { title: "Tailor Fit - Luca Enache", date: "Acum 2 zile", status: "Acceptat" },
  { title: "Electric service - Mihai", date: "Azi", status: "Acceptat" },
  { title: "Electric service - Mihai", date: "Azi", status: "Acceptat" },
];

export const FeedPicture = ({ user }) => {
  const {
    name,
    location,
    role,
    pendingRequests = defaultAppointments.filter(a => a.status === "În așteptare").length,
    acceptedCount = defaultAppointments.filter(a => a.status === "Acceptat").length,
    appointments = defaultAppointments,
    profileImg = profileImage,
  } = user || {};

  return (
    <div className="feedpicture">
      <img className="feed-avatar" src={profileImg} alt={name} />

      <div className="feed-user-info">
        <h2 className="feed-username">{name}</h2>
        <p className="feed-user-location">
          <MapPin size={14} /> {location}
        </p>
        <p className="feed-user-role">
          <User size={14} /> {role === "client" ? "Client" : "Meseriaș"}
        </p>
      </div>

     <div className="feed-stats">
             <div className="stat-item"><Clock size={16} /> În așteptare: <strong>{pendingRequests}</strong></div>
             <div className="stat-item"><Calendar size={16} /> Acceptate: <strong>{acceptedCount}</strong></div>
           </div>

           <div className="feed-appointments">
             {appointments.map((app, idx) => (
               <div key={idx} className="appointment-item">
                 <span className="appointment-title">{app.title}</span>
                 <span className="appointment-date">{app.date}</span>
                 <span className={`appointment-status status-${app.status.replace(/\s+/g, "").toLowerCase()}`}>{app.status}</span>
               </div>
             ))}
           </div>
         </div>
  );
};

export default FeedPicture;