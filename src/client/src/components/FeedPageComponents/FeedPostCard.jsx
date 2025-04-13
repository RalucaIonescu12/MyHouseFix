import React from "react";
import { Star, MapPin, BadgeCheck, Phone } from "lucide-react";
import "../../FeedPage/FeedPageStyle.css";

const PostCard = ({
  name = "Ion Popescu",
  skill = "Electrician",
  rating = 4.8,
  reviews = 12,
  location = "București, Sector 4",
  description = "Repar instalații electrice pentru apartamente și case.",
  availability = "Luni - Vineri, 9:00 - 17:00",
  price = "De la 200 RON",
}) => {
  return (
    <div className="post-card">
      <div className="rectangle" />

      <div className="post-info">
        <strong>{name}</strong>

        <div className="skill-badge">{skill}</div>

        <p className="post-rating">
          <Star size={14} color="#FFD700" fill="#FFD700" /> {rating} ({reviews} recenzii)
        </p>

        <p className="post-location">
          <MapPin size={12} /> {location}
        </p>

        <p className="post-description">{description}</p>

        <p className="post-availability">
          <strong>Disponibil:</strong> {availability}
        </p>

        <p className="post-price">{price}</p>

        <button className="post-contact-button">
          <Phone size={14} /> Solicită
        </button>
      </div>
    </div>
  );
};

export default PostCard;