import React from "react";
import { Hammer } from "lucide-react"; 
import "../../../FeedPage/FeedPageStyle.css";

const HomeRenovationService = ({ showLabel = true, onClick, selected =false}) => (
    <button className={`nav-button${selected ? ' selected' : ''}`} onClick={onClick}>
    <Hammer className="icon" />
    {showLabel && "Home Renovation Services"}
  </button>
);

export default HomeRenovationService;
