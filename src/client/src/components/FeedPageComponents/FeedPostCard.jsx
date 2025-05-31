import React from "react";
import { Star, MapPin, BadgeCheck, Phone } from "lucide-react";
import "../../FeedPage/FeedPageStyle.css";
import electricityfix from "../../images/electricityfix.jpeg";
import profilepicture from "../../images/profile.jpeg";

const FeedPostCard = ({
    profilepicture = profilepicture,
    imageSrc,
    title,
    updated,
    name,
    skill,
    description,
    rating,
    reviews,
    location,
    availability,
    price,
    onClick,
    accredited = false
}) => {
  return (
      <div className="feed-card" onClick={onClick}>
           <div className="feed-card-header">
             <img
               src={profilepicture}
               alt={`${name} avatar`}
               className="feed-avatar"
             />
             <div className="feed-user-info">
               <strong className="feed-username">{name}</strong>
               <span className="feed-timestamp">{updated}</span>
             </div>
           </div>

           <div className="feed-image-container">
             <img src={imageSrc} alt={title} className="feed-main-image" />
           </div>

           {/* Content */}
           <div className="feed-content">
             <h3 className="feed-title">{title}</h3>
             <p className="feed-description">{description}</p>

             <div className="feed-meta">
               <div className="feed-rating">
                 <Star size={16} color="#FFD700" fill="#FFD700" /> {rating} • {reviews} recenzii
               </div>
               <div className="feed-location">
                 <MapPin size={16} /> {location}
               </div>
             </div>

             <div className="feed-details">
               <span className="feed-skill">{skill}</span>
               <span className="feed-availability">{availability}</span>
               <span className="feed-price">{price}</span>
             </div>
             <button className="feed-contact-button">
               <Phone size={16} /> Schedule...
             </button>
              {accredited && (
                           <span className="verified-badge">
                             <svg width="16" height="16" fill="green" style={{marginRight: 3}}>
                               <circle cx="8" cy="8" r="8" fill="#36d399"/>
                               <path d="M6.5 8.5l1.5 1.5 3-3" stroke="white" strokeWidth="2" fill="none"/>
                             </svg>
                             Verified
                           </span>
              )}
           </div>
         </div>
  );
};

export default FeedPostCard;