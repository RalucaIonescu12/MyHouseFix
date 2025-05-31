import React from "react";
import { Hammer } from "lucide-react"; 
import "../../../FeedPage/FeedPageStyle.css";

const HomeRenovationService = ({ showLabel = true, onClick, disabled = false  }) => (
  <button className="nav-button" onClick={onClick} disabled={disabled}>
    <Hammer className="icon" />
    {showLabel && "Home Renovation Services"}
  </button>
);

export default HomeRenovationService;
