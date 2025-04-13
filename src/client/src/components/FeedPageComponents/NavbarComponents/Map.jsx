import React from "react";
import { MapPin } from "lucide-react";
import "../../../FeedPage/FeedPageStyle.css";
const MapButton = ({ showLabel = true  }) => (
  <button className="nav-button">
    <MapPin className="icon" />
     {showLabel && "Map"}
  </button>
);

export default MapButton;
